import { describe, it, expect } from 'vitest';
import { getSongLearningPathways, getPathwayById, getAllSongs } from '../songList';

describe('Song Learning Pathways', () => {
  const pathways = getSongLearningPathways();
  const allSongSlugs = new Set(getAllSongs().map(s => s.slug));

  it('provides 5 curated progressive pathways', () => {
    expect(pathways).toHaveLength(5);
  });

  it('contains expected pathway identifiers', () => {
    const ids = pathways.map(p => p.id);
    expect(ids).toContain('beginner-first-5');
    expect(ids).toContain('campfire-acoustic');
    expect(ids).toContain('rock-riff-foundations');
    expect(ids).toContain('fingerstyle-essentials');
    expect(ids).toContain('blues-lead-milestones');
  });

  it('ensures each pathway contains exactly 5 sequential songs with valid slugs', () => {
    pathways.forEach(p => {
      expect(p.songs).toHaveLength(5);
      p.songs.forEach((song, idx) => {
        expect(song.stepNumber).toBe(idx + 1);
        expect(allSongSlugs.has(song.slug)).toBe(true);
        expect(song.whyLearn).toBeTruthy();
        expect(song.keySkills.length).toBeGreaterThan(0);
      });
    });
  });

  it('can retrieve a pathway by its ID', () => {
    const pathway = getPathwayById('beginner-first-5');
    expect(pathway).toBeDefined();
    expect(pathway?.title).toBe("Beginner's First 5 Songs");
    expect(pathway?.difficulty).toBe('Beginner');
  });
});

