import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('hound-dog');

export default function HoundDogAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="hound-dog"
      displayName="Hound Dog"
    />
  );
}
