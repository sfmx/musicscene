import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('mammas-dont-let-your-babies');

export default function MammasDontLetYourBabiesAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="mammas-dont-let-your-babies"
      displayName="Mammas Don't Let Your Babies Grow Up to Be Cowboys"
    />
  );
}
