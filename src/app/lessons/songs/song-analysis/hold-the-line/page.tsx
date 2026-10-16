import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('hold-the-line');

export default function HoldTheLinePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="hold-the-line"
      displayName="Hold the Line"
    />
  );
}

