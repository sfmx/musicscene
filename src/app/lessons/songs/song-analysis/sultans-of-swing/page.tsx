import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('sultans-of-swing');

export default function SultansOfSwingAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="sultans-of-swing"
      displayName="Sultans of Swing"
    />
  );
}
