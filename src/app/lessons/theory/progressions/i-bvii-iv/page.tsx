import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('i-bvii-iv');

export default function IBVIIIVProgressionPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="i-bvii-iv" displayName="I-bVII-IV Mixolydian Vamp" />;
}
