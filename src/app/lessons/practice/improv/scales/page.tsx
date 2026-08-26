import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('scales');

export default function ScalesPage() {
  return <PracticeDetailPageTemplate practiceSlug="scales" displayName="Scales" />;
}
