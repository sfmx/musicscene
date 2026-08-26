import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('should-i-stay-or-should-i-go');

export default function ShouldIStayOrShouldIGoAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="should-i-stay-or-should-i-go"
      displayName="Should I Stay or Should I Go"
    />
  );
}
