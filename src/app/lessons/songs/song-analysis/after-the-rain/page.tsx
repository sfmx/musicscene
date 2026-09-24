import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('after-the-rain');

export default function AfterTheRainPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="after-the-rain"
      displayName="After the Rain"
    />
  );
}

