import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('the-thrill-is-gone');

export default function TheThillIsGoneAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="the-thrill-is-gone"
      displayName="The Thrill Is Gone"
    />
  );
}
