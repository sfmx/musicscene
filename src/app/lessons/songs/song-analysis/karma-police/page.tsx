import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('karma-police');

export default function KarmaPolicePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="karma-police"
      displayName="Karma Police"
    />
  );
}
