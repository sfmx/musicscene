import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('crazy-train');

export default function CrazyTrainAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="crazy-train"
      displayName="Crazy Train"
    />
  );
}
