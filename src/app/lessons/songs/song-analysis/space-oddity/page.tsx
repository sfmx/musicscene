import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('space-oddity');

export default function SpaceOddityPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="space-oddity"
      displayName="Space Oddity"
    />
  );
}
