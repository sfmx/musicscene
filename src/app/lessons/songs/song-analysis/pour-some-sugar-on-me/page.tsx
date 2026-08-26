import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('pour-some-sugar-on-me');

export default function PourSomeSugarOnMeAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="pour-some-sugar-on-me"
      displayName="Pour Some Sugar on Me"
    />
  );
}
