import { describe, test, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

const songsDir = path.resolve(__dirname, '../../data/songs');
const songFiles = fs.readdirSync(songsDir).filter(f => f.endsWith('.json') && !f.startsWith('_'));

const CANONICAL_TUNING_PATTERNS = [
  /^Standard \(EADGBE\)$/,
  /^Standard \(EADGBE\) with Capo \d+$/,
  /^Half-Step Down \(Eb Ab Db Gb Bb Eb\)$/,
  /^Drop D \(DADGBE\)$/,
  /^Drop D \(DADGBE\) with Capo \d+$/,
  /^D Standard \(DGCFAD\)$/,
  /^Open D \(DADF#AD\) or Standard with slide$/,
  /^DADGAD \(DADGAD\)$/
];

describe('Song Catalog Tuning & Tempo Verification', () => {
  test('all catalog songs exist', () => {
    expect(songFiles.length).toBeGreaterThanOrEqual(107);
  });

  describe('Tempo validity across catalog', () => {
    songFiles.forEach(file => {
      test(`${file} has valid numeric tempo parseable by parseInt()`, () => {
        const raw = fs.readFileSync(path.join(songsDir, file), 'utf-8');
        const song = JSON.parse(raw);
        const tempo = song.songInfo?.tempo;

        expect(tempo, `${file} is missing songInfo.tempo`).toBeTruthy();

        const bpm = parseInt(tempo, 10);
        expect(isNaN(bpm), `${file} tempo "${tempo}" cannot be parsed by parseInt`).toBe(false);
        expect(bpm, `${file} tempo ${bpm} out of realistic range (40-300)`).toBeGreaterThanOrEqual(40);
        expect(bpm, `${file} tempo ${bpm} out of realistic range (40-300)`).toBeLessThanOrEqual(300);
      });
    });
  });

  describe('Tuning validity across catalog', () => {
    songFiles.forEach(file => {
      test(`${file} has recognized canonical tuning format`, () => {
        const raw = fs.readFileSync(path.join(songsDir, file), 'utf-8');
        const song = JSON.parse(raw);
        const tuning = song.songInfo?.tuning;

        expect(tuning, `${file} is missing songInfo.tuning`).toBeTruthy();

        const matchesCanonical = CANONICAL_TUNING_PATTERNS.some(pattern => pattern.test(tuning));
        expect(matchesCanonical, `${file} has non-canonical tuning: "${tuning}"`).toBe(true);
      });
    });
  });

  describe('Specific rock and metal alternate tunings', () => {
    const checkTuning = (file: string, expectedTuning: string) => {
      const raw = fs.readFileSync(path.join(songsDir, file), 'utf-8');
      const song = JSON.parse(raw);
      expect(song.songInfo.tuning).toBe(expectedTuning);
    };

    test('Van Halen - Eruption is Half-Step Down (Eb Standard)', () => {
      checkTuning('eruption.json', 'Half-Step Down (Eb Ab Db Gb Bb Eb)');
    });

    test('Guns N\' Roses - Welcome to the Jungle is Half-Step Down', () => {
      checkTuning('welcome-to-the-jungle.json', 'Half-Step Down (Eb Ab Db Gb Bb Eb)');
    });

    test('Guns N\' Roses - Sweet Child O\' Mine is Half-Step Down', () => {
      checkTuning('sweet-child-o-mine.json', 'Half-Step Down (Eb Ab Db Gb Bb Eb)');
    });

    test('Jimi Hendrix - All Along the Watchtower is Half-Step Down', () => {
      checkTuning('all-along-the-watchtower.json', 'Half-Step Down (Eb Ab Db Gb Bb Eb)');
    });

    test('Stevie Ray Vaughan - Pride and Joy is Half-Step Down', () => {
      checkTuning('pride-and-joy.json', 'Half-Step Down (Eb Ab Db Gb Bb Eb)');
    });

    test('Poison - Every Rose Has Its Thorn is Half-Step Down', () => {
      checkTuning('every-rose-has-its-thorn.json', 'Half-Step Down (Eb Ab Db Gb Bb Eb)');
    });

    test('KISS - Rock and Roll All Nite is Half-Step Down', () => {
      checkTuning('rock-and-roll-all-nite.json', 'Half-Step Down (Eb Ab Db Gb Bb Eb)');
    });

    test('Nirvana - Come As You Are is D Standard', () => {
      checkTuning('come-as-you-are.json', 'D Standard (DGCFAD)');
    });

    test('Foo Fighters - Everlong is Drop D', () => {
      checkTuning('everlong.json', 'Drop D (DADGBE)');
    });

    test('Soundgarden - Black Hole Sun is Drop D', () => {
      checkTuning('black-hole-sun.json', 'Drop D (DADGBE)');
    });

    test('Tool - Schism is Drop D', () => {
      checkTuning('schism.json', 'Drop D (DADGBE)');
    });

    test('Elmore James - Dust My Broom is Open D / slide', () => {
      checkTuning('dust-my-broom.json', 'Open D (DADF#AD) or Standard with slide');
    });

    test('Capo songs match standard format', () => {
      checkTuning('riptide.json', 'Standard (EADGBE) with Capo 1');
      checkTuning('wonderwall.json', 'Standard (EADGBE) with Capo 2');
      checkTuning('free-fallin.json', 'Standard (EADGBE) with Capo 3');
      checkTuning('landslide.json', 'Standard (EADGBE) with Capo 3');
    });
  });
});

