import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('white-room');

export default function WhiteRoomPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="white-room"
      displayName="White Room"
    />
  );
}
