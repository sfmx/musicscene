/**
 * Rhythm Sight-Reading Trainer Data & Models
 * Provides progressive rhythmic patterns, scoring criteria, and timing calculations for MusicScene.
 */

export interface RhythmNote {
  id: string;
  beat: number; // 1-indexed beat in 4/4 measure (e.g. 1.0, 2.5, 3.0)
  durationBeats: number; // 4 = whole, 2 = half, 1 = quarter, 0.5 = eighth, 0.25 = sixteenth, 1.5 = dotted quarter
  isRest: boolean;
  name: string; // e.g. "Quarter Note", "Eighth Rest"
  syllable: string; // "1", "&", "2", "e", "&", "a"
}

export interface RhythmPattern {
  id: string;
  title: string;
  level: number;
  levelName: string;
  timeSignature: '4/4';
  totalBeats: number;
  description: string;
  notes: RhythmNote[];
  recommendedBpm: number;
}

export type HitRating = 'perfect' | 'good' | 'early' | 'late' | 'miss' | 'extra';

export interface HitEvaluation {
  rating: HitRating;
  deltaMs: number;
  score: number;
  label: string;
}

/**
 * Evaluates the timing difference in milliseconds between a user tap and the target note.
 */
export function evaluateRhythmTap(deltaMs: number): HitEvaluation {
  const absDelta = Math.abs(deltaMs);

  if (absDelta <= 45) {
    return { rating: 'perfect', deltaMs, score: 100, label: 'PERFECT!' };
  } else if (absDelta <= 95) {
    return { rating: 'good', deltaMs, score: 75, label: deltaMs < 0 ? 'GOOD (Early)' : 'GOOD (Late)' };
  } else if (absDelta <= 165) {
    if (deltaMs < 0) {
      return { rating: 'early', deltaMs, score: 40, label: 'EARLY' };
    } else {
      return { rating: 'late', deltaMs, score: 40, label: 'LATE' };
    }
  }

  return { rating: 'miss', deltaMs, score: 0, label: 'MISS' };
}

/**
 * Library of progressive rhythm patterns across 5 skill levels.
 */
export const RHYTHM_PATTERNS: RhythmPattern[] = [
  // Level 1: Core Quarter and Half Notes
  {
    id: 'l1-four-quarters',
    title: '1. Four on the Floor (Quarter Notes)',
    level: 1,
    levelName: 'Quarter & Half Notes',
    timeSignature: '4/4',
    totalBeats: 4,
    recommendedBpm: 75,
    description: 'The heartbeat of music. Four solid quarter note pulses counted 1 - 2 - 3 - 4.',
    notes: [
      { id: 'n1', beat: 1.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '1' },
      { id: 'n2', beat: 2.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '2' },
      { id: 'n3', beat: 3.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '3' },
      { id: 'n4', beat: 4.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '4' },
    ],
  },
  {
    id: 'l1-half-quarters',
    title: '2. Half Note Foundation',
    level: 1,
    levelName: 'Quarter & Half Notes',
    timeSignature: '4/4',
    totalBeats: 4,
    recommendedBpm: 75,
    description: 'A 2-beat half note on beat 1 held through beat 2, followed by two quarter notes.',
    notes: [
      { id: 'n1', beat: 1.0, durationBeats: 2.0, isRest: false, name: 'Half Note', syllable: '1 (hold 2)' },
      { id: 'n2', beat: 3.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '3' },
      { id: 'n3', beat: 4.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '4' },
    ],
  },
  {
    id: 'l1-two-halves',
    title: '3. Two Half Notes',
    level: 1,
    levelName: 'Quarter & Half Notes',
    timeSignature: '4/4',
    totalBeats: 4,
    recommendedBpm: 75,
    description: 'Two 2-beat half notes striking on beat 1 and beat 3.',
    notes: [
      { id: 'n1', beat: 1.0, durationBeats: 2.0, isRest: false, name: 'Half Note', syllable: '1 (hold 2)' },
      { id: 'n2', beat: 3.0, durationBeats: 2.0, isRest: false, name: 'Half Note', syllable: '3 (hold 4)' },
    ],
  },

  // Level 2: Eighth-Note Subdivisions (1 & 2 & 3 & 4 &)
  {
    id: 'l2-straight-eighths',
    title: '4. Straight Eighths Pulse',
    level: 2,
    levelName: 'Eighth Notes',
    timeSignature: '4/4',
    totalBeats: 4,
    recommendedBpm: 70,
    description: 'Eight steady pulses dividing each quarter note into two equal halves (1 & 2 & 3 & 4 &).',
    notes: [
      { id: 'n1', beat: 1.0, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '1' },
      { id: 'n2', beat: 1.5, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '&' },
      { id: 'n3', beat: 2.0, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '2' },
      { id: 'n4', beat: 2.5, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '&' },
      { id: 'n5', beat: 3.0, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '3' },
      { id: 'n6', beat: 3.5, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '&' },
      { id: 'n7', beat: 4.0, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '4' },
      { id: 'n8', beat: 4.5, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '&' },
    ],
  },
  {
    id: 'l2-quarter-eighth-mix',
    title: '5. Quarter & Eighth Combo',
    level: 2,
    levelName: 'Eighth Notes',
    timeSignature: '4/4',
    totalBeats: 4,
    recommendedBpm: 75,
    description: 'Quarter on 1, pair of eighths on 2, quarter on 3, pair of eighths on 4.',
    notes: [
      { id: 'n1', beat: 1.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '1' },
      { id: 'n2', beat: 2.0, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '2' },
      { id: 'n3', beat: 2.5, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '&' },
      { id: 'n4', beat: 3.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '3' },
      { id: 'n5', beat: 4.0, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '4' },
      { id: 'n6', beat: 4.5, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '&' },
    ],
  },

  // Level 3: Rests & Syncopation
  {
    id: 'l3-backbeat-rests',
    title: '6. Backbeat Hits (Rest on 1 & 3)',
    level: 3,
    levelName: 'Rests & Syncopation',
    timeSignature: '4/4',
    totalBeats: 4,
    recommendedBpm: 75,
    description: 'Rest on downbeats 1 and 3; strike cleanly on beats 2 and 4 (the classic snare backbeat).',
    notes: [
      { id: 'n1', beat: 1.0, durationBeats: 1.0, isRest: true, name: 'Quarter Rest', syllable: '(rest)' },
      { id: 'n2', beat: 2.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '2' },
      { id: 'n3', beat: 3.0, durationBeats: 1.0, isRest: true, name: 'Quarter Rest', syllable: '(rest)' },
      { id: 'n4', beat: 4.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '4' },
    ],
  },
  {
    id: 'l3-offbeat-upbeats',
    title: '7. Ska & Reggae Upbeats',
    level: 3,
    levelName: 'Rests & Syncopation',
    timeSignature: '4/4',
    totalBeats: 4,
    recommendedBpm: 70,
    description: 'Eighth rest on the numbers, striking exclusively on the "&" upbeats.',
    notes: [
      { id: 'n1', beat: 1.0, durationBeats: 0.5, isRest: true, name: 'Eighth Rest', syllable: '(rest)' },
      { id: 'n2', beat: 1.5, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '&' },
      { id: 'n3', beat: 2.0, durationBeats: 0.5, isRest: true, name: 'Eighth Rest', syllable: '(rest)' },
      { id: 'n4', beat: 2.5, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '&' },
      { id: 'n5', beat: 3.0, durationBeats: 0.5, isRest: true, name: 'Eighth Rest', syllable: '(rest)' },
      { id: 'n6', beat: 3.5, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '&' },
      { id: 'n7', beat: 4.0, durationBeats: 0.5, isRest: true, name: 'Eighth Rest', syllable: '(rest)' },
      { id: 'n8', beat: 4.5, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '&' },
    ],
  },

  // Level 4: Dotted Rhythms
  {
    id: 'l4-dotted-quarter',
    title: '8. Dotted Quarter Syncopation',
    level: 4,
    levelName: 'Dotted Notes',
    timeSignature: '4/4',
    totalBeats: 4,
    recommendedBpm: 70,
    description: 'Dotted quarter (1.5 beats) on beat 1, followed by the "&" of beat 2, and two quarters.',
    notes: [
      { id: 'n1', beat: 1.0, durationBeats: 1.5, isRest: false, name: 'Dotted Quarter Note', syllable: '1 (hold &)' },
      { id: 'n2', beat: 2.5, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '&' },
      { id: 'n3', beat: 3.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '3' },
      { id: 'n4', beat: 4.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '4' },
    ],
  },

  // Level 5: Sixteenth-Note Subdivisions (1 e & a)
  {
    id: 'l5-sixteenth-run',
    title: '9. Sixteenth-Note Drive',
    level: 5,
    levelName: 'Sixteenth Notes',
    timeSignature: '4/4',
    totalBeats: 4,
    recommendedBpm: 65,
    description: 'Four sixteenth notes on beat 1 (1 e & a) followed by solid quarter note anchors.',
    notes: [
      { id: 'n1', beat: 1.0, durationBeats: 0.25, isRest: false, name: 'Sixteenth Note', syllable: '1' },
      { id: 'n2', beat: 1.25, durationBeats: 0.25, isRest: false, name: 'Sixteenth Note', syllable: 'e' },
      { id: 'n3', beat: 1.5, durationBeats: 0.25, isRest: false, name: 'Sixteenth Note', syllable: '&' },
      { id: 'n4', beat: 1.75, durationBeats: 0.25, isRest: false, name: 'Sixteenth Note', syllable: 'a' },
      { id: 'n5', beat: 2.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '2' },
      { id: 'n6', beat: 3.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '3' },
      { id: 'n7', beat: 4.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '4' },
    ],
  },
  {
    id: 'l5-gallop-rhythm',
    title: '10. The Rock Gallop (Eighth + Two Sixteenths)',
    level: 5,
    levelName: 'Sixteenth Notes',
    timeSignature: '4/4',
    totalBeats: 4,
    recommendedBpm: 60,
    description: 'Classic heavy rock gallop: one eighth note followed by two sixteenth notes (1 & a, 2 & a).',
    notes: [
      { id: 'n1', beat: 1.0, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '1' },
      { id: 'n2', beat: 1.5, durationBeats: 0.25, isRest: false, name: 'Sixteenth Note', syllable: '&' },
      { id: 'n3', beat: 1.75, durationBeats: 0.25, isRest: false, name: 'Sixteenth Note', syllable: 'a' },
      { id: 'n4', beat: 2.0, durationBeats: 0.5, isRest: false, name: 'Eighth Note', syllable: '2' },
      { id: 'n5', beat: 2.5, durationBeats: 0.25, isRest: false, name: 'Sixteenth Note', syllable: '&' },
      { id: 'n6', beat: 2.75, durationBeats: 0.25, isRest: false, name: 'Sixteenth Note', syllable: 'a' },
      { id: 'n7', beat: 3.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '3' },
      { id: 'n8', beat: 4.0, durationBeats: 1.0, isRest: false, name: 'Quarter Note', syllable: '4' },
    ],
  },
];
