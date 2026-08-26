import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('purple-haze');

export default function PurpleHazeAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="purple-haze"
      displayName="Purple Haze"
    />
  );
}
