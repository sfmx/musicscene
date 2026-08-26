import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('vi-iv-i-v');

export default function ViIVIVProgressionPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="vi-iv-i-v" displayName="vi-IV-I-V Progression" />;
}
