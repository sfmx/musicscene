import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('simple-man');

export default function SimpleManPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="simple-man"
      displayName="Simple Man"
    />
  );
}

