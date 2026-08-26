import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('johnny-b-goode');

export default function JohnnyBGoodeAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="johnny-b-goode" 
      displayName="Johnny B. Goode" 
    />
  );
}
