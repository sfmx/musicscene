import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('american-pie');

export default function AmericanPiePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="american-pie"
      displayName="American Pie"
    />
  );
}

