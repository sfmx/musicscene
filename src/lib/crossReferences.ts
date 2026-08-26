import contentIndexData from '@/data/_generated/content-index.json';
import { ContentEntry, getContentEntry } from './contentIndex';

interface CrossReferences {
  scaleToSongs: Record<string, string[]>;
  chordToSongs: Record<string, string[]>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const crossRefs: CrossReferences = (contentIndexData as any).crossReferences ?? {
  scaleToSongs: {},
  chordToSongs: {},
};

/**
 * Get songs that use a specific scale (by scale slug).
 * E.g., getSongsUsingScale('minor-pentatonic') returns all songs that use the minor pentatonic scale.
 */
export function getSongsUsingScale(scaleSlug: string): ContentEntry[] {
  const songIds = crossRefs.scaleToSongs[scaleSlug] ?? [];
  return songIds
    .map((id: string) => getContentEntry(id))
    .filter((e): e is ContentEntry => e !== undefined);
}

/**
 * Get songs that use a specific chord type (by chord slug).
 * E.g., getSongsUsingChord('minor') returns all songs that use minor chords.
 */
export function getSongsUsingChord(chordSlug: string): ContentEntry[] {
  const songIds = crossRefs.chordToSongs[chordSlug] ?? [];
  return songIds
    .map((id: string) => getContentEntry(id))
    .filter((e): e is ContentEntry => e !== undefined);
}
