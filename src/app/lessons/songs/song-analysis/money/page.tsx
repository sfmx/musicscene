import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('money');

export default function MoneyPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="money"
      displayName="Money"
    />
  );
}
