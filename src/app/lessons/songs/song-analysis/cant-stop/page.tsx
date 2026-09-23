import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('cant-stop');

export default function CantStopPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="cant-stop"
      displayName="Can't Stop"
    />
  );
}

