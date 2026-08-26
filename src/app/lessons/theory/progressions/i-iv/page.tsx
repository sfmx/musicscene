import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('i-iv');

export default function IIVProgressionPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="i-iv" displayName="I-IV Progression" />;
}
