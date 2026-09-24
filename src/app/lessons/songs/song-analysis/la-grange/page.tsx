import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('la-grange');

export default function LaGrangePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="la-grange"
      displayName="La Grange"
    />
  );
}

