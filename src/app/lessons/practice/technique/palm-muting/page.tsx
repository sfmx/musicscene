import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('palm-muting');

export default function PalmMutingPage() {
  return <PracticeDetailPageTemplate practiceSlug="palm-muting" displayName="Palm Muting" />;
}
