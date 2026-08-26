import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('born-to-be-wild');

export default function BornToBeWildAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="born-to-be-wild"
      displayName="Born to Be Wild"
    />
  );
}
