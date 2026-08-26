import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('rebel-yell');

export default function RebelYellAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="rebel-yell"
      displayName="Rebel Yell"
    />
  );
}
