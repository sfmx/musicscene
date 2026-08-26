import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('bending-vibrato');

export default function BendingVibratoPage() {
  return <PracticeDetailPageTemplate practiceSlug="bending-vibrato" displayName="Bending & Vibrato" />;
}
