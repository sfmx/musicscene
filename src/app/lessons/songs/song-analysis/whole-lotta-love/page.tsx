import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('whole-lotta-love');

export default function WholeLottaLoveAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="whole-lotta-love"
      displayName="Whole Lotta Love"
    />
  );
}
