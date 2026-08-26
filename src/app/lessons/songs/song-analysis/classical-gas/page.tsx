import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('classical-gas');

export default function ClassicalGasAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="classical-gas"
      displayName="Classical Gas"
    />
  );
}
