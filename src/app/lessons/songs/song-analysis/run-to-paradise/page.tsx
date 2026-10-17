import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('run-to-paradise');

export default function RunToParadisePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="run-to-paradise"
      displayName="Run to Paradise"
    />
  );
}

