import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('basket-case');

export default function BasketCasePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="basket-case"
      displayName="Basket Case"
    />
  );
}

