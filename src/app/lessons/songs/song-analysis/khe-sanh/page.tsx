import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('khe-sanh');

export default function KheSanhPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="khe-sanh"
      displayName="Khe Sanh"
    />
  );
}

