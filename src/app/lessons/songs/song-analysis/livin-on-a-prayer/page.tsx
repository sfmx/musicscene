import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('livin-on-a-prayer');

export default function LivinOnAPrayerAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="livin-on-a-prayer"
      displayName="Livin' on a Prayer"
    />
  );
}
