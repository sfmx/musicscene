import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('horse-with-no-name');

export default function HorseWithNoNameAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="horse-with-no-name"
      displayName="Horse With No Name"
    />
  );
}
