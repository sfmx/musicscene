import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('ring-of-fire');

export default function RingOfFireAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="ring-of-fire"
      displayName="Ring of Fire"
    />
  );
}
