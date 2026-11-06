import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('romeo-and-juliet');

export default function RomeoAndJulietPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="romeo-and-juliet"
      displayName="Romeo and Juliet"
    />
  );
}

