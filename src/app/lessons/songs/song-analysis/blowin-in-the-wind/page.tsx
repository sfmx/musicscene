import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('blowin-in-the-wind');

export default function BlowinInTheWindAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="blowin-in-the-wind"
      displayName="Blowin' in the Wind"
    />
  );
}
