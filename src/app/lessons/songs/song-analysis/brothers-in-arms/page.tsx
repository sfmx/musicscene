import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('brothers-in-arms');

export default function BrothersInArmsSongAnalysis() {
  return <SongAnalysisPageTemplate songSlug="brothers-in-arms" displayName="Brothers in Arms" />;
}
