import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('layla');

export default function LaylaAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="layla"
      displayName="Layla"
    />
  );
}
