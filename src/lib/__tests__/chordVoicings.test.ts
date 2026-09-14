import { describe, it, expect } from 'vitest';
import { getChordShape, normalizeChordName, getActualFretNumbers, CHORD_SHAPES } from '../chordVoicings';

describe('chordVoicings', () => {
  it('normalizes song chord names correctly', () => {
    expect(normalizeChordName('A(add9)')).toBe('Aadd9');
    expect(normalizeChordName('B(add9)')).toBe('Badd9');
    expect(normalizeChordName('E5(harmonics)')).toBe('E5');
    expect(normalizeChordName('C_major')).toBe('C');
    expect(normalizeChordName('A_minor')).toBe('Am');
    expect(normalizeChordName('C_major_7')).toBe('Cmaj7');
    expect(normalizeChordName('A_minor_7')).toBe('Am7');
    expect(normalizeChordName('[CHORD1]')).toBe('CHORD1');
  });

  it('retrieves accurate chord shapes for core song chords', () => {
    // Slash chords
    const dfSharp = getChordShape('D/F#');
    expect(dfSharp.frets).toEqual([2, 0, 0, 2, 3, 2]);

    const cg = getChordShape('C/G');
    expect(cg.frets).toEqual([3, 3, 2, 0, 1, 0]);

    const gb = getChordShape('G/B');
    expect(gb.frets).toEqual([-1, 2, 0, 0, 3, 3]);

    // Hendrix chord
    const hendrix = getChordShape('E7#9');
    expect(hendrix.baseFret).toBe(6);
    expect(hendrix.frets).toEqual([0, 2, 1, 2, 3, -1]);

    // Suspended
    const dsus4 = getChordShape('Dsus4');
    expect(dsus4.frets).toEqual([-1, -1, 0, 2, 3, 3]);

    // Add9
    const cadd9 = getChordShape('Cadd9');
    expect(cadd9.frets).toEqual([-1, 3, 2, 0, 3, 3]);
  });

  it('computes actual fret numbers for audio synthesis when baseFret > 1', () => {
    const cSharpMinor = getChordShape('C#m');
    expect(cSharpMinor.baseFret).toBe(4);
    // diagram frets: [-1, 1, 3, 3, 2, 1] relative to fret 4
    // actual neck frets: [-1, 4, 6, 6, 5, 4]
    const actual = getActualFretNumbers(cSharpMinor);
    expect(actual).toEqual([-1, 4, 6, 6, 5, 4]);
  });

  it('preserves open strings when baseFret > 1', () => {
    const hendrix = getChordShape('E7#9');
    expect(hendrix.baseFret).toBe(6);
    // diagram frets: [0, 2, 1, 2, 3, -1] -> Low E is open (0), 5th string is fret 2 + (6-1) = 7
    const actual = getActualFretNumbers(hendrix);
    expect(actual[0]).toBe(0); // Open string stays 0
    expect(actual[1]).toBe(7); // 2 + 5 = 7
    expect(actual[2]).toBe(6); // 1 + 5 = 6
    expect(actual[3]).toBe(7); // 2 + 5 = 7
    expect(actual[4]).toBe(8); // 3 + 5 = 8
    expect(actual[5]).toBe(-1); // Muted
  });

  it('resolves all 89 song chords without crashing', () => {
    const songChords = [
      'A', 'A(add9)', 'A5', 'A7', 'A7sus4', 'Ab', 'Am', 'Am7', 'Amaj7', 'Asus4',
      'B', 'B(add9)', 'B5', 'B7', 'Bb', 'Bb5', 'Bb6', 'Bb7', 'Bdim', 'Bm',
      'C', 'C#5', 'C#dim', 'C#m', 'C#m(add9)', 'C#m7', 'C/G', 'C5', 'C7', 'C9',
      'Cadd9', 'Cb', 'Cm', 'Cmaj7', 'Csus4', 'D', 'D#5', 'D#dim', 'D/F#', 'D5',
      'D6/9', 'D7', 'D7#9', 'D9', 'Db', 'Db5', 'Dm', 'Dsus4', 'E', 'E+/G#',
      'E5', 'E5(harmonics)', 'E7', 'E7#9', 'Eb', 'Eb+', 'Eb5', 'Eb7#9', 'Ebm', 'Em',
      'Em/D', 'Em7', 'Emaj7', 'F', 'F#', 'F#5', 'F#7', 'F#dim', 'F#m', 'F#m(add9)',
      'F5', 'Fm', 'Fmaj7', 'Fsus4', 'G', 'G#aug/G#', 'G#m', 'G/B', 'G13', 'G5',
      'G5/B', 'G6', 'G7', 'G9', 'Gb', 'Gm'
    ];

    songChords.forEach(chord => {
      const shape = getChordShape(chord);
      expect(shape).toBeDefined();
      expect(shape.frets.length).toBe(6);
      const actualFrets = getActualFretNumbers(shape);
      expect(actualFrets.length).toBe(6);
    });
  });
});
