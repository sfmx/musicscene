import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('highway-to-hell');

export default function HighwayToHellAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="highway-to-hell" 
      displayName="Highway to Hell" 
    />
  );
}
