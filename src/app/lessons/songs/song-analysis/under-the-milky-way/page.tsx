import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('under-the-milky-way');

export default function UnderTheMilkyWayPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="under-the-milky-way"
      displayName="Under the Milky Way"
    />
  );
}

