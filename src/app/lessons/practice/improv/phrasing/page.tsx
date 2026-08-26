import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('phrasing');

export default function PhrasingPage() {
  return <PracticeDetailPageTemplate practiceSlug="phrasing" displayName="Phrasing" />;
}
