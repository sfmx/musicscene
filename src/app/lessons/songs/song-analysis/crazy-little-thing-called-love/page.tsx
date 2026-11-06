import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('crazy-little-thing-called-love');

export default function CrazyLittleThingCalledLovePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="crazy-little-thing-called-love"
      displayName="Crazy Little Thing Called Love"
    />
  );
}

