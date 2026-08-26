import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('oye-como-va');

export default function OyeComoVaAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="oye-como-va"
      displayName="Oye Como Va"
    />
  );
}
