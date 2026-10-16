import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('shape-of-my-heart');

export default function ShapeOfMyHeartPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="shape-of-my-heart"
      displayName="Shape of My Heart"
    />
  );
}
