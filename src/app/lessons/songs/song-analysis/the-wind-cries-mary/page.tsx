import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('the-wind-cries-mary');

export default function TheWindCriesMaryPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="the-wind-cries-mary"
      displayName="The Wind Cries Mary"
    />
  );
}

