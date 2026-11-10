import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('rebel-rebel');

export default function RebelRebelPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="rebel-rebel"
      displayName="Rebel Rebel"
    />
  );
}
