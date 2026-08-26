import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('superstition');

export default function SuperstitionAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="superstition"
      displayName="Superstition"
    />
  );
}
