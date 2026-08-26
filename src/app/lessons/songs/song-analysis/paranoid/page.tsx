import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('paranoid');

export default function ParanoidAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="paranoid"
      displayName="Paranoid"
    />
  );
}
