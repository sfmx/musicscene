import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('telegraph-road');

export default function TelegraphRoadPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="telegraph-road"
      displayName="Telegraph Road"
    />
  );
}

