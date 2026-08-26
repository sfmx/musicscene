import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('welcome-to-the-jungle');

export default function WelcomeToTheJungleAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="welcome-to-the-jungle"
      displayName="Welcome to the Jungle"
    />
  );
}
