import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('all-right-now');

export default function AllRightNowPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="all-right-now"
      displayName="All Right Now"
    />
  );
}

