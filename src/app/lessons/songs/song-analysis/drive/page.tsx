import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('drive');

export default function DrivePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="drive"
      displayName="Drive"
    />
  );
}
