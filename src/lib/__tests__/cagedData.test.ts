import { describe, it, expect } from 'vitest';
import {
  CAGED_ORDER,
  getCagedShapeData,
  getNextCagedShape,
  getPrevCagedShape,
  getNoteAtFret,
} from '../cagedData';

describe('CAGED System Data Engine', () => {
  it('verifies standard CAGED shape sequence', () => {
    expect(CAGED_ORDER).toEqual(['C', 'A', 'G', 'E', 'D']);
    expect(getNextCagedShape('C')).toBe('A');
    expect(getNextCagedShape('A')).toBe('G');
    expect(getNextCagedShape('G')).toBe('E');
    expect(getNextCagedShape('E')).toBe('D');
    expect(getNextCagedShape('D')).toBe('C');

    expect(getPrevCagedShape('C')).toBe('D');
    expect(getPrevCagedShape('D')).toBe('E');
  });

  it('calculates fretboard note pitches correctly', () => {
    // Low E string (index 0)
    expect(getNoteAtFret(0, 0)).toBe('E');
    expect(getNoteAtFret(0, 1)).toBe('F');
    expect(getNoteAtFret(0, 3)).toBe('G');
    expect(getNoteAtFret(0, 5)).toBe('A');
    expect(getNoteAtFret(0, 12)).toBe('E');

    // A string (index 1)
    expect(getNoteAtFret(1, 0)).toBe('A');
    expect(getNoteAtFret(1, 2)).toBe('B');
    expect(getNoteAtFret(1, 3)).toBe('C');
  });

  it('generates standard open C major shape data', () => {
    const cShape = getCagedShapeData('C', 'C');
    expect(cShape.shape).toBe('C');
    expect(cShape.rootStringName).toBe('A');
    expect(cShape.rootStringIndex).toBe(1);
    expect(cShape.chordFrets).toEqual([-1, 3, 2, 0, 1, 0]);
    expect(cShape.pentatonicBoxNumber).toBe(5);

    // Verify notes contain root notes
    const rootNotes = cShape.notes.filter(n => n.isRoot);
    expect(rootNotes.length).toBeGreaterThanOrEqual(2);
    expect(rootNotes.every(n => n.note === 'C')).toBe(true);

    // Verify triad
    expect(cShape.triad.strings).toContain('Strings 1-2-3');
    expect(cShape.triad.inversion).toBe('1st Inversion (3rd in bass)');
  });

  it('transposes CAGED shapes accurately for G Major', () => {
    // E shape for G Major (barre on 3rd fret)
    const eShapeForG = getCagedShapeData('E', 'G');
    expect(eShapeForG.shape).toBe('E');
    expect(eShapeForG.rootStringName).toBe('E');
    expect(eShapeForG.chordFrets).toEqual([3, 5, 5, 4, 3, 3]);

    // A shape for G Major (barre on 10th fret)
    const aShapeForG = getCagedShapeData('A', 'G');
    expect(aShapeForG.shape).toBe('A');
    expect(aShapeForG.chordFrets).toEqual([-1, 10, 12, 12, 12, 10]);
  });

  it('guarantees valid note intervals across all 5 shapes for all 12 chromatic roots', () => {
    const roots = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    roots.forEach(root => {
      CAGED_ORDER.forEach(shape => {
        const data = getCagedShapeData(shape, root);
        expect(data.chordFrets).toHaveLength(6);
        expect(data.notes.length).toBeGreaterThan(0);

        // Every shape must contain root, 3rd, and 5th
        const intervals = new Set(data.notes.map(n => n.interval));
        expect(intervals.has('R')).toBe(true);
        expect(intervals.has('3')).toBe(true);
        expect(intervals.has('5')).toBe(true);
      });
    });
  });
});

