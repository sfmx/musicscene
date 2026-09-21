import { describe, it, expect } from 'vitest';
import {
  CIRCLE_OF_FIFTHS_DATA,
  getCircleKey,
  getAllCircleKeys,
} from '../circleOfFifthsData';

describe('Circle of Fifths Data Engine', () => {
  it('contains exactly 12 keys representing the full chromatic circle', () => {
    const keys = getAllCircleKeys();
    expect(keys).toHaveLength(12);
    expect(CIRCLE_OF_FIFTHS_DATA).toHaveLength(12);
  });

  it('verifies C major key signature and diatonic chords', () => {
    const cKey = getCircleKey('C');
    expect(cKey.key).toBe('C');
    expect(cKey.relativeMinor).toBe('Am');
    expect(cKey.accidentalCount).toBe(0);
    expect(cKey.accidentals).toHaveLength(0);
    expect(cKey.scaleNotes).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B']);

    // Check 7 diatonic chords
    expect(cKey.diatonicChords).toHaveLength(7);
    expect(cKey.diatonicChords.map(c => c.chord)).toEqual([
      'C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'
    ]);

    // Check chord guitar frets validity
    cKey.diatonicChords.forEach(chord => {
      expect(chord.guitarFrets).toHaveLength(6);
      expect(chord.guitarFrets.some(f => f >= 0)).toBe(true);
    });
  });

  it('verifies clockwise progression increases sharps', () => {
    const gKey = getCircleKey(1);
    expect(gKey.key).toBe('G');
    expect(gKey.relativeMinor).toBe('Em');
    expect(gKey.accidentalCount).toBe(1);
    expect(gKey.accidentals).toEqual(['F#']);

    const dKey = getCircleKey(2);
    expect(dKey.key).toBe('D');
    expect(dKey.relativeMinor).toBe('Bm');
    expect(dKey.accidentalCount).toBe(2);
    expect(dKey.accidentals).toEqual(['F#', 'C#']);

    const aKey = getCircleKey(3);
    expect(aKey.key).toBe('A');
    expect(aKey.accidentalCount).toBe(3);
    expect(aKey.accidentals).toEqual(['F#', 'C#', 'G#']);
  });

  it('verifies counter-clockwise progression increases flats', () => {
    const fKey = getCircleKey(11);
    expect(fKey.key).toBe('F');
    expect(fKey.relativeMinor).toBe('Dm');
    expect(fKey.accidentalCount).toBe(-1);
    expect(fKey.accidentals).toEqual(['Bb']);

    const bbKey = getCircleKey(10);
    expect(bbKey.key).toBe('Bb');
    expect(bbKey.accidentalCount).toBe(-2);
    expect(bbKey.accidentals).toEqual(['Bb', 'Eb']);

    const ebKey = getCircleKey(9);
    expect(ebKey.key).toBe('Eb');
    expect(ebKey.accidentalCount).toBe(-3);
  });

  it('provides complete cadences, modulations, and borrowed chords for every key', () => {
    CIRCLE_OF_FIFTHS_DATA.forEach(keyData => {
      expect(keyData.cadences.length).toBeGreaterThanOrEqual(4);
      expect(keyData.modulations.length).toBeGreaterThanOrEqual(4);
      expect(keyData.borrowedChords.length).toBe(4);

      // Verify borrowed chord degrees (♭VII, ♭VI, ♭III, iv)
      const degrees = keyData.borrowedChords.map(b => b.degree);
      expect(degrees).toEqual(['♭VII', '♭VI', '♭III', 'iv']);

      keyData.borrowedChords.forEach(borrowed => {
        expect(borrowed.guitarFrets).toHaveLength(6);
        expect(borrowed.famousSongs.length).toBeGreaterThan(0);
      });
    });
  });

  it('retrieves keys correctly by relative minor name', () => {
    const cFromAm = getCircleKey('Am');
    expect(cFromAm.key).toBe('C');

    const gFromEm = getCircleKey('Em');
    expect(gFromEm.key).toBe('G');

    const dFromBm = getCircleKey('Bm');
    expect(dFromBm.key).toBe('D');
  });
});

