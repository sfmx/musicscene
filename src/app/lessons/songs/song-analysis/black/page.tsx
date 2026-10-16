import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('black');

export default function BlackPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="black"
      displayName="Black"
    />
  );
}

