import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('where-the-streets-have-no-name');

export default function WhereTheStreetsHaveNoNamePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="where-the-streets-have-no-name"
      displayName="Where the Streets Have No Name"
    />
  );
}

