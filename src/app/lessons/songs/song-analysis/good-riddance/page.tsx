import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('good-riddance');

export default function GoodRiddanceAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="good-riddance"
      displayName="Good Riddance (Time of Your Life)"
    />
  );
}
