import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('take-a-long-line');

export default function TakeALongLinePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="take-a-long-line"
      displayName="Take a Long Line"
    />
  );
}

