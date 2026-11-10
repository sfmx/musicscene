import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('would');

export default function WouldPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="would"
      displayName="Would?"
    />
  );
}
