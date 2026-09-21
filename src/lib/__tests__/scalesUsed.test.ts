import { describe, test, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

const CHROMATIC_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const ENHARMONICS: Record<string, string[]> = {
  'C#': ['Db'],
  'D#': ['Eb'],
  'F#': ['Gb'],
  'G#': ['Ab'],
  'A#': ['Bb'],
  'Db': ['C#'],
  'Eb': ['D#'],
  'Gb': ['F#'],
  'Ab': ['G#'],
  'Bb': ['A#'],
  'B': ['Cb'],
  'Cb': ['B'],
  'E': ['Fb'],
  'Fb': ['E'],
  'C': ['B#'],
  'B#': ['C'],
  'F': ['E#'],
  'E#': ['F']
};

function isNoteMatch(noteA: string, noteB: string): boolean {
  if (!noteA || !noteB) return false;
  if (noteA === noteB) return true;
  const eqA = ENHARMONICS[noteA] || [];
  if (eqA.includes(noteB)) return true;
  const eqB = ENHARMONICS[noteB] || [];
  return eqB.includes(noteA);
}

function parseScaleNotes(notesString: string): string[] {
  const notes = notesString.split(' - ').map(note => {
    const cleaned = note.trim().replace(/♯/g, '#');
    return cleaned;
  });

  const uniqueNotes: string[] = [];
  notes.forEach(note => {
    if (!uniqueNotes.some(n => n === note)) {
      uniqueNotes.push(note);
    }
  });

  return uniqueNotes;
}

const VALID_NOTE_REGEX = /^[A-G][#b]?$/;

describe('ScaleVisualization and scalesUsed Catalog Verification', () => {
  describe('Enharmonic Matching', () => {
    test('matches exact notes', () => {
      expect(isNoteMatch('C', 'C')).toBe(true);
      expect(isNoteMatch('F#', 'F#')).toBe(true);
      expect(isNoteMatch('Bb', 'Bb')).toBe(true);
    });

    test('matches standard sharps and flats enharmonically', () => {
      expect(isNoteMatch('C#', 'Db')).toBe(true);
      expect(isNoteMatch('Db', 'C#')).toBe(true);
      expect(isNoteMatch('D#', 'Eb')).toBe(true);
      expect(isNoteMatch('Eb', 'D#')).toBe(true);
      expect(isNoteMatch('F#', 'Gb')).toBe(true);
      expect(isNoteMatch('Gb', 'F#')).toBe(true);
      expect(isNoteMatch('G#', 'Ab')).toBe(true);
      expect(isNoteMatch('Ab', 'G#')).toBe(true);
      expect(isNoteMatch('A#', 'Bb')).toBe(true);
      expect(isNoteMatch('Bb', 'A#')).toBe(true);
    });

    test('matches unusual enharmonics', () => {
      expect(isNoteMatch('B', 'Cb')).toBe(true);
      expect(isNoteMatch('Cb', 'B')).toBe(true);
      expect(isNoteMatch('E', 'Fb')).toBe(true);
      expect(isNoteMatch('Fb', 'E')).toBe(true);
      expect(isNoteMatch('C', 'B#')).toBe(true);
      expect(isNoteMatch('B#', 'C')).toBe(true);
      expect(isNoteMatch('F', 'E#')).toBe(true);
      expect(isNoteMatch('E#', 'F')).toBe(true);
    });

    test('correctly rejects non-matching notes', () => {
      expect(isNoteMatch('C', 'D')).toBe(false);
      expect(isNoteMatch('F#', 'G')).toBe(false);
      expect(isNoteMatch('A', 'Bb')).toBe(false);
    });
  });

  describe('Scale Note Parsing', () => {
    test('parses hyphen-separated notes correctly', () => {
      const notes = parseScaleNotes('E - F# - G - A - B - C - D');
      expect(notes).toEqual(['E', 'F#', 'G', 'A', 'B', 'C', 'D']);
    });

    test('deduplicates octave note at end', () => {
      const notes = parseScaleNotes('A - B - C - D - E - F - G - A');
      expect(notes).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
    });

    test('maps all scale notes to chromatic fretboard', () => {
      const notes = parseScaleNotes('Eb - F - G - Ab - Bb - C - D');
      for (const note of notes) {
        const matchesAnyChromatic = CHROMATIC_NOTES.some(chromatic => isNoteMatch(chromatic, note));
        expect(matchesAnyChromatic).toBe(true);
      }
    });
  });

  describe('Catalog-Wide Song JSON scalesUsed Verification', () => {
    const songsDir = path.resolve(__dirname, '../../data/songs');
    const songFiles = fs.readdirSync(songsDir).filter(f => f.endsWith('.json') && !f.startsWith('_'));

    test('all catalog songs exist and are loaded', () => {
      expect(songFiles.length).toBeGreaterThanOrEqual(107);
    });

    songFiles.forEach(file => {
      const songSlug = file.replace('.json', '');

      test(`song "${songSlug}" has valid scalesUsed entries`, () => {
        const raw = fs.readFileSync(path.join(songsDir, file), 'utf-8');
        const songData = JSON.parse(raw);

        const keyAndScale = songData?.musicalAnalysis?.keyAndScale;
        expect(keyAndScale).toBeDefined();
        expect(keyAndScale.primaryKey).toBeTruthy();

        const scales = keyAndScale.scalesUsed;
        expect(Array.isArray(scales)).toBe(true);
        expect(scales.length).toBeGreaterThanOrEqual(2);

        scales.forEach((scaleEntry: { scale: string; notes: string; application: string }, idx: number) => {
          expect(scaleEntry.scale).toBeTruthy();
          expect(scaleEntry.application).toBeTruthy();
          expect(scaleEntry.notes).toBeTruthy();

          const notes = parseScaleNotes(scaleEntry.notes);
          expect(notes.length).toBeGreaterThanOrEqual(5);

          notes.forEach(note => {
            expect(VALID_NOTE_REGEX.test(note), `Invalid note "${note}" in ${file} scale [${idx}] "${scaleEntry.scale}"`).toBe(true);

            // Must match at least one standard chromatic guitar note directly or enharmonically
            const matchesFret = CHROMATIC_NOTES.some(chromatic => isNoteMatch(chromatic, note));
            expect(matchesFret, `Note "${note}" cannot be mapped to fretboard in ${file}`).toBe(true);
          });
        });
      });
    });
  });
});
