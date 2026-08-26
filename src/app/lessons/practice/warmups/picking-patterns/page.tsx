import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('picking-patterns');

export default function PickingPatternsPage() {
  return <PracticeDetailPageTemplate practiceSlug="picking-patterns" displayName="Picking Patterns" />;
}
