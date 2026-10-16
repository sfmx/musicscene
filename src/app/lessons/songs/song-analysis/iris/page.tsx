import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('iris');

export default function IrisPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="iris"
      displayName="Iris"
    />
  );
}

