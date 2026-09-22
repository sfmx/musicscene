/**
 * Central registry of all interactive tools, reference materials, and practice drills.
 * Single source of truth used by the build-time navigation generator, home page showcases,
 * and search indexing.
 */

export interface ToolDefinition {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  icon: string;
  badge?: string;
  category: 'interactive' | 'reference' | 'drill';
  featured?: boolean;
  cta?: string;
}

export const SITE_TOOLS: ToolDefinition[] = [
  // Interactive Utilities
  {
    id: 'fretboard-trainer',
    title: 'Fretboard Note Hunt & Trainer',
    shortTitle: 'Fretboard Note Hunt & Trainer',
    description: 'Master the fretboard with our gamified note finder across 15 frets with real-time audio playback.',
    href: '/lessons/practice/fretboard-trainer',
    icon: '🎯',
    badge: 'Audio Game',
    category: 'interactive',
    featured: true,
    cta: 'Play Note Hunt Game',
  },
  {
    id: 'circle-of-fifths',
    title: 'Circle of Fifths Explorer & Studio',
    shortTitle: 'Circle of Fifths Explorer',
    description: 'Interactive harmonic wheel with instant WebAudio chord strums, key modulations, and modal interchange.',
    href: '/lessons/practice/circle-of-fifths',
    icon: '🔄',
    badge: 'Harmonic Wheel',
    category: 'interactive',
    featured: true,
    cta: 'Explore Circle of Fifths',
  },
  {
    id: 'caged-system',
    title: 'CAGED System Visualizer',
    shortTitle: 'CAGED System Visualizer',
    description: 'Connect open chord grips (C, A, G, E, D) to movable pentatonic and major scale boxes across the neck.',
    href: '/lessons/practice/caged-system',
    icon: '🎸',
    badge: '5 Movable Shapes',
    category: 'interactive',
    featured: true,
    cta: 'Master CAGED Shapes',
  },
  {
    id: 'ear-trainer',
    title: 'Interactive Ear Trainer & Pitch Quizzer',
    shortTitle: 'Interactive Ear Trainer',
    description: 'Train your musical ear with real-time audio: interval identification, chord qualities, and song mnemonics.',
    href: '/lessons/practice/ear-trainer',
    icon: '👂',
    badge: 'Pitch Quizzer',
    category: 'interactive',
    featured: true,
    cta: 'Start Ear Training',
  },
  {
    id: 'progression-player',
    title: 'Chord Progression Jam Player',
    shortTitle: 'Progression Jam Player',
    description: 'Jam over realistic backing tracks with tempo control, key transposition, and fretboard chord voicings.',
    href: '/lessons/practice/progression-player',
    icon: '🎧',
    badge: 'Backing Tracks',
    category: 'interactive',
    featured: true,
    cta: 'Start Jam Session',
  },
  {
    id: 'why-songs-work',
    title: 'Why Songs Work Explorer',
    shortTitle: 'Why Songs Work Explorer',
    description: 'Explore the underlying harmonic secrets, modal borrowings, and emotional hooks behind 100+ iconic songs.',
    href: '/lessons/songs/why-songs-work',
    icon: '💡',
    badge: 'Harmonic Secrets',
    category: 'interactive',
    featured: true,
    cta: 'Explore Song Secrets',
  },

  // Visual Guides & Reference
  {
    id: 'fretboard-cheat-sheet',
    title: 'Printable Fretboard Cheat Sheet (PDF)',
    shortTitle: 'Printable Fretboard Cheat Sheet (PDF)',
    description: 'Free high-resolution 3-page printable PDF guide with fretboard notes, pentatonic boxes, and triad shapes.',
    href: '/downloads/fretboard-cheat-sheet',
    icon: '📄',
    category: 'reference',
    featured: true,
    cta: 'Download Free PDF',
  },
  {
    id: 'chord-dictionary',
    title: 'Interactive Chord Dictionary',
    shortTitle: 'Interactive Chord Dictionary',
    description: 'Explore chord construction, fingerings, and musical applications across major, minor, 7th, and extended chords.',
    href: '/lessons/theory/chords',
    icon: '🎸',
    category: 'reference',
  },
  {
    id: 'scale-visualizer',
    title: 'Scale & Mode Visualizer',
    shortTitle: 'Scale & Mode Visualizer',
    description: 'Interactive fretboard patterns, formulas, and mood profiles for all major, minor, pentatonic, blues, and modal scales.',
    href: '/lessons/theory/scales',
    icon: '🎼',
    category: 'reference',
  },

  // Practice Drills
  {
    id: 'warmups',
    title: 'Guitar Warm-ups & Speed',
    shortTitle: 'Guitar Warm-ups & Speed',
    description: 'Structured daily warm-ups, spider exercises, finger independence drills, and speed building routines.',
    href: '/lessons/practice/warmups',
    icon: '⚡',
    category: 'drill',
  },
  {
    id: 'technique',
    title: 'Picking & Fretting Technique',
    shortTitle: 'Picking & Fretting Technique',
    description: 'Precision technical drills for alternate picking, legato, economy picking, and string bending.',
    href: '/lessons/practice/technique',
    icon: '⏱️',
    category: 'drill',
  },
  {
    id: 'improv',
    title: 'Improvisation Frameworks',
    shortTitle: 'Improvisation Frameworks',
    description: 'Frameworks for guitar improvisation including chord-tone targeting, call-and-response, and modal soloing.',
    href: '/lessons/practice/improv',
    icon: '✨',
    category: 'drill',
  },
];

export function getInteractiveTools(): ToolDefinition[] {
  return SITE_TOOLS.filter(t => t.category === 'interactive');
}

export function getReferenceTools(): ToolDefinition[] {
  return SITE_TOOLS.filter(t => t.category === 'reference');
}

export function getPracticeDrills(): ToolDefinition[] {
  return SITE_TOOLS.filter(t => t.category === 'drill');
}

export function getFeaturedTools(): ToolDefinition[] {
  return SITE_TOOLS.filter(t => t.featured);
}

