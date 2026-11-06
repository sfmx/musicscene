import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('down-to-the-waterline');

export default function DownToTheWaterlinePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="down-to-the-waterline"
      displayName="Down to the Waterline"
    />
  );
}

