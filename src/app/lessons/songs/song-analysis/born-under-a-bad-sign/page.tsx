import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('born-under-a-bad-sign');

export default function BornUnderABadSignPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="born-under-a-bad-sign"
      displayName="Born Under a Bad Sign"
    />
  );
}

