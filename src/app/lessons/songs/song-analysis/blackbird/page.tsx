import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('blackbird');

export default function BlackbirdAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="blackbird"
      displayName="Blackbird"
    />
  );
}
