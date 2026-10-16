import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('bow-river');

export default function BowRiverPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="bow-river"
      displayName="Bow River"
    />
  );
}

