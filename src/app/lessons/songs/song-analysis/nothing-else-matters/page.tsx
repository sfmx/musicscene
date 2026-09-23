import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('nothing-else-matters');

export default function NothingElseMattersPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="nothing-else-matters"
      displayName="Nothing Else Matters"
    />
  );
}

