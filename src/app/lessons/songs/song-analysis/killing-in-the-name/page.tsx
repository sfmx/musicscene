import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('killing-in-the-name');

export default function KillingInTheNamePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="killing-in-the-name"
      displayName="Killing in the Name"
    />
  );
}

