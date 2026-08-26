import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('wagon-wheel');

export default function WagonWheelAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="wagon-wheel"
      displayName="Wagon Wheel"
    />
  );
}
