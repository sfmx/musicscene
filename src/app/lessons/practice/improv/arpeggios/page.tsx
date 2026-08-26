import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('arpeggios');

export default function ArpeggiosPage() {
  return <PracticeDetailPageTemplate practiceSlug="arpeggios" displayName="Arpeggios" />;
}
