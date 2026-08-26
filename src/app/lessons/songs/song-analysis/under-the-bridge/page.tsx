import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('under-the-bridge');

export default function UnderTheBridgeAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="under-the-bridge"
      displayName="Under the Bridge"
    />
  );
}
