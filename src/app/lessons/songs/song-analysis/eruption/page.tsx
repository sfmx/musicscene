import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('eruption');

export default function EruptionAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="eruption"
      displayName="Eruption"
    />
  );
}
