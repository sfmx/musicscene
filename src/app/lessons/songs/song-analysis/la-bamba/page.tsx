import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('la-bamba');

export default function LaBambaAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="la-bamba"
      displayName="La Bamba"
    />
  );
}
