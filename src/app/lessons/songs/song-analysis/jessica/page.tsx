import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('jessica');

export default function JessicaPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="jessica"
      displayName="Jessica"
    />
  );
}
