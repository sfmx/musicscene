import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('enter-sandman');

export default function EnterSandmanAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="enter-sandman" 
      displayName="Enter Sandman" 
    />
  );
}
