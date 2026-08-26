import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('stand-by-me');

export default function StandByMeAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="stand-by-me"
      displayName="Stand By Me"
    />
  );
}
