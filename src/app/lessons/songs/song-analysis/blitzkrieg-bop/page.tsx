import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('blitzkrieg-bop');

export default function BlitzkriegBopAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="blitzkrieg-bop"
      displayName="Blitzkrieg Bop"
    />
  );
}
