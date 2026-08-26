import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('dust-my-broom');

export default function DustMyBroomAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="dust-my-broom"
      displayName="Dust My Broom"
    />
  );
}
