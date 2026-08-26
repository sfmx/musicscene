import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('wish-you-were-here');

export default function WishYouWereHereAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="wish-you-were-here"
      displayName="Wish You Were Here"
    />
  );
}
