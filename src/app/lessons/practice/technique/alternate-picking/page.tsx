import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('alternate-picking');

export default function AlternatePickingPage() {
  return <PracticeDetailPageTemplate practiceSlug="alternate-picking" displayName="Alternate Picking" />;
}
