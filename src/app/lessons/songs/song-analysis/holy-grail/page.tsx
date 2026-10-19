import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('holy-grail');

export default function HolyGrailPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="holy-grail"
      displayName="Holy Grail"
    />
  );
}

