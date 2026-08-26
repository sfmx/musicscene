import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('eye-of-the-tiger');

export default function EyeOfTheTigerAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="eye-of-the-tiger"
      displayName="Eye of the Tiger"
    />
  );
}
