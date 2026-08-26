import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('dynamics-control');

export default function DynamicsControlPage() {
  return <PracticeDetailPageTemplate practiceSlug="dynamics-control" displayName="Dynamics Control" />;
}
