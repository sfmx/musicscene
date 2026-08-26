import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('roundabout');

export default function RoundaboutAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="roundabout"
      displayName="Roundabout"
    />
  );
}
