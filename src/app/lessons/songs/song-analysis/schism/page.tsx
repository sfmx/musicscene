import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('schism');

export default function SchismAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="schism"
      displayName="Schism"
    />
  );
}
