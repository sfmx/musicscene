import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('i-v-bvii-iv');

export default function IVBVIIIVProgressionPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="i-v-bvii-iv" displayName="I-V-bVII-IV Rock Anthem" />;
}
