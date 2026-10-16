import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('one');

export default function OnePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="one"
      displayName="One"
    />
  );
}

