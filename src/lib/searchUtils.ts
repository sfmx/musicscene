import contentIndexData from '@/data/_generated/content-index.json';
import type { ContentType, ContentEntry } from './contentIndex';

interface RawIndex {
  entries: ContentEntry[];
}

const index = contentIndexData as unknown as RawIndex;

export interface SearchResult extends ContentEntry {
  score: number;
}

/**
 * Search all content entries by query string.
 * Multi-term AND matching on title and tags.
 * Returns results sorted by relevance.
 */
export function searchAllContent(query: string, limit = 20): SearchResult[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];

  const terms = trimmed.split(/\s+/).filter(Boolean);

  const results: SearchResult[] = [];

  for (const entry of index.entries) {
    const titleLower = entry.title.toLowerCase();
    const tagsLower = entry.tags.map(t => t.toLowerCase());

    // All terms must match somewhere
    let allMatch = true;
    let score = 0;

    for (const term of terms) {
      const titleMatch = titleLower.includes(term);
      const tagMatch = tagsLower.some(t => t.includes(term));

      if (!titleMatch && !tagMatch) {
        allMatch = false;
        break;
      }

      // Title matches score higher
      if (titleMatch) {
        score += titleLower.startsWith(term) ? 3 : 2;
      }
      if (tagMatch) {
        score += 1;
      }
    }

    if (allMatch) {
      results.push({ ...entry, score });
    }
  }

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

/**
 * Filter content entries by type, difficulty, and tags.
 */
export function filterContent(options: {
  query?: string;
  types?: ContentType[];
  difficulties?: string[];
  tags?: string[];
  sort?: 'relevance' | 'alphabetical' | 'difficulty';
}): ContentEntry[] {
  const { query, types, difficulties, tags, sort = 'relevance' } = options;

  let entries: (ContentEntry & { score?: number })[];

  if (query && query.trim()) {
    entries = searchAllContent(query, 200);
  } else {
    entries = [...index.entries];
  }

  // Filter by type
  if (types && types.length > 0) {
    const typeSet = new Set(types);
    entries = entries.filter(e => typeSet.has(e.contentType));
  }

  // Filter by difficulty
  if (difficulties && difficulties.length > 0) {
    const diffSet = new Set(difficulties.map(d => d.toLowerCase()));
    entries = entries.filter(e => e.difficulty && diffSet.has(e.difficulty.toLowerCase()));
  }

  // Filter by tags
  if (tags && tags.length > 0) {
    entries = entries.filter(e =>
      tags.some(tag => e.tags.includes(tag))
    );
  }

  // Sort
  if (sort === 'alphabetical') {
    entries.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === 'difficulty') {
    const order: Record<string, number> = { beginner: 0, intermediate: 1, advanced: 2, expert: 3 };
    entries.sort((a, b) => {
      const da = order[(a.difficulty || '').toLowerCase()] ?? 99;
      const db = order[(b.difficulty || '').toLowerCase()] ?? 99;
      return da - db || a.title.localeCompare(b.title);
    });
  }
  // 'relevance' keeps existing order (score-sorted if query present)

  return entries;
}

const TYPE_LABELS: Record<string, string> = {
  'chord': 'Chords',
  'scale': 'Scales',
  'interval': 'Intervals',
  'mode': 'Modes',
  'progression': 'Progressions',
  'song-analysis': 'Song Analysis',
  'practice': 'Practice',
  'gear-lesson': 'Gear',
  'song-lesson': 'Song Lessons',
};

export function getContentTypeLabel(type: string): string {
  return TYPE_LABELS[type] || type;
}

/**
 * Get counts of entries per content type.
 */
export function getContentTypeCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const entry of index.entries) {
    counts[entry.contentType] = (counts[entry.contentType] || 0) + 1;
  }
  return counts;
}
