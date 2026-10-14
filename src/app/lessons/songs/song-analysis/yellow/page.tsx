import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('yellow');

export default function YellowPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="yellow"
      displayName="Yellow"
    />
  );
}
