import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('rhythm-drills');

export default function RhythmDrillsPage() {
  return <PracticeDetailPageTemplate practiceSlug="rhythm-drills" displayName="Rhythm Drills" />;
}
