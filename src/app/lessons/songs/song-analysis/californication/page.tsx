import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('californication');

export default function CalifornicationPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="californication"
      displayName="Californication"
    />
  );
}
