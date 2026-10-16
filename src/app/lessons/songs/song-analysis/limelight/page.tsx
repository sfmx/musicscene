import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('limelight');

export default function LimelightPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="limelight"
      displayName="Limelight"
    />
  );
}

