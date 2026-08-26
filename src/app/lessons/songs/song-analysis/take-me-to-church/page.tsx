import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('take-me-to-church');

export default function TakeMeToChurchAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="take-me-to-church"
      displayName="Take Me to Church"
    />
  );
}
