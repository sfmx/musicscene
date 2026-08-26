import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('zombie');

export default function ZombieAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="zombie"
      displayName="Zombie"
    />
  );
}
