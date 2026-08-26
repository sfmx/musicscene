import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('comfortably-numb');

export default function ComfortablyNumbAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="comfortably-numb"
      displayName="Comfortably Numb"
    />
  );
}
