import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('down-under');

export default function DownUnderPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="down-under"
      displayName="Down Under"
    />
  );
}

