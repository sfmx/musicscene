import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('rhythm');

export default function RhythmPage() {
  return <PracticeDetailPageTemplate practiceSlug="rhythm" displayName="Rhythm" />;
}
