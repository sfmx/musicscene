import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('money-for-nothing');

export default function MoneyForNothingPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="money-for-nothing"
      displayName="Money for Nothing"
    />
  );
}

