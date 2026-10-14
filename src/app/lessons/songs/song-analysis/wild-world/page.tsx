import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('wild-world');

export default function WildWorldPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="wild-world"
      displayName="Wild World"
    />
  );
}

