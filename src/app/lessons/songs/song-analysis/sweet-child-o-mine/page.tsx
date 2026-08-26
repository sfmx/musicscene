import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('sweet-child-o-mine');

export default function SweetChildOMineAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="sweet-child-o-mine" 
      displayName="Sweet Child O' Mine" 
    />
  );
}
