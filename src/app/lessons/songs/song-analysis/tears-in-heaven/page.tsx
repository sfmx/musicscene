import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('tears-in-heaven');

export default function TearsInHeavenPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="tears-in-heaven"
      displayName="Tears in Heaven"
    />
  );
}

