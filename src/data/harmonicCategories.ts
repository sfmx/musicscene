export type HarmonicCategory =
  | 'modal-mixture'
  | 'mixolydian-dorian'
  | 'descending-bassline'
  | 'key-modulation'
  | 'pedal-tone-drone'
  | 'secondary-dominants'
  | 'blues-rock-hybrid';

export interface HarmonicSecret {
  slug: string;
  songTitle: string;
  artist: string;
  key?: string;
  category: HarmonicCategory;
  categoryLabel: string;
  coreSecret: string;
  emotionalHook: string;
  romanProgression: string;
  chords: string[];
  progressionExplanation: string[];
  voiceLeadingInsights: string[];
  guitarPerspective: string;
  songwriterTakeaway: string;
  isCurated: boolean;
  relatedTheory: {
    scales?: { name: string; slug: string; description: string }[];
    modes?: { name: string; slug: string; description: string }[];
    chords?: { name: string; slug: string; description: string }[];
    progressions?: { name: string; slug: string; description: string }[];
  };
}

export const HARMONIC_CATEGORIES: Record<HarmonicCategory, { label: string; description: string }> = {
  'modal-mixture': {
    label: 'Modal Mixture & Borrowed Chords',
    description: 'Borrowing chords from parallel minor/major keys to create unexpected emotional depth and color.',
  },
  'mixolydian-dorian': {
    label: 'Mixolydian & Dorian Anthems',
    description: 'Replacing standard major and minor tonalities with modal scales to craft uplifting, swaggering rock progressions.',
  },
  'descending-bassline': {
    label: 'Chromatic & Descending Basslines',
    description: 'Stepwise descending bass movement under stationary or shifting triads that generates heartbreaking tension.',
  },
  'key-modulation': {
    label: 'Emotional Key Modulations',
    description: 'Shifting tonal centers between verses and choruses to mirror lyrical psychological transitions.',
  },
  'pedal-tone-drone': {
    label: 'Acoustic Pedal Tones & Drones',
    description: 'Anchoring stationary ringing open strings while chords shift underneath to create rich acoustic shimmer.',
  },
  'secondary-dominants': {
    label: 'Secondary Dominants & Harmonic Minor',
    description: 'Inserting major or dominant chords outside the key to forcefully pull the ear toward resolution.',
  },
  'blues-rock-hybrid': {
    label: 'Blues-Rock Tritones & Alterations',
    description: 'Blending minor pentatonic riffs with dominant 7th chords and tritone tension to create explosive energy.',
  },
};

