import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('dont-dream-its-over');

export default function DontDreamItsOverPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="dont-dream-its-over"
      displayName="Don't Dream It's Over"
    />
  );
}

