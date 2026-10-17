import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('comin-home');

export default function CominHomePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="comin-home"
      displayName="Comin' Home"
    />
  );
}

