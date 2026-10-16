import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('the-needle-and-the-damage-done');

export default function TheNeedleAndTheDamageDonePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="the-needle-and-the-damage-done"
      displayName="The Needle and the Damage Done"
    />
  );
}

