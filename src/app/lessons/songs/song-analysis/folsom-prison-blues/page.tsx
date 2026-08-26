import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('folsom-prison-blues');

export default function FolsomPrisonBluesAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="folsom-prison-blues"
      displayName="Folsom Prison Blues"
    />
  );
}
