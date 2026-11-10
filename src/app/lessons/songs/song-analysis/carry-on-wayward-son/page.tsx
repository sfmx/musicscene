import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('carry-on-wayward-son');

export default function CarryOnWaywardSonPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="carry-on-wayward-son"
      displayName="Carry On Wayward Son"
    />
  );
}
