/**
 * Breadcrumb computation from URL paths.
 * Builds a breadcrumb trail for any page in the site hierarchy.
 */

const SEGMENT_LABELS: Record<string, string> = {
  // Top level
  lessons: 'Lessons',

  // Theory
  theory: 'Theory',
  chords: 'Chords',
  scales: 'Scales',
  intervals: 'Intervals',
  modes: 'Modes',
  progressions: 'Progressions',

  // Songs
  songs: 'Songs',
  'song-analysis': 'Song Analysis',

  // Practice
  practice: 'Practice',
  warmups: 'Warmups',
  technique: 'Technique',
  improv: 'Improvisation',

  // Gear
  gear: 'Gear',
  guitars: 'Guitars',
  amps: 'Amps',
  effects: 'Effects',
  recording: 'Recording',
  accessories: 'Accessories',

  // Song lesson categories
  riffs: 'Riffs',
  rhythm: 'Rhythm',
  lead: 'Lead',
  breakdowns: 'Breakdowns',
  structure: 'Structure',
  techniques: 'Techniques',
  'analysis-method': 'Analysis Method',

  // Other song subcategories
  'chord-progressions': 'Chord Progressions',
  'fingerpicking': 'Fingerpicking',

  // Tags
  tags: 'Tags',
};

export interface BreadcrumbSegment {
  label: string;
  href: string;
}

/**
 * Convert a URL segment slug into a human-readable label.
 * Uses the SEGMENT_LABELS map first, then falls back to title-casing the slug.
 */
function segmentToLabel(segment: string): string {
  if (SEGMENT_LABELS[segment]) {
    return SEGMENT_LABELS[segment];
  }
  // Title-case: "major-pentatonic" -> "Major Pentatonic"
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Build a breadcrumb trail from a pathname.
 *
 * @param pathname - The URL path, e.g. '/lessons/theory/chords/major'
 * @param pageTitle - Optional title for the final (current) segment.
 *   If provided, it overrides the auto-generated label for the last crumb.
 * @returns Array of breadcrumb segments, starting with Home.
 *
 * @example
 * getBreadcrumbs('/lessons/theory/chords/major', 'Major Chord')
 * // => [
 * //   { label: 'Home', href: '/' },
 * //   { label: 'Lessons', href: '/lessons' },
 * //   { label: 'Theory', href: '/lessons/theory' },
 * //   { label: 'Chords', href: '/lessons/theory/chords' },
 * //   { label: 'Major Chord', href: '/lessons/theory/chords/major' },
 * // ]
 */
export function getBreadcrumbs(pathname: string, pageTitle?: string): BreadcrumbSegment[] {
  // Strip trailing slash and split into segments
  const cleaned = pathname.replace(/\/$/, '') || '/';
  const segments = cleaned.split('/').filter(Boolean);

  const crumbs: BreadcrumbSegment[] = [{ label: 'Home', href: '/' }];

  let currentPath = '';
  for (let i = 0; i < segments.length; i++) {
    currentPath += `/${segments[i]}`;
    const isLast = i === segments.length - 1;
    const label = isLast && pageTitle ? pageTitle : segmentToLabel(segments[i]);
    crumbs.push({ label, href: currentPath });
  }

  return crumbs;
}
