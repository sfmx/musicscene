import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('how-you-remind-me');

export default function HowYouRemindMePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="how-you-remind-me"
      displayName="How You Remind Me"
    />
  );
}
