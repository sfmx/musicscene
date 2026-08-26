import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('back-in-black');

export default function BackInBlackAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="back-in-black" 
      displayName="Back in Black" 
    />
  );
}
