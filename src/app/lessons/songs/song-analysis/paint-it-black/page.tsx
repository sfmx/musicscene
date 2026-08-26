import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('paint-it-black');

export default function PaintItBlackAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="paint-it-black"
      displayName="Paint It Black"
    />
  );
}
