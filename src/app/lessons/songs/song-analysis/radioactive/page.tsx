import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('radioactive');

export default function RadioactiveAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="radioactive"
      displayName="Radioactive"
    />
  );
}
