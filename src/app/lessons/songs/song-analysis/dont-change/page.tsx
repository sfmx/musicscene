import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('dont-change');

export default function DontChangePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="dont-change"
      displayName="Don't Change"
    />
  );
}

