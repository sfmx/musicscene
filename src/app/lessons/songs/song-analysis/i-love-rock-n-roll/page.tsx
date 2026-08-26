import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('i-love-rock-n-roll');

export default function ILoveRockNRollAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="i-love-rock-n-roll" 
      displayName="I Love Rock 'n' Roll" 
    />
  );
}
