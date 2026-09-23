import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('texas-flood');

export default function TexasFloodPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="texas-flood"
      displayName="Texas Flood"
    />
  );
}

