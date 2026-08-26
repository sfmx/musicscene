import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('europa');

export default function EuropaAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="europa"
      displayName="Europa (Earth's Cry Heaven's Smile)"
    />
  );
}
