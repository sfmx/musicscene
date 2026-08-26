import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('all-blues');

export default function AllBluesAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="all-blues"
      displayName="All Blues"
    />
  );
}
