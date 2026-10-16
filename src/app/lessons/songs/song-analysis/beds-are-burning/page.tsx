import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('beds-are-burning');

export default function BedsAreBurningPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="beds-are-burning"
      displayName="Beds Are Burning"
    />
  );
}

