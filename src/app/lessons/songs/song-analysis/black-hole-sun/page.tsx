import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('black-hole-sun');

export default function BlackHoleSunAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="black-hole-sun"
      displayName="Black Hole Sun"
    />
  );
}
