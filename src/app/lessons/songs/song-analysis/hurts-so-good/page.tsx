import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('hurts-so-good');

export default function HurtsSoGoodPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="hurts-so-good"
      displayName="Hurts So Good"
    />
  );
}

