import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('seven-nation-army');

export default function SevenNationArmyAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="seven-nation-army"
      displayName="Seven Nation Army"
    />
  );
}
