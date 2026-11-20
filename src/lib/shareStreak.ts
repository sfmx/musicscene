export interface ShareStreakOptions {
  tool: 'sight-reading' | 'rhythm-trainer';
  toolName?: string;
  streak: number;
  bestStreak?: number;
  mode?: string;
  accuracy?: number;
}

export interface ShareStreakData {
  title: string;
  text: string;
  url: string;
  twitterUrl: string;
  facebookUrl: string;
  whatsappUrl: string;
}

export const MILESTONE_STREAKS = [5, 10, 15, 20, 25, 30, 40, 50, 75, 100];

/**
 * Determine if a given streak count warrants a celebration milestone prompt.
 */
export function isMilestoneStreak(streak: number): boolean {
  if (streak <= 0) return false;
  return MILESTONE_STREAKS.includes(streak) || (streak > 30 && streak % 10 === 0);
}

/**
 * Build share URLs, messages, and tracked links for sight-reading or rhythm streaks.
 */
export function buildStreakShareData(options: ShareStreakOptions): ShareStreakData {
  const { tool, streak, mode } = options;
  const isSightReading = tool === 'sight-reading';

  const baseUrl = `https://musicscene.com.au/${tool}`;
  const campaign = streak > 0 ? `${tool}_streak_${streak}` : `${tool}_invite`;
  const url = `${baseUrl}?utm_source=user_share&utm_medium=social&utm_campaign=${campaign}`;

  let title = '';
  let text = '';

  if (isSightReading) {
    title = streak > 0
      ? `🔥 ${streak}-Note Guitar Sight-Reading Streak!`
      : 'Guitar Sight-Reading Trainer | MusicScene';

    const modeText = mode ? ` on ${mode}` : '';

    if (streak >= 5) {
      text = `I just hit a ${streak}-note sight-reading streak${modeText} using real guitar pitch detection on MusicScene! 🎸 Can you beat my score?`;
    } else if (streak > 0) {
      text = `Practicing real guitar sheet music reading${modeText} on MusicScene! 🎸 Can you beat my ${streak}-note streak?`;
    } else {
      text = `Practice real guitar sight-reading with live microphone pitch detection on MusicScene! 🎸 Test your skills:`;
    }
  } else {
    // Rhythm trainer
    title = streak > 0
      ? `🥁 ${streak}-Note Rhythm Streak Locked In!`
      : 'Interactive Rhythm Trainer | MusicScene';

    if (streak >= 5) {
      text = `I just hit a ${streak}-note rhythm streak with high accuracy on MusicScene! 🥁 Can you stay in the pocket?`;
    } else if (streak > 0) {
      text = `Practicing rhythm notation and timing on MusicScene! 🥁 Can you beat my ${streak}-note streak?`;
    } else {
      text = `Train your guitar rhythm and timing on MusicScene! 🥁 Test your groove:`;
    }
  }

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text} ${url}`)}`;

  return {
    title,
    text,
    url,
    twitterUrl,
    facebookUrl,
    whatsappUrl,
  };
}

/**
 * Trigger native share sheet if supported, otherwise copy challenge link to clipboard.
 */
export async function triggerNativeOrCopyShare(
  shareData: ShareStreakData
): Promise<'shared' | 'copied' | 'failed'> {
  if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
    try {
      await navigator.share({
        title: shareData.title,
        text: shareData.text,
        url: shareData.url,
      });
      return 'shared';
    } catch (err: unknown) {
      // User cancelled native share or system declined
      const error = err as { name?: string };
      if (error?.name === 'AbortError') {
        return 'failed';
      }
      // If native share fails unexpectedly, fall through to clipboard copy
    }
  }

  // Fallback to clipboard
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      return 'copied';
    } catch {
      return 'failed';
    }
  }

  return 'failed';
}
