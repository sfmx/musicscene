import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('every-rose-has-its-thorn');

export default function EveryRoseHasItsThornAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="every-rose-has-its-thorn"
      displayName="Every Rose Has Its Thorn"
    />
  );
}
