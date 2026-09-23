import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('free-bird');

export default function FreeBirdPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="free-bird"
      displayName="Free Bird"
    />
  );
}

