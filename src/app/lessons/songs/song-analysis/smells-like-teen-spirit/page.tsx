import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('smells-like-teen-spirit');

export default function SmellsLikeTeenSpiritPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="smells-like-teen-spirit"
      displayName="Smells Like Teen Spirit"
    />
  );
}

