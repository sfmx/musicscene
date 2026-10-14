import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('throw-your-arms-around-me');

export default function ThrowYourArmsAroundMePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="throw-your-arms-around-me"
      displayName="Throw Your Arms Around Me"
    />
  );
}
