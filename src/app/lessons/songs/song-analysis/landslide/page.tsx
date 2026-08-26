import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('landslide');

export default function LandslideAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="landslide"
      displayName="Landslide"
    />
  );
}
