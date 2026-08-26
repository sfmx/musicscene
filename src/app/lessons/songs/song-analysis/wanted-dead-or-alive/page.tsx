import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('wanted-dead-or-alive');

export default function WantedDeadOrAliveAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="wanted-dead-or-alive"
      displayName="Wanted Dead or Alive"
    />
  );
}
