/**
 * CAGED System Guitar Framework Engine for MusicScene
 * Maps the 5 foundational guitar chord shapes (C, A, G, E, D) to movable
 * fretboard positions, pentatonic boxes, major scale patterns, and triad inversions.
 */

export type CagedShapeLetter = 'C' | 'A' | 'G' | 'E' | 'D';

export interface CagedFretboardNote {
  stringIndex: number; // 0 (Low E) to 5 (High E)
  fret: number;
  note: string;
  interval: 'R' | '2' | '3' | '4' | '5' | '6' | '7';
  isRoot: boolean;
  isChordTone: boolean;
  isPentatonic: boolean;
  isDiatonic: boolean;
  finger?: number;
}

export interface CagedTriadInfo {
  inversion: 'Root Position' | '1st Inversion (3rd in bass)' | '2nd Inversion (5th in bass)';
  strings: string; // e.g. 'Strings 1-2-3 (High E, B, G)'
  formula: string; // e.g. '5th - Root - 3rd'
  frets: number[]; // 6 strings
  description: string;
}

export interface CagedShapeData {
  shape: CagedShapeLetter;
  name: string;
  rootStringIndex: number; // Primary root string (0=E, 1=A, 2=D)
  rootStringName: string;
  baseFret: number;
  fretSpan: [number, number]; // [minFret, maxFret]
  chordFrets: number[]; // 6 strings (-1 = mute)
  fingers: number[];
  notes: CagedFretboardNote[];
  pentatonicBoxNumber: number; // 1 to 5
  triad: CagedTriadInfo;
  advantages: string[];
  famousRiffs: string[];
}

export const CHROMATIC_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const;
export const ENHARMONIC_MAP: Record<string, string> = {
  'Db': 'C#', 'Eb': 'D#', 'Gb': 'F#', 'Ab': 'G#', 'Bb': 'A#',
};

// Open string MIDI: E2(40), A2(45), D3(50), G3(55), B3(59), E4(64)
export const STRING_OPEN_NOTES = ['E', 'A', 'D', 'G', 'B', 'E'];
export const STRING_OPEN_MIDI = [40, 45, 50, 55, 59, 64];

export const CAGED_ORDER: CagedShapeLetter[] = ['C', 'A', 'G', 'E', 'D'];

/**
 * Returns the chromatic index (0-11) for any note name.
 */
export function getNoteIndex(noteName: string): number {
  const norm = ENHARMONIC_MAP[noteName] || noteName;
  const idx = CHROMATIC_NOTES.indexOf(norm as typeof CHROMATIC_NOTES[number]);
  return idx >= 0 ? idx : 0;
}

/**
 * Returns the note name for a given string and fret.
 */
export function getNoteAtFret(stringIndex: number, fret: number): string {
  const openIdx = getNoteIndex(STRING_OPEN_NOTES[stringIndex]);
  return CHROMATIC_NOTES[(openIdx + fret) % 12];
}

/**
 * Calculates the fretboard layout for a given CAGED shape and root note.
 */
export function getCagedShapeData(shape: CagedShapeLetter, rootNote: string): CagedShapeData {
  const rootIdx = getNoteIndex(rootNote);

  // Determine root anchor fret depending on the shape
  let primaryRootFret = 0;
  let chordFrets: number[] = [-1, -1, -1, -1, -1, -1];
  let fingers: number[] = [-1, -1, -1, -1, -1, -1];
  let pentatonicBox = 1;
  let triadInfo: CagedTriadInfo;
  let advantages: string[] = [];
  let famousRiffs: string[] = [];

  switch (shape) {
    case 'C': {
      // Root on A string (string 1)
      primaryRootFret = (rootIdx - 9 + 12) % 12;
      const R = primaryRootFret;
      chordFrets = [-1, R, R - 1, R - 3, R - 2, R - 3];
      fingers = [-1, 3, 2, 0, 1, 0];
      pentatonicBox = 5;
      triadInfo = {
        inversion: '1st Inversion (3rd in bass)',
        strings: 'Strings 1-2-3 (E-B-G)',
        formula: '5th - Root - 3rd',
        frets: [-1, -1, -1, R - 3, R - 2, R - 3],
        description: 'Warm, melodic triad voicing frequently used by Jimi Hendrix, John Mayer, and Eric Clapton for vocal-like fills.',
      };
      advantages = [
        'Unlocks beautiful open-string and partial triad arpeggios on top 3 strings.',
        'Perfect for sliding double-stops and country/R&B hammer-on embellishments.',
        'Directly links downward into the D shape and upward into the A shape.',
      ];
      famousRiffs = ['Under the Bridge (Intro)', 'Castles Made of Sand', 'Little Wing'];
      break;
    }
    case 'A': {
      // Root on A string (string 1)
      primaryRootFret = (rootIdx - 9 + 12) % 12;
      const R = primaryRootFret;
      chordFrets = [-1, R, R + 2, R + 2, R + 2, R];
      fingers = [-1, 1, 2, 3, 4, 1];
      pentatonicBox = 1;
      triadInfo = {
        inversion: '2nd Inversion (5th in bass)',
        strings: 'Strings 1-2-3 (E-B-G)',
        formula: 'Root - 3rd - 5th',
        frets: [-1, -1, -1, R + 2, R + 2, R],
        description: 'Compact 3-string triad with the root in the middle. The quintessential rock power grip.',
      };
      advantages = [
        'The foundational 5th-string barre chord familiar to every guitarist.',
        'Hosts Pentatonic Box 1 directly under the fret hand for effortless blues-rock soloing.',
        'Effortlessly converts to minor (Am shape), dominant 7th, and major 7th grips.',
      ];
      famousRiffs = ['Back in Black', 'Crazy Train', 'Here I Go Again'];
      break;
    }
    case 'G': {
      // Root on Low E string (string 0)
      primaryRootFret = (rootIdx - 4 + 12) % 12;
      const R = primaryRootFret;
      chordFrets = [R, R - 1, R - 3, R - 3, R - 3, R];
      fingers = [3, 2, 1, 1, 1, 4];
      pentatonicBox = 2;
      triadInfo = {
        inversion: 'Root Position',
        strings: 'Strings 1-2-3 (E-B-G)',
        formula: 'Root - 3rd - 5th',
        frets: [-1, -1, -1, R - 3, R - 3, R],
        description: 'Wide root position triad. Gives your acoustic and clean chord voicings huge airy presence.',
      };
      advantages = [
        'Massive 6-string sonic spread with 3 octaves of the root note.',
        'Superb for Travis picking, fingerstyle, and acoustic open-chord sounds.',
        'Houses the famous "Major Pentatonic sweet-spot" box beloved by B.B. King.',
      ];
      famousRiffs = ['Sweet Child O\' Mine (Acoustic Intro)', 'Landslide', 'Blackbird'];
      break;
    }
    case 'E': {
      // Root on Low E string (string 0)
      primaryRootFret = (rootIdx - 4 + 12) % 12;
      const R = primaryRootFret;
      chordFrets = [R, R + 2, R + 2, R + 1, R, R];
      fingers = [1, 3, 4, 2, 1, 1];
      pentatonicBox = 3;
      triadInfo = {
        inversion: '1st Inversion (3rd in bass)',
        strings: 'Strings 1-2-3 (E-B-G)',
        formula: '3rd - 5th - Root',
        frets: [-1, -1, -1, R + 1, R, R],
        description: 'The universal 6-string barre chord triad. Bright, cutting, and easy to fret anywhere on the neck.',
      };
      advantages = [
        'The most versatile and durable barre chord shape on the entire instrument.',
        'Easy root location on the low E string drives quick fretboard navigation.',
        'Connects seamlessly into the high D shape and lower G shape.',
      ];
      famousRiffs = ['Smells Like Teen Spirit', 'Highway to Hell', 'Brown Eyed Girl'];
      break;
    }
    case 'D': {
      // Root on D string (string 2)
      primaryRootFret = (rootIdx - 2 + 12) % 12;
      const R = primaryRootFret;
      chordFrets = [-1, -1, R, R + 2, R + 3, R + 2];
      fingers = [-1, -1, 1, 2, 4, 3];
      pentatonicBox = 4;
      triadInfo = {
        inversion: 'Root Position',
        strings: 'Strings 1-2-3 (E-B-G)',
        formula: '5th - Root - 3rd',
        frets: [-1, -1, -1, R + 2, R + 3, R + 2],
        description: 'The brilliant, chiming top-3-string triad that cuts through any mix.',
      };
      advantages = [
        'High register voice that stays clear of the bass guitar and kick drum frequencies.',
        'Beloved by Mark Knopfler, George Harrison, and Keith Richards for rhythmic riffs.',
        'Forms the upper triad roof of the C shape one fret below.',
      ];
      famousRiffs = ['Sultans of Swing', 'Hotel California', 'Wish You Were Here'];
      break;
    }
  }

  // Normalize negative frets if shape falls below fret 0 (wrap to 12)
  const minValidFret = Math.min(...chordFrets.filter(f => f >= 0));
  const maxValidFret = Math.max(...chordFrets.filter(f => f >= 0));

  let fretSpan: [number, number] = [Math.max(0, minValidFret - 1), maxValidFret + 1];
  if (minValidFret < 0) {
    // If wrapped
    chordFrets = chordFrets.map(f => (f >= 0 ? f : f === -1 ? -1 : f + 12));
    primaryRootFret += 12;
    fretSpan = [Math.max(0, primaryRootFret - 3), primaryRootFret + 3];
  }

  const baseFret = Math.max(1, fretSpan[0]);

  // Major scale interval degrees (semitones from root)
  // R=0, 2=2, 3=4, 4=5, 5=7, 6=9, 7=11
  const SEMITONE_INTERVAL_MAP: Record<number, 'R' | '2' | '3' | '4' | '5' | '6' | '7'> = {
    0: 'R', 2: '2', 4: '3', 5: '4', 7: '5', 9: '6', 11: '7',
  };

  // Build fretboard notes in the shape zone (from baseFret - 1 to baseFret + 4)
  const notes: CagedFretboardNote[] = [];
  const startFret = Math.max(0, baseFret - 1);
  const endFret = Math.min(17, startFret + 5);

  for (let sIdx = 0; sIdx < 6; sIdx++) {
    for (let f = startFret; f <= endFret; f++) {
      const noteName = getNoteAtFret(sIdx, f);
      const noteIdx = getNoteIndex(noteName);
      const semitonesFromRoot = (noteIdx - rootIdx + 12) % 12;
      const interval = SEMITONE_INTERVAL_MAP[semitonesFromRoot];

      if (interval) {
        const isRoot = interval === 'R';
        const isChordTone = interval === 'R' || interval === '3' || interval === '5';
        const isPentatonic = interval === 'R' || interval === '2' || interval === '3' || interval === '5' || interval === '6';

        // Check if this note matches the chord shape voicing
        const matchesChordFret = chordFrets[sIdx] === f;

        notes.push({
          stringIndex: sIdx,
          fret: f,
          note: noteName,
          interval,
          isRoot,
          isChordTone,
          isPentatonic,
          isDiatonic: true,
          finger: matchesChordFret ? fingers[sIdx] : undefined,
        });
      }
    }
  }

  const rootStringIndex = shape === 'C' || shape === 'A' ? 1 : shape === 'D' ? 2 : 0;
  const rootStringName = STRING_OPEN_NOTES[rootStringIndex];

  return {
    shape,
    name: `${shape} Shape (${rootNote} Major)`,
    rootStringIndex,
    rootStringName,
    baseFret,
    fretSpan,
    chordFrets,
    fingers,
    notes,
    pentatonicBoxNumber: pentatonicBox,
    triad: triadInfo,
    advantages,
    famousRiffs,
  };
}

/**
 * Returns the next shape in CAGED order (C -> A -> G -> E -> D -> C).
 */
export function getNextCagedShape(current: CagedShapeLetter): CagedShapeLetter {
  const idx = CAGED_ORDER.indexOf(current);
  return CAGED_ORDER[(idx + 1) % CAGED_ORDER.length];
}

/**
 * Returns the previous shape in CAGED order.
 */
export function getPrevCagedShape(current: CagedShapeLetter): CagedShapeLetter {
  const idx = CAGED_ORDER.indexOf(current);
  return CAGED_ORDER[(idx - 1 + CAGED_ORDER.length) % CAGED_ORDER.length];
}

