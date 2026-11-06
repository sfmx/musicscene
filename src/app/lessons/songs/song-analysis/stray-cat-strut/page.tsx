import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('stray-cat-strut');

export default function StrayCatStrutPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="stray-cat-strut"
      displayName="Stray Cat Strut"
    />
  );
}

