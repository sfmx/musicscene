import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('mr-crowley');

export default function MrCrowleyPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="mr-crowley"
      displayName="Mr. Crowley"
    />
  );
}

