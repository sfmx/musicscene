import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('i-vi-iv-v');

export default function IViIVVProgressionPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="i-vi-iv-v" displayName="I-vi-IV-V 50s Doo-Wop" />;
}
