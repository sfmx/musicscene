import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('self-esteem');

export default function SelfEsteemPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="self-esteem"
      displayName="Self Esteem"
    />
  );
}
