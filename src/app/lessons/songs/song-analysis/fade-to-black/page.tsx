import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('fade-to-black');

export default function FadeToBlackPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="fade-to-black"
      displayName="Fade to Black"
    />
  );
}

