import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('push');

export default function PushPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="push"
      displayName="Push"
    />
  );
}
