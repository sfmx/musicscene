import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('bad-moon-rising');

export default function BadMoonRisingAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="bad-moon-rising"
      displayName="Bad Moon Rising"
    />
  );
}
