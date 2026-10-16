import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('scar-tissue');

export default function ScarTissuePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="scar-tissue"
      displayName="Scar Tissue"
    />
  );
}

