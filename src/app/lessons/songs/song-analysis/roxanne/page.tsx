import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('roxanne');

export default function RoxannePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="roxanne"
      displayName="Roxanne"
    />
  );
}

