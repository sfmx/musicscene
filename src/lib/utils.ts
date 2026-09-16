/**
 * Universal utility functions for MusicScene
 */

/**
 * Returns Tailwind CSS badge classes for difficulty levels, matching the Dark Stage design system.
 * Supports: 'Beginner', 'Intermediate', 'Advanced', 'Expert'
 */
export const getDifficultyColor = (difficulty: string = ''): string => {
  switch (difficulty.toLowerCase()) {
    case 'beginner':
      return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30 font-semibold';
    case 'intermediate':
      return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30 font-semibold';
    case 'advanced':
      return 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/30 font-semibold';
    case 'expert':
      return 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/30 font-semibold';
    default:
      return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 font-semibold';
  }
};

/**
 * Returns solid Tailwind background color classes for progress bars and indicators.
 */
export const getDifficultyBarColor = (difficulty: string = ''): string => {
  switch (difficulty.toLowerCase()) {
    case 'beginner':
      return 'bg-emerald-500';
    case 'intermediate':
      return 'bg-amber-500';
    case 'advanced':
      return 'bg-rose-500';
    case 'expert':
      return 'bg-purple-500';
    default:
      return 'bg-slate-400';
  }
};

/**
 * Removes consecutive duplicate strings from an array (preserving non-consecutive occurrences).
 */
export const removeConsecutiveDuplicates = (items: string[]): string[] => {
  if (!items || items.length === 0) return [];
  const result = [items[0]];
  for (let i = 1; i < items.length; i++) {
    if (items[i].trim() !== items[i - 1].trim()) {
      result.push(items[i]);
    }
  }
  return result;
};

/**
 * Combines multiple class name strings, filtering out falsy values.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

