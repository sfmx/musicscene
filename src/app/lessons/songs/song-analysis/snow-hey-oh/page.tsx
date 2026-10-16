import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('snow-hey-oh');

export default function SnowHeyOhPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="snow-hey-oh"
      displayName="Snow (Hey Oh)"
    />
  );
}
