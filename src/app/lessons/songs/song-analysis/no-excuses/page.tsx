import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('no-excuses');

export default function NoExcusesPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="no-excuses"
      displayName="No Excuses"
    />
  );
}

