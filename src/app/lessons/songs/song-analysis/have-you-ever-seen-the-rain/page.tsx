import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('have-you-ever-seen-the-rain');

export default function HaveYouEverSeenTheRainPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="have-you-ever-seen-the-rain"
      displayName="Have You Ever Seen the Rain"
    />
  );
}

