import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('hit-me-with-your-best-shot');

export default function HitMeWithYourBestShotAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="hit-me-with-your-best-shot"
      displayName="Hit Me with Your Best Shot"
    />
  );
}
