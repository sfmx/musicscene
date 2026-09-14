/**
 * Comprehensive Guitar Chord Voicings & Normalization Engine for MusicScene
 * Supports all standard, altered, suspended, extended, power, and slash chords
 * across all song analysis, theory, and practice pages.
 */

export interface ChordShape {
  /** 6 strings: Low E (index 0) to High E (index 5). -1 = mute, 0 = open, 1..5 = fret number within diagram */
  frets: number[];
  /** Finger numbers: 1=index, 2=middle, 3=ring, 4=pinky, 0=open, -1=mute */
  fingers?: number[];
  /** Starting fret offset. If > 1, displayed on the side of the diagram (e.g. 4fr) */
  baseFret?: number;
  /** Optional barre indicator */
  barre?: { fromString: number; toString: number; fret: number };
}

/**
 * Normalizes user/song chord strings into canonical dictionary keys.
 */
export function normalizeChordName(chord: string): string {
  if (!chord) return 'C';
  let c = chord.trim();

  // Strip placeholder or bracket tokens
  c = c.replace(/^\[|\]$/g, '');

  // Remove parenthesis around add9: A(add9) -> Aadd9, B(add9) -> Badd9
  c = c.replace(/\((add\d+)\)/i, '$1');
  // Remove harmonics tag: E5(harmonics) -> E5
  c = c.replace(/\(harmonics\)/i, '');

  // Convert underscore notation:
  // C_major -> C, A_minor -> Am, C_major_7 -> Cmaj7, A_minor_7 -> Am7
  c = c.replace(/_major_7$/i, 'maj7');
  c = c.replace(/_minor_7$/i, 'm7');
  c = c.replace(/_minor_7_flat_5$/i, 'm7b5');
  c = c.replace(/_major$/i, '');
  c = c.replace(/_minor$/i, 'm');
  c = c.replace(/_augmented$/i, '+');
  c = c.replace(/_7$/i, '7');

  return c;
}

/**
 * Canonical dictionary of guitar chord shapes.
 * Frets are 1-5 relative to baseFret (or relative to nut if baseFret is 1).
 */
export const CHORD_SHAPES: Record<string, ChordShape> = {
  // --- Major Triads ---
  'C': { frets: [-1, 3, 2, 0, 1, 0], fingers: [-1, 3, 2, 0, 1, 0], baseFret: 1 },
  'D': { frets: [-1, -1, 0, 2, 3, 2], fingers: [-1, -1, 0, 1, 3, 2], baseFret: 1 },
  'E': { frets: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0], baseFret: 1 },
  'F': { frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1], baseFret: 1, barre: { fromString: 0, toString: 5, fret: 1 } },
  'G': { frets: [3, 2, 0, 0, 3, 3], fingers: [3, 1, 0, 0, 2, 4], baseFret: 1 },
  'A': { frets: [-1, 0, 2, 2, 2, 0], fingers: [-1, 0, 1, 2, 3, 0], baseFret: 1 },
  'B': { frets: [-1, 1, 3, 3, 3, 1], fingers: [-1, 1, 2, 3, 4, 1], baseFret: 2, barre: { fromString: 1, toString: 5, fret: 1 } },
  'Cb': { frets: [-1, 1, 3, 3, 3, 1], fingers: [-1, 1, 2, 3, 4, 1], baseFret: 2 }, // Enharmonic with B

  // Accidentals Major
  'F#': { frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1], baseFret: 2, barre: { fromString: 0, toString: 5, fret: 1 } },
  'Gb': { frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1], baseFret: 2 },
  'G#': { frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1], baseFret: 4 },
  'Ab': { frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1], baseFret: 4, barre: { fromString: 0, toString: 5, fret: 1 } },
  'A#': { frets: [-1, 1, 3, 3, 3, 1], fingers: [-1, 1, 2, 3, 4, 1], baseFret: 1 },
  'Bb': { frets: [-1, 1, 3, 3, 3, 1], fingers: [-1, 1, 2, 3, 4, 1], baseFret: 1, barre: { fromString: 1, toString: 5, fret: 1 } },
  'C#': { frets: [-1, 1, 3, 3, 3, 1], fingers: [-1, 1, 2, 3, 4, 1], baseFret: 4 },
  'Db': { frets: [-1, 1, 3, 3, 3, 1], fingers: [-1, 1, 2, 3, 4, 1], baseFret: 4 },
  'D#': { frets: [-1, -1, 1, 3, 4, 3], fingers: [-1, -1, 1, 2, 4, 3], baseFret: 1 },
  'Eb': { frets: [-1, -1, 1, 3, 4, 3], fingers: [-1, -1, 1, 2, 4, 3], baseFret: 1 },

  // --- Minor Triads ---
  'Am': { frets: [-1, 0, 2, 2, 1, 0], fingers: [-1, 0, 2, 3, 1, 0], baseFret: 1 },
  'Bm': { frets: [-1, 1, 3, 3, 2, 1], fingers: [-1, 1, 3, 4, 2, 1], baseFret: 2, barre: { fromString: 1, toString: 5, fret: 1 } },
  'Cm': { frets: [-1, 1, 3, 3, 2, 1], fingers: [-1, 1, 3, 4, 2, 1], baseFret: 3, barre: { fromString: 1, toString: 5, fret: 1 } },
  'Dm': { frets: [-1, -1, 0, 2, 3, 1], fingers: [-1, -1, 0, 2, 3, 1], baseFret: 1 },
  'Em': { frets: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0], baseFret: 1 },
  'Fm': { frets: [1, 3, 3, 1, 1, 1], fingers: [1, 3, 4, 1, 1, 1], baseFret: 1, barre: { fromString: 0, toString: 5, fret: 1 } },
  'Gm': { frets: [1, 3, 3, 1, 1, 1], fingers: [1, 3, 4, 1, 1, 1], baseFret: 3, barre: { fromString: 0, toString: 5, fret: 1 } },
  'C#m': { frets: [-1, 1, 3, 3, 2, 1], fingers: [-1, 1, 3, 4, 2, 1], baseFret: 4, barre: { fromString: 1, toString: 5, fret: 1 } },
  'D#m': { frets: [-1, 1, 3, 3, 2, 1], fingers: [-1, 1, 3, 4, 2, 1], baseFret: 6 },
  'Ebm': { frets: [-1, 1, 3, 3, 2, 1], fingers: [-1, 1, 3, 4, 2, 1], baseFret: 6 },
  'F#m': { frets: [1, 3, 3, 1, 1, 1], fingers: [1, 3, 4, 1, 1, 1], baseFret: 2, barre: { fromString: 0, toString: 5, fret: 1 } },
  'G#m': { frets: [1, 3, 3, 1, 1, 1], fingers: [1, 3, 4, 1, 1, 1], baseFret: 4, barre: { fromString: 0, toString: 5, fret: 1 } },
  'Bbm': { frets: [-1, 1, 3, 3, 2, 1], fingers: [-1, 1, 3, 4, 2, 1], baseFret: 1 },

  // --- Dominant 7th ---
  'C7': { frets: [-1, 3, 2, 3, 1, 0], fingers: [-1, 3, 2, 4, 1, 0], baseFret: 1 },
  'D7': { frets: [-1, -1, 0, 2, 1, 2], fingers: [-1, -1, 0, 2, 1, 3], baseFret: 1 },
  'E7': { frets: [0, 2, 0, 1, 0, 0], fingers: [0, 2, 0, 1, 0, 0], baseFret: 1 },
  'F7': { frets: [1, 3, 1, 2, 1, 1], fingers: [1, 3, 1, 2, 1, 1], baseFret: 1 },
  'G7': { frets: [3, 2, 0, 0, 0, 1], fingers: [3, 2, 0, 0, 0, 1], baseFret: 1 },
  'A7': { frets: [-1, 0, 2, 0, 2, 0], fingers: [-1, 0, 2, 0, 3, 0], baseFret: 1 },
  'B7': { frets: [-1, 2, 1, 2, 0, 2], fingers: [-1, 2, 1, 3, 0, 4], baseFret: 1 },
  'Bb7': { frets: [-1, 1, 3, 1, 3, 1], fingers: [-1, 1, 3, 1, 4, 1], baseFret: 1 },
  'F#7': { frets: [1, 3, 1, 2, 1, 1], fingers: [1, 3, 1, 2, 1, 1], baseFret: 2 },

  // --- Major 7th ---
  'Cmaj7': { frets: [-1, 3, 2, 0, 0, 0], fingers: [-1, 3, 2, 0, 0, 0], baseFret: 1 },
  'Dmaj7': { frets: [-1, -1, 0, 2, 2, 2], fingers: [-1, -1, 0, 1, 1, 1], baseFret: 1 },
  'Emaj7': { frets: [0, 2, 1, 1, 0, 0], fingers: [0, 2, 1, 1, 0, 0], baseFret: 1 },
  'Fmaj7': { frets: [1, 3, 2, 1, 0, -1], fingers: [1, 3, 2, 1, 0, -1], baseFret: 1 },
  'Gmaj7': { frets: [3, 2, 0, 0, 0, 2], fingers: [3, 2, 0, 0, 0, 1], baseFret: 1 },
  'Amaj7': { frets: [-1, 0, 2, 1, 2, 0], fingers: [-1, 0, 2, 1, 3, 0], baseFret: 1 },
  'Bmaj7': { frets: [-1, 1, 3, 2, 3, 1], fingers: [-1, 1, 3, 2, 4, 1], baseFret: 2 },

  // --- Minor 7th ---
  'Am7': { frets: [-1, 0, 2, 0, 1, 0], fingers: [-1, 0, 2, 0, 1, 0], baseFret: 1 },
  'Bm7': { frets: [-1, 1, 0, 2, 0, 2], fingers: [-1, 1, 0, 2, 0, 3], baseFret: 2 },
  'Cm7': { frets: [-1, 1, 3, 1, 2, 1], fingers: [-1, 1, 3, 1, 2, 1], baseFret: 3 },
  'Dm7': { frets: [-1, -1, 0, 2, 1, 1], fingers: [-1, -1, 0, 2, 1, 1], baseFret: 1 },
  'Em7': { frets: [0, 2, 0, 0, 0, 0], fingers: [0, 2, 0, 0, 0, 0], baseFret: 1 },
  'Fm7': { frets: [1, 3, 1, 1, 1, 1], fingers: [1, 3, 1, 1, 1, 1], baseFret: 1 },
  'Gm7': { frets: [1, 3, 1, 1, 1, 1], fingers: [1, 3, 1, 1, 1, 1], baseFret: 3 },
  'F#m7': { frets: [1, 3, 1, 1, 1, 1], fingers: [1, 3, 1, 1, 1, 1], baseFret: 2 },
  'C#m7': { frets: [-1, 1, 3, 1, 2, 1], fingers: [-1, 1, 3, 1, 2, 1], baseFret: 4 },

  // --- Hendrix 7#9 & Altered Chords ---
  'E7#9': { frets: [0, 2, 1, 2, 3, -1], fingers: [0, 2, 1, 3, 4, -1], baseFret: 6 }, // 7 on A, 6 on D, 7 on G, 8 on B
  'D7#9': { frets: [-1, 2, 1, 2, 3, -1], fingers: [-1, 2, 1, 3, 4, -1], baseFret: 4 },
  'Eb7#9': { frets: [-1, 2, 1, 2, 3, -1], fingers: [-1, 2, 1, 3, 4, -1], baseFret: 5 },

  // --- Extended Chords (9, 13, 6, 6/9) ---
  'C9': { frets: [-1, 2, 1, 2, 2, -1], fingers: [-1, 2, 1, 3, 3, -1], baseFret: 2 },
  'D9': { frets: [-1, 2, 1, 2, 2, -1], fingers: [-1, 2, 1, 3, 3, -1], baseFret: 4 },
  'G9': { frets: [2, 1, 2, 1, -1, -1], fingers: [2, 1, 3, 1, -1, -1], baseFret: 2 },
  'G13': { frets: [2, -1, 2, 3, 4, -1], fingers: [1, -1, 2, 3, 4, -1], baseFret: 2 },
  'G6': { frets: [3, 2, 0, 0, 0, 0], fingers: [2, 1, 0, 0, 0, 0], baseFret: 1 },
  'Bb6': { frets: [-1, 1, 3, 3, 3, 3], fingers: [-1, 1, 2, 3, 3, 3], baseFret: 1 },
  'D6/9': { frets: [-1, 2, 1, 1, 2, 2], fingers: [-1, 2, 1, 1, 3, 4], baseFret: 4 },

  // --- Suspended Chords (sus4, sus2, 7sus4) ---
  'Dsus4': { frets: [-1, -1, 0, 2, 3, 3], fingers: [-1, -1, 0, 1, 2, 4], baseFret: 1 },
  'Asus4': { frets: [-1, 0, 2, 2, 3, 0], fingers: [-1, 0, 1, 2, 3, 0], baseFret: 1 },
  'Csus4': { frets: [-1, 3, 3, 0, 1, 1], fingers: [-1, 3, 4, 0, 1, 1], baseFret: 1 },
  'Esus4': { frets: [0, 2, 2, 2, 0, 0], fingers: [0, 2, 3, 4, 0, 0], baseFret: 1 },
  'Gsus4': { frets: [3, 3, 0, 0, 1, 3], fingers: [2, 3, 0, 0, 1, 4], baseFret: 1 },
  'Fsus4': { frets: [1, 3, 3, 3, 1, 1], fingers: [1, 2, 3, 4, 1, 1], baseFret: 1 },
  'A7sus4': { frets: [-1, 0, 2, 0, 3, 0], fingers: [-1, 0, 1, 0, 3, 0], baseFret: 1 },
  'D7sus4': { frets: [-1, -1, 0, 2, 1, 3], fingers: [-1, -1, 0, 2, 1, 4], baseFret: 1 },

  // --- Added Tone Chords (add9) ---
  'Cadd9': { frets: [-1, 3, 2, 0, 3, 3], fingers: [-1, 2, 1, 0, 3, 4], baseFret: 1 },
  'Aadd9': { frets: [-1, 0, 2, 4, 2, 0], fingers: [-1, 0, 1, 3, 2, 0], baseFret: 1 },
  'Badd9': { frets: [-1, 1, 3, 3, 1, 1], fingers: [-1, 1, 3, 4, 1, 1], baseFret: 2 },
  'C#madd9': { frets: [-1, 1, 3, 3, 1, 1], fingers: [-1, 1, 3, 4, 1, 1], baseFret: 4 },
  'F#madd9': { frets: [1, 3, 3, 1, 1, 1], fingers: [1, 3, 4, 1, 1, 1], baseFret: 2 },

  // --- Slash Chords (Inversions & Bass Notes) ---
  'D/F#': { frets: [2, 0, 0, 2, 3, 2], fingers: [1, 0, 0, 2, 4, 3], baseFret: 1 },
  'C/G': { frets: [3, 3, 2, 0, 1, 0], fingers: [3, 4, 2, 0, 1, 0], baseFret: 1 },
  'C/E': { frets: [0, 3, 2, 0, 1, 0], fingers: [0, 3, 2, 0, 1, 0], baseFret: 1 },
  'G/B': { frets: [-1, 2, 0, 0, 3, 3], fingers: [-1, 1, 0, 0, 3, 4], baseFret: 1 },
  'Am/G': { frets: [3, 0, 2, 2, 1, 0], fingers: [3, 0, 2, 1, 1, 0], baseFret: 1 },
  'Em/D': { frets: [-1, -1, 0, 0, 0, 0], fingers: [-1, -1, 0, 0, 0, 0], baseFret: 1 },
  'G5/B': { frets: [-1, 2, 0, 0, 3, 3], fingers: [-1, 1, 0, 0, 3, 4], baseFret: 1 },
  'F/C': { frets: [-1, 3, 3, 2, 1, 1], fingers: [-1, 3, 4, 2, 1, 1], baseFret: 1 },
  'Bb/D': { frets: [-1, -1, 0, 3, 3, 1], fingers: [-1, -1, 0, 2, 3, 1], baseFret: 1 },
  'E+/G#': { frets: [4, 3, 2, 1, 1, 4], fingers: [4, 3, 2, 1, 1, 4], baseFret: 1 },
  'G#aug/G#': { frets: [4, 3, 2, 1, 1, 4], fingers: [4, 3, 2, 1, 1, 4], baseFret: 1 },

  // --- Diminished & Half-Diminished ---
  'Cdim': { frets: [-1, 3, 4, 2, 4, 2], fingers: [-1, 2, 4, 1, 3, 1], baseFret: 1 },
  'C#dim': { frets: [-1, 1, 2, 0, 2, 0], fingers: [-1, 1, 2, 0, 3, 0], baseFret: 1 },
  'Ddim': { frets: [-1, -1, 0, 1, 0, 1], fingers: [-1, -1, 0, 1, 0, 2], baseFret: 1 },
  'D#dim': { frets: [-1, -1, 1, 2, 1, 2], fingers: [-1, -1, 1, 3, 2, 4], baseFret: 1 },
  'Edim': { frets: [0, 1, 2, 0, 2, 0], fingers: [0, 1, 3, 0, 2, 0], baseFret: 1 },
  'Fdim': { frets: [1, 2, 3, 1, 3, 1], fingers: [1, 2, 4, 1, 3, 1], baseFret: 1 },
  'F#dim': { frets: [2, 3, 4, 2, 4, 2], fingers: [1, 2, 4, 1, 3, 1], baseFret: 1 },
  'Gdim': { frets: [3, 4, 5, 3, 5, 3], fingers: [1, 2, 4, 1, 3, 1], baseFret: 1 },
  'Adim': { frets: [-1, 0, 1, 2, 1, 2], fingers: [-1, 0, 1, 3, 2, 4], baseFret: 1 },
  'Bdim': { frets: [-1, 2, 3, 4, 3, 4], fingers: [-1, 1, 2, 4, 2, 3], baseFret: 1 },
  'Bm7b5': { frets: [-1, 2, 3, 2, 3, -1], fingers: [-1, 1, 3, 2, 4, -1], baseFret: 1 },

  // --- Augmented ---
  'C+': { frets: [-1, 3, 2, 1, 1, 0], fingers: [-1, 4, 3, 1, 2, 0], baseFret: 1 },
  'D+': { frets: [-1, -1, 0, 3, 3, 2], fingers: [-1, -1, 0, 2, 3, 1], baseFret: 1 },
  'E+': { frets: [0, 3, 2, 1, 1, 0], fingers: [0, 4, 3, 1, 2, 0], baseFret: 1 },
  'F+': { frets: [1, 0, 3, 2, 2, 1], fingers: [1, 0, 4, 2, 3, 1], baseFret: 1 },
  'G+': { frets: [3, 2, 1, 0, 0, 3], fingers: [4, 3, 1, 0, 0, 2], baseFret: 1 },
  'A+': { frets: [-1, 0, 3, 2, 2, 1], fingers: [-1, 0, 4, 2, 3, 1], baseFret: 1 },
  'Eb+': { frets: [-1, -1, 1, 0, 0, 3], fingers: [-1, -1, 1, 0, 0, 4], baseFret: 1 },

  // --- Power Chords (5th) ---
  'A5': { frets: [-1, 0, 2, 2, -1, -1], fingers: [-1, 0, 1, 2, -1, -1], baseFret: 1 },
  'B5': { frets: [-1, 1, 3, 3, -1, -1], fingers: [-1, 1, 3, 4, -1, -1], baseFret: 2 },
  'Bb5': { frets: [-1, 1, 3, 3, -1, -1], fingers: [-1, 1, 3, 4, -1, -1], baseFret: 1 },
  'C5': { frets: [-1, 1, 3, 3, -1, -1], fingers: [-1, 1, 3, 4, -1, -1], baseFret: 3 },
  'C#5': { frets: [-1, 1, 3, 3, -1, -1], fingers: [-1, 1, 3, 4, -1, -1], baseFret: 4 },
  'Db5': { frets: [-1, 1, 3, 3, -1, -1], fingers: [-1, 1, 3, 4, -1, -1], baseFret: 4 },
  'D5': { frets: [-1, -1, 0, 2, 3, -1], fingers: [-1, -1, 0, 1, 3, -1], baseFret: 1 },
  'D#5': { frets: [-1, 1, 3, 3, -1, -1], fingers: [-1, 1, 3, 4, -1, -1], baseFret: 6 },
  'Eb5': { frets: [-1, 1, 3, 3, -1, -1], fingers: [-1, 1, 3, 4, -1, -1], baseFret: 6 },
  'E5': { frets: [0, 2, 2, -1, -1, -1], fingers: [0, 1, 2, -1, -1, -1], baseFret: 1 },
  'F5': { frets: [1, 3, 3, -1, -1, -1], fingers: [1, 3, 4, -1, -1, -1], baseFret: 1 },
  'F#5': { frets: [1, 3, 3, -1, -1, -1], fingers: [1, 3, 4, -1, -1, -1], baseFret: 2 },
  'G5': { frets: [3, 5, 5, -1, -1, -1], fingers: [1, 3, 4, -1, -1, -1], baseFret: 1 },
  'G#5': { frets: [1, 3, 3, -1, -1, -1], fingers: [1, 3, 4, -1, -1, -1], baseFret: 4 },
  'Ab5': { frets: [1, 3, 3, -1, -1, -1], fingers: [1, 3, 4, -1, -1, -1], baseFret: 4 },
};

/**
 * Retrieves the chord shape, matching exact, normalized, or fallback.
 */
export function getChordShape(chordInput?: string): ChordShape {
  if (!chordInput) return CHORD_SHAPES['C'];

  // Direct match
  if (CHORD_SHAPES[chordInput]) {
    return CHORD_SHAPES[chordInput];
  }

  // Normalized match
  const norm = normalizeChordName(chordInput);
  if (CHORD_SHAPES[norm]) {
    return CHORD_SHAPES[norm];
  }

  // Case-insensitive match
  const lower = norm.toLowerCase();
  const foundKey = Object.keys(CHORD_SHAPES).find(k => k.toLowerCase() === lower);
  if (foundKey) {
    return CHORD_SHAPES[foundKey];
  }

  // Root major fallback if applicable (e.g. C# -> C#)
  const rootMatch = norm.match(/^([A-G][#b]?)/);
  if (rootMatch && CHORD_SHAPES[rootMatch[1]]) {
    return CHORD_SHAPES[rootMatch[1]];
  }

  return CHORD_SHAPES['C'];
}

/**
 * Calculates the actual guitar neck frets (taking baseFret into account)
 * for use in audio synthesis.
 */
export function getActualFretNumbers(shape: ChordShape): number[] {
  const base = shape.baseFret ?? 1;
  return shape.frets.map(f => {
    if (f <= 0) return f; // -1 for mute, 0 for open
    return f + (base - 1);
  });
}
