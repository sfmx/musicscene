import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('more-than-words');

export default function MoreThanWordsPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="more-than-words"
      displayName="More Than Words"
    />
  );
}

