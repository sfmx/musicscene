import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('every-breath-you-take');

export default function EveryBreathYouTakePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="every-breath-you-take"
      displayName="Every Breath You Take"
    />
  );
}
