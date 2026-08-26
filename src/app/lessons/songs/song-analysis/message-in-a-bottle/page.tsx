import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('message-in-a-bottle');

export default function MessageInABottleAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="message-in-a-bottle"
      displayName="Message in a Bottle"
    />
  );
}
