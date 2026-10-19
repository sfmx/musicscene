import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('eagle-rock');

export default function EagleRockPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="eagle-rock"
      displayName="Eagle Rock"
    />
  );
}

