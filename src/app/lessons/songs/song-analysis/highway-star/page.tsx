import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('highway-star');

export default function HighwayStarPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="highway-star"
      displayName="Highway Star"
    />
  );
}
