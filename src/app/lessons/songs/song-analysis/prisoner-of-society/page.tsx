import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('prisoner-of-society');

export default function PrisonerOfSocietyPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="prisoner-of-society"
      displayName="Prisoner of Society"
    />
  );
}
