import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('fast-car');

export default function FastCarPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="fast-car"
      displayName="Fast Car"
    />
  );
}

