import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('alive');

export default function AlivePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="alive"
      displayName="Alive"
    />
  );
}

