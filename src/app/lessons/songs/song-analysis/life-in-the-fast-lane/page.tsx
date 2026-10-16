import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('life-in-the-fast-lane');

export default function LifeInTheFastLanePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="life-in-the-fast-lane"
      displayName="Life in the Fast Lane"
    />
  );
}

