import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('over-the-hills-and-far-away');

export default function OverTheHillsAndFarAwayPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="over-the-hills-and-far-away"
      displayName="Over the Hills and Far Away"
    />
  );
}
