import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('stormy-monday');

export default function StormyMondayAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="stormy-monday"
      displayName="Stormy Monday"
    />
  );
}

