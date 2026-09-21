import { describe, it, expect } from 'vitest';
import {
  INTERVALS_DATA,
  CHORD_QUALITIES_DATA,
  getIntervalBySemitones,
  getChordQualityById,
  getIntervalsForDifficulty,
  getChordQualitiesForDifficulty,
} from '../earTrainingData';

describe('Ear Training Data Engine', () => {
  it('defines all 12 chromatic intervals up to octave', () => {
    expect(INTERVALS_DATA).toHaveLength(12);
    const semitones = INTERVALS_DATA.map(i => i.semitones);
    expect(semitones).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it('verifies iconic song mnemonics for critical intervals', () => {
    const p5 = getIntervalBySemitones(7);
    expect(p5?.name).toBe('Perfect 5th');
    expect(p5?.mnemonicAscending).toContain('Star Wars');

    const tritone = getIntervalBySemitones(6);
    expect(tritone?.shortName).toBe('TT');
    expect(tritone?.mnemonicAscending).toContain('The Simpsons');

    const m3 = getIntervalBySemitones(3);
    expect(m3?.name).toBe('Minor 3rd');
    expect(m3?.mnemonicAscending).toContain('Smoke on the Water');

    const octave = getIntervalBySemitones(12);
    expect(octave?.name).toBe('Octave');
    expect(octave?.mnemonicAscending).toContain('Somewhere Over the Rainbow');
  });

  it('filters intervals accurately by difficulty tier', () => {
    const beginner = getIntervalsForDifficulty('beginner');
    expect(beginner.length).toBeGreaterThanOrEqual(4);
    expect(beginner.every(i => i.difficulty === 'beginner')).toBe(true);

    const intermediate = getIntervalsForDifficulty('intermediate');
    expect(intermediate.length).toBeGreaterThan(beginner.length);

    const advanced = getIntervalsForDifficulty('advanced');
    expect(advanced).toHaveLength(12);
  });

  it('verifies chord qualities formulas and moods', () => {
    expect(CHORD_QUALITIES_DATA).toHaveLength(7);

    const major = getChordQualityById('major');
    expect(major?.intervals).toEqual([0, 4, 7]);
    expect(major?.formula).toBe('1 - 3 - 5');

    const minor = getChordQualityById('minor');
    expect(minor?.intervals).toEqual([0, 3, 7]);
    expect(minor?.formula).toBe('1 - ♭3 - 5');

    const dominant7 = getChordQualityById('dominant7');
    expect(dominant7?.intervals).toEqual([0, 4, 7, 10]);

    const major7 = getChordQualityById('major7');
    expect(major7?.intervals).toEqual([0, 4, 7, 11]);

    const minor7 = getChordQualityById('minor7');
    expect(minor7?.intervals).toEqual([0, 3, 7, 10]);
  });

  it('filters chord qualities by difficulty tier', () => {
    const beginner = getChordQualitiesForDifficulty('beginner');
    expect(beginner.map(c => c.id)).toEqual(['major', 'minor']);

    const intermediate = getChordQualitiesForDifficulty('intermediate');
    expect(intermediate.map(c => c.id)).toContain('diminished');
    expect(intermediate.map(c => c.id)).toContain('dominant7');

    const advanced = getChordQualitiesForDifficulty('advanced');
    expect(advanced).toHaveLength(7);
  });
});

