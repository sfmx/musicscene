import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('american-idiot');

export default function AmericanIdiotPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="american-idiot"
      displayName="American Idiot"
    />
  );
}
