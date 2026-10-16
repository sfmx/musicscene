import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('hey-joe');

export default function HeyJoePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="hey-joe"
      displayName="Hey Joe"
    />
  );
}
