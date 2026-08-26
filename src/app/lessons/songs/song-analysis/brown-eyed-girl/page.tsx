import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('brown-eyed-girl');

export default function BrownEyedGirlAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="brown-eyed-girl"
      displayName="Brown Eyed Girl"
    />
  );
}
