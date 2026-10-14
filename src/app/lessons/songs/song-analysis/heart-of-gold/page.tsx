import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('heart-of-gold');

export default function HeartOfGoldPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="heart-of-gold"
      displayName="Heart of Gold"
    />
  );
}

