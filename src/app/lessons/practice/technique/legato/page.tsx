import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('legato');

export default function LegatoPage() {
  return <PracticeDetailPageTemplate practiceSlug="legato" displayName="Legato Technique" />;
}
