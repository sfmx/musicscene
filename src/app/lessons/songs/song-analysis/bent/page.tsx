import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('bent');

export default function BentPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="bent"
      displayName="Bent"
    />
  );
}
