import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('red-house');

export default function RedHousePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="red-house"
      displayName="Red House"
    />
  );
}
