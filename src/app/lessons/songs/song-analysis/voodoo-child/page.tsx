import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('voodoo-child');

export default function VoodooChildPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="voodoo-child"
      displayName="Voodoo Child (Slight Return)"
    />
  );
}

