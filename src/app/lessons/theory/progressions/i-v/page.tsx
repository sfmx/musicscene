import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('i-v');

export default function IVProgressionPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="i-v" displayName="I-V Progression" />;
}
