import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('you-really-got-me');

export default function YouReallyGotMeAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="you-really-got-me"
      displayName="You Really Got Me"
    />
  );
}
