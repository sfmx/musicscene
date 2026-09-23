import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('creep');

export default function CreepPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="creep"
      displayName="Creep"
    />
  );
}

