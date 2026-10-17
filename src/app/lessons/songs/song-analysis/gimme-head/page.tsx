import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('gimme-head');

export default function GimmeHeadPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="gimme-head"
      displayName="Gimme Head"
    />
  );
}

