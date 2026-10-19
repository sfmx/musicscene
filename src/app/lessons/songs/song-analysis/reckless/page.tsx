import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('reckless');

export default function RecklessPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="reckless"
      displayName="Reckless"
    />
  );
}

