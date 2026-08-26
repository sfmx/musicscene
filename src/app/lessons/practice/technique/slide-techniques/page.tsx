import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('slide-techniques');

export default function SlideTechniquesPage() {
  return <PracticeDetailPageTemplate practiceSlug="slide-techniques" displayName="Slide Techniques" />;
}
