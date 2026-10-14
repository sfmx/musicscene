import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('solid-rock');

export default function SolidRockPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="solid-rock"
      displayName="Solid Rock"
    />
  );
}
