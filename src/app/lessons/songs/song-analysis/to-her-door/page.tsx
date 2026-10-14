import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('to-her-door');

export default function ToHerDoorPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="to-her-door"
      displayName="To Her Door"
    />
  );
}

