import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('man-in-the-box');

export default function ManInTheBoxPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="man-in-the-box"
      displayName="Man in the Box"
    />
  );
}

