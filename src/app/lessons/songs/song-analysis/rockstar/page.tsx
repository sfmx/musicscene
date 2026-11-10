import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('rockstar');

export default function RockstarPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="rockstar"
      displayName="Rockstar"
    />
  );
}
