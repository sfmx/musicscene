import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('ii-iv-v');

export default function IIIVVProgressionPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="ii-iv-v" displayName="ii-IV-V Country Turnaround" />;
}
