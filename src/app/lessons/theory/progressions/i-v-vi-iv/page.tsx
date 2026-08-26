import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('i-v-vi-iv');

export default function IVViIVProgressionPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="i-v-vi-iv" displayName="I-V-vi-IV Progression" />;
}
