import TagResultsPage from '@/components/TagBrowse/TagResultsPage';
import { TAG_TAXONOMY } from '@/lib/tagTaxonomy';

export function generateStaticParams() {
  return TAG_TAXONOMY.map(tag => ({ tag: tag.slug }));
}

export default async function Page(props: { params: Promise<{ tag: string }> }) {
  const { tag } = await props.params;
  return <TagResultsPage tag={tag} />;
}
