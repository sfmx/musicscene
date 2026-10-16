import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('never-tear-us-apart');

export default function NeverTearUsApartPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="never-tear-us-apart"
      displayName="Never Tear Us Apart"
    />
  );
}
