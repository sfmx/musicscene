import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('stretching');

export default function StretchingPage() {
  return <PracticeDetailPageTemplate practiceSlug="stretching" displayName="Stretching" />;
}
