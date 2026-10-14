import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('fire-and-rain');

export default function FireAndRainPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="fire-and-rain"
      displayName="Fire and Rain"
    />
  );
}
