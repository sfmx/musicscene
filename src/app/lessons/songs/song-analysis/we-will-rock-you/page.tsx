import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('we-will-rock-you');

export default function WeWillRockYouAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="we-will-rock-you"
      displayName="We Will Rock You"
    />
  );
}
