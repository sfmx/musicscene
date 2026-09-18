import { describe, it, expect } from 'vitest';
import {
  getSongsUsingScale,
  getSongsUsingMode,
  getSongsUsingProgression,
  getSongsUsingChord,
} from '../crossReferences';
import { getTechniqueLesson } from '../techniqueLessons';

describe('Cross References: Scales, Modes & Progressions to Songs', () => {
  describe('getSongsUsingScale', () => {
    it('returns songs for minor-pentatonic', () => {
      const songs = getSongsUsingScale('minor-pentatonic');
      expect(songs.length).toBeGreaterThan(20);
      expect(songs.every(s => s.contentType === 'song-analysis')).toBe(true);
      expect(songs.some(s => s.slug === 'back-in-black' || s.id.includes('back-in-black'))).toBe(true);
    });

    it('returns songs for blues', () => {
      const songs = getSongsUsingScale('blues');
      expect(songs.length).toBeGreaterThan(5);
      expect(songs.every(s => Boolean(s.title && s.url))).toBe(true);
    });

    it('returns songs for major-pentatonic', () => {
      const songs = getSongsUsingScale('major-pentatonic');
      expect(songs.length).toBeGreaterThan(15);
    });

    it('returns empty array for non-existent scale', () => {
      const songs = getSongsUsingScale('non-existent-scale-xyz');
      expect(songs).toEqual([]);
    });
  });

  describe('getSongsUsingMode', () => {
    it('returns songs for aeolian mode (natural minor)', () => {
      const songs = getSongsUsingMode('aeolian');
      expect(songs.length).toBeGreaterThan(15);
      expect(songs.every(s => s.contentType === 'song-analysis')).toBe(true);
    });

    it('returns songs for ionian mode (major scale)', () => {
      const songs = getSongsUsingMode('ionian');
      expect(songs.length).toBeGreaterThan(20);
    });

    it('returns songs for mixolydian mode', () => {
      const songs = getSongsUsingMode('mixolydian');
      expect(songs.length).toBeGreaterThan(5);
    });

    it('returns songs for dorian mode', () => {
      const songs = getSongsUsingMode('dorian');
      expect(songs.length).toBeGreaterThan(1);
    });
  });

  describe('getSongsUsingProgression', () => {
    it('returns songs for 12-bar-blues', () => {
      const songs = getSongsUsingProgression('12-bar-blues');
      expect(songs.length).toBeGreaterThan(3);
      expect(songs.every(s => s.url.startsWith('/lessons/songs/song-analysis/'))).toBe(true);
    });

    it('returns songs for i-v-vi-iv', () => {
      const songs = getSongsUsingProgression('i-v-vi-iv');
      expect(songs.length).toBeGreaterThan(2);
      expect(songs.some(s => s.slug === 'dont-stop-believin' || s.title.includes("Don't Stop"))).toBe(true);
    });

    it('returns songs for i-bvii-iv (classic rock progression)', () => {
      const songs = getSongsUsingProgression('i-bvii-iv');
      expect(songs.length).toBeGreaterThan(3);
      expect(songs.some(s => s.slug === 'back-in-black' || s.title.includes('Back in Black'))).toBe(true);
    });

    it('returns songs for vi-iv-i-v', () => {
      const songs = getSongsUsingProgression('vi-iv-i-v');
      expect(songs.length).toBeGreaterThan(1);
    });

    it('returns songs for i-iv-v', () => {
      const songs = getSongsUsingProgression('i-iv-v');
      expect(songs.length).toBeGreaterThan(5);
    });

    it('returns empty array for non-existent progression', () => {
      const songs = getSongsUsingProgression('non-existent-prog-999');
      expect(songs).toEqual([]);
    });
  });

  describe('getSongsUsingChord', () => {
    it('returns songs for minor chords', () => {
      const songs = getSongsUsingChord('minor');
      expect(songs.length).toBeGreaterThan(20);
    });

    it('returns songs for seventh chords', () => {
      const songs = getSongsUsingChord('seventh');
      expect(songs.length).toBeGreaterThan(5);
    });
  });

  describe('getTechniqueLesson Mapper', () => {
    it('maps palm muting to practice technique lesson', () => {
      const lesson = getTechniqueLesson('Palm Muting');
      expect(lesson).toBeDefined();
      expect(lesson?.url).toBe('/lessons/practice/technique/palm-muting');
      expect(lesson?.category).toBe('Practice Technique');
    });

    it('maps alternate picking to practice technique lesson', () => {
      const lesson = getTechniqueLesson('Fast Alternate Picking');
      expect(lesson).toBeDefined();
      expect(lesson?.url).toBe('/lessons/practice/technique/alternate-picking');
    });

    it('maps string bending to bending-vibrato lesson', () => {
      const lesson = getTechniqueLesson('Expressive Bending and Vibrato');
      expect(lesson).toBeDefined();
      expect(lesson?.url).toBe('/lessons/practice/technique/bending-vibrato');
    });

    it('maps legato to legato practice lesson', () => {
      const lesson = getTechniqueLesson('Fluid Legato Phrasing');
      expect(lesson).toBeDefined();
      expect(lesson?.url).toBe('/lessons/practice/technique/legato');
    });

    it('maps power chords to power-chords song lesson', () => {
      const lesson = getTechniqueLesson('Downstroke Power Chords');
      expect(lesson).toBeDefined();
      expect(lesson?.url).toBe('/lessons/songs/techniques/power-chords');
    });

    it('maps fingerpicking to fingerpicking song lesson', () => {
      const lesson = getTechniqueLesson('Fingerpicking Pattern');
      expect(lesson).toBeDefined();
      expect(lesson?.url).toBe('/lessons/songs/techniques/fingerpicking');
    });

    it('maps arpeggios to improv arpeggios lesson', () => {
      const lesson = getTechniqueLesson('Arpeggiated Chord Picking');
      expect(lesson).toBeDefined();
      expect(lesson?.url).toBe('/lessons/practice/improv/arpeggios');
    });

    it('maps tapping to tapping practice lesson', () => {
      const lesson = getTechniqueLesson('Two-Handed Tapping Cadenza');
      expect(lesson).toBeDefined();
      expect(lesson?.url).toBe('/lessons/practice/technique/tapping');
    });

    it('returns null for unclassifiable strings', () => {
      const lesson = getTechniqueLesson('Completely Random Non Music Technique 12345');
      expect(lesson).toBeNull();
    });
  });
});

