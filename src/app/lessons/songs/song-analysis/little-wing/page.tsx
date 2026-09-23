import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('little-wing');

export default function LittleWingPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="little-wing"
      displayName="Little Wing"
    />
  );
}

