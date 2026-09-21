/**
 * Web Audio Precision Tone & Interval Synthesis for MusicScene
 * Powers interactive ear training quizzes, interval playback, chord quality auditioning,
 * and fretboard frequency generation with realistic acoustic harmonics.
 */

import { getGuitarAudioContext } from '@/lib/guitarAudio';

export interface ToneOptions {
  duration?: number;
  volume?: number;
  timeOffset?: number;
  type?: OscillatorType;
}

/**
 * Synthesizes a clean acoustic-style pitch with warm harmonics and lowpass filtering.
 */
export function playTone(
  frequency: number,
  options: ToneOptions = {}
): void {
  if (frequency <= 0) return;

  const ctx = getGuitarAudioContext();
  if (!ctx) return;

  const duration = options.duration ?? 1.5;
  const volume = Math.min(1, Math.max(0.01, options.volume ?? 0.3));
  const startTime = ctx.currentTime + (options.timeOffset ?? 0);

  try {
    // 1. Resonant lowpass filter to emulate warm acoustic instrument response
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.value = 1.6;
    filter.frequency.setValueAtTime(Math.min(3600, frequency * 6), startTime);
    filter.frequency.exponentialRampToValueAtTime(Math.max(180, frequency * 1.4), startTime + duration * 0.7);

    // 2. Fundamental oscillator (triangle for warmth)
    const osc = ctx.createOscillator();
    osc.type = options.type ?? 'triangle';
    osc.frequency.setValueAtTime(frequency, startTime);

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.0001, startTime);
    oscGain.gain.linearRampToValueAtTime(volume * 0.75, startTime + 0.008);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    filter.connect(oscGain);
    oscGain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);

    // 3. Second harmonic overtone (sine wave an octave higher)
    const harmonicOsc = ctx.createOscillator();
    harmonicOsc.type = 'sine';
    harmonicOsc.frequency.setValueAtTime(frequency * 2, startTime);

    const harmonicGain = ctx.createGain();
    harmonicGain.gain.setValueAtTime(0.0001, startTime);
    harmonicGain.gain.linearRampToValueAtTime(volume * 0.25, startTime + 0.005);
    harmonicGain.gain.exponentialRampToValueAtTime(0.0001, startTime + Math.min(duration, 0.8));

    harmonicOsc.connect(filter);
    harmonicOsc.connect(harmonicGain);
    harmonicGain.connect(ctx.destination);

    harmonicOsc.start(startTime);
    harmonicOsc.stop(startTime + Math.min(duration, 0.8));
  } catch {
    // Graceful fallback if audio context fails or is locked
  }
}

/**
 * Converts standard MIDI note number (0-127) to frequency in Hz (A4 = 69 = 440 Hz).
 */
export function midiToFrequency(midiNumber: number): number {
  return 440 * Math.pow(2, (midiNumber - 69) / 12);
}

/**
 * Synthesizes a note by its MIDI pitch number.
 */
export function playMidiNote(
  midiNumber: number,
  options: ToneOptions = {}
): void {
  const freq = midiToFrequency(midiNumber);
  playTone(freq, options);
}

export interface IntervalPlaybackOptions {
  duration?: number;
  speedMs?: number;
  volume?: number;
}

/**
 * Plays a musical interval in ascending, descending, or harmonic (simultaneous) mode.
 */
export function playIntervalTone(
  rootMidi: number,
  semitones: number,
  mode: 'ascending' | 'descending' | 'harmonic' = 'ascending',
  options: IntervalPlaybackOptions = {}
): void {
  const duration = options.duration ?? 1.5;
  const speedMs = options.speedMs ?? 550;
  const volume = options.volume ?? 0.32;
  const secondMidi = rootMidi + semitones;

  if (mode === 'ascending') {
    playMidiNote(rootMidi, { duration, volume, timeOffset: 0 });
    playMidiNote(secondMidi, { duration, volume, timeOffset: speedMs / 1000 });
  } else if (mode === 'descending') {
    playMidiNote(secondMidi, { duration, volume, timeOffset: 0 });
    playMidiNote(rootMidi, { duration, volume, timeOffset: speedMs / 1000 });
  } else {
    // Harmonic (simultaneous)
    playMidiNote(rootMidi, { duration: duration * 1.3, volume: volume * 0.7, timeOffset: 0 });
    playMidiNote(secondMidi, { duration: duration * 1.3, volume: volume * 0.7, timeOffset: 0 });
  }
}

export interface ChordPlaybackOptions {
  arpeggiate?: boolean;
  speedMs?: number;
  duration?: number;
  volume?: number;
}

/**
 * Plays a chord from an array of MIDI notes, either strummed simultaneously or arpeggiated.
 */
export function playChordTones(
  midiNotes: number[],
  options: ChordPlaybackOptions = {}
): void {
  if (!midiNotes || midiNotes.length === 0) return;

  const duration = options.duration ?? 2.0;
  const volume = options.volume ?? 0.3;
  const arpeggiate = options.arpeggiate ?? false;
  const speedMs = options.speedMs ?? 75;

  midiNotes.forEach((midi, idx) => {
    const timeOffset = arpeggiate ? (idx * speedMs) / 1000 : 0;
    playMidiNote(midi, {
      duration: Math.max(1.0, duration - timeOffset),
      volume: volume * (arpeggiate ? 0.85 : 0.6),
      timeOffset,
    });
  });
}

/**
 * Plays a celebratory victory fanfare chime for successful quiz answers and streaks.
 */
export function playSuccessChime(): void {
  const ctx = getGuitarAudioContext();
  if (!ctx) return;
  // G4 -> B4 -> D5 -> G5 arpeggio
  const notes = [67, 71, 74, 79];
  notes.forEach((midi, idx) => {
    playMidiNote(midi, {
      duration: 0.8,
      volume: 0.22,
      timeOffset: idx * 0.08,
    });
  });
}

/**
 * Plays a subtle low feedback cue for incorrect answers.
 */
export function playErrorBeep(): void {
  const ctx = getGuitarAudioContext();
  if (!ctx) return;
  playMidiNote(50, { duration: 0.35, volume: 0.18, type: 'sawtooth' });
}

