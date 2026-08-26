import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('hybrid-picking');

export default function HybridPickingPage() {
  return <PracticeDetailPageTemplate practiceSlug="hybrid-picking" displayName="Hybrid Picking" />;
}
