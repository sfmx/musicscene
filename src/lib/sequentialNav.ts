import { getEntriesByType, ContentEntry, ContentType } from './contentIndex';

export interface SequentialNavItem {
  label: string;
  href: string;
}

export interface SequentialNav {
  prev: SequentialNavItem | null;
  next: SequentialNavItem | null;
}

/**
 * Compute prev/next navigation for a content entry within its siblings.
 * Siblings are entries of the same content type, optionally filtered by category.
 * Sorted alphabetically by title for consistent ordering.
 */
export function getSequentialNav(
  contentType: ContentType,
  currentSlug: string,
  options?: { category?: string }
): SequentialNav {
  let entries = getEntriesByType(contentType);

  // Filter by category if provided
  if (options?.category) {
    entries = entries.filter(e => e.category === options.category);
  }

  // Sort alphabetically by title
  entries.sort((a, b) => a.title.localeCompare(b.title));

  // Find current entry's position
  const currentIndex = entries.findIndex(e => e.slug === currentSlug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  const prev = currentIndex > 0
    ? { label: entries[currentIndex - 1].title, href: entries[currentIndex - 1].url }
    : null;

  const next = currentIndex < entries.length - 1
    ? { label: entries[currentIndex + 1].title, href: entries[currentIndex + 1].url }
    : null;

  return { prev, next };
}
