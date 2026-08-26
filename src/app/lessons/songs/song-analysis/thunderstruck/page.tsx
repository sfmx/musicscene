import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('thunderstruck');

export default function ThunderstruckAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="thunderstruck" 
      displayName="Thunderstruck" 
    />
  );
}
