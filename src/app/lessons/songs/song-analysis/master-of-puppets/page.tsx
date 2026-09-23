import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('master-of-puppets');

export default function MasterOfPuppetsPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="master-of-puppets"
      displayName="Master of Puppets"
    />
  );
}

