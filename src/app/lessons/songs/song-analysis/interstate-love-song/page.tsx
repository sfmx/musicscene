import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('interstate-love-song');

export default function InterstateLoveSongPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="interstate-love-song"
      displayName="Interstate Love Song"
    />
  );
}
