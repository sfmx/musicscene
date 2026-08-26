import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('gloria');

export default function GloriaAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="gloria"
      displayName="Gloria"
    />
  );
}
