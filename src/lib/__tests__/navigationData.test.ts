import { describe, it, expect } from 'vitest';
import { getNavigationData } from '../navigationData';
import { getAllSongs } from '../songList';

describe('Navigation Data Generation', () => {
  const navData = getNavigationData();

  it('returns all 5 main top-level navigation categories', () => {
    expect(navData).toBeDefined();
    expect(navData.length).toBe(5);

    const labels = navData.map(c => c.label);
    expect(labels).toEqual(['Theory', 'Songs', 'Tools', 'Practice', 'Gear']);
  });

  describe('Tools Category', () => {
    const toolsCategory = navData.find(c => c.label === 'Tools')!;

    it('contains Interactive Utilities with all flagship tools', () => {
      expect(toolsCategory).toBeDefined();
      const interactiveCol = toolsCategory.columns.find(col => col.heading === 'Interactive Utilities');
      expect(interactiveCol).toBeDefined();

      const hrefs = interactiveCol!.items.map(item => item.href);
      expect(hrefs).toContain('/lessons/practice/fretboard-trainer');
      expect(hrefs).toContain('/lessons/practice/circle-of-fifths');
      expect(hrefs).toContain('/lessons/practice/caged-system');
      expect(hrefs).toContain('/lessons/practice/ear-trainer');
      expect(hrefs).toContain('/lessons/practice/progression-player');
      expect(hrefs).toContain('/lessons/songs/why-songs-work');
    });

    it('contains Visual Guides and Practice Drills columns', () => {
      const colHeadings = toolsCategory.columns.map(c => c.heading);
      expect(colHeadings).toContain('Visual Guides & Reference');
      expect(colHeadings).toContain('Practice Drills');
    });

    it('contains featured tool links including Circle of Fifths, Ear Trainer, and CAGED', () => {
      expect(toolsCategory.featured).toBeDefined();
      const featuredHrefs = toolsCategory.featured!.map(f => f.href);
      expect(featuredHrefs).toContain('/lessons/practice/circle-of-fifths');
      expect(featuredHrefs).toContain('/lessons/practice/caged-system');
      expect(featuredHrefs).toContain('/lessons/practice/ear-trainer');
      expect(featuredHrefs).toContain('/lessons/practice/fretboard-trainer');
      expect(featuredHrefs).toContain('/downloads/fretboard-cheat-sheet');
    });
  });

  describe('Songs Category Dynamic Catalog Count', () => {
    const songsCategory = navData.find(c => c.label === 'Songs')!;
    const songCount = getAllSongs().length;

    it('dynamically displays the exact song count in heading and browse link', () => {
      expect(songsCategory).toBeDefined();
      const analysisCol = songsCategory.columns.find(col => col.heading.includes('Song Analysis'));
      expect(analysisCol).toBeDefined();
      expect(analysisCol!.heading).toBe(`Song Analysis (${songCount} Songs)`);

      const browseItem = analysisCol!.items.find(item => item.href === '/lessons/songs/song-analysis');
      expect(browseItem).toBeDefined();
      expect(browseItem!.label).toBe(`Browse All ${songCount} Songs`);
    });
  });

  describe('Theory Category', () => {
    const theoryCategory = navData.find(c => c.label === 'Theory')!;

    it('includes dynamic counts for scales and chords', () => {
      expect(theoryCategory).toBeDefined();
      const scalesCol = theoryCategory.columns.find(col => col.heading === 'Scales');
      expect(scalesCol).toBeDefined();
      const allScalesItem = scalesCol!.items.find(i => i.href === '/lessons/theory/scales');
      expect(allScalesItem).toBeDefined();
      expect(allScalesItem!.label).toMatch(/All \d+ Scales/);

      const chordsCol = theoryCategory.columns.find(col => col.heading === 'Chords');
      expect(chordsCol).toBeDefined();
      const allChordsItem = chordsCol!.items.find(i => i.href === '/lessons/theory/chords');
      expect(allChordsItem).toBeDefined();
      expect(allChordsItem!.label).toMatch(/All \d+ Chords/);
    });

    it('includes More Theory with intervals, modes, progressions, and Circle of Fifths', () => {
      const moreTheoryCol = theoryCategory.columns.find(col => col.heading === 'More Theory');
      expect(moreTheoryCol).toBeDefined();
      const hrefs = moreTheoryCol!.items.map(i => i.href);
      expect(hrefs).toContain('/lessons/theory/intervals');
      expect(hrefs).toContain('/lessons/theory/modes');
      expect(hrefs).toContain('/lessons/theory/progressions');
      expect(hrefs).toContain('/lessons/practice/circle-of-fifths');
      expect(hrefs).toContain('/lessons/theory/scales/harmonic-minor');
    });
  });

  describe('Link Integrity', () => {
    it('ensures every menu item has a valid absolute local route starting with /', () => {
      for (const category of navData) {
        expect(category.href.startsWith('/')).toBe(true);
        for (const col of category.columns) {
          if (col.headingHref) {
            expect(col.headingHref.startsWith('/')).toBe(true);
          }
          for (const item of col.items) {
            expect(item.label.length).toBeGreaterThan(0);
            expect(item.href.startsWith('/')).toBe(true);
          }
        }
        if (category.featured) {
          for (const feat of category.featured) {
            expect(feat.label.length).toBeGreaterThan(0);
            expect(feat.href.startsWith('/')).toBe(true);
          }
        }
      }
    });
  });
});

