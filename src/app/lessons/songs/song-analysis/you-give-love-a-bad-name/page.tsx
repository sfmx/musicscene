import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('you-give-love-a-bad-name');

export default function YouGiveLoveABadNameAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="you-give-love-a-bad-name"
      displayName="You Give Love a Bad Name"
    />
  );
}
