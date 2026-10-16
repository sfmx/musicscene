import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('leaps-and-bounds');

export default function LeapsAndBoundsPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="leaps-and-bounds"
      displayName="Leaps and Bounds"
    />
  );
}

