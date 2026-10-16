import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('cant-find-my-way-home');

export default function CantFindMyWayHomePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="cant-find-my-way-home"
      displayName="Can't Find My Way Home"
    />
  );
}

