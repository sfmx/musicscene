import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('whats-going-on');

export default function WhatsGoingOnAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="whats-going-on"
      displayName="What's Going On"
    />
  );
}
