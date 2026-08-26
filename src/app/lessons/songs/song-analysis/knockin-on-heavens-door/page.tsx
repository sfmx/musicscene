import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('knockin-on-heavens-door');

export default function KnockinOnHeavensDoorAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="knockin-on-heavens-door"
      displayName="Knockin' on Heaven's Door"
    />
  );
}
