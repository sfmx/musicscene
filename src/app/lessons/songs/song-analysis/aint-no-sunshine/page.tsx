import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('aint-no-sunshine');

export default function AintNoSunshinePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="aint-no-sunshine"
      displayName="Ain't No Sunshine"
    />
  );
}

