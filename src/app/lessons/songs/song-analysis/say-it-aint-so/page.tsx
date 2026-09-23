import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('say-it-aint-so');

export default function SayItAintSoPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="say-it-aint-so"
      displayName="Say It Ain't So"
    />
  );
}

