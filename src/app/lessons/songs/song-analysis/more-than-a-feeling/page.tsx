import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('more-than-a-feeling');

export default function MoreThanAFeelingAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="more-than-a-feeling"
      displayName="More Than a Feeling"
    />
  );
}
