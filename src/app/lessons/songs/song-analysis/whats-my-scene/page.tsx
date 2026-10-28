import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('whats-my-scene');

export default function WhatsMyScenePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="whats-my-scene"
      displayName="What's My Scene"
    />
  );
}

