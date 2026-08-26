import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('tom-sawyer');

export default function TomSawyerAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="tom-sawyer"
      displayName="Tom Sawyer"
    />
  );
}
