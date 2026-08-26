import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('i-vi-ii-v');

export default function IViIIVProgressionPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="i-vi-ii-v" displayName="I-vi-ii-V Jazz Turnaround" />;
}
