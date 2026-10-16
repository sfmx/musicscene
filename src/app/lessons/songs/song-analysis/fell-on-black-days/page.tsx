import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('fell-on-black-days');

export default function FellOnBlackDaysPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="fell-on-black-days"
      displayName="Fell on Black Days"
    />
  );
}
