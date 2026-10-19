import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('cheap-wine');

export default function CheapWinePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="cheap-wine"
      displayName="Cheap Wine"
    />
  );
}

