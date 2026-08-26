import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('harmonics');

export default function HarmonicsPage() {
  return <PracticeDetailPageTemplate practiceSlug="harmonics" displayName="Harmonics" />;
}
