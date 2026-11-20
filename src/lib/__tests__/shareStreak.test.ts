import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  isMilestoneStreak,
  buildStreakShareData,
  triggerNativeOrCopyShare,
  MILESTONE_STREAKS,
} from '../shareStreak';

describe('shareStreak utility', () => {
  describe('isMilestoneStreak', () => {
    it('returns false for streak <= 0', () => {
      expect(isMilestoneStreak(0)).toBe(false);
      expect(isMilestoneStreak(-1)).toBe(false);
    });

    it('returns true for defined milestones', () => {
      for (const milestone of MILESTONE_STREAKS) {
        expect(isMilestoneStreak(milestone)).toBe(true);
      }
    });

    it('returns false for non-milestone streaks', () => {
      expect(isMilestoneStreak(1)).toBe(false);
      expect(isMilestoneStreak(2)).toBe(false);
      expect(isMilestoneStreak(3)).toBe(false);
      expect(isMilestoneStreak(4)).toBe(false);
      expect(isMilestoneStreak(6)).toBe(false);
      expect(isMilestoneStreak(11)).toBe(false);
    });

    it('handles high streaks correctly', () => {
      expect(isMilestoneStreak(40)).toBe(true);
      expect(isMilestoneStreak(60)).toBe(true);
      expect(isMilestoneStreak(63)).toBe(false);
    });
  });

  describe('buildStreakShareData', () => {
    it('builds proper sight-reading streak share data', () => {
      const data = buildStreakShareData({
        tool: 'sight-reading',
        streak: 10,
        mode: 'Treble Clef',
      });

      expect(data.title).toContain('10-Note');
      expect(data.text).toContain('10-note sight-reading streak');
      expect(data.text).toContain('on Treble Clef');
      expect(data.url).toContain('https://musicscene.com.au/sight-reading');
      expect(data.url).toContain('utm_campaign=sight-reading_streak_10');
      expect(data.twitterUrl).toContain('https://twitter.com/intent/tweet');
      expect(data.facebookUrl).toContain('https://www.facebook.com/sharer/sharer.php');
      expect(data.whatsappUrl).toContain('https://api.whatsapp.com/send');
    });

    it('builds zero-streak sight-reading invite data', () => {
      const data = buildStreakShareData({
        tool: 'sight-reading',
        streak: 0,
      });

      expect(data.title).toContain('Guitar Sight-Reading Trainer');
      expect(data.text).toContain('Practice real guitar sight-reading');
      expect(data.url).toContain('utm_campaign=sight-reading_invite');
    });

    it('builds rhythm trainer streak share data', () => {
      const data = buildStreakShareData({
        tool: 'rhythm-trainer',
        streak: 15,
      });

      expect(data.title).toContain('15-Note Rhythm Streak');
      expect(data.text).toContain('15-note rhythm streak');
      expect(data.url).toContain('rhythm-trainer');
      expect(data.url).toContain('utm_campaign=rhythm-trainer_streak_15');
    });
  });

  describe('triggerNativeOrCopyShare', () => {
    const mockShareData = {
      title: 'Title',
      text: 'Challenge text',
      url: 'https://example.com',
      twitterUrl: 'https://twitter.com',
      facebookUrl: 'https://facebook.com',
      whatsappUrl: 'https://whatsapp.com',
    };

    beforeEach(() => {
      vi.restoreAllMocks();
    });

    it('uses navigator.share if available and succeeds', async () => {
      const mockShare = vi.fn().mockResolvedValue(undefined);
      Object.defineProperty(global, 'navigator', {
        value: { share: mockShare },
        writable: true,
        configurable: true,
      });

      const res = await triggerNativeOrCopyShare(mockShareData);
      expect(res).toBe('shared');
      expect(mockShare).toHaveBeenCalledWith({
        title: mockShareData.title,
        text: mockShareData.text,
        url: mockShareData.url,
      });
    });

    it('falls back to clipboard if navigator.share throws standard error', async () => {
      const mockShare = vi.fn().mockRejectedValue(new Error('Permission denied'));
      const mockClipboard = { writeText: vi.fn().mockResolvedValue(undefined) };
      Object.defineProperty(global, 'navigator', {
        value: { share: mockShare, clipboard: mockClipboard },
        writable: true,
        configurable: true,
      });

      const res = await triggerNativeOrCopyShare(mockShareData);
      expect(res).toBe('copied');
      expect(mockClipboard.writeText).toHaveBeenCalledWith(
        `${mockShareData.text} ${mockShareData.url}`
      );
    });

    it('returns failed if user aborts native share', async () => {
      const abortErr = new Error('Abort');
      abortErr.name = 'AbortError';
      const mockShare = vi.fn().mockRejectedValue(abortErr);
      Object.defineProperty(global, 'navigator', {
        value: { share: mockShare },
        writable: true,
        configurable: true,
      });

      const res = await triggerNativeOrCopyShare(mockShareData);
      expect(res).toBe('failed');
    });

    it('copies to clipboard directly when navigator.share is missing', async () => {
      const mockClipboard = { writeText: vi.fn().mockResolvedValue(undefined) };
      Object.defineProperty(global, 'navigator', {
        value: { clipboard: mockClipboard },
        writable: true,
        configurable: true,
      });

      const res = await triggerNativeOrCopyShare(mockShareData);
      expect(res).toBe('copied');
      expect(mockClipboard.writeText).toHaveBeenCalled();
    });
  });
});
