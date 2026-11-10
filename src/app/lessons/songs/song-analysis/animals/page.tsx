import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('animals');

export default function AnimalsPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="animals"
      displayName="Animals"
    />
  );
}
