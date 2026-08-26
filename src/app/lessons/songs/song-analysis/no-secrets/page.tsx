import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('no-secrets');

export default function NoSecretsAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="no-secrets" 
      displayName="No Secrets by The Angels" 
    />
  );
}
