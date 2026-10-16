import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('black-dog');

export default function BlackDogPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="black-dog"
      displayName="Black Dog"
    />
  );
}
