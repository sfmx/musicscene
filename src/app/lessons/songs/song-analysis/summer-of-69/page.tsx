import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('summer-of-69');

export default function SummerOf69Analysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="summer-of-69"
      displayName="Summer of '69"
    />
  );
}
