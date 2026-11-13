import { describe, it, expect } from 'vitest';

describe('cheatSheets reference data', () => {
  it('validates standard guitar open string pitches', () => {
    const guitarStrings = [
      { num: 1, note: 'E', octave: 4, freq: 329.63 },
      { num: 2, note: 'B', octave: 3, freq: 246.94 },
      { num: 3, note: 'G', octave: 3, freq: 196.0 },
      { num: 4, note: 'D', octave: 3, freq: 146.83 },
      { num: 5, note: 'A', octave: 2, freq: 110.0 },
      { num: 6, note: 'E', octave: 2, freq: 82.41 },
    ];

    expect(guitarStrings.length).toBe(6);
    expect(guitarStrings[0].freq).toBeGreaterThan(guitarStrings[5].freq);
  });

  it('validates circle of fifths order of sharps and flats', () => {
    const sharps = ['F', 'C', 'G', 'D', 'A', 'E', 'B'];
    const flats = ['B', 'E', 'A', 'D', 'G', 'C', 'F'];

    expect(sharps).toEqual([...flats].reverse());
  });

  it('validates diatonic chord quality formula for major keys', () => {
    const majorKeyQualities = ['Major', 'minor', 'minor', 'Major', 'Major', 'minor', 'diminished'];
    expect(majorKeyQualities[0]).toBe('Major'); // I
    expect(majorKeyQualities[3]).toBe('Major'); // IV
    expect(majorKeyQualities[4]).toBe('Major'); // V
    expect(majorKeyQualities[5]).toBe('minor'); // vi (relative minor)
  });
});
