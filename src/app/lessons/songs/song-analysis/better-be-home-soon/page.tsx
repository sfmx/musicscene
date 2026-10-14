import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('better-be-home-soon');

export default function BetterBeHomeSoonPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="better-be-home-soon"
      displayName="Better Be Home Soon"
    />
  );
}

