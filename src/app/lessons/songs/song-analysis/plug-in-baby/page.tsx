import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('plug-in-baby');

export default function PlugInBabyPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="plug-in-baby"
      displayName="Plug In Baby"
    />
  );
}

