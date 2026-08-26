import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('satisfaction');

export default function SatisfactionAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="satisfaction"
      displayName="(I Can't Get No) Satisfaction"
    />
  );
}
