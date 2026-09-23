import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('the-trooper');

export default function TheTrooperPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="the-trooper"
      displayName="The Trooper"
    />
  );
}

