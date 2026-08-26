import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('wild-thing');

export default function WildThingAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="wild-thing"
      displayName="Wild Thing"
    />
  );
}
