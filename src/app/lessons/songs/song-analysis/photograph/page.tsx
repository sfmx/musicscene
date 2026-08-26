import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('photograph');

export default function PhotographAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="photograph"
      displayName="Photograph"
    />
  );
}
