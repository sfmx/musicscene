import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('while-my-guitar-gently-weeps');

export default function WhileMyGuitarGentlyWeepsPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="while-my-guitar-gently-weeps"
      displayName="While My Guitar Gently Weeps"
    />
  );
}

