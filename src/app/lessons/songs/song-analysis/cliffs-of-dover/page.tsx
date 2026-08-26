import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('cliffs-of-dover');

export default function CliffsOfDoverAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="cliffs-of-dover"
      displayName="Cliffs of Dover"
    />
  );
}
