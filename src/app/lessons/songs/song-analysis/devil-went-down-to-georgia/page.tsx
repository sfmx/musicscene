import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('devil-went-down-to-georgia');

export default function DevilWentDownToGeorgiaAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="devil-went-down-to-georgia"
      displayName="The Devil Went Down to Georgia"
    />
  );
}
