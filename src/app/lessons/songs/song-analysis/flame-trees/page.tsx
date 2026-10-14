import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('flame-trees');

export default function FlameTreesPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="flame-trees"
      displayName="Flame Trees"
    />
  );
}
