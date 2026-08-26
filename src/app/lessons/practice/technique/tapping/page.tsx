import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('tapping');

export default function TappingPage() {
  return <PracticeDetailPageTemplate practiceSlug="tapping" displayName="Tapping" />;
}
