import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('here-i-go-again');

export default function HereIGoAgainAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="here-i-go-again"
      displayName="Here I Go Again"
    />
  );
}
