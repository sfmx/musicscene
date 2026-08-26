import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('crossroads');

export default function CrossroadsAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="crossroads"
      displayName="Crossroads"
    />
  );
}
