// Theme configuration for Music Scene
// This file centralizes theme colors and styling to ensure consistency across the site

export const themes = {
  // Category-specific themes matching the design system
  theory: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    hover: 'hover:bg-yellow-100',
    text: 'text-yellow-700',
    link: 'text-yellow-600 hover:text-yellow-800',
    icon: '🎵'
  },
  songs: {
    bg: 'bg-orange-50',
    border: 'border-orange-200', 
    hover: 'hover:bg-orange-100',
    text: 'text-orange-700',
    link: 'text-orange-600 hover:text-orange-800',
    icon: '🎸'
  },
  gear: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    hover: 'hover:bg-purple-100', 
    text: 'text-purple-700',
    link: 'text-purple-600 hover:text-purple-800',
    icon: '⚡'
  },
  practice: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    hover: 'hover:bg-green-100',
    text: 'text-green-700', 
    link: 'text-green-600 hover:text-green-800',
    icon: '🎯'
  },
  // Featured content themes
  featured: {
    rose: {
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      hover: 'hover:bg-rose-100',
      text: 'text-rose-700',
      link: 'text-rose-600 hover:text-rose-800'
    },
    blue: {
      bg: 'bg-blue-50', 
      border: 'border-blue-200',
      hover: 'hover:bg-blue-100',
      text: 'text-blue-700',
      link: 'text-blue-600 hover:text-blue-800'
    },
    emerald: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200', 
      hover: 'hover:bg-emerald-100',
      text: 'text-emerald-700',
      link: 'text-emerald-600 hover:text-emerald-800'
    }
  }
};

export const getDifficultyColor = (difficulty: string): string => {
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

// Remove consecutive duplicate strings from an array
export const removeConsecutiveDuplicates = (items: string[]): string[] => {
  if (items.length === 0) return [];
  const result = [items[0]];
  for (let i = 1; i < items.length; i++) {
    if (items[i].trim() !== items[i - 1].trim()) {
      result.push(items[i]);
    }
  }
  return result;
};

// Utility function to get combined theme classes
export const getThemeClasses = (category: keyof typeof themes) => {
  const theme = themes[category];
  if (!theme || typeof theme !== 'object' || !('bg' in theme)) {
    return '';
  }
  return `${theme.bg} ${theme.border} ${theme.hover}`;
};

// Common component classes that match the existing design system
export const commonClasses = {
  card: 'border-2 rounded-lg p-6 transition-all duration-200',
  hero: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white',
  section: 'py-16',
  container: 'max-w-6xl mx-auto px-6',
  button: {
    primary: 'bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors',
    secondary: 'border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors'
  }
};

// Typography scale
export const typography = {
  heading: {
    h1: 'text-4xl md:text-5xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-xl font-bold',
    h4: 'text-lg font-bold'
  },
  body: {
    large: 'text-lg md:text-xl',
    base: 'text-base',
    small: 'text-sm'
  }
};

// Color scheme mapping for data-driven pages (e.g., chord analysis pages)
// Each color provides a complete set of Tailwind classes. These must be
// statically present in the source so Tailwind's purge can detect them.
export interface ColorSchemeClasses {
  heroBg: string;        // gradient for hero section
  bulletColor: string;   // bullet point accent color
  constructionBg: string[];  // backgrounds for the 3 construction boxes
  constructionBorder: string[];
  constructionText: string[];
  constructionTitle: string[];
  tipBg: string;
  tipBorder: string;
  tipText: string;
  tipTitle: string;
  journeyGradient: string;
}

const colorSchemes: Record<string, ColorSchemeClasses> = {
  blue: {
    heroBg: 'bg-gradient-to-r from-blue-600 to-cyan-700',
    bulletColor: 'text-blue-500',
    constructionBg: ['bg-blue-50', 'bg-green-50', 'bg-purple-50'],
    constructionBorder: ['border-blue-200', 'border-green-200', 'border-purple-200'],
    constructionText: ['text-blue-700', 'text-green-700', 'text-purple-700'],
    constructionTitle: ['text-blue-800', 'text-green-800', 'text-purple-800'],
    tipBg: 'bg-blue-50',
    tipBorder: 'border-blue-200',
    tipText: 'text-blue-700',
    tipTitle: 'text-blue-800',
    journeyGradient: 'bg-gradient-to-r from-gray-50 to-blue-50',
  },
  purple: {
    heroBg: 'bg-gradient-to-r from-purple-600 to-indigo-700',
    bulletColor: 'text-purple-500',
    constructionBg: ['bg-purple-50', 'bg-blue-50', 'bg-rose-50'],
    constructionBorder: ['border-purple-200', 'border-blue-200', 'border-rose-200'],
    constructionText: ['text-purple-700', 'text-blue-700', 'text-rose-700'],
    constructionTitle: ['text-purple-800', 'text-blue-800', 'text-rose-800'],
    tipBg: 'bg-purple-50',
    tipBorder: 'border-purple-200',
    tipText: 'text-purple-700',
    tipTitle: 'text-purple-800',
    journeyGradient: 'bg-gradient-to-r from-gray-50 to-purple-50',
  },
  amber: {
    heroBg: 'bg-gradient-to-r from-amber-600 to-yellow-700',
    bulletColor: 'text-amber-500',
    constructionBg: ['bg-amber-50', 'bg-orange-50', 'bg-yellow-50'],
    constructionBorder: ['border-amber-200', 'border-orange-200', 'border-yellow-200'],
    constructionText: ['text-amber-700', 'text-orange-700', 'text-yellow-700'],
    constructionTitle: ['text-amber-800', 'text-orange-800', 'text-yellow-800'],
    tipBg: 'bg-amber-50',
    tipBorder: 'border-amber-200',
    tipText: 'text-amber-700',
    tipTitle: 'text-amber-800',
    journeyGradient: 'bg-gradient-to-r from-gray-50 to-amber-50',
  },
  rose: {
    heroBg: 'bg-gradient-to-r from-pink-600 to-rose-700',
    bulletColor: 'text-pink-500',
    constructionBg: ['bg-pink-50', 'bg-rose-50', 'bg-purple-50'],
    constructionBorder: ['border-pink-200', 'border-rose-200', 'border-purple-200'],
    constructionText: ['text-pink-700', 'text-rose-700', 'text-purple-700'],
    constructionTitle: ['text-pink-800', 'text-rose-800', 'text-purple-800'],
    tipBg: 'bg-pink-50',
    tipBorder: 'border-pink-200',
    tipText: 'text-pink-700',
    tipTitle: 'text-pink-800',
    journeyGradient: 'bg-gradient-to-r from-gray-50 to-pink-50',
  },
  slate: {
    heroBg: 'bg-gradient-to-r from-slate-700 to-gray-800',
    bulletColor: 'text-slate-500',
    constructionBg: ['bg-slate-50', 'bg-gray-50', 'bg-blue-50'],
    constructionBorder: ['border-slate-200', 'border-gray-200', 'border-blue-200'],
    constructionText: ['text-slate-700', 'text-gray-700', 'text-blue-700'],
    constructionTitle: ['text-slate-800', 'text-gray-800', 'text-blue-800'],
    tipBg: 'bg-purple-50',
    tipBorder: 'border-purple-200',
    tipText: 'text-purple-700',
    tipTitle: 'text-purple-800',
    journeyGradient: 'bg-gradient-to-r from-gray-50 to-slate-50',
  },
  indigo: {
    heroBg: 'bg-gradient-to-r from-purple-700 to-indigo-800',
    bulletColor: 'text-purple-500',
    constructionBg: ['bg-purple-50', 'bg-indigo-50', 'bg-pink-50'],
    constructionBorder: ['border-purple-200', 'border-indigo-200', 'border-pink-200'],
    constructionText: ['text-purple-700', 'text-indigo-700', 'text-pink-700'],
    constructionTitle: ['text-purple-800', 'text-indigo-800', 'text-pink-800'],
    tipBg: 'bg-purple-50',
    tipBorder: 'border-purple-200',
    tipText: 'text-purple-700',
    tipTitle: 'text-purple-800',
    journeyGradient: 'bg-gradient-to-r from-gray-50 to-purple-50',
  },
  red: {
    heroBg: 'bg-gradient-to-r from-red-700 to-rose-800',
    bulletColor: 'text-red-500',
    constructionBg: ['bg-red-50', 'bg-orange-50', 'bg-rose-50'],
    constructionBorder: ['border-red-200', 'border-orange-200', 'border-rose-200'],
    constructionText: ['text-red-700', 'text-orange-700', 'text-rose-700'],
    constructionTitle: ['text-red-800', 'text-orange-800', 'text-rose-800'],
    tipBg: 'bg-red-50',
    tipBorder: 'border-red-200',
    tipText: 'text-red-700',
    tipTitle: 'text-red-800',
    journeyGradient: 'bg-gradient-to-r from-gray-50 to-red-50',
  },
  cyan: {
    heroBg: 'bg-gradient-to-r from-purple-600 to-pink-700',
    bulletColor: 'text-purple-500',
    constructionBg: ['bg-purple-50', 'bg-pink-50', 'bg-indigo-50'],
    constructionBorder: ['border-purple-200', 'border-pink-200', 'border-indigo-200'],
    constructionText: ['text-purple-700', 'text-pink-700', 'text-indigo-700'],
    constructionTitle: ['text-purple-800', 'text-pink-800', 'text-indigo-800'],
    tipBg: 'bg-cyan-50',
    tipBorder: 'border-cyan-200',
    tipText: 'text-cyan-700',
    tipTitle: 'text-cyan-800',
    journeyGradient: 'bg-gradient-to-r from-gray-50 to-purple-50',
  },
  pink: {
    heroBg: 'bg-gradient-to-r from-rose-600 to-pink-700',
    bulletColor: 'text-rose-500',
    constructionBg: ['bg-pink-50', 'bg-rose-50', 'bg-purple-50'],
    constructionBorder: ['border-pink-200', 'border-rose-200', 'border-purple-200'],
    constructionText: ['text-pink-700', 'text-rose-700', 'text-purple-700'],
    constructionTitle: ['text-pink-800', 'text-rose-800', 'text-purple-800'],
    tipBg: 'bg-rose-50',
    tipBorder: 'border-rose-200',
    tipText: 'text-rose-700',
    tipTitle: 'text-rose-800',
    journeyGradient: 'bg-gradient-to-r from-gray-50 to-rose-50',
  },
};

export function getColorScheme(color: string): ColorSchemeClasses {
  return colorSchemes[color] || colorSchemes.blue;
}
