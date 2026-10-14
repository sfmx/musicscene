import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('redemption-song');

export default function RedemptionSongPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="redemption-song"
      displayName="Redemption Song"
    />
  );
}

