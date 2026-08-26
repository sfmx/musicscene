import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('the-final-countdown');

export default function TheFinalCountdownAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="the-final-countdown"
      displayName="The Final Countdown"
    />
  );
}
