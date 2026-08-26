import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('i-iv-v');

export default function IIVVProgressionPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="i-iv-v" displayName="I-IV-V Progression" />;
}
