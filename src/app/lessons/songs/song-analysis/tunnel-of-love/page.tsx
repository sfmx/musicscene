import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('tunnel-of-love');

export default function TunnelOfLovePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="tunnel-of-love"
      displayName="Tunnel of Love"
    />
  );
}

