import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('dont-look-back-in-anger');

export default function DontLookBackInAngerPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="dont-look-back-in-anger"
      displayName="Don't Look Back in Anger"
    />
  );
}

