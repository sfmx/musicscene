import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('riptide');

export default function RiptideAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="riptide"
      displayName="Riptide"
    />
  );
}
