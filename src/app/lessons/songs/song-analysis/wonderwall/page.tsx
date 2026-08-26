import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('wonderwall');

export default function WonderwallAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="wonderwall"
      displayName="Wonderwall"
    />
  );
}
