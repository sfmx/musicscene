import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('barracuda');

export default function BarracudaAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="barracuda"
      displayName="Barracuda"
    />
  );
}
