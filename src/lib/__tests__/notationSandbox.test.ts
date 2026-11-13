import { describe, it, expect } from 'vitest';
import { LANDMARK_NOTES } from '@/components/Theory/StaffFretboardExplorer';
import { GUITAR_OPEN_STRINGS_MIDI } from '@/lib/guitarAudio';

describe('notationSandbox logic', () => {
  it('has landmark notes spanning the entire guitar register (Low E to High C)', () => {
    expect(LANDMARK_NOTES.length).toBeGreaterThanOrEqual(18);

    const lowest = LANDMARK_NOTES[0];
    expect(lowest.name).toBe('E3');
    expect(lowest.soundingMidi).toBe(40); // Low E on String 6

    const middleC = LANDMARK_NOTES.find(n => n.name === 'C4');
    expect(middleC).toBeDefined();
    expect(middleC?.soundingMidi).toBe(48); // Sounding C3 on guitar

    const concertA = LANDMARK_NOTES.find(n => n.name === 'A5');
    expect(concertA).toBeDefined();
    expect(concertA?.soundingMidi).toBe(69); // Sounding A4 (440 Hz)
  });

  it('correctly maps guitar open strings to expected sounding MIDI notes', () => {
    // E2, A2, D3, G3, B3, E4
    expect(GUITAR_OPEN_STRINGS_MIDI).toEqual([40, 45, 50, 55, 59, 64]);
  });

  it('identifies Middle C on string 5 fret 3 and string 6 fret 8', () => {
    const middleC = 48; // sounding MIDI
    const matches: { str: number; fret: number }[] = [];

    GUITAR_OPEN_STRINGS_MIDI.forEach((openMidi, strIdx) => {
      const fret = middleC - openMidi;
      if (fret >= 0 && fret <= 15) {
        matches.push({ str: strIdx, fret });
      }
    });

    // Should find string 5 (fret 3) and string 6 (fret 8)
    expect(matches).toContainEqual({ str: 1, fret: 3 }); // String 5 (index 1)
    expect(matches).toContainEqual({ str: 0, fret: 8 }); // String 6 (index 0)
  });
});
