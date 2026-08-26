import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('hotel-california');

export default function HotelCaliforniaAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="hotel-california"
      displayName="Hotel California"
    />
  );
}
