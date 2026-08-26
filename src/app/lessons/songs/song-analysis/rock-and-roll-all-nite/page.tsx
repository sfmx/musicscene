import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('rock-and-roll-all-nite');

export default function RockAndRollAllNiteAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="rock-and-roll-all-nite"
      displayName="Rock and Roll All Nite"
    />
  );
}
