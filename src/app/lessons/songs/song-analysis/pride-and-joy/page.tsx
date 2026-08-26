import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('pride-and-joy');

export default function PrideAndJoyAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="pride-and-joy"
      displayName="Pride and Joy"
    />
  );
}
