import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('norwegian-wood');

export default function NorwegianWoodAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="norwegian-wood"
      displayName="Norwegian Wood"
    />
  );
}
