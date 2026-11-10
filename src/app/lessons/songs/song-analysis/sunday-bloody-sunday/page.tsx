import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('sunday-bloody-sunday');

export default function SundayBloodySundayPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="sunday-bloody-sunday"
      displayName="Sunday Bloody Sunday"
    />
  );
}
