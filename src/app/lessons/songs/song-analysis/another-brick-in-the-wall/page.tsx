import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('another-brick-in-the-wall');

export default function AnotherBrickInTheWallAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="another-brick-in-the-wall"
      displayName="Another Brick in the Wall"
    />
  );
}
