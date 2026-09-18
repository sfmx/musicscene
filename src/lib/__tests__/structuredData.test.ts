import { describe, it, expect } from 'vitest';
import { getFAQPageJsonLd, getHowToJsonLd, getMusicCompositionJsonLd } from '../jsonLd';
import {
  getChordPageJsonLd,
  getScalePageJsonLd,
  getModePageJsonLd,
  getProgressionPageJsonLd,
  getPracticePageJsonLd,
  getSongPageJsonLd,
} from '../structuredData';
import { getChordData } from '../chordData';
import { getScaleData } from '../scaleData';
import { getModeData } from '../modeData';
import { getProgressionData } from '../progressionData';
import { getPracticeData } from '../practiceData';
import { getSongData } from '../songData';

describe('Structured Data Generators (JSON-LD)', () => {
  describe('Core JSON-LD Helpers', () => {
    it('generates valid FAQPage schema', () => {
      const faq = getFAQPageJsonLd({
        questions: [
          { question: 'How do I tune my guitar?', answer: 'Use standard tuning EADGBE.' },
          { question: 'What is a capo?', answer: 'A clamp used to raise string pitch.' },
        ],
        url: '/lessons/faq/',
      });

      expect(faq['@context']).toBe('https://schema.org');
      expect(faq['@type']).toBe('FAQPage');
      expect(faq.mainEntity).toHaveLength(2);
      expect(faq.mainEntity[0]['@type']).toBe('Question');
      expect(faq.mainEntity[0].name).toBe('How do I tune my guitar?');
      expect(faq.mainEntity[0].acceptedAnswer['@type']).toBe('Answer');
      expect(faq.mainEntity[0].acceptedAnswer.text).toBe('Use standard tuning EADGBE.');
    });

    it('generates valid HowTo schema with tools and steps', () => {
      const howTo = getHowToJsonLd({
        title: 'How to Play Major Scale',
        description: 'Practice the major scale pattern on guitar.',
        url: '/lessons/theory/scales/major/',
        tool: ['Guitar', 'Metronome'],
        totalTime: 'PT15M',
        steps: [
          { name: 'Step 1', text: 'Find the root note.' },
          { name: 'Step 2', text: 'Play the ascending scale.' },
          'Descend smoothly back to the root.',
        ],
      });

      expect(howTo['@context']).toBe('https://schema.org');
      expect(howTo['@type']).toBe('HowTo');
      expect(howTo.name).toBe('How to Play Major Scale');
      expect(howTo.totalTime).toBe('PT15M');
      expect(howTo.tool).toHaveLength(2);
      expect(howTo.step).toHaveLength(3);
      expect(howTo.step[0].name).toBe('Step 1');
      expect(howTo.step[1].name).toBe('Step 2');
      expect(howTo.step[2].name).toBe('Step 3');
      expect(howTo.step[2].text).toBe('Descend smoothly back to the root.');
    });
  });

  describe('getChordPageJsonLd', () => {
    it('generates Article, HowTo, and FAQPage schemas for major chord', () => {
      const chord = getChordData('major')!;
      expect(chord).toBeDefined();

      const schemas = getChordPageJsonLd(chord, 'major') as Array<{ '@type': string; [key: string]: any }>;
      expect(schemas).toHaveLength(3);

      const [article, howTo, faq] = schemas;
      expect(article['@type']).toBe('Article');
      expect(article.headline).toContain('Major Chords');

      expect(howTo['@type']).toBe('HowTo');
      expect(howTo.name).toContain('How to Play');
      expect(howTo.step.length).toBeGreaterThanOrEqual(3);

      expect(faq['@type']).toBe('FAQPage');
      expect(faq.mainEntity.length).toBeGreaterThanOrEqual(3);
      expect(faq.mainEntity[0].name).toContain('formula');
    });

    it('generates schemas for minor-seventh chord', () => {
      const chord = getChordData('minor-seventh')!;
      const schemas = getChordPageJsonLd(chord, 'minor-seventh') as Array<{ '@type': string; [key: string]: any }>;
      expect(schemas).toHaveLength(3);
      expect(schemas.some((s) => s['@type'] === 'HowTo')).toBe(true);
      expect(schemas.some((s) => s['@type'] === 'FAQPage')).toBe(true);
    });
  });

  describe('getScalePageJsonLd', () => {
    it('generates schemas for minor-pentatonic scale', async () => {
      const scale = await getScaleData('minor-pentatonic');
      expect(scale).toBeDefined();

      const schemas = getScalePageJsonLd(scale!, 'minor-pentatonic') as Array<{ '@type': string; [key: string]: any }>;
      expect(schemas).toHaveLength(3);

      const [article, howTo, faq] = schemas;
      expect(article['@type']).toBe('Article');
      expect(howTo['@type']).toBe('HowTo');
      expect(howTo.step.length).toBe(4);
      expect(faq['@type']).toBe('FAQPage');
      expect(faq.mainEntity.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('getModePageJsonLd', () => {
    it('generates schemas for dorian mode', () => {
      const mode = getModeData('dorian')!;
      expect(mode).toBeDefined();

      const schemas = getModePageJsonLd(mode, 'dorian') as Array<{ '@type': string; [key: string]: any }>;
      expect(schemas).toHaveLength(3);

      const [article, howTo, faq] = schemas;
      expect(article['@type']).toBe('Article');
      expect(howTo['@type']).toBe('HowTo');
      expect(faq['@type']).toBe('FAQPage');
      expect(faq.mainEntity.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('getProgressionPageJsonLd', () => {
    it('generates schemas for 12-bar-blues progression', () => {
      const prog = getProgressionData('12-bar-blues')!;
      expect(prog).toBeDefined();

      const schemas = getProgressionPageJsonLd(prog, '12-bar-blues') as Array<{ '@type': string; [key: string]: any }>;
      expect(schemas).toHaveLength(3);

      const [article, howTo, faq] = schemas;
      expect(article['@type']).toBe('Article');
      expect(howTo['@type']).toBe('HowTo');
      expect(faq['@type']).toBe('FAQPage');
      expect(faq.mainEntity.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('getPracticePageJsonLd', () => {
    it('generates schemas for finger-exercises warmup drill', () => {
      const drill = getPracticeData('finger-exercises')!;
      expect(drill).toBeDefined();

      const schemas = getPracticePageJsonLd(drill, 'finger-exercises') as Array<{ '@type': string; [key: string]: any }>;
      expect(schemas).toHaveLength(3);

      const [article, howTo, faq] = schemas;
      expect(article['@type']).toBe('Article');
      expect(howTo['@type']).toBe('HowTo');
      expect(howTo.step.length).toBeGreaterThanOrEqual(3);
      expect(faq['@type']).toBe('FAQPage');
      expect(faq.mainEntity.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('getSongPageJsonLd', () => {
    it('generates MusicComposition, Article, and FAQPage schemas for a song', () => {
      const song = getSongData('sweet-child-o-mine')!;
      expect(song).toBeDefined();

      const schemas = getSongPageJsonLd(song, 'sweet-child-o-mine') as Array<{ '@type': string; [key: string]: any }>;
      expect(schemas).toHaveLength(3);

      const [composition, article, faq] = schemas;
      expect(composition['@type']).toBe('MusicComposition');
      expect(composition.name).toBe("Sweet Child O' Mine");
      expect(composition.composer.name).toBe("Guns N' Roses");
      expect(composition.musicalKey).toBeDefined();

      expect(article['@type']).toBe('Article');
      expect(article.headline).toContain("Sweet Child O' Mine");

      expect(faq['@type']).toBe('FAQPage');
      expect(faq.mainEntity.length).toBeGreaterThanOrEqual(3);
      expect(faq.mainEntity[0].name).toContain('key and tempo');
    });
  });
});
