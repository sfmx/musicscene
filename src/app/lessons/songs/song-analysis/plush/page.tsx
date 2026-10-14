import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('plush');

export default function PlushPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="plush"
      displayName="Plush"
    />
  );
}
