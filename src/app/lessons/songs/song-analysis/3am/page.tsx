import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('3am');

export default function ThreeAmPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="3am"
      displayName="3AM"
    />
  );
}
