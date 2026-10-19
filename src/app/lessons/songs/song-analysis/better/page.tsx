import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('better');

export default function BetterPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="better"
      displayName="Better"
    />
  );
}

