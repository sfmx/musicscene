import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('sweet-home-alabama');

export default function SweetHomeAlabamaAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="sweet-home-alabama" 
      displayName="Sweet Home Alabama" 
    />
  );
}
