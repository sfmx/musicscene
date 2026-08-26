import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('motif-development');

export default function MotifDevelopmentPage() {
  return <PracticeDetailPageTemplate practiceSlug="motif-development" displayName="Motif Development" />;
}
