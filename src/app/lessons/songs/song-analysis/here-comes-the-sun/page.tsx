import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('here-comes-the-sun');

export default function HereComesTheSunPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="here-comes-the-sun"
      displayName="Here Comes the Sun"
    />
  );
}

