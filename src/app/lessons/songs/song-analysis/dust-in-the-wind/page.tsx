import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('dust-in-the-wind');

export default function DustInTheWindPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="dust-in-the-wind"
      displayName="Dust in the Wind"
    />
  );
}
