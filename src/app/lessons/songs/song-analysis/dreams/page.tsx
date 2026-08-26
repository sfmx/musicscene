import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('dreams');

export default function DreamsAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="dreams"
      displayName="Dreams"
    />
  );
}
