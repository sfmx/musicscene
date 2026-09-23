import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('bohemian-rhapsody');

export default function BohemianRhapsodyPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="bohemian-rhapsody"
      displayName="Bohemian Rhapsody"
    />
  );
}

