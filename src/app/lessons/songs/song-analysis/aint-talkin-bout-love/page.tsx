import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('aint-talkin-bout-love');

export default function AintTalkinBoutLovePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="aint-talkin-bout-love"
      displayName="Ain't Talkin' 'bout Love"
    />
  );
}
