import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('never-going-back-again');

export default function NeverGoingBackAgainAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="never-going-back-again"
      displayName="Never Going Back Again"
    />
  );
}

