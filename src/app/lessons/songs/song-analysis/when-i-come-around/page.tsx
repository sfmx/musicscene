import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('when-i-come-around');

export default function WhenIComeAroundPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="when-i-come-around"
      displayName="When I Come Around"
    />
  );
}
