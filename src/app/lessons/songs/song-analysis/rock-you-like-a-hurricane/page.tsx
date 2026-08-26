import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('rock-you-like-a-hurricane');

export default function RockYouLikeAHurricaneAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="rock-you-like-a-hurricane"
      displayName="Rock You Like a Hurricane"
    />
  );
}
