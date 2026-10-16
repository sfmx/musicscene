import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('the-sky-is-crying');

export default function TheSkyIsCryingPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="the-sky-is-crying"
      displayName="The Sky Is Crying"
    />
  );
}

