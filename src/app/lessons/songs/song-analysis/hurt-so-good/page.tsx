import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('hurt-so-good');

export default function HurtSoGoodAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="hurt-so-good" 
      displayName="Hurt So Good" 
    />
  );
}
