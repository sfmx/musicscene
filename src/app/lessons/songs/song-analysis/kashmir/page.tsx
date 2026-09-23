import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('kashmir');

export default function KashmirPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="kashmir"
      displayName="Kashmir"
    />
  );
}

