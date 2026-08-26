import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('dont-stop-believin');

export default function DontStopBelievinAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="dont-stop-believin"
      displayName="Don't Stop Believin'"
    />
  );
}
