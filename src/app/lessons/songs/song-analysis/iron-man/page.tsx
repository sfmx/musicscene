import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('iron-man');

export default function IronManAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="iron-man"
      displayName="Iron Man"
    />
  );
}
