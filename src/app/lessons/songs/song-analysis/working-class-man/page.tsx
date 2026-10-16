import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('working-class-man');

export default function WorkingClassManPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="working-class-man"
      displayName="Working Class Man"
    />
  );
}
