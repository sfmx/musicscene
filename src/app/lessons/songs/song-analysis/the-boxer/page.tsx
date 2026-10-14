import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('the-boxer');

export default function TheBoxerPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="the-boxer"
      displayName="The Boxer"
    />
  );
}
