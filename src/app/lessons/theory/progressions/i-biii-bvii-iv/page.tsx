import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('i-biii-bvii-iv');

export default function IBIIIBVIIIVProgressionPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="i-biii-bvii-iv" displayName="I-bIII-bVII-IV Modal Rock" />;
}
