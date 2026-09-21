import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('it-runs-through-me');

export default function ItRunsThroughMeAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="it-runs-through-me"
      displayName="It Runs Through Me"
    />
  );
}

