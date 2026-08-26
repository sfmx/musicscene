import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('for-those-about-to-rock');

export default function ForThoseAboutToRockAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="for-those-about-to-rock" 
      displayName="For Those About to Rock (We Salute You)" 
    />
  );
}
