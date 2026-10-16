import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('shine-on-you-crazy-diamond');

export default function ShineOnYouCrazyDiamondPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="shine-on-you-crazy-diamond"
      displayName="Shine On You Crazy Diamond"
    />
  );
}
