import { describe, it, expect } from 'vitest';
import {
  evaluateRhythmTap,
  RHYTHM_PATTERNS,
} from '../rhythmTrainerData';

describe('rhythmTrainerData', () => {
  describe('evaluateRhythmTap', () => {
    it('rates hits within 45ms as perfect with 100 points', () => {
      const hitOnTime = evaluateRhythmTap(0);
      expect(hitOnTime.rating).toBe('perfect');
      expect(hitOnTime.score).toBe(100);

      const hitEarly = evaluateRhythmTap(-30);
      expect(hitEarly.rating).toBe('perfect');
      expect(hitEarly.score).toBe(100);

      const hitLate = evaluateRhythmTap(44);
      expect(hitLate.rating).toBe('perfect');
      expect(hitLate.score).toBe(100);
    });

    it('rates hits between 46ms and 95ms as good with 75 points', () => {
      const goodEarly = evaluateRhythmTap(-70);
      expect(goodEarly.rating).toBe('good');
      expect(goodEarly.score).toBe(75);

      const goodLate = evaluateRhythmTap(85);
      expect(goodLate.rating).toBe('good');
      expect(goodLate.score).toBe(75);
    });

    it('rates hits between 96ms and 165ms as early or late with 40 points', () => {
      const early = evaluateRhythmTap(-120);
      expect(early.rating).toBe('early');
      expect(early.score).toBe(40);

      const late = evaluateRhythmTap(150);
      expect(late.rating).toBe('late');
      expect(late.score).toBe(40);
    });

    it('rates hits beyond 165ms as miss with 0 points', () => {
      const miss = evaluateRhythmTap(250);
      expect(miss.rating).toBe('miss');
      expect(miss.score).toBe(0);
    });
  });

  describe('RHYTHM_PATTERNS integrity', () => {
    it('has patterns spanning levels 1 through 5', () => {
      const levels = new Set(RHYTHM_PATTERNS.map(p => p.level));
      expect(levels.has(1)).toBe(true);
      expect(levels.has(2)).toBe(true);
      expect(levels.has(3)).toBe(true);
      expect(levels.has(4)).toBe(true);
      expect(levels.has(5)).toBe(true);
    });

    it('ensures each pattern has notes that fit within 4 beats', () => {
      for (const pattern of RHYTHM_PATTERNS) {
        let totalDuration = 0;
        for (const note of pattern.notes) {
          totalDuration += note.durationBeats;
        }
        expect(totalDuration).toBeCloseTo(4.0, 1);
      }
    });
  });
});
