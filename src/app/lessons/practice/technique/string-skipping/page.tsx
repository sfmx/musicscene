import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('string-skipping');

export default function StringSkippingPage() {
  return <PracticeDetailPageTemplate practiceSlug="string-skipping" displayName="String Skipping" />;
}
