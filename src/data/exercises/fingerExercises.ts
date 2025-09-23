// Simple interface for finger exercises
interface Position {
  string: number;
  fret: number;
  finger: number;
  rightHand: string;
}

interface Measure {
  timeSignature?: string;
  positions: Position[];
  beamGroups?: number[][];
}

interface ExerciseData {
  id: string;
  title: string;
  description: string;
  bpm: number;
  measures: Measure[];
}

export const fingerExercises: ExerciseData[] = [
  {
    id: "exercise-1",
    title: "Exercise 1: String Crossing Pattern",
    description: "Practice this exercise using alternate picking (i-m) to develop string crossing technique.",
    bpm: 80,
    measures: [
      {
        timeSignature: "4/4",
        positions: [
          { string: 5, fret: 3, finger: 2, rightHand: 'i' },
          { string: 4, fret: 5, finger: 4, rightHand: 'm' },
          { string: 5, fret: 2, finger: 1, rightHand: 'i' },
          { string: 4, fret: 5, finger: 4, rightHand: 'm' },
          { string: 5, fret: 2, finger: 1, rightHand: 'i' },
          { string: 4, fret: 5, finger: 4, rightHand: 'm' },
          { string: 5, fret: 3, finger: 2, rightHand: 'i' },
          { string: 4, fret: 5, finger: 4, rightHand: 'm' },
        ],
        beamGroups: [[0, 1, 2, 3], [4, 5, 6, 7]]
      },
      {
        positions: [
          { string: 4, fret: 3, finger: 2, rightHand: 'i' },
          { string: 3, fret: 5, finger: 4, rightHand: 'm' },
          { string: 4, fret: 2, finger: 1, rightHand: 'i' },
          { string: 3, fret: 5, finger: 4, rightHand: 'm' },
          { string: 4, fret: 2, finger: 1, rightHand: 'i' },
          { string: 3, fret: 5, finger: 4, rightHand: 'm' },
          { string: 4, fret: 3, finger: 2, rightHand: 'i' },
          { string: 3, fret: 5, finger: 4, rightHand: 'm' },
        ],
        beamGroups: [[0, 1, 2, 3], [4, 5, 6, 7]]
      },
      {
        positions: [
          { string: 3, fret: 2, finger: 1, rightHand: 'i' },
          { string: 2, fret: 5, finger: 4, rightHand: 'm' },
          { string: 3, fret: 2, finger: 1, rightHand: 'i' },
          { string: 2, fret: 5, finger: 4, rightHand: 'm' },
          { string: 3, fret: 2, finger: 1, rightHand: 'i' },
          { string: 2, fret: 5, finger: 4, rightHand: 'm' },
          { string: 3, fret: 2, finger: 1, rightHand: 'i' },
          { string: 2, fret: 5, finger: 4, rightHand: 'm' },
        ],
        beamGroups: [[0, 1, 2, 3], [4, 5, 6, 7]]
      },
      {
        positions: [
          { string: 2, fret: 3, finger: 2, rightHand: 'i' },
          { string: 1, fret: 5, finger: 4, rightHand: 'm' },
          { string: 2, fret: 3, finger: 2, rightHand: 'i' },
          { string: 1, fret: 5, finger: 4, rightHand: 'm' },
          { string: 2, fret: 3, finger: 2, rightHand: 'i' },
          { string: 1, fret: 5, finger: 4, rightHand: 'm' },
          { string: 2, fret: 3, finger: 2, rightHand: 'i' },
          { string: 1, fret: 5, finger: 4, rightHand: 'm' },
        ],
        beamGroups: [[0, 1, 2, 3], [4, 5, 6, 7]]
      }
    ]
  },
  {
    id: "exercise-2",
    title: "Exercise 2: Finger Independence Pattern",
    description: "This exercise helps develop independence between fingers 1 and 3.",
    bpm: 70,
    measures: [
      {
        timeSignature: "4/4",
        positions: [
          { string: 6, fret: 1, finger: 1, rightHand: 'i' },
          { string: 6, fret: 3, finger: 3, rightHand: 'm' },
          { string: 5, fret: 1, finger: 1, rightHand: 'i' },
          { string: 5, fret: 3, finger: 3, rightHand: 'm' },
          { string: 4, fret: 1, finger: 1, rightHand: 'i' },
          { string: 4, fret: 3, finger: 3, rightHand: 'm' },
          { string: 3, fret: 1, finger: 1, rightHand: 'i' },
          { string: 3, fret: 3, finger: 3, rightHand: 'm' },
        ],
        beamGroups: [[0, 1, 2, 3], [4, 5, 6, 7]]
      },
      {
        positions: [
          { string: 2, fret: 1, finger: 1, rightHand: 'i' },
          { string: 2, fret: 3, finger: 3, rightHand: 'm' },
          { string: 1, fret: 1, finger: 1, rightHand: 'i' },
          { string: 1, fret: 3, finger: 3, rightHand: 'm' },
          { string: 1, fret: 1, finger: 1, rightHand: 'i' },
          { string: 1, fret: 3, finger: 3, rightHand: 'm' },
          { string: 2, fret: 1, finger: 1, rightHand: 'i' },
          { string: 2, fret: 3, finger: 3, rightHand: 'm' },
        ],
        beamGroups: [[0, 1, 2, 3], [4, 5, 6, 7]]
      }
    ]
  },
  {
    id: "exercise-3",
    title: "Exercise 3: 1-2-3-4 Finger Pattern",
    description: "This classic exercise develops coordination between all four fretting fingers.",
    bpm: 60,
    measures: [
      {
        timeSignature: "4/4",
        positions: [
          { string: 6, fret: 1, finger: 1, rightHand: 'i' },
          { string: 6, fret: 2, finger: 2, rightHand: 'm' },
          { string: 6, fret: 3, finger: 3, rightHand: 'i' },
          { string: 6, fret: 4, finger: 4, rightHand: 'm' },
          { string: 5, fret: 1, finger: 1, rightHand: 'i' },
          { string: 5, fret: 2, finger: 2, rightHand: 'm' },
          { string: 5, fret: 3, finger: 3, rightHand: 'i' },
          { string: 5, fret: 4, finger: 4, rightHand: 'm' },
        ],
        beamGroups: [[0, 1, 2, 3], [4, 5, 6, 7]]
      },
      {
        positions: [
          { string: 4, fret: 1, finger: 1, rightHand: 'i' },
          { string: 4, fret: 2, finger: 2, rightHand: 'm' },
          { string: 4, fret: 3, finger: 3, rightHand: 'i' },
          { string: 4, fret: 4, finger: 4, rightHand: 'm' },
          { string: 3, fret: 1, finger: 1, rightHand: 'i' },
          { string: 3, fret: 2, finger: 2, rightHand: 'm' },
          { string: 3, fret: 3, finger: 3, rightHand: 'i' },
          { string: 3, fret: 4, finger: 4, rightHand: 'm' },
        ],
        beamGroups: [[0, 1, 2, 3], [4, 5, 6, 7]]
      },
      {
        positions: [
          { string: 2, fret: 1, finger: 1, rightHand: 'i' },
          { string: 2, fret: 2, finger: 2, rightHand: 'm' },
          { string: 2, fret: 3, finger: 3, rightHand: 'i' },
          { string: 2, fret: 4, finger: 4, rightHand: 'm' },
          { string: 1, fret: 1, finger: 1, rightHand: 'i' },
          { string: 1, fret: 2, finger: 2, rightHand: 'm' },
          { string: 1, fret: 3, finger: 3, rightHand: 'i' },
          { string: 1, fret: 4, finger: 4, rightHand: 'm' },
        ],
        beamGroups: [[0, 1, 2, 3], [4, 5, 6, 7]]
      }
    ]
  }
];
