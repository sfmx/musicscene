import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('1979');

export default function NineteenSeventyNinePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="1979"
      displayName="1979"
    />
  );
}

