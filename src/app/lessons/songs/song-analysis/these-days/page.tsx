import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('these-days');

export default function TheseDaysPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="these-days"
      displayName="These Days"
    />
  );
}

