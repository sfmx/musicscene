import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('everlong');

export default function EverlongAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="everlong"
      displayName="Everlong"
    />
  );
}
