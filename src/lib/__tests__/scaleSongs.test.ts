import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import songsList from '@/data/_generated/songs-list.json';

function normalizeTitle(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

describe('Scale Famous Songs & Catalog Resolution', () => {
  const scaleDir = path.resolve(__dirname, '../../data/scales');
  const scaleFiles = fs.readdirSync(scaleDir).filter(f => f.endsWith('.json') && !f.startsWith('_') && f !== 'scale-index.json');
  const catalogSlugSet = new Set(songsList.map(s => s.slug.toLowerCase()));
  const catalogTitleSet = new Set(songsList.map(s => normalizeTitle(s.title)));

  it('all scale files have non-empty famousSongs with required fields', () => {
    for (const file of scaleFiles) {
      const data = JSON.parse(fs.readFileSync(path.join(scaleDir, file), 'utf8'));
      expect(Array.isArray(data.famousSongs), `${file} should have famousSongs array`).toBe(true);
      expect(data.famousSongs.length, `${file} should have at least 1 famous song`).toBeGreaterThan(0);

      for (const song of data.famousSongs) {
        expect(song.title, `${file} song must have a title`).toBeTruthy();
        expect(song.artist, `${file} song must have an artist`).toBeTruthy();
        expect(song.key, `${file} song must have a key`).toBeTruthy();
      }
    }
  });

  it('natural minor scale features valid catalog songs that all resolve', () => {
    const minorData = JSON.parse(fs.readFileSync(path.join(scaleDir, 'minor.json'), 'utf8'));
    expect(minorData.famousSongs.length).toBeGreaterThanOrEqual(5);

    for (const song of minorData.famousSongs) {
      expect(song.slug, `Song ${song.title} in minor.json should have a catalog slug`).toBeTruthy();
      expect(catalogSlugSet.has(song.slug.toLowerCase()), `Slug ${song.slug} must exist in songs-list.json`).toBe(true);
    }
  });

  it('major scale features valid catalog songs that all resolve', () => {
    const majorData = JSON.parse(fs.readFileSync(path.join(scaleDir, 'major.json'), 'utf8'));
    for (const song of majorData.famousSongs) {
      expect(catalogSlugSet.has(song.slug.toLowerCase()), `Slug ${song.slug} must exist in songs-list.json`).toBe(true);
    }
  });

  it('minor pentatonic scale features valid catalog songs that all resolve', () => {
    const pentData = JSON.parse(fs.readFileSync(path.join(scaleDir, 'minor-pentatonic.json'), 'utf8'));
    for (const song of pentData.famousSongs) {
      expect(catalogSlugSet.has(song.slug.toLowerCase()), `Slug ${song.slug} must exist in songs-list.json`).toBe(true);
    }
  });

  it('blues scale features valid catalog songs that all resolve', () => {
    const bluesData = JSON.parse(fs.readFileSync(path.join(scaleDir, 'blues.json'), 'utf8'));
    for (const song of bluesData.famousSongs) {
      expect(catalogSlugSet.has(song.slug.toLowerCase()), `Slug ${song.slug} must exist in songs-list.json`).toBe(true);
    }
  });

  it('harmonic minor scale features valid catalog songs that all resolve', () => {
    const harmData = JSON.parse(fs.readFileSync(path.join(scaleDir, 'harmonic-minor.json'), 'utf8'));
    for (const song of harmData.famousSongs) {
      expect(catalogSlugSet.has(song.slug.toLowerCase()), `Slug ${song.slug} must exist in songs-list.json`).toBe(true);
    }
  });

  it('dorian and mixolydian scales feature valid catalog songs that all resolve', () => {
    const dorianData = JSON.parse(fs.readFileSync(path.join(scaleDir, 'dorian.json'), 'utf8'));
    for (const song of dorianData.famousSongs) {
      expect(catalogSlugSet.has(song.slug.toLowerCase()), `Dorian slug ${song.slug} must exist in songs-list.json`).toBe(true);
    }

    const mixoData = JSON.parse(fs.readFileSync(path.join(scaleDir, 'mixolydian.json'), 'utf8'));
    for (const song of mixoData.famousSongs) {
      expect(catalogSlugSet.has(song.slug.toLowerCase()), `Mixolydian slug ${song.slug} must exist in songs-list.json`).toBe(true);
    }
  });

  it('normalized matching handles titles accurately', () => {
    expect(catalogTitleSet.has(normalizeTitle('Stairway to Heaven'))).toBe(true);
    expect(catalogTitleSet.has(normalizeTitle("Sweet Child O' Mine"))).toBe(true);
    expect(catalogTitleSet.has(normalizeTitle("Don't Stop Believin'"))).toBe(true);
    expect(catalogTitleSet.has(normalizeTitle('Hotel California'))).toBe(true);
  });
});

