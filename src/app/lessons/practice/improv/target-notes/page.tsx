import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('target-notes');

export default function TargetNotesPage() {
  return <PracticeDetailPageTemplate practiceSlug="target-notes" displayName="Target Notes" />;
}
