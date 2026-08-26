import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('torn');

export default function TornAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="torn"
      displayName="Torn"
    />
  );
}
