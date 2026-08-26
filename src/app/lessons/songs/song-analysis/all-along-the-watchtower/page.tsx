import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('all-along-the-watchtower');

export default function AllAlongTheWatchtowerAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="all-along-the-watchtower"
      displayName="All Along the Watchtower"
    />
  );
}
