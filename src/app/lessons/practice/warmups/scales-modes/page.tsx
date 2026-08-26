import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('scales-modes');

export default function ScalesModesPage() {
  return <PracticeDetailPageTemplate practiceSlug="scales-modes" displayName="Scales & Modes" />;
}
