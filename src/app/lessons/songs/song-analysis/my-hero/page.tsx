import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('my-hero');

export default function MyHeroPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="my-hero"
      displayName="My Hero"
    />
  );
}
