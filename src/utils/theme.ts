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
