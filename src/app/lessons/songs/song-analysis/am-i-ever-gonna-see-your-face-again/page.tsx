import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('am-i-ever-gonna-see-your-face-again');

export default function AmIEverGonnaSeeYourFaceAgainPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="am-i-ever-gonna-see-your-face-again"
      displayName="Am I Ever Gonna See Your Face Again"
    />
  );
}

