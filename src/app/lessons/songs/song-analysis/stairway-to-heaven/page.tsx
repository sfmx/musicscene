import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('stairway-to-heaven');

export default function StairwayToHeavenAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="stairway-to-heaven"
      displayName="Stairway to Heaven"
    />
  );
}
