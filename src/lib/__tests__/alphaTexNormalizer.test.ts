import { describe, it, expect } from 'vitest';
import { normalizeAlphaTex } from '../alphaTexNormalizer';
import * as alphaTab from '@coderline/alphatab';

describe('alphaTexNormalizer', () => {
  it('should inject tempo metadata when tempo is provided', () => {
    const raw = ':2 (12.6 14.5 14.4) (12.6 14.5 14.4) |';
    const result = normalizeAlphaTex(raw, 116);
    expect(result.startsWith('\\tempo 116 . ')).toBe(true);
  });

  it('should not duplicate tempo metadata if already present', () => {
    const raw = '\\tempo 116 . :2 (12.6 14.5 14.4) (12.6 14.5 14.4) |';
    const result = normalizeAlphaTex(raw, 120);
    expect(result.startsWith('\\tempo 116 . ')).toBe(true);
  });

  it('should normalize unparenthesized repeated power chords into balanced half-note chords', () => {
    const raw = '12.6 14.5 14.4 12.6 14.5 14.4 | 17.6 19.5 19.4 17.6 19.5 19.4 |';
    const result = normalizeAlphaTex(raw);
    expect(result).toContain('(12.6 14.5 14.4)');
    expect(result).toContain('(17.6 19.5 19.4)');

    const score = alphaTab.importer.ScoreLoader.loadAlphaTex(result);
    score.finish(new alphaTab.Settings());
    score.masterBars.forEach((mb, i) => {
      const voiceDur = score.tracks[0].staves[0].bars[i].voices[0].calculateDuration();
      expect(mb.calculateDuration()).toBe(voiceDur);
    });
  });

  it('should normalize unparenthesized 6-string chords into balanced half-note chords', () => {
    const raw = '9.6 11.5 11.4 10.3 9.2 9.1 | 14.6 16.5 16.4 15.3 14.2 14.1 |';
    const result = normalizeAlphaTex(raw);
    expect(result).toContain('(9.6 11.5 11.4 10.3 9.2 9.1)');

    const score = alphaTab.importer.ScoreLoader.loadAlphaTex(result);
    score.finish(new alphaTab.Settings());
    score.masterBars.forEach((mb, i) => {
      const voiceDur = score.tracks[0].staves[0].bars[i].voices[0].calculateDuration();
      expect(mb.calculateDuration()).toBe(voiceDur);
    });
  });

  it('should balance 6-note scale exercises by setting a 6/4 time signature', () => {
    const raw = '3.6 5.6 2.5 5.5 2.4 5.4 | 2.3 4.3 3.2 5.2 3.1 5.1 |';
    const result = normalizeAlphaTex(raw);
    expect(result).toContain('\\ts 6 4');

    const score = alphaTab.importer.ScoreLoader.loadAlphaTex(result);
    score.finish(new alphaTab.Settings());
    score.masterBars.forEach((mb, i) => {
      const voiceDur = score.tracks[0].staves[0].bars[i].voices[0].calculateDuration();
      expect(mb.calculateDuration()).toBe(voiceDur);
    });
  });

  it('should reset duration state with :4 across barlines when switching from half notes', () => {
    const raw = ':2 (0.4 2.3 3.2) (0.4 2.3 3.2) | 3.5 5.4 5.3 3.5 |';
    const result = normalizeAlphaTex(raw);
    expect(result).toContain(':4 3.5 5.4 5.3 3.5');

    const score = alphaTab.importer.ScoreLoader.loadAlphaTex(result);
    score.finish(new alphaTab.Settings());
    score.masterBars.forEach((mb, i) => {
      const voiceDur = score.tracks[0].staves[0].bars[i].voices[0].calculateDuration();
      expect(mb.calculateDuration()).toBe(voiceDur);
    });
  });

  it('should balance 3-note bars in 4/4 meter by extending the final note to a half note', () => {
    const raw = '12.4 10.4 12.4 |';
    const result = normalizeAlphaTex(raw);
    expect(result).toContain('12.4.2');

    const score = alphaTab.importer.ScoreLoader.loadAlphaTex(result);
    score.finish(new alphaTab.Settings());
    score.masterBars.forEach((mb, i) => {
      const voiceDur = score.tracks[0].staves[0].bars[i].voices[0].calculateDuration();
      expect(mb.calculateDuration()).toBe(voiceDur);
    });
  });

  it('should correctly format For Those About to Rock full progression', () => {
    const originalFtatr = '12.6 14.5 14.4 12.6 14.5 14.4 | 17.6 19.5 19.4 17.6 19.5 19.4 | 19.6 21.5 21.4 19.6 21.5 21.4 | 12.6 14.5 14.4 12.6 14.5 14.4 |';
    const normalized = normalizeAlphaTex(originalFtatr, 116);
    expect(normalized).toContain('\\tempo 116 .');

    const score = alphaTab.importer.ScoreLoader.loadAlphaTex(normalized);
    score.finish(new alphaTab.Settings());
    expect(score.masterBars.length).toBe(4);
    score.masterBars.forEach((mb, i) => {
      const voiceDur = score.tracks[0].staves[0].bars[i].voices[0].calculateDuration();
      expect(mb.calculateDuration()).toBe(3840);
      expect(voiceDur).toBe(3840);
    });
  });
  it('should auto-bar unbarred scale runs into balanced 4/4 measures', () => {
    const rawMajorScale = '3.6 5.6 7.6 2.5 3.5 5.5 2.4 4.4 5.4 2.3 4.3 5.3 1.2 3.2 5.2 1.1 3.1';
    const normalized = normalizeAlphaTex(rawMajorScale);
    expect(normalized).toContain('|');
    expect(normalized).toContain(':4');

    const score = alphaTab.importer.ScoreLoader.loadAlphaTex(normalized);
    score.finish(new alphaTab.Settings());
    expect(score.masterBars.length).toBe(5);
    score.masterBars.forEach((mb, i) => {
      const voiceDur = score.tracks[0].staves[0].bars[i].voices[0].calculateDuration();
      expect(mb.calculateDuration()).toBe(3840);
      expect(voiceDur).toBe(3840);
    });
  });
});
