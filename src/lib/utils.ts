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

/**
 * Cleans raw LaTeX math notation (e.g. `$T = 4 m f^2 L^2$`, `\text{ mm}`, `\ge`, `\Omega`, `\frac{A}{B}`)
 * converting it into clean, readable, standard unicode typography for web display.
 */
export function cleanLatexMath(text: string): string {
  if (!text || typeof text !== 'string') return text;
  if (!text.includes('\\') && !text.includes('$')) return text;

  let cleaned = text;

  // Process math blocks delimited by $...$ (ignoring standalone currency like $5 or $250)
  cleaned = cleaned.replace(/\$(.+?)\$/g, (_, mathContent) => {
    let m = mathContent;
    // Simple fractions: \frac{a}{b} -> a / b (or (a) / (b) if complex)
    m = m.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, (_: string, num: string, den: string) => {
      const cleanNum = num.trim();
      const cleanDen = den.trim();
      if (cleanNum.includes('+') || cleanNum.includes('-')) {
        return `(${cleanNum}) / (${cleanDen})`;
      }
      return `${cleanNum} / ${cleanDen}`;
    });

    // Symbols
    m = m.replace(/\\ge\b/g, '≥');
    m = m.replace(/\\le\b/g, '≤');
    m = m.replace(/\\approx\b/g, '≈');
    m = m.replace(/\\cdot\b/g, '·');
    m = m.replace(/\\times\b/g, '×');
    m = m.replace(/\\Delta\b/g, 'Δ');
    m = m.replace(/\\rho\b/g, 'ρ');
    m = m.replace(/\\pi\b/g, 'π');
    m = m.replace(/\\theta\b/g, 'θ');
    m = m.replace(/\\Omega\b/g, 'Ω');
    m = m.replace(/\\mu\b/g, 'μ');

    // Powers and superscripts
    m = m.replace(/\^2\b/g, '²');
    m = m.replace(/\^3\b/g, '³');
    m = m.replace(/\^\\circ\b/g, '°');
    m = m.replace(/\^\{([^}]+)\}/g, '^($1)');

    // Subscripts
    m = m.replace(/_0\b/g, '₀');
    m = m.replace(/_1\b/g, '₁');
    m = m.replace(/_2\b/g, '₂');
    m = m.replace(/_n\b/g, 'ₙ');
    m = m.replace(/_\{?\\text\{([^}]+)\}\}?/g, '_$1');
    m = m.replace(/_\{([^}]+)\}/g, '_$1');

    // Text formatting
    m = m.replace(/\\text\{([^}]+)\}/g, '$1');
    m = m.replace(/\\ /g, ' ');
    m = m.replace(/\\,/g, ' ');
    m = m.replace(/--/g, '–');

    return m.trim();
  });

  // Catch any residual LaTeX commands outside $...$
  cleaned = cleaned.replace(/\\text\{([^}]+)\}/g, '$1');
  cleaned = cleaned.replace(/\\ge\b/g, '≥');
  cleaned = cleaned.replace(/\\le\b/g, '≤');
  cleaned = cleaned.replace(/\\approx\b/g, '≈');
  cleaned = cleaned.replace(/\\cdot\b/g, '·');
  cleaned = cleaned.replace(/\\times\b/g, '×');
  cleaned = cleaned.replace(/\\Omega\b/g, 'Ω');
  cleaned = cleaned.replace(/\\Delta\b/g, 'Δ');
  cleaned = cleaned.replace(/\\ /g, ' ');
  cleaned = cleaned.replace(/--/g, '–');

  return cleaned;
}

