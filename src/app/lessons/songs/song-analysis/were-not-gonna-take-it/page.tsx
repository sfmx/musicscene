import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('were-not-gonna-take-it');

export default function WereNotGonnaTakeItAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="were-not-gonna-take-it" 
      displayName="We're Not Gonna Take It" 
    />
  );
}
