import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('angie');

export default function AngiePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="angie"
      displayName="Angie"
    />
  );
}
