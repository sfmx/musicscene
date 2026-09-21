/**
 * Ear Training Data Engine for MusicScene
 * Provides interval definitions, iconic song mnemonics, chord qualities,
 * difficulty tiers, and helper algorithms for quiz generation.
 */

export interface IntervalInfo {
  semitones: number;
  name: string;
  shortName: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  mnemonicAscending: string;
  mnemonicDescending: string;
  soundDescription: string;
  guitarFretDistance: string; // Fretboard physical shape tip
}

export interface ChordQualityInfo {
  id: string;
  name: string;
  shortName: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  intervals: number[]; // Semitones from root
  formula: string; // e.g. '1 - 3 - 5'
  mood: string;
  soundDescription: string;
  famousExamples: string[];
}

export const INTERVALS_DATA: IntervalInfo[] = [
  {
    semitones: 1,
    name: 'Minor 2nd',
    shortName: 'm2',
    difficulty: 'advanced',
    mnemonicAscending: 'Jaws Theme (Duh-dum)',
    mnemonicDescending: 'Für Elise (opening 2 notes)',
    soundDescription: 'Intense, clashing dissonance that craves immediate resolution.',
    guitarFretDistance: '1 fret apart on the same string',
  },
  {
    semitones: 2,
    name: 'Major 2nd',
    shortName: 'M2',
    difficulty: 'intermediate',
    mnemonicAscending: 'Happy Birthday to You',
    mnemonicDescending: 'Joy to the World (first step down)',
    soundDescription: 'Gentle melodic step; standard diatonic whole step.',
    guitarFretDistance: '2 frets apart on the same string',
  },
  {
    semitones: 3,
    name: 'Minor 3rd',
    shortName: 'm3',
    difficulty: 'intermediate',
    mnemonicAscending: 'Smoke on the Water (0-3 riff start)',
    mnemonicDescending: 'Hey Jude (first drop)',
    soundDescription: 'The defining interval of sadness, contemplation, and blues rock.',
    guitarFretDistance: '3 frets apart on the same string, or 1 string down minus 2 frets',
  },
  {
    semitones: 4,
    name: 'Major 3rd',
    shortName: 'M3',
    difficulty: 'beginner',
    mnemonicAscending: 'When the Saints Go Marching In',
    mnemonicDescending: 'Fate Knocking (Beethoven\'s 5th Symphony)',
    soundDescription: 'Bright, radiant, cheerful consonant pillar of major harmony.',
    guitarFretDistance: '4 frets apart on the same string, or 1 string down minus 1 fret',
  },
  {
    semitones: 5,
    name: 'Perfect 4th',
    shortName: 'P4',
    difficulty: 'beginner',
    mnemonicAscending: 'Here Comes the Bride (Bridal Chorus)',
    mnemonicDescending: 'Born Free',
    soundDescription: 'Open, noble, suspenseful interval; standard guitar string tuning.',
    guitarFretDistance: 'Same fret on the adjacent string (except G to B string)',
  },
  {
    semitones: 6,
    name: 'Tritone (Aug 4th / Dim 5th)',
    shortName: 'TT',
    difficulty: 'advanced',
    mnemonicAscending: 'The Simpsons Theme (opening bell)',
    mnemonicDescending: 'Rush - YYZ (Intro bass chime)',
    soundDescription: 'The "Diabolus in Musica" — eerie, unstable, maximum harmonic tension.',
    guitarFretDistance: '1 fret forward on adjacent string',
  },
  {
    semitones: 7,
    name: 'Perfect 5th',
    shortName: 'P5',
    difficulty: 'beginner',
    mnemonicAscending: 'Star Wars Main Title',
    mnemonicDescending: 'The Flintstones Theme',
    soundDescription: 'The bedrock power chord interval; utterly solid, triumphant, and pure.',
    guitarFretDistance: '2 frets forward on adjacent string (classic power chord grip)',
  },
  {
    semitones: 8,
    name: 'Minor 6th',
    shortName: 'm6',
    difficulty: 'advanced',
    mnemonicAscending: 'The Entertainer (Scott Joplin)',
    mnemonicDescending: 'Love Story Theme',
    soundDescription: 'Romantic, bittersweet, cinematic longing.',
    guitarFretDistance: '3 frets forward on adjacent string',
  },
  {
    semitones: 9,
    name: 'Major 6th',
    shortName: 'M6',
    difficulty: 'intermediate',
    mnemonicAscending: 'My Bonnie Lies Over the Ocean',
    mnemonicDescending: 'Man in the Mirror (Michael Jackson)',
    soundDescription: 'Warm, sweet, breezy, and nostalgic; classic country and soul flavor.',
    guitarFretDistance: '4 frets forward on adjacent string, or 2 strings down minus 1 fret',
  },
  {
    semitones: 10,
    name: 'Minor 7th',
    shortName: 'm7',
    difficulty: 'advanced',
    mnemonicAscending: 'Somewhere (West Side Story - "There\'s a place...")',
    mnemonicDescending: 'Watermelon Man (Herbie Hancock)',
    soundDescription: 'Bluesy, soulful pull; sets up dominant and minor-funk chords.',
    guitarFretDistance: '2 strings down at the same fret',
  },
  {
    semitones: 11,
    name: 'Major 7th',
    shortName: 'M7',
    difficulty: 'advanced',
    mnemonicAscending: 'Take On Me (A-ha - "Take... on...")',
    mnemonicDescending: 'I Love You (Cole Porter)',
    soundDescription: 'Lush, dreamy, sophisticated yearning just 1 half-step below home.',
    guitarFretDistance: '1 fret back from the octave',
  },
  {
    semitones: 12,
    name: 'Octave',
    shortName: 'P8',
    difficulty: 'beginner',
    mnemonicAscending: 'Somewhere Over the Rainbow',
    mnemonicDescending: 'Willow Weep for Me',
    soundDescription: 'Identical pitch class an octave higher; resonant, complete unity.',
    guitarFretDistance: '2 strings down and 2 frets forward (classic octave shape)',
  },
];

export const CHORD_QUALITIES_DATA: ChordQualityInfo[] = [
  {
    id: 'major',
    name: 'Major Triad',
    shortName: 'Maj',
    difficulty: 'beginner',
    intervals: [0, 4, 7],
    formula: '1 - 3 - 5',
    mood: 'Bright, grounded, confident, happy',
    soundDescription: 'The foundational triad of Western music. Pure, balanced, and stable.',
    famousExamples: ['Let It Be', 'Brown Eyed Girl', 'Stand By Me'],
  },
  {
    id: 'minor',
    name: 'Minor Triad',
    shortName: 'Min',
    difficulty: 'beginner',
    intervals: [0, 3, 7],
    formula: '1 - ♭3 - 5',
    mood: 'Dark, reflective, serious, melancholic',
    soundDescription: 'The lowered third casts a shadow of emotional depth and introspection.',
    famousExamples: ['House of the Rising Sun', 'Stairway to Heaven', 'Comfortably Numb'],
  },
  {
    id: 'diminished',
    name: 'Diminished Triad',
    shortName: 'Dim',
    difficulty: 'intermediate',
    intervals: [0, 3, 6],
    formula: '1 - ♭3 - ♭5',
    mood: 'Tense, suspenseful, horror-film cliffhanger',
    soundDescription: 'Built from two stacked minor thirds; feels squeezed and desperate for release.',
    famousExamples: ['Blackbird (passing diminished chords)', 'God Only Knows'],
  },
  {
    id: 'augmented',
    name: 'Augmented Triad',
    shortName: 'Aug',
    difficulty: 'advanced',
    intervals: [0, 4, 8],
    formula: '1 - 3 - ♯5',
    mood: 'Dreamlike, floating, mysterious, floating in space',
    soundDescription: 'Stacked major thirds create an open, symmetrical whole-tone mystery.',
    famousExamples: ['Oh! Darling (Beatles intro)', 'No Particular Place to Go'],
  },
  {
    id: 'dominant7',
    name: 'Dominant 7th',
    shortName: 'Dom 7',
    difficulty: 'intermediate',
    intervals: [0, 4, 7, 10],
    formula: '1 - 3 - 5 - ♭7',
    mood: 'Bluesy, funky, restless, pulling toward resolution',
    soundDescription: 'Major triad with a bluesy flat 7th; creates an internal tritone that propels the music forward.',
    famousExamples: ['Johnny B. Goode', 'Crossroads', 'I Saw Her Standing There'],
  },
  {
    id: 'major7',
    name: 'Major 7th',
    shortName: 'Maj 7',
    difficulty: 'advanced',
    intervals: [0, 4, 7, 11],
    formula: '1 - 3 - 5 - 7',
    mood: 'Lush, dreamy, nostalgic, sophisticated',
    soundDescription: 'The gentle natural 7th gives an airy, velvety, golden-hour warmth.',
    famousExamples: ['Under the Bridge', 'Something (Beatles)', 'Careless Whisper'],
  },
  {
    id: 'minor7',
    name: 'Minor 7th',
    shortName: 'Min 7',
    difficulty: 'advanced',
    intervals: [0, 3, 7, 10],
    formula: '1 - ♭3 - 5 - ♭7',
    mood: 'Mellow, soulful, laid-back, late-night cafe',
    soundDescription: 'Warm and relaxed; softens the minor triad for smooth neo-soul, R&B, and jazz grooves.',
    famousExamples: ['Sultans of Swing', 'Ain\'t No Sunshine', 'Oye Como Va'],
  },
];

/**
 * Returns interval data by semitone distance.
 */
export function getIntervalBySemitones(semitones: number): IntervalInfo | undefined {
  return INTERVALS_DATA.find(i => i.semitones === semitones);
}

/**
 * Returns chord quality data by ID.
 */
export function getChordQualityById(id: string): ChordQualityInfo | undefined {
  return CHORD_QUALITIES_DATA.find(c => c.id === id);
}

/**
 * Returns intervals filtered by difficulty tier.
 */
export function getIntervalsForDifficulty(tier: 'beginner' | 'intermediate' | 'advanced'): IntervalInfo[] {
  if (tier === 'beginner') {
    return INTERVALS_DATA.filter(i => i.difficulty === 'beginner');
  }
  if (tier === 'intermediate') {
    return INTERVALS_DATA.filter(i => i.difficulty === 'beginner' || i.difficulty === 'intermediate');
  }
  return INTERVALS_DATA;
}

/**
 * Returns chord qualities filtered by difficulty tier.
 */
export function getChordQualitiesForDifficulty(tier: 'beginner' | 'intermediate' | 'advanced'): ChordQualityInfo[] {
  if (tier === 'beginner') {
    return CHORD_QUALITIES_DATA.filter(c => c.difficulty === 'beginner');
  }
  if (tier === 'intermediate') {
    return CHORD_QUALITIES_DATA.filter(c => c.difficulty === 'beginner' || c.difficulty === 'intermediate');
  }
  return CHORD_QUALITIES_DATA;
}

