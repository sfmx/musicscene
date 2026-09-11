import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('who-made-who');

export default function WhoMadeWhoAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="who-made-who" 
      displayName="Who Made Who" 
    />
  );
}

