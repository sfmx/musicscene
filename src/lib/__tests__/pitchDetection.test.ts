import { describe, it, expect } from 'vitest';
import {
  autoCorrelate,
  frequencyToPitch,
  midiToPitch,
  pitchClassMatch,
  exactPitchMatch,
  NOTE_NAMES,
} from '../pitchDetection';

describe('pitchDetection', () => {
  describe('frequencyToPitch', () => {
    it('correctly maps 440 Hz to A4 at 0 cents deviation', () => {
      const pitch = frequencyToPitch(440);
      expect(pitch.noteName).toBe('A');
      expect(pitch.octave).toBe(4);
      expect(pitch.scientificName).toBe('A4');
      expect(pitch.roundedMidi).toBe(69);
      expect(pitch.cents).toBe(0);
    });

    it('correctly maps guitar open strings', () => {
      // E2 (Low E ~82.41 Hz)
      const e2 = frequencyToPitch(82.41);
      expect(e2.noteName).toBe('E');
      expect(e2.octave).toBe(2);
      expect(e2.roundedMidi).toBe(40);

      // A2 (~110 Hz)
      const a2 = frequencyToPitch(110.0);
      expect(a2.noteName).toBe('A');
      expect(a2.octave).toBe(2);
      expect(a2.roundedMidi).toBe(45);

      // D3 (~146.83 Hz)
      const d3 = frequencyToPitch(146.83);
      expect(d3.noteName).toBe('D');
      expect(d3.octave).toBe(3);
      expect(d3.roundedMidi).toBe(50);

      // G3 (~196 Hz)
      const g3 = frequencyToPitch(196.0);
      expect(g3.noteName).toBe('G');
      expect(g3.octave).toBe(3);
      expect(g3.roundedMidi).toBe(55);

      // B3 (~246.94 Hz)
      const b3 = frequencyToPitch(246.94);
      expect(b3.noteName).toBe('B');
      expect(b3.octave).toBe(3);
      expect(b3.roundedMidi).toBe(59);

      // E4 (High E ~329.63 Hz)
      const e4 = frequencyToPitch(329.63);
      expect(e4.noteName).toBe('E');
      expect(e4.octave).toBe(4);
      expect(e4.roundedMidi).toBe(64);
    });
  });

  describe('midiToPitch', () => {
    it('correctly returns note and octave info for MIDI numbers', () => {
      expect(midiToPitch(40)).toEqual({
        noteName: 'E',
        octave: 2,
        scientificName: 'E2',
        pitchClass: 4,
      });

      expect(midiToPitch(48)).toEqual({
        noteName: 'C',
        octave: 3,
        scientificName: 'C3',
        pitchClass: 0,
      });

      expect(midiToPitch(69)).toEqual({
        noteName: 'A',
        octave: 4,
        scientificName: 'A4',
        pitchClass: 9,
      });
    });
  });

  describe('pitchClassMatch and exactPitchMatch', () => {
    it('matches pitch classes regardless of octave', () => {
      // E2 (40) and E4 (64) share pitch class E
      expect(pitchClassMatch(40, 64)).toBe(true);
      // C3 (48) and C4 (60)
      expect(pitchClassMatch(48, 60)).toBe(true);
      // E2 (40) and G2 (43) do not match
      expect(pitchClassMatch(40, 43)).toBe(false);
    });

    it('validates exact pitch matches with octave', () => {
      expect(exactPitchMatch(40, 40)).toBe(true);
      expect(exactPitchMatch(40, 40.2)).toBe(true); // rounds to 40
      expect(exactPitchMatch(40, 64)).toBe(false); // different octaves
    });
  });

  describe('autoCorrelate', () => {
    it('returns -1 on silence or low RMS', () => {
      const silentBuffer = new Float32Array(2048);
      expect(autoCorrelate(silentBuffer, 44100)).toBe(-1);
    });

    it('accurately identifies synthetic sine frequencies', () => {
      const sampleRate = 44100;
      const testCases = [
        { freq: 82.41, tolerance: 0.2 }, // Low E
        { freq: 110.0, tolerance: 0.15 }, // A
        { freq: 146.83, tolerance: 0.15 }, // D
        { freq: 196.0, tolerance: 0.15 }, // G
        { freq: 246.94, tolerance: 0.15 }, // B
        { freq: 329.63, tolerance: 0.15 }, // High E
        { freq: 440.0, tolerance: 0.1 }, // Concert A
      ];

      for (const { freq, tolerance } of testCases) {
        const buffer = new Float32Array(2048);
        for (let i = 0; i < 2048; i++) {
          buffer[i] = Math.sin((2 * Math.PI * freq * i) / sampleRate) * 0.8;
        }
        const detected = autoCorrelate(buffer, sampleRate);
        expect(Math.abs(detected - freq)).toBeLessThan(tolerance);
      }
    });
  });
});
