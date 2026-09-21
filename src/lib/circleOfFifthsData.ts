/**
 * Circle of Fifths Harmonic Engine for MusicScene
 * Provides data structures, key signatures, diatonic chords with guitar voicings,
 * key modulation pathways, and modal interchange borrowed chord definitions.
 */

export interface DiatonicChord {
  degree: 'I' | 'ii' | 'iii' | 'IV' | 'V' | 'vi' | 'vii°';
  chord: string;
  name: string;
  quality: 'major' | 'minor' | 'diminished';
  function: string;
  guitarFrets: number[]; // 6 strings (Low E to High E, -1 = mute, 0 = open)
}

export interface CadenceProgression {
  name: string;
  degrees: string[];
  chords: string[];
  description: string;
}

export interface ModulationRoute {
  targetKey: string;
  relationship: 'Relative Minor' | 'Dominant (+1 Fifth)' | 'Subdominant (-1 Fifth)' | 'Parallel Minor';
  pivotChord: string;
  progression: string[];
  explanation: string;
}

export interface BorrowedChord {
  degree: '♭VII' | '♭VI' | '♭III' | 'iv';
  chord: string;
  sourceMode: 'Aeolian (Parallel Minor)' | 'Dorian';
  mood: string;
  guitarFrets: number[];
  progressionContext: string[];
  famousSongs: string[];
}

export interface CircleKeyData {
  index: number; // 0 to 11 (0 = C, 1 = G, etc.)
  key: string;
  displayName: string;
  relativeMinor: string;
  enharmonic?: string;
  accidentalCount: number; // 0, +1..+7 (sharps), -1..-7 (flats)
  accidentalType: 'none' | 'sharps' | 'flats';
  accidentals: string[];
  scaleNotes: string[];
  diatonicChords: DiatonicChord[];
  cadences: CadenceProgression[];
  modulations: ModulationRoute[];
  borrowedChords: BorrowedChord[];
}

export const CIRCLE_OF_FIFTHS_DATA: CircleKeyData[] = [
  // 0: C Major / A Minor
  {
    index: 0,
    key: 'C',
    displayName: 'C Major',
    relativeMinor: 'Am',
    accidentalCount: 0,
    accidentalType: 'none',
    accidentals: [],
    scaleNotes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    diatonicChords: [
      { degree: 'I', chord: 'C', name: 'C Major', quality: 'major', function: 'Tonic (Home / Resolved)', guitarFrets: [-1, 3, 2, 0, 1, 0] },
      { degree: 'ii', chord: 'Dm', name: 'D Minor', quality: 'minor', function: 'Supertonic (Pre-Dominant)', guitarFrets: [-1, -1, 0, 2, 3, 1] },
      { degree: 'iii', chord: 'Em', name: 'E Minor', quality: 'minor', function: 'Mediant (Tonic Substitute)', guitarFrets: [0, 2, 2, 0, 0, 0] },
      { degree: 'IV', chord: 'F', name: 'F Major', quality: 'major', function: 'Subdominant (Lift / Motion)', guitarFrets: [1, 3, 3, 2, 1, 1] },
      { degree: 'V', chord: 'G', name: 'G Major', quality: 'major', function: 'Dominant (Maximum Pull to Home)', guitarFrets: [3, 2, 0, 0, 3, 3] },
      { degree: 'vi', chord: 'Am', name: 'A Minor', quality: 'minor', function: 'Submediant (Relative Minor)', guitarFrets: [-1, 0, 2, 2, 1, 0] },
      { degree: 'vii°', chord: 'Bdim', name: 'B Diminished', quality: 'diminished', function: 'Leading Tone (Tension)', guitarFrets: [-1, 2, 3, 4, 3, -1] },
    ],
    cadences: [
      { name: 'Authentic Cadence', degrees: ['I', 'IV', 'V', 'I'], chords: ['C', 'F', 'G', 'C'], description: 'The fundamental harmonic pillar of Western music.' },
      { name: 'Pop 4-Chord Loop', degrees: ['I', 'V', 'vi', 'IV'], chords: ['C', 'G', 'Am', 'F'], description: 'Used in hundreds of iconic hits from Journey to Green Day.' },
      { name: '50s Doo-Wop Loop', degrees: ['I', 'vi', 'IV', 'V'], chords: ['C', 'Am', 'F', 'G'], description: 'Classic retro ballad progression with smooth voice leading.' },
      { name: 'Jazz ii-V-I', degrees: ['ii', 'V', 'I'], chords: ['Dm', 'G', 'C'], description: 'The essential building block of jazz standards and smooth progressions.' },
    ],
    modulations: [
      { targetKey: 'Am', relationship: 'Relative Minor', pivotChord: 'E7 (Dominant of Am)', progression: ['C', 'F', 'E7', 'Am'], explanation: 'Pivot to the relative minor by introducing the major V of Am (E7) to pull strongly to A minor.' },
      { targetKey: 'G', relationship: 'Dominant (+1 Fifth)', pivotChord: 'D7 (V of G)', progression: ['C', 'Am', 'D7', 'G'], explanation: 'Modulate clockwise around the circle using D7 as a secondary dominant (V/V) resolving into G Major.' },
      { targetKey: 'F', relationship: 'Subdominant (-1 Fifth)', pivotChord: 'C7 (V of F)', progression: ['C', 'F', 'C7', 'F'], explanation: 'Modulate counter-clockwise by turning the C tonic into C7 (dominant 7th) which resolves down a 5th into F.' },
      { targetKey: 'Cm', relationship: 'Parallel Minor', pivotChord: 'G7', progression: ['C', 'F', 'G7', 'Cm'], explanation: 'Direct parallel modulation switching from bright Ionian C to moody Aeolian C Minor.' },
    ],
    borrowedChords: [
      { degree: '♭VII', chord: 'Bb', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Heroic, anthem rock lift', guitarFrets: [-1, 1, 3, 3, 3, 1], progressionContext: ['C', 'Bb', 'F', 'C'], famousSongs: ['Sweet Child O\' Mine', 'Hey Jude'] },
      { degree: '♭VI', chord: 'Ab', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Epic, cinematic wonder', guitarFrets: [4, 6, 6, 5, 4, 4], progressionContext: ['C', 'Ab', 'Bb', 'C'], famousSongs: ['Space Oddity', 'Lady Madonna'] },
      { degree: '♭III', chord: 'Eb', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Blues-rock grit', guitarFrets: [-1, 6, 8, 8, 8, 6], progressionContext: ['C', 'Eb', 'F', 'C'], famousSongs: ['Born to be Wild', 'Iron Man'] },
      { degree: 'iv', chord: 'Fm', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Emotional, melancholy resolution', guitarFrets: [1, 3, 3, 1, 1, 1], progressionContext: ['C', 'F', 'Fm', 'C'], famousSongs: ['In My Life', 'Creep', 'Wake Me Up When September Ends'] },
    ],
  },

  // 1: G Major / E Minor (1 sharp)
  {
    index: 1,
    key: 'G',
    displayName: 'G Major',
    relativeMinor: 'Em',
    accidentalCount: 1,
    accidentalType: 'sharps',
    accidentals: ['F#'],
    scaleNotes: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    diatonicChords: [
      { degree: 'I', chord: 'G', name: 'G Major', quality: 'major', function: 'Tonic (Home / Resolved)', guitarFrets: [3, 2, 0, 0, 3, 3] },
      { degree: 'ii', chord: 'Am', name: 'A Minor', quality: 'minor', function: 'Supertonic (Pre-Dominant)', guitarFrets: [-1, 0, 2, 2, 1, 0] },
      { degree: 'iii', chord: 'Bm', name: 'B Minor', quality: 'minor', function: 'Mediant (Tonic Substitute)', guitarFrets: [-1, 2, 4, 4, 3, 2] },
      { degree: 'IV', chord: 'C', name: 'C Major', quality: 'major', function: 'Subdominant (Lift / Motion)', guitarFrets: [-1, 3, 2, 0, 1, 0] },
      { degree: 'V', chord: 'D', name: 'D Major', quality: 'major', function: 'Dominant (Maximum Pull to Home)', guitarFrets: [-1, -1, 0, 2, 3, 2] },
      { degree: 'vi', chord: 'Em', name: 'E Minor', quality: 'minor', function: 'Submediant (Relative Minor)', guitarFrets: [0, 2, 2, 0, 0, 0] },
      { degree: 'vii°', chord: 'F#dim', name: 'F# Diminished', quality: 'diminished', function: 'Leading Tone (Tension)', guitarFrets: [2, 3, 4, -1, -1, -1] },
    ],
    cadences: [
      { name: 'Authentic Cadence', degrees: ['I', 'IV', 'V', 'I'], chords: ['G', 'C', 'D', 'G'], description: 'Classic country, folk, and rock resolution.' },
      { name: 'Pop 4-Chord Loop', degrees: ['I', 'V', 'vi', 'IV'], chords: ['G', 'D', 'Em', 'C'], description: 'One of the most famous acoustic guitar chord loops in music history.' },
      { name: '50s Doo-Wop Loop', degrees: ['I', 'vi', 'IV', 'V'], chords: ['G', 'Em', 'C', 'D'], description: 'Timeless sweet romantic progression.' },
      { name: 'Jazz ii-V-I', degrees: ['ii', 'V', 'I'], chords: ['Am', 'D', 'G'], description: 'Smooth jazz cadence with leading tone F#.' },
    ],
    modulations: [
      { targetKey: 'Em', relationship: 'Relative Minor', pivotChord: 'B7 (V of Em)', progression: ['G', 'C', 'B7', 'Em'], explanation: 'B7 introduces D# which provides the magnetic leading tone into E minor.' },
      { targetKey: 'D', relationship: 'Dominant (+1 Fifth)', pivotChord: 'A7 (V of D)', progression: ['G', 'Em', 'A7', 'D'], explanation: 'Modulate to D major via A7 secondary dominant.' },
      { targetKey: 'C', relationship: 'Subdominant (-1 Fifth)', pivotChord: 'G7 (V of C)', progression: ['G', 'C', 'G7', 'C'], explanation: 'Turn the tonic G into G7 to resolve down to C major.' },
      { targetKey: 'Gm', relationship: 'Parallel Minor', pivotChord: 'D7', progression: ['G', 'C', 'D7', 'Gm'], explanation: 'Parallel shift from G Major to brooding G Minor.' },
    ],
    borrowedChords: [
      { degree: '♭VII', chord: 'F', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Driving rock energy', guitarFrets: [1, 3, 3, 2, 1, 1], progressionContext: ['G', 'F', 'C', 'G'], famousSongs: ['Sweet Home Alabama', 'Free Fallin\''] },
      { degree: '♭VI', chord: 'Eb', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Epic cinematic chord', guitarFrets: [-1, 6, 8, 8, 8, 6], progressionContext: ['G', 'Eb', 'F', 'G'], famousSongs: ['Comfortably Numb'] },
      { degree: '♭III', chord: 'Bb', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Blues rock swagger', guitarFrets: [-1, 1, 3, 3, 3, 1], progressionContext: ['G', 'Bb', 'C', 'G'], famousSongs: ['Back in Black'] },
      { degree: 'iv', chord: 'Cm', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Deep yearning sorrow', guitarFrets: [-1, 3, 5, 5, 4, 3], progressionContext: ['G', 'C', 'Cm', 'G'], famousSongs: ['Blackbird'] },
    ],
  },

  // 2: D Major / B Minor (2 sharps: F#, C#)
  {
    index: 2,
    key: 'D',
    displayName: 'D Major',
    relativeMinor: 'Bm',
    accidentalCount: 2,
    accidentalType: 'sharps',
    accidentals: ['F#', 'C#'],
    scaleNotes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    diatonicChords: [
      { degree: 'I', chord: 'D', name: 'D Major', quality: 'major', function: 'Tonic (Home / Resolved)', guitarFrets: [-1, -1, 0, 2, 3, 2] },
      { degree: 'ii', chord: 'Em', name: 'E Minor', quality: 'minor', function: 'Supertonic (Pre-Dominant)', guitarFrets: [0, 2, 2, 0, 0, 0] },
      { degree: 'iii', chord: 'F#m', name: 'F# Minor', quality: 'minor', function: 'Mediant (Tonic Substitute)', guitarFrets: [2, 4, 4, 2, 2, 2] },
      { degree: 'IV', chord: 'G', name: 'G Major', quality: 'major', function: 'Subdominant (Lift / Motion)', guitarFrets: [3, 2, 0, 0, 3, 3] },
      { degree: 'V', chord: 'A', name: 'A Major', quality: 'major', function: 'Dominant (Maximum Pull to Home)', guitarFrets: [-1, 0, 2, 2, 2, 0] },
      { degree: 'vi', chord: 'Bm', name: 'B Minor', quality: 'minor', function: 'Submediant (Relative Minor)', guitarFrets: [-1, 2, 4, 4, 3, 2] },
      { degree: 'vii°', chord: 'C#dim', name: 'C# Diminished', quality: 'diminished', function: 'Leading Tone (Tension)', guitarFrets: [-1, 4, 5, 6, 5, -1] },
    ],
    cadences: [
      { name: 'Authentic Cadence', degrees: ['I', 'IV', 'V', 'I'], chords: ['D', 'G', 'A', 'D'], description: 'Bright, celebratory rock and folk cadence.' },
      { name: 'Pop 4-Chord Loop', degrees: ['I', 'V', 'vi', 'IV'], chords: ['D', 'A', 'Bm', 'G'], description: 'Rich acoustic song structure with powerful open-chord sonics.' },
      { name: '50s Doo-Wop Loop', degrees: ['I', 'vi', 'IV', 'V'], chords: ['D', 'Bm', 'G', 'A'], description: 'Golden age doo-wop progression in D.' },
      { name: 'Jazz ii-V-I', degrees: ['ii', 'V', 'I'], chords: ['Em', 'A', 'D'], description: 'Ultra-common guitar jazz turnaround.' },
    ],
    modulations: [
      { targetKey: 'Bm', relationship: 'Relative Minor', pivotChord: 'F#7 (V of Bm)', progression: ['D', 'G', 'F#7', 'Bm'], explanation: 'F#7 introduces A# as the leading tone to lock into B minor.' },
      { targetKey: 'A', relationship: 'Dominant (+1 Fifth)', pivotChord: 'E7 (V of A)', progression: ['D', 'Bm', 'E7', 'A'], explanation: 'Modulate to A Major using E7.' },
      { targetKey: 'G', relationship: 'Subdominant (-1 Fifth)', pivotChord: 'D7 (V of G)', progression: ['D', 'G', 'D7', 'G'], explanation: 'Add the flat 7th to D to resolve cleanly into G Major.' },
      { targetKey: 'Dm', relationship: 'Parallel Minor', pivotChord: 'A7', progression: ['D', 'G', 'A7', 'Dm'], explanation: 'Dramatic shift from bright D Major into sombre D Minor.' },
    ],
    borrowedChords: [
      { degree: '♭VII', chord: 'C', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Classic rock anthem drive', guitarFrets: [-1, 3, 2, 0, 1, 0], progressionContext: ['D', 'C', 'G', 'D'], famousSongs: ['Sweet Child O\' Mine', 'Summer of \'69'] },
      { degree: '♭VI', chord: 'Bb', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Cinematic drama', guitarFrets: [-1, 1, 3, 3, 3, 1], progressionContext: ['D', 'Bb', 'C', 'D'], famousSongs: ['Hotel California'] },
      { degree: '♭III', chord: 'F', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Heavy blues crunch', guitarFrets: [1, 3, 3, 2, 1, 1], progressionContext: ['D', 'F', 'G', 'D'], famousSongs: ['Smells Like Teen Spirit'] },
      { degree: 'iv', chord: 'Gm', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Tender melancholic ache', guitarFrets: [3, 5, 5, 3, 3, 3], progressionContext: ['D', 'G', 'Gm', 'D'], famousSongs: ['Here, There and Everywhere'] },
    ],
  },

  // 3: A Major / F# Minor (3 sharps: F#, C#, G#)
  {
    index: 3,
    key: 'A',
    displayName: 'A Major',
    relativeMinor: 'F#m',
    accidentalCount: 3,
    accidentalType: 'sharps',
    accidentals: ['F#', 'C#', 'G#'],
    scaleNotes: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    diatonicChords: [
      { degree: 'I', chord: 'A', name: 'A Major', quality: 'major', function: 'Tonic (Home / Resolved)', guitarFrets: [-1, 0, 2, 2, 2, 0] },
      { degree: 'ii', chord: 'Bm', name: 'B Minor', quality: 'minor', function: 'Supertonic (Pre-Dominant)', guitarFrets: [-1, 2, 4, 4, 3, 2] },
      { degree: 'iii', chord: 'C#m', name: 'C# Minor', quality: 'minor', function: 'Mediant (Tonic Substitute)', guitarFrets: [-1, 4, 6, 6, 5, 4] },
      { degree: 'IV', chord: 'D', name: 'D Major', quality: 'major', function: 'Subdominant (Lift / Motion)', guitarFrets: [-1, -1, 0, 2, 3, 2] },
      { degree: 'V', chord: 'E', name: 'E Major', quality: 'major', function: 'Dominant (Maximum Pull to Home)', guitarFrets: [0, 2, 2, 1, 0, 0] },
      { degree: 'vi', chord: 'F#m', name: 'F# Minor', quality: 'minor', function: 'Submediant (Relative Minor)', guitarFrets: [2, 4, 4, 2, 2, 2] },
      { degree: 'vii°', chord: 'G#dim', name: 'G# Diminished', quality: 'diminished', function: 'Leading Tone (Tension)', guitarFrets: [4, 5, 6, -1, -1, -1] },
    ],
    cadences: [
      { name: 'Authentic Cadence', degrees: ['I', 'IV', 'V', 'I'], chords: ['A', 'D', 'E', 'A'], description: 'The open-string backbone of rock \'n\' roll.' },
      { name: 'Pop 4-Chord Loop', degrees: ['I', 'V', 'vi', 'IV'], chords: ['A', 'E', 'F#m', 'D'], description: 'Power ballad signature progression.' },
      { name: '50s Doo-Wop Loop', degrees: ['I', 'vi', 'IV', 'V'], chords: ['A', 'F#m', 'D', 'E'], description: 'Retro golden-age progression.' },
      { name: 'Jazz ii-V-I', degrees: ['ii', 'V', 'I'], chords: ['Bm', 'E', 'A'], description: 'Crisp, resonant jazz turnaround.' },
    ],
    modulations: [
      { targetKey: 'F#m', relationship: 'Relative Minor', pivotChord: 'C#7', progression: ['A', 'D', 'C#7', 'F#m'], explanation: 'C#7 provides E# leading tone directly into F# minor.' },
      { targetKey: 'E', relationship: 'Dominant (+1 Fifth)', pivotChord: 'B7', progression: ['A', 'F#m', 'B7', 'E'], explanation: 'Modulate to E Major with B7.' },
      { targetKey: 'D', relationship: 'Subdominant (-1 Fifth)', pivotChord: 'A7', progression: ['A', 'D', 'A7', 'D'], explanation: 'Modulate to D Major by turning A into dominant A7.' },
      { targetKey: 'Am', relationship: 'Parallel Minor', pivotChord: 'E7', progression: ['A', 'D', 'E7', 'Am'], explanation: 'Shift from bright A Major to haunting A Minor.' },
    ],
    borrowedChords: [
      { degree: '♭VII', chord: 'G', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Classic rock swagger', guitarFrets: [3, 2, 0, 0, 3, 3], progressionContext: ['A', 'G', 'D', 'A'], famousSongs: ['Highway to Hell', 'Back in Black'] },
      { degree: '♭VI', chord: 'F', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Epic tension', guitarFrets: [1, 3, 3, 2, 1, 1], progressionContext: ['A', 'F', 'G', 'A'], famousSongs: ['Comfortably Numb'] },
      { degree: '♭III', chord: 'C', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Hard rock heavy lift', guitarFrets: [-1, 3, 2, 0, 1, 0], progressionContext: ['A', 'C', 'D', 'A'], famousSongs: ['Crazy Train'] },
      { degree: 'iv', chord: 'Dm', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Melancholy resolution', guitarFrets: [-1, -1, 0, 2, 3, 1], progressionContext: ['A', 'D', 'Dm', 'A'], famousSongs: ['Save Tonight'] },
    ],
  },

  // 4: E Major / C# Minor (4 sharps: F#, C#, G#, D#)
  {
    index: 4,
    key: 'E',
    displayName: 'E Major',
    relativeMinor: 'C#m',
    accidentalCount: 4,
    accidentalType: 'sharps',
    accidentals: ['F#', 'C#', 'G#', 'D#'],
    scaleNotes: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    diatonicChords: [
      { degree: 'I', chord: 'E', name: 'E Major', quality: 'major', function: 'Tonic (Home / Resolved)', guitarFrets: [0, 2, 2, 1, 0, 0] },
      { degree: 'ii', chord: 'F#m', name: 'F# Minor', quality: 'minor', function: 'Supertonic (Pre-Dominant)', guitarFrets: [2, 4, 4, 2, 2, 2] },
      { degree: 'iii', chord: 'G#m', name: 'G# Minor', quality: 'minor', function: 'Mediant (Tonic Substitute)', guitarFrets: [4, 6, 6, 4, 4, 4] },
      { degree: 'IV', chord: 'A', name: 'A Major', quality: 'major', function: 'Subdominant (Lift / Motion)', guitarFrets: [-1, 0, 2, 2, 2, 0] },
      { degree: 'V', chord: 'B', name: 'B Major', quality: 'major', function: 'Dominant (Maximum Pull to Home)', guitarFrets: [-1, 2, 4, 4, 4, 2] },
      { degree: 'vi', chord: 'C#m', name: 'C# Minor', quality: 'minor', function: 'Submediant (Relative Minor)', guitarFrets: [-1, 4, 6, 6, 5, 4] },
      { degree: 'vii°', chord: 'D#dim', name: 'D# Diminished', quality: 'diminished', function: 'Leading Tone (Tension)', guitarFrets: [-1, 6, 7, 8, 7, -1] },
    ],
    cadences: [
      { name: 'Authentic Cadence', degrees: ['I', 'IV', 'V', 'I'], chords: ['E', 'A', 'B', 'E'], description: 'Massive open guitar chords with rich low-E resonance.' },
      { name: 'Pop 4-Chord Loop', degrees: ['I', 'V', 'vi', 'IV'], chords: ['E', 'B', 'C#m', 'A'], description: 'Modern arena rock and acoustic anthem standard.' },
      { name: '50s Doo-Wop Loop', degrees: ['I', 'vi', 'IV', 'V'], chords: ['E', 'C#m', 'A', 'B'], description: 'Resonant retro progression.' },
      { name: 'Blues Turnaround', degrees: ['I', 'IV', 'I', 'V'], chords: ['E', 'A', 'E', 'B'], description: 'The universal guitar blues chassis.' },
    ],
    modulations: [
      { targetKey: 'C#m', relationship: 'Relative Minor', pivotChord: 'G#7', progression: ['E', 'A', 'G#7', 'C#m'], explanation: 'G#7 resolves powerfully to C# minor.' },
      { targetKey: 'B', relationship: 'Dominant (+1 Fifth)', pivotChord: 'F#7', progression: ['E', 'C#m', 'F#7', 'B'], explanation: 'Modulate to B Major via F#7.' },
      { targetKey: 'A', relationship: 'Subdominant (-1 Fifth)', pivotChord: 'E7', progression: ['E', 'A', 'E7', 'A'], explanation: 'Turn E into dominant E7 to resolve to A Major.' },
      { targetKey: 'Em', relationship: 'Parallel Minor', pivotChord: 'B7', progression: ['E', 'A', 'B7', 'Em'], explanation: 'Drop the major 3rd to plunge into heavy E Minor.' },
    ],
    borrowedChords: [
      { degree: '♭VII', chord: 'D', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Huge classic rock lift', guitarFrets: [-1, -1, 0, 2, 3, 2], progressionContext: ['E', 'D', 'A', 'E'], famousSongs: ['You Shook Me All Night Long', 'Baba O\'Riley'] },
      { degree: '♭VI', chord: 'C', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Cinematic drama', guitarFrets: [-1, 3, 2, 0, 1, 0], progressionContext: ['E', 'C', 'D', 'E'], famousSongs: ['More Than a Feeling'] },
      { degree: '♭III', chord: 'G', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Heavy blues crunch', guitarFrets: [3, 2, 0, 0, 3, 3], progressionContext: ['E', 'G', 'A', 'E'], famousSongs: ['Smoke on the Water'] },
      { degree: 'iv', chord: 'Am', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Heartbreaking resolution', guitarFrets: [-1, 0, 2, 2, 1, 0], progressionContext: ['E', 'A', 'Am', 'E'], famousSongs: ['Desperado'] },
    ],
  },

  // 5: B Major / G# Minor (5 sharps: F#, C#, G#, D#, A#)
  {
    index: 5,
    key: 'B',
    displayName: 'B Major',
    relativeMinor: 'G#m',
    enharmonic: 'Cb',
    accidentalCount: 5,
    accidentalType: 'sharps',
    accidentals: ['F#', 'C#', 'G#', 'D#', 'A#'],
    scaleNotes: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
    diatonicChords: [
      { degree: 'I', chord: 'B', name: 'B Major', quality: 'major', function: 'Tonic (Home / Resolved)', guitarFrets: [-1, 2, 4, 4, 4, 2] },
      { degree: 'ii', chord: 'C#m', name: 'C# Minor', quality: 'minor', function: 'Supertonic (Pre-Dominant)', guitarFrets: [-1, 4, 6, 6, 5, 4] },
      { degree: 'iii', chord: 'D#m', name: 'D# Minor', quality: 'minor', function: 'Mediant (Tonic Substitute)', guitarFrets: [-1, 6, 8, 8, 7, 6] },
      { degree: 'IV', chord: 'E', name: 'E Major', quality: 'major', function: 'Subdominant (Lift / Motion)', guitarFrets: [0, 2, 2, 1, 0, 0] },
      { degree: 'V', chord: 'F#', name: 'F# Major', quality: 'major', function: 'Dominant (Maximum Pull to Home)', guitarFrets: [2, 4, 4, 3, 2, 2] },
      { degree: 'vi', chord: 'G#m', name: 'G# Minor', quality: 'minor', function: 'Submediant (Relative Minor)', guitarFrets: [4, 6, 6, 4, 4, 4] },
      { degree: 'vii°', chord: 'A#dim', name: 'A# Diminished', quality: 'diminished', function: 'Leading Tone (Tension)', guitarFrets: [-1, 1, 2, 3, 2, -1] },
    ],
    cadences: [
      { name: 'Authentic Cadence', degrees: ['I', 'IV', 'V', 'I'], chords: ['B', 'E', 'F#', 'B'], description: 'Bright, piercing electric guitar cadence.' },
      { name: 'Pop 4-Chord Loop', degrees: ['I', 'V', 'vi', 'IV'], chords: ['B', 'F#', 'G#m', 'E'], description: 'Lush modern pop and alternative loop.' },
      { name: '50s Doo-Wop Loop', degrees: ['I', 'vi', 'IV', 'V'], chords: ['B', 'G#m', 'E', 'F#'], description: 'Smooth ballad structure.' },
      { name: 'Jazz ii-V-I', degrees: ['ii', 'V', 'I'], chords: ['C#m', 'F#', 'B'], description: 'Modal and fusion jazz favorite.' },
    ],
    modulations: [
      { targetKey: 'G#m', relationship: 'Relative Minor', pivotChord: 'D#7', progression: ['B', 'E', 'D#7', 'G#m'], explanation: 'D#7 provides the Fx leading tone to G# minor.' },
      { targetKey: 'F#', relationship: 'Dominant (+1 Fifth)', pivotChord: 'C#7', progression: ['B', 'G#m', 'C#7', 'F#'], explanation: 'Modulate to F# Major via C#7.' },
      { targetKey: 'E', relationship: 'Subdominant (-1 Fifth)', pivotChord: 'B7', progression: ['B', 'E', 'B7', 'E'], explanation: 'Turn B into B7 to resolve to E Major.' },
      { targetKey: 'Bm', relationship: 'Parallel Minor', pivotChord: 'F#7', progression: ['B', 'E', 'F#7', 'Bm'], explanation: 'Shift from bright B Major to moody B Minor.' },
    ],
    borrowedChords: [
      { degree: '♭VII', chord: 'A', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Classic rock lift', guitarFrets: [-1, 0, 2, 2, 2, 0], progressionContext: ['B', 'A', 'E', 'B'], famousSongs: ['Wanted Dead or Alive'] },
      { degree: '♭VI', chord: 'G', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Heroic cinematic lift', guitarFrets: [3, 2, 0, 0, 3, 3], progressionContext: ['B', 'G', 'A', 'B'], famousSongs: ['Behind Blue Eyes'] },
      { degree: '♭III', chord: 'D', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Heavy blues crunch', guitarFrets: [-1, -1, 0, 2, 3, 2], progressionContext: ['B', 'D', 'E', 'B'], famousSongs: ['Paranoid'] },
      { degree: 'iv', chord: 'Em', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Intense sadness', guitarFrets: [0, 2, 2, 0, 0, 0], progressionContext: ['B', 'E', 'Em', 'B'], famousSongs: ['Tears in Heaven'] },
    ],
  },

  // 6: F# Major / D# Minor (6 sharps / 6 flats Gb)
  {
    index: 6,
    key: 'F#',
    displayName: 'F# / G♭ Major',
    relativeMinor: 'D#m / E♭m',
    enharmonic: 'Gb',
    accidentalCount: 6,
    accidentalType: 'sharps',
    accidentals: ['F#', 'C#', 'G#', 'D#', 'A#', 'E#'],
    scaleNotes: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
    diatonicChords: [
      { degree: 'I', chord: 'F#', name: 'F# Major', quality: 'major', function: 'Tonic (Home / Resolved)', guitarFrets: [2, 4, 4, 3, 2, 2] },
      { degree: 'ii', chord: 'G#m', name: 'G# Minor', quality: 'minor', function: 'Supertonic (Pre-Dominant)', guitarFrets: [4, 6, 6, 4, 4, 4] },
      { degree: 'iii', chord: 'A#m', name: 'A# Minor', quality: 'minor', function: 'Mediant (Tonic Substitute)', guitarFrets: [-1, 1, 3, 3, 2, 1] },
      { degree: 'IV', chord: 'B', name: 'B Major', quality: 'major', function: 'Subdominant (Lift / Motion)', guitarFrets: [-1, 2, 4, 4, 4, 2] },
      { degree: 'V', chord: 'C#', name: 'C# Major', quality: 'major', function: 'Dominant (Maximum Pull to Home)', guitarFrets: [-1, 4, 6, 6, 6, 4] },
      { degree: 'vi', chord: 'D#m', name: 'D# Minor', quality: 'minor', function: 'Submediant (Relative Minor)', guitarFrets: [-1, 6, 8, 8, 7, 6] },
      { degree: 'vii°', chord: 'E#dim', name: 'E# Diminished', quality: 'diminished', function: 'Leading Tone (Tension)', guitarFrets: [1, 2, 3, -1, -1, -1] },
    ],
    cadences: [
      { name: 'Authentic Cadence', degrees: ['I', 'IV', 'V', 'I'], chords: ['F#', 'B', 'C#', 'F#'], description: 'The antipodal key at the bottom of the circle.' },
      { name: 'Pop 4-Chord Loop', degrees: ['I', 'V', 'vi', 'IV'], chords: ['F#', 'C#', 'D#m', 'B'], description: 'Warm, modern pop-rock anthem key.' },
      { name: '50s Doo-Wop Loop', degrees: ['I', 'vi', 'IV', 'V'], chords: ['F#', 'D#m', 'B', 'C#'], description: 'Harmonic ballad loop.' },
      { name: 'Jazz ii-V-I', degrees: ['ii', 'V', 'I'], chords: ['G#m', 'C#', 'F#'], description: 'Gospel and R&B staple cadence.' },
    ],
    modulations: [
      { targetKey: 'D#m', relationship: 'Relative Minor', pivotChord: 'A#7', progression: ['F#', 'B', 'A#7', 'D#m'], explanation: 'A#7 provides the leading tone into D# minor.' },
      { targetKey: 'C#', relationship: 'Dominant (+1 Fifth)', pivotChord: 'G#7', progression: ['F#', 'D#m', 'G#7', 'C#'], explanation: 'Modulate to C# Major via G#7.' },
      { targetKey: 'B', relationship: 'Subdominant (-1 Fifth)', pivotChord: 'F#7', progression: ['F#', 'B', 'F#7', 'B'], explanation: 'Add E natural to F# to resolve to B Major.' },
      { targetKey: 'F#m', relationship: 'Parallel Minor', pivotChord: 'C#7', progression: ['F#', 'B', 'C#7', 'F#m'], explanation: 'Parallel shift into F# Minor.' },
    ],
    borrowedChords: [
      { degree: '♭VII', chord: 'E', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Classic rock lift', guitarFrets: [0, 2, 2, 1, 0, 0], progressionContext: ['F#', 'E', 'B', 'F#'], famousSongs: ['Jump'] },
      { degree: '♭VI', chord: 'D', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Epic cinematic lift', guitarFrets: [-1, -1, 0, 2, 3, 2], progressionContext: ['F#', 'D', 'E', 'F#'], famousSongs: ['Learn to Fly'] },
      { degree: '♭III', chord: 'A', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Blues crunch', guitarFrets: [-1, 0, 2, 2, 2, 0], progressionContext: ['F#', 'A', 'B', 'F#'], famousSongs: ['Black Hole Sun'] },
      { degree: 'iv', chord: 'Bm', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Melancholy ache', guitarFrets: [-1, 2, 4, 4, 3, 2], progressionContext: ['F#', 'B', 'Bm', 'F#'], famousSongs: ['God Only Knows'] },
    ],
  },

  // 7: Db Major / Bb Minor (5 flats)
  {
    index: 7,
    key: 'Db',
    displayName: 'D♭ / C# Major',
    relativeMinor: 'Bbm',
    enharmonic: 'C#',
    accidentalCount: -5,
    accidentalType: 'flats',
    accidentals: ['Bb', 'Eb', 'Ab', 'Db', 'Gb'],
    scaleNotes: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
    diatonicChords: [
      { degree: 'I', chord: 'Db', name: 'Db Major', quality: 'major', function: 'Tonic (Home / Resolved)', guitarFrets: [-1, 4, 6, 6, 6, 4] },
      { degree: 'ii', chord: 'Ebm', name: 'Eb Minor', quality: 'minor', function: 'Supertonic (Pre-Dominant)', guitarFrets: [-1, 6, 8, 8, 7, 6] },
      { degree: 'iii', chord: 'Fm', name: 'F Minor', quality: 'minor', function: 'Mediant (Tonic Substitute)', guitarFrets: [1, 3, 3, 1, 1, 1] },
      { degree: 'IV', chord: 'Gb', name: 'Gb Major', quality: 'major', function: 'Subdominant (Lift / Motion)', guitarFrets: [2, 4, 4, 3, 2, 2] },
      { degree: 'V', chord: 'Ab', name: 'Ab Major', quality: 'major', function: 'Dominant (Maximum Pull to Home)', guitarFrets: [4, 6, 6, 5, 4, 4] },
      { degree: 'vi', chord: 'Bbm', name: 'Bb Minor', quality: 'minor', function: 'Submediant (Relative Minor)', guitarFrets: [-1, 1, 3, 3, 2, 1] },
      { degree: 'vii°', chord: 'Cdim', name: 'C Diminished', quality: 'diminished', function: 'Leading Tone (Tension)', guitarFrets: [-1, 3, 4, 5, 4, -1] },
    ],
    cadences: [
      { name: 'Authentic Cadence', degrees: ['I', 'IV', 'V', 'I'], chords: ['Db', 'Gb', 'Ab', 'Db'], description: 'Lush, warm R&B and piano-driven cadence.' },
      { name: 'Pop 4-Chord Loop', degrees: ['I', 'V', 'vi', 'IV'], chords: ['Db', 'Ab', 'Bbm', 'Gb'], description: 'Emotional modern pop loop in flat keys.' },
      { name: '50s Doo-Wop Loop', degrees: ['I', 'vi', 'IV', 'V'], chords: ['Db', 'Bbm', 'Gb', 'Ab'], description: 'Soul ballad loop.' },
      { name: 'Jazz ii-V-I', degrees: ['ii', 'V', 'I'], chords: ['Ebm', 'Ab', 'Db'], description: 'Silky smooth jazz standard cadence.' },
    ],
    modulations: [
      { targetKey: 'Bbm', relationship: 'Relative Minor', pivotChord: 'F7', progression: ['Db', 'Gb', 'F7', 'Bbm'], explanation: 'F7 introduces A natural as the leading tone to Bb minor.' },
      { targetKey: 'Ab', relationship: 'Dominant (+1 Fifth)', pivotChord: 'Eb7', progression: ['Db', 'Bbm', 'Eb7', 'Ab'], explanation: 'Modulate clockwise to Ab Major via Eb7.' },
      { targetKey: 'Gb', relationship: 'Subdominant (-1 Fifth)', pivotChord: 'Db7', progression: ['Db', 'Gb', 'Db7', 'Gb'], explanation: 'Add B double-flat (B) to Db to resolve to Gb Major.' },
      { targetKey: 'Dbm', relationship: 'Parallel Minor', pivotChord: 'Ab7', progression: ['Db', 'Gb', 'Ab7', 'Dbm'], explanation: 'Parallel shift into Db Minor (C# Minor).' },
    ],
    borrowedChords: [
      { degree: '♭VII', chord: 'B', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Rock drive', guitarFrets: [-1, 2, 4, 4, 4, 2], progressionContext: ['Db', 'B', 'Gb', 'Db'], famousSongs: ['Everlong'] },
      { degree: '♭VI', chord: 'A', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Cinematic drama', guitarFrets: [-1, 0, 2, 2, 2, 0], progressionContext: ['Db', 'A', 'B', 'Db'], famousSongs: ['Life on Mars'] },
      { degree: '♭III', chord: 'E', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Blues power', guitarFrets: [0, 2, 2, 1, 0, 0], progressionContext: ['Db', 'E', 'Gb', 'Db'], famousSongs: ['Cliffs of Dover'] },
      { degree: 'iv', chord: 'Gbm', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Romantic yearning', guitarFrets: [2, 4, 4, 2, 2, 2], progressionContext: ['Db', 'Gb', 'Gbm', 'Db'], famousSongs: ['If I Ain\'t Got You'] },
    ],
  },

  // 8: Ab Major / F Minor (4 flats)
  {
    index: 8,
    key: 'Ab',
    displayName: 'A♭ Major',
    relativeMinor: 'Fm',
    accidentalCount: -4,
    accidentalType: 'flats',
    accidentals: ['Bb', 'Eb', 'Ab', 'Db'],
    scaleNotes: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
    diatonicChords: [
      { degree: 'I', chord: 'Ab', name: 'Ab Major', quality: 'major', function: 'Tonic (Home / Resolved)', guitarFrets: [4, 6, 6, 5, 4, 4] },
      { degree: 'ii', chord: 'Bbm', name: 'Bb Minor', quality: 'minor', function: 'Supertonic (Pre-Dominant)', guitarFrets: [-1, 1, 3, 3, 2, 1] },
      { degree: 'iii', chord: 'Cm', name: 'C Minor', quality: 'minor', function: 'Mediant (Tonic Substitute)', guitarFrets: [-1, 3, 5, 5, 4, 3] },
      { degree: 'IV', chord: 'Db', name: 'Db Major', quality: 'major', function: 'Subdominant (Lift / Motion)', guitarFrets: [-1, 4, 6, 6, 6, 4] },
      { degree: 'V', chord: 'Eb', name: 'Eb Major', quality: 'major', function: 'Dominant (Maximum Pull to Home)', guitarFrets: [-1, 6, 8, 8, 8, 6] },
      { degree: 'vi', chord: 'Fm', name: 'F Minor', quality: 'minor', function: 'Submediant (Relative Minor)', guitarFrets: [1, 3, 3, 1, 1, 1] },
      { degree: 'vii°', chord: 'Gdim', name: 'G Diminished', quality: 'diminished', function: 'Leading Tone (Tension)', guitarFrets: [3, 4, 5, -1, -1, -1] },
    ],
    cadences: [
      { name: 'Authentic Cadence', degrees: ['I', 'IV', 'V', 'I'], chords: ['Ab', 'Db', 'Eb', 'Ab'], description: 'Velvety soul, funk, and gospel cadence.' },
      { name: 'Pop 4-Chord Loop', degrees: ['I', 'V', 'vi', 'IV'], chords: ['Ab', 'Eb', 'Fm', 'Db'], description: 'Rich emotional pop loop.' },
      { name: '50s Doo-Wop Loop', degrees: ['I', 'vi', 'IV', 'V'], chords: ['Ab', 'Fm', 'Db', 'Eb'], description: 'Motown and doo-wop standard.' },
      { name: 'Jazz ii-V-I', degrees: ['ii', 'V', 'I'], chords: ['Bbm', 'Eb', 'Ab'], description: 'Classic jazz ballad turnaround.' },
    ],
    modulations: [
      { targetKey: 'Fm', relationship: 'Relative Minor', pivotChord: 'C7', progression: ['Ab', 'Db', 'C7', 'Fm'], explanation: 'C7 introduces E natural as leading tone to F minor.' },
      { targetKey: 'Eb', relationship: 'Dominant (+1 Fifth)', pivotChord: 'Bb7', progression: ['Ab', 'Fm', 'Bb7', 'Eb'], explanation: 'Modulate to Eb Major via Bb7.' },
      { targetKey: 'Db', relationship: 'Subdominant (-1 Fifth)', pivotChord: 'Ab7', progression: ['Ab', 'Db', 'Ab7', 'Db'], explanation: 'Turn Ab into Ab7 to resolve into Db Major.' },
      { targetKey: 'Abm', relationship: 'Parallel Minor', pivotChord: 'Eb7', progression: ['Ab', 'Db', 'Eb7', 'Abm'], explanation: 'Parallel shift from Ab Major into Ab Minor.' },
    ],
    borrowedChords: [
      { degree: '♭VII', chord: 'Gb', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Soul-rock swagger', guitarFrets: [2, 4, 4, 3, 2, 2], progressionContext: ['Ab', 'Gb', 'Db', 'Ab'], famousSongs: ['Superstition'] },
      { degree: '♭VI', chord: 'Fb (E)', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Cinematic drama', guitarFrets: [0, 2, 2, 1, 0, 0], progressionContext: ['Ab', 'E', 'Gb', 'Ab'], famousSongs: ['Sir Duke'] },
      { degree: '♭III', chord: 'Cb (B)', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Blues grit', guitarFrets: [-1, 2, 4, 4, 4, 2], progressionContext: ['Ab', 'B', 'Db', 'Ab'], famousSongs: ['Higher Ground'] },
      { degree: 'iv', chord: 'Dbm', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Heartbreaking ache', guitarFrets: [-1, 4, 6, 6, 5, 4], progressionContext: ['Ab', 'Db', 'Dbm', 'Ab'], famousSongs: ['Yesterday'] },
    ],
  },

  // 9: Eb Major / C Minor (3 flats)
  {
    index: 9,
    key: 'Eb',
    displayName: 'E♭ Major',
    relativeMinor: 'Cm',
    accidentalCount: -3,
    accidentalType: 'flats',
    accidentals: ['Bb', 'Eb', 'Ab'],
    scaleNotes: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
    diatonicChords: [
      { degree: 'I', chord: 'Eb', name: 'Eb Major', quality: 'major', function: 'Tonic (Home / Resolved)', guitarFrets: [-1, 6, 8, 8, 8, 6] },
      { degree: 'ii', chord: 'Fm', name: 'F Minor', quality: 'minor', function: 'Supertonic (Pre-Dominant)', guitarFrets: [1, 3, 3, 1, 1, 1] },
      { degree: 'iii', chord: 'Gm', name: 'G Minor', quality: 'minor', function: 'Mediant (Tonic Substitute)', guitarFrets: [3, 5, 5, 3, 3, 3] },
      { degree: 'IV', chord: 'Ab', name: 'Ab Major', quality: 'major', function: 'Subdominant (Lift / Motion)', guitarFrets: [4, 6, 6, 5, 4, 4] },
      { degree: 'V', chord: 'Bb', name: 'Bb Major', quality: 'major', function: 'Dominant (Maximum Pull to Home)', guitarFrets: [-1, 1, 3, 3, 3, 1] },
      { degree: 'vi', chord: 'Cm', name: 'C Minor', quality: 'minor', function: 'Submediant (Relative Minor)', guitarFrets: [-1, 3, 5, 5, 4, 3] },
      { degree: 'vii°', chord: 'Ddim', name: 'D Diminished', quality: 'diminished', function: 'Leading Tone (Tension)', guitarFrets: [-1, -1, 0, 1, 3, 1] },
    ],
    cadences: [
      { name: 'Authentic Cadence', degrees: ['I', 'IV', 'V', 'I'], chords: ['Eb', 'Ab', 'Bb', 'Eb'], description: 'The grand orchestral and brass powerhouse key.' },
      { name: 'Pop 4-Chord Loop', degrees: ['I', 'V', 'vi', 'IV'], chords: ['Eb', 'Bb', 'Cm', 'Ab'], description: 'Huge anthemic modern pop progression.' },
      { name: '50s Doo-Wop Loop', degrees: ['I', 'vi', 'IV', 'V'], chords: ['Eb', 'Cm', 'Ab', 'Bb'], description: 'Smooth vintage ballad standard.' },
      { name: 'Jazz ii-V-I', degrees: ['ii', 'V', 'I'], chords: ['Fm', 'Bb', 'Eb'], description: 'The absolute standard jazz saxophone and guitar cadence.' },
    ],
    modulations: [
      { targetKey: 'Cm', relationship: 'Relative Minor', pivotChord: 'G7', progression: ['Eb', 'Ab', 'G7', 'Cm'], explanation: 'G7 introduces B natural to resolve to C minor.' },
      { targetKey: 'Bb', relationship: 'Dominant (+1 Fifth)', pivotChord: 'F7', progression: ['Eb', 'Cm', 'F7', 'Bb'], explanation: 'Modulate clockwise to Bb Major via F7.' },
      { targetKey: 'Ab', relationship: 'Subdominant (-1 Fifth)', pivotChord: 'Eb7', progression: ['Eb', 'Ab', 'Eb7', 'Ab'], explanation: 'Turn Eb into Eb7 to resolve to Ab Major.' },
      { targetKey: 'Ebm', relationship: 'Parallel Minor', pivotChord: 'Bb7', progression: ['Eb', 'Ab', 'Bb7', 'Ebm'], explanation: 'Parallel shift into Eb Minor (signature Jimi Hendrix / SRV tuning key).' },
    ],
    borrowedChords: [
      { degree: '♭VII', chord: 'Db', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Bold rock stride', guitarFrets: [-1, 4, 6, 6, 6, 4], progressionContext: ['Eb', 'Db', 'Ab', 'Eb'], famousSongs: ['The Pretender'] },
      { degree: '♭VI', chord: 'B', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Cinematic shock', guitarFrets: [-1, 2, 4, 4, 4, 2], progressionContext: ['Eb', 'B', 'Db', 'Eb'], famousSongs: ['Star Wars Imperial March'] },
      { degree: '♭III', chord: 'Gb', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Deep blues power', guitarFrets: [2, 4, 4, 3, 2, 2], progressionContext: ['Eb', 'Gb', 'Ab', 'Eb'], famousSongs: ['Voodoo Child'] },
      { degree: 'iv', chord: 'Abm', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Romantic heartbreak', guitarFrets: [4, 6, 6, 4, 4, 4], progressionContext: ['Eb', 'Ab', 'Abm', 'Eb'], famousSongs: ['My Way'] },
    ],
  },

  // 10: Bb Major / G Minor (2 flats)
  {
    index: 10,
    key: 'Bb',
    displayName: 'B♭ Major',
    relativeMinor: 'Gm',
    accidentalCount: -2,
    accidentalType: 'flats',
    accidentals: ['Bb', 'Eb'],
    scaleNotes: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    diatonicChords: [
      { degree: 'I', chord: 'Bb', name: 'Bb Major', quality: 'major', function: 'Tonic (Home / Resolved)', guitarFrets: [-1, 1, 3, 3, 3, 1] },
      { degree: 'ii', chord: 'Cm', name: 'C Minor', quality: 'minor', function: 'Supertonic (Pre-Dominant)', guitarFrets: [-1, 3, 5, 5, 4, 3] },
      { degree: 'iii', chord: 'Dm', name: 'D Minor', quality: 'minor', function: 'Mediant (Tonic Substitute)', guitarFrets: [-1, -1, 0, 2, 3, 1] },
      { degree: 'IV', chord: 'Eb', name: 'Eb Major', quality: 'major', function: 'Subdominant (Lift / Motion)', guitarFrets: [-1, 6, 8, 8, 8, 6] },
      { degree: 'V', chord: 'F', name: 'F Major', quality: 'major', function: 'Dominant (Maximum Pull to Home)', guitarFrets: [1, 3, 3, 2, 1, 1] },
      { degree: 'vi', chord: 'Gm', name: 'G Minor', quality: 'minor', function: 'Submediant (Relative Minor)', guitarFrets: [3, 5, 5, 3, 3, 3] },
      { degree: 'vii°', chord: 'Adim', name: 'A Diminished', quality: 'diminished', function: 'Leading Tone (Tension)', guitarFrets: [-1, 0, 1, 2, 1, -1] },
    ],
    cadences: [
      { name: 'Authentic Cadence', degrees: ['I', 'IV', 'V', 'I'], chords: ['Bb', 'Eb', 'F', 'Bb'], description: 'The quintessential trumpet, blues, and jazz cadence.' },
      { name: 'Pop 4-Chord Loop', degrees: ['I', 'V', 'vi', 'IV'], chords: ['Bb', 'F', 'Gm', 'Eb'], description: 'Huge arena pop anthem progression.' },
      { name: '50s Doo-Wop Loop', degrees: ['I', 'vi', 'IV', 'V'], chords: ['Bb', 'Gm', 'Eb', 'F'], description: 'Smooth vintage doo-wop standard.' },
      { name: 'Jazz ii-V-I', degrees: ['ii', 'V', 'I'], chords: ['Cm', 'F', 'Bb'], description: 'The most played ii-V-I in the Great American Songbook.' },
    ],
    modulations: [
      { targetKey: 'Gm', relationship: 'Relative Minor', pivotChord: 'D7', progression: ['Bb', 'Eb', 'D7', 'Gm'], explanation: 'D7 introduces F# leading tone into G minor.' },
      { targetKey: 'F', relationship: 'Dominant (+1 Fifth)', pivotChord: 'C7', progression: ['Bb', 'Gm', 'C7', 'F'], explanation: 'Modulate to F Major using C7.' },
      { targetKey: 'Eb', relationship: 'Subdominant (-1 Fifth)', pivotChord: 'Bb7', progression: ['Bb', 'Eb', 'Bb7', 'Eb'], explanation: 'Turn Bb into dominant Bb7 to resolve to Eb Major.' },
      { targetKey: 'Bbm', relationship: 'Parallel Minor', pivotChord: 'F7', progression: ['Bb', 'Eb', 'F7', 'Bbm'], explanation: 'Dramatic shift from Bb Major into Bb Minor.' },
    ],
    borrowedChords: [
      { degree: '♭VII', chord: 'Ab', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Soulful rock swagger', guitarFrets: [4, 6, 6, 5, 4, 4], progressionContext: ['Bb', 'Ab', 'Eb', 'Bb'], famousSongs: ['Fortunate Son'] },
      { degree: '♭VI', chord: 'Gb', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Cinematic wonder', guitarFrets: [2, 4, 4, 3, 2, 2], progressionContext: ['Bb', 'Gb', 'Ab', 'Bb'], famousSongs: ['Bohemian Rhapsody'] },
      { degree: '♭III', chord: 'Db', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Heavy blues crunch', guitarFrets: [-1, 4, 6, 6, 6, 4], progressionContext: ['Bb', 'Db', 'Eb', 'Bb'], famousSongs: ['Whole Lotta Love'] },
      { degree: 'iv', chord: 'Ebm', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Tender sorrow', guitarFrets: [-1, 6, 8, 8, 7, 6], progressionContext: ['Bb', 'Eb', 'Ebm', 'Bb'], famousSongs: ['She\'s Leaving Home'] },
    ],
  },

  // 11: F Major / D Minor (1 flat)
  {
    index: 11,
    key: 'F',
    displayName: 'F Major',
    relativeMinor: 'Dm',
    accidentalCount: -1,
    accidentalType: 'flats',
    accidentals: ['Bb'],
    scaleNotes: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
    diatonicChords: [
      { degree: 'I', chord: 'F', name: 'F Major', quality: 'major', function: 'Tonic (Home / Resolved)', guitarFrets: [1, 3, 3, 2, 1, 1] },
      { degree: 'ii', chord: 'Gm', name: 'G Minor', quality: 'minor', function: 'Supertonic (Pre-Dominant)', guitarFrets: [3, 5, 5, 3, 3, 3] },
      { degree: 'iii', chord: 'Am', name: 'A Minor', quality: 'minor', function: 'Mediant (Tonic Substitute)', guitarFrets: [-1, 0, 2, 2, 1, 0] },
      { degree: 'IV', chord: 'Bb', name: 'Bb Major', quality: 'major', function: 'Subdominant (Lift / Motion)', guitarFrets: [-1, 1, 3, 3, 3, 1] },
      { degree: 'V', chord: 'C', name: 'C Major', quality: 'major', function: 'Dominant (Maximum Pull to Home)', guitarFrets: [-1, 3, 2, 0, 1, 0] },
      { degree: 'vi', chord: 'Dm', name: 'D Minor', quality: 'minor', function: 'Submediant (Relative Minor)', guitarFrets: [-1, -1, 0, 2, 3, 1] },
      { degree: 'vii°', chord: 'Edim', name: 'E Diminished', quality: 'diminished', function: 'Leading Tone (Tension)', guitarFrets: [0, 1, 2, 0, -1, -1] },
    ],
    cadences: [
      { name: 'Authentic Cadence', degrees: ['I', 'IV', 'V', 'I'], chords: ['F', 'Bb', 'C', 'F'], description: 'Rich, open acoustic and folk cadence.' },
      { name: 'Pop 4-Chord Loop', degrees: ['I', 'V', 'vi', 'IV'], chords: ['F', 'C', 'Dm', 'Bb'], description: 'Endlessly popular radio ballad loop.' },
      { name: '50s Doo-Wop Loop', degrees: ['I', 'vi', 'IV', 'V'], chords: ['F', 'Dm', 'Bb', 'C'], description: 'Classic 1950s rock and roll love song progression.' },
      { name: 'Jazz ii-V-I', degrees: ['ii', 'V', 'I'], chords: ['Gm', 'C', 'F'], description: 'Standard blues-jazz turnaround.' },
    ],
    modulations: [
      { targetKey: 'Dm', relationship: 'Relative Minor', pivotChord: 'A7', progression: ['F', 'Bb', 'A7', 'Dm'], explanation: 'A7 introduces C# leading tone straight into D minor.' },
      { targetKey: 'C', relationship: 'Dominant (+1 Fifth)', pivotChord: 'G7', progression: ['F', 'Dm', 'G7', 'C'], explanation: 'Modulate back home to C Major via G7.' },
      { targetKey: 'Bb', relationship: 'Subdominant (-1 Fifth)', pivotChord: 'F7', progression: ['F', 'Bb', 'F7', 'Bb'], explanation: 'Add Eb to F to resolve into Bb Major.' },
      { targetKey: 'Fm', relationship: 'Parallel Minor', pivotChord: 'C7', progression: ['F', 'Bb', 'C7', 'Fm'], explanation: 'Plunge from bright F Major into sombre F Minor.' },
    ],
    borrowedChords: [
      { degree: '♭VII', chord: 'Eb', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Classic rock lift', guitarFrets: [-1, 6, 8, 8, 8, 6], progressionContext: ['F', 'Eb', 'Bb', 'F'], famousSongs: ['Born This Way'] },
      { degree: '♭VI', chord: 'Db', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Cinematic drama', guitarFrets: [-1, 4, 6, 6, 6, 4], progressionContext: ['F', 'Db', 'Eb', 'F'], famousSongs: ['Karma Police'] },
      { degree: '♭III', chord: 'Ab', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Heavy blues crunch', guitarFrets: [4, 6, 6, 5, 4, 4], progressionContext: ['F', 'Ab', 'Bb', 'F'], famousSongs: ['Sunshine of Your Love'] },
      { degree: 'iv', chord: 'Bbm', sourceMode: 'Aeolian (Parallel Minor)', mood: 'Emotional tear-jerker', guitarFrets: [-1, 1, 3, 3, 2, 1], progressionContext: ['F', 'Bb', 'Bbm', 'F'], famousSongs: ['In My Life'] },
    ],
  },
];

/**
 * Retrieves key data by root name (e.g. 'C', 'G', 'F#', 'Gb') or index (0-11).
 */
export function getCircleKey(keyOrIndex: string | number): CircleKeyData {
  if (typeof keyOrIndex === 'number') {
    const safeIdx = ((keyOrIndex % 12) + 12) % 12;
    return CIRCLE_OF_FIFTHS_DATA[safeIdx];
  }

  const query = keyOrIndex.trim().toUpperCase();
  const direct = CIRCLE_OF_FIFTHS_DATA.find(k => k.key.toUpperCase() === query || k.enharmonic?.toUpperCase() === query);
  if (direct) return direct;

  const minorMatch = CIRCLE_OF_FIFTHS_DATA.find(k => k.relativeMinor.toUpperCase() === query);
  if (minorMatch) return minorMatch;

  return CIRCLE_OF_FIFTHS_DATA[0]; // Default C
}

/**
 * Returns all 12 circle key items in order from C clockwise.
 */
export function getAllCircleKeys(): CircleKeyData[] {
  return CIRCLE_OF_FIFTHS_DATA;
}

