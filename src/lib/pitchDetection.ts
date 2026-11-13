/**
 * Real-Time Audio Pitch Detection & Frequency Analysis Engine for MusicScene
 * Uses autocorrelation with parabolic interpolation for accurate guitar pitch detection.
 */

export const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const;

export type NoteName = typeof NOTE_NAMES[number];

export interface PitchResult {
  freq: number;
  midiNumber: number;
  roundedMidi: number;
  cents: number;
  noteName: NoteName;
  octave: number;
  scientificName: string;
}

/**
 * Autocorrelation algorithm with quadratic interpolation
 * Estimates fundamental frequency (f0) of audio signal in buffer.
 * Returns -1 if signal is too quiet or no clear periodic pitch is detected.
 */
export function autoCorrelate(
  buffer: Float32Array,
  sampleRate: number,
  minRms = 0.012
): number {
  const size = buffer.length;
  let rms = 0;

  for (let i = 0; i < size; i++) {
    const val = buffer[i];
    rms += val * val;
  }
  rms = Math.sqrt(rms / size);

  // Signal is too quiet
  if (rms < minRms) {
    return -1;
  }

  // Clip buffer to focus on active signal
  let r1 = 0;
  let r2 = size - 1;
  const thres = 0.2;
  for (let i = 0; i < size / 2; i++) {
    if (Math.abs(buffer[i]) < thres) {
      r1 = i;
      break;
    }
  }
  for (let i = 1; i < size / 2; i++) {
    if (Math.abs(buffer[size - i]) < thres) {
      r2 = size - i;
      break;
    }
  }

  const trimmed = buffer.subarray(r1, r2);
  const trimmedSize = trimmed.length;
  if (trimmedSize < 64) {
    return -1;
  }

  // Correlation buffer
  const c = new Float32Array(trimmedSize);
  for (let i = 0; i < trimmedSize; i++) {
    for (let j = 0; j < trimmedSize - i; j++) {
      c[i] += trimmed[j] * trimmed[j + i];
    }
  }

  // Find first peak after first trough
  let d = 0;
  while (d < trimmedSize - 1 && c[d] > c[d + 1]) {
    d++;
  }
  if (d >= trimmedSize - 1) return -1;

  let maxval = -1;
  let maxpos = -1;
  for (let i = d; i < trimmedSize; i++) {
    if (c[i] > maxval) {
      maxval = c[i];
      maxpos = i;
    }
  }

  if (maxpos <= 0 || maxpos >= trimmedSize - 1) {
    return -1;
  }

  let T0 = maxpos;

  // Parabolic interpolation for sub-sample accuracy
  const x1 = c[T0 - 1];
  const x2 = c[T0];
  const x3 = c[T0 + 1];
  const a = (x1 + x3 - 2 * x2) / 2;
  const b = (x3 - x1) / 2;
  if (a !== 0) {
    T0 = T0 - b / (2 * a);
  }

  if (T0 <= 0) return -1;

  return sampleRate / T0;
}

/**
 * Calculates MIDI pitch number, note name, octave, and cents offset from frequency.
 */
export function frequencyToPitch(freq: number, a4 = 440): PitchResult {
  const midiNumber = 69 + 12 * Math.log2(freq / a4);
  const roundedMidi = Math.round(midiNumber);
  const noteIndex = ((roundedMidi % 12) + 12) % 12;
  const noteName = NOTE_NAMES[noteIndex];
  const octave = Math.floor(roundedMidi / 12) - 1;
  const cents = Math.round((midiNumber - roundedMidi) * 100);

  return {
    freq: Math.round(freq * 10) / 10,
    midiNumber,
    roundedMidi,
    cents,
    noteName,
    octave,
    scientificName: `${noteName}${octave}`,
  };
}

/**
 * Converts a MIDI note number to its pitch details.
 */
export function midiToPitch(midi: number): {
  noteName: NoteName;
  octave: number;
  scientificName: string;
  pitchClass: number;
} {
  const rounded = Math.round(midi);
  const pitchClass = ((rounded % 12) + 12) % 12;
  const noteName = NOTE_NAMES[pitchClass];
  const octave = Math.floor(rounded / 12) - 1;

  return {
    noteName,
    octave,
    scientificName: `${noteName}${octave}`,
    pitchClass,
  };
}

/**
 * Checks if two MIDI values share the same pitch class (e.g. C2 matches C4).
 */
export function pitchClassMatch(midi1: number, midi2: number): boolean {
  return ((Math.round(midi1) % 12) + 12) % 12 === ((Math.round(midi2) % 12) + 12) % 12;
}

/**
 * Checks if two MIDI values match the exact pitch and octave.
 */
export function exactPitchMatch(midi1: number, midi2: number): boolean {
  return Math.round(midi1) === Math.round(midi2);
}
