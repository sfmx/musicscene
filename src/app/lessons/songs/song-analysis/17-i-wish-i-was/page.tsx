import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('17-i-wish-i-was');

export default function SeventeenIWishIWasPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="17-i-wish-i-was"
      displayName="17 (I Wish I Was)"
    />
  );
}

