import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('are-you-gonna-be-my-girl');

export default function AreYouGonnaBeMyGirlPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="are-you-gonna-be-my-girl"
      displayName="Are You Gonna Be My Girl"
    />
  );
}
