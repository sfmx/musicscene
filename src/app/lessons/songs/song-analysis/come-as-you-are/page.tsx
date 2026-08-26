import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('come-as-you-are');

export default function ComeAsYouAreAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="come-as-you-are"
      displayName="Come As You Are"
    />
  );
}
