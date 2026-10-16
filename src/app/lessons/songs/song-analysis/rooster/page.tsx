import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('rooster');

export default function RoosterPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="rooster"
      displayName="Rooster"
    />
  );
}

