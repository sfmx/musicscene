import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('my-happiness');

export default function MyHappinessPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="my-happiness"
      displayName="My Happiness"
    />
  );
}
