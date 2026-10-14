import type { Metadata } from 'next';
import TagResultsPage from '@/components/TagBrowse/TagResultsPage';
import { TAG_TAXONOMY, getTagLabel } from '@/lib/tagTaxonomy';

export function generateStaticParams() {
  return TAG_TAXONOMY.map(tag => ({ tag: tag.slug }));
}

export async function generateMetadata(props: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await props.params;
  const label = getTagLabel(tag);
  return {
    title: `${label} Guitar Lessons`,
    description: `Browse MusicScene guitar lessons, song analyses, and theory guides tagged "${label}".`,
    // Tag archives are navigation aids (link lists only) — keep them out of the
    // search index while still letting crawlers follow links to the real lessons.
    robots: { index: false, follow: true },
  };
}

export default async function Page(props: { params: Promise<{ tag: string }> }) {
  const { tag } = await props.params;
  return <TagResultsPage tag={tag} />;
}
