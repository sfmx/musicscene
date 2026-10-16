import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('learn-to-fly');

export default function LearnToFlyPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="learn-to-fly"
      displayName="Learn to Fly"
    />
  );
}
