import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('sweep-picking');

export default function SweepPickingPage() {
  return <PracticeDetailPageTemplate practiceSlug="sweep-picking" displayName="Sweep Picking" />;
}
