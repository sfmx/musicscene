import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('twist-and-shout');

export default function TwistAndShoutAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="twist-and-shout"
      displayName="Twist and Shout"
    />
  );
}
