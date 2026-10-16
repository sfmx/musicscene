import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('black-magic-woman');

export default function BlackMagicWomanPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="black-magic-woman"
      displayName="Black Magic Woman"
    />
  );
}

