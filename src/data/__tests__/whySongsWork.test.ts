import { describe, it, expect } from 'vitest';
import {
  getWhySongWorks,
  getAllCuratedHarmonicBreakdowns,
  getCuratedSongsByCategory,
  HARMONIC_CATEGORIES,
} from '../whySongsWork';
import { getSongAnalysisMetadata } from '../../lib/seo';

describe('Why Songs Work Harmonic Engine', () => {
  it('should return curated breakdown for Hotel California', () => {
    const hotel = getWhySongWorks('hotel-california');
    expect(hotel).toBeDefined();
    expect(hotel?.isCurated).toBe(true);
    expect(hotel?.songTitle).toBe('Hotel California');
    expect(hotel?.chords).toContain('Bm');
    expect(hotel?.chords).toContain('F#');
    expect(hotel?.coreSecret).toContain('Andalusian Cadence');
    expect(hotel?.relatedTheory.scales?.length).toBeGreaterThan(0);
    expect(hotel?.voiceLeadingInsights.length).toBeGreaterThan(0);
  });

  it('should return curated breakdown for Sweet Child O Mine with Mixolydian focus', () => {
    const song = getWhySongWorks('sweet-child-o-mine');
    expect(song).toBeDefined();
    expect(song?.isCurated).toBe(true);
    expect(song?.category).toBe('mixolydian-dorian');
    expect(song?.chords).toContain('C');
    expect(song?.romanProgression).toBe('I - bVII - IV - I');
  });

  it('should return curated breakdown for Comfortably Numb with key modulation', () => {
    const song = getWhySongWorks('comfortably-numb');
    expect(song).toBeDefined();
    expect(song?.isCurated).toBe(true);
    expect(song?.category).toBe('key-modulation');
    expect(song?.chords).toContain('Bm');
    expect(song?.chords).toContain('D');
  });

  it('should generate a structured fallback for a catalog song without curated breakdown', () => {
    // Pick an existing song from data that is not in curated list
    const fallback = getWhySongWorks('bad-moon-rising');
    expect(fallback).toBeDefined();
    expect(fallback?.isCurated).toBe(false);
    expect(fallback?.songTitle).toBe('Bad Moon Rising');
    expect(fallback?.chords.length).toBeGreaterThan(0);
    expect(fallback?.coreSecret).toBeDefined();
    expect(fallback?.songwriterTakeaway).toBeDefined();
  });

  it('should group curated songs into valid harmonic categories', () => {
    const grouped = getCuratedSongsByCategory();
    const categories = Object.keys(HARMONIC_CATEGORIES);

    for (const cat of categories) {
      expect(Array.isArray(grouped[cat as keyof typeof grouped])).toBe(true);
    }

    const all = getAllCuratedHarmonicBreakdowns();
    expect(all.length).toBeGreaterThanOrEqual(10);
  });
});

describe('Open Graph & SEO Metadata', () => {
  it('should generate absolute URLs for OpenGraph image and canonical', () => {
    const meta = getSongAnalysisMetadata('hotel-california');
    expect(meta.openGraph?.images).toBeDefined();
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ogImg = (meta.openGraph?.images as any[])?.[0];
    expect(ogImg.url).toMatch(/^https:\/\/musicscene\.com\.au\/images\/og-.*\.png$/);
    expect(ogImg.width).toBe(1200);
    expect(ogImg.height).toBe(630);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const twitter = meta.twitter as any;
    expect(twitter.card).toBe('summary_large_image');
    expect(twitter.images?.[0]).toMatch(/^https:\/\/musicscene\.com\.au\/images\/og-.*\.png$/);
  });
});
