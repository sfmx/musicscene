import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('chord-changes');

export default function ChordChangesPage() {
  return <PracticeDetailPageTemplate practiceSlug="chord-changes" displayName="Chord Changes" />;
}
