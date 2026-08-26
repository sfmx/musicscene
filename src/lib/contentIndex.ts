import contentIndexData from '@/data/_generated/content-index.json';

export type ContentType =
  | 'chord' | 'scale' | 'interval' | 'mode' | 'progression'
  | 'song-analysis' | 'practice' | 'gear-lesson' | 'song-lesson';

export interface ContentEntry {
  id: string;
  contentType: ContentType;
  slug: string;
  title: string;
  url: string;
  tags: string[];
  difficulty?: string;
  category?: string;
}

interface ContentIndex {
  entries: ContentEntry[];
  tagIndex: Record<string, string[]>;
}

const index = contentIndexData as unknown as ContentIndex;

// Lookup map built once on module load
const entryById = new Map<string, ContentEntry>();
for (const entry of index.entries) {
  entryById.set(entry.id, entry);
}

/**
 * Get a single entry by its ID (e.g. "chord:major")
 */
export function getContentEntry(id: string): ContentEntry | undefined {
  return entryById.get(id);
}

/**
 * Get all entries that share at least one tag with the given entry,
 * excluding the entry itself. Sorted by number of shared tags (descending).
 */
export function getRelatedContent(
  entryId: string,
  options?: {
    limit?: number;
    contentTypes?: ContentType[];
    excludeTypes?: ContentType[];
  }
): ContentEntry[] {
  const entry = entryById.get(entryId);
  if (!entry) return [];

  const limit = options?.limit ?? 6;
  const allowedTypes = options?.contentTypes
    ? new Set(options.contentTypes)
    : null;
  const excludeTypes = options?.excludeTypes
    ? new Set(options.excludeTypes)
    : null;

  // Collect candidate IDs with shared tag counts
  const scoredCandidates = new Map<string, number>();

  for (const tag of entry.tags) {
    const relatedIds = index.tagIndex[tag] ?? [];
    for (const candidateId of relatedIds) {
      if (candidateId === entryId) continue;
      scoredCandidates.set(
        candidateId,
        (scoredCandidates.get(candidateId) ?? 0) + 1
      );
    }
  }

  return Array.from(scoredCandidates.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => entryById.get(id)!)
    .filter(e => {
      if (allowedTypes && !allowedTypes.has(e.contentType)) return false;
      if (excludeTypes && excludeTypes.has(e.contentType)) return false;
      return true;
    })
    .slice(0, limit);
}

const SECTION_CONFIG: { title: string; types: ContentType[] }[] = [
  { title: 'Related Songs', types: ['song-analysis'] },
  { title: 'Theory Connections', types: ['chord', 'scale', 'interval', 'mode', 'progression'] },
  { title: 'Practice Exercises', types: ['practice'] },
  { title: 'Gear & Equipment', types: ['gear-lesson'] },
  { title: 'Song Lessons', types: ['song-lesson'] },
];

export interface RelatedGroup {
  title: string;
  items: ContentEntry[];
}

/**
 * Get grouped related content for template sections.
 * Returns categorized groups like "Related Songs", "Theory Connections", etc.
 * Skips groups that match the current entry's content type.
 */
export function getRelatedContentGrouped(
  entryId: string,
  options?: { maxPerGroup?: number }
): RelatedGroup[] {
  const maxPerGroup = options?.maxPerGroup ?? 4;
  const entry = entryById.get(entryId);
  if (!entry) return [];

  const groups: RelatedGroup[] = [];

  for (const config of SECTION_CONFIG) {
    // Don't show same-type entries (e.g., no "Theory Connections" on a chord page)
    if (config.types.includes(entry.contentType)) continue;

    const items = getRelatedContent(entryId, {
      limit: maxPerGroup,
      contentTypes: config.types,
    });

    if (items.length > 0) {
      groups.push({ title: config.title, items });
    }
  }

  return groups;
}

/**
 * Get all entries by content type
 */
export function getEntriesByType(contentType: ContentType): ContentEntry[] {
  return index.entries.filter(e => e.contentType === contentType);
}

/**
 * Get all entries matching a specific tag
 */
export function getEntriesByTag(tag: string): ContentEntry[] {
  const ids = index.tagIndex[tag] ?? [];
  return ids.map(id => entryById.get(id)!).filter(Boolean);
}

/**
 * Get the number of content entries for each tag.
 * Returns a map of tag slug -> count.
 */
export function getTagEntryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const [tag, ids] of Object.entries(index.tagIndex)) {
    counts[tag] = (ids as string[]).length;
  }
  return counts;
}
