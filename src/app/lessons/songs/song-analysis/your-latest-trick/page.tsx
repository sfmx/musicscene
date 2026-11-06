import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('your-latest-trick');

export default function YourLatestTrickPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="your-latest-trick"
      displayName="Your Latest Trick"
    />
  );
}

