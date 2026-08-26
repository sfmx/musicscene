import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('you-shook-me-all-night-long');

export default function YouShookMeAllNightLongAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="you-shook-me-all-night-long" 
      displayName="You Shook Me All Night Long" 
    />
  );
}
