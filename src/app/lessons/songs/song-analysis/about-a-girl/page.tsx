import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('about-a-girl');

export default function AboutAGirlPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="about-a-girl"
      displayName="About a Girl"
    />
  );
}
