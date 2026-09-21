import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('playing-god');

export default function PlayingGodAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="playing-god"
      displayName="Playing God"
    />
  );
}

