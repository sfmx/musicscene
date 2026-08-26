import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('free-fallin');

export default function FreeFallinAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="free-fallin"
      displayName="Free Fallin'"
    />
  );
}
