import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('the-boys-are-back-in-town');

export default function TheBoysAreBackInTownPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="the-boys-are-back-in-town"
      displayName="The Boys Are Back in Town"
    />
  );
}
