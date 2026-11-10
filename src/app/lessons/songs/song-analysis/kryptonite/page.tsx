import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('kryptonite');

export default function KryptonitePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="kryptonite"
      displayName="Kryptonite"
    />
  );
}
