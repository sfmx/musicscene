import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('sittin-on-the-dock-of-the-bay');

export default function SittinOnTheDockOfTheBayAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="sittin-on-the-dock-of-the-bay"
      displayName="(Sittin' On) The Dock of the Bay"
    />
  );
}
