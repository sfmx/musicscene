import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('sunshine-of-your-love');

export default function SunshineOfYourLoveAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="sunshine-of-your-love"
      displayName="Sunshine of Your Love"
    />
  );
}
