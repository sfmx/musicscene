import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('patience');

export default function PatiencePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="patience"
      displayName="Patience"
    />
  );
}

