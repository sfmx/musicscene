import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('louie-louie');

export default function LouieLouieAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="louie-louie"
      displayName="Louie Louie"
    />
  );
}
