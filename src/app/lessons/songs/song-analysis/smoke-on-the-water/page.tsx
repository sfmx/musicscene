import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('smoke-on-the-water');

export default function SmokeOnTheWaterAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="smoke-on-the-water"
      displayName="Smoke on the Water"
    />
  );
}
