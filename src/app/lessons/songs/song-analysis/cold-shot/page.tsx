import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('cold-shot');

export default function ColdShotPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="cold-shot"
      displayName="Cold Shot"
    />
  );
}
