import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('time');

export default function TimePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="time"
      displayName="Time"
    />
  );
}

