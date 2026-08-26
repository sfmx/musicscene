import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('minor-blues');

export default function MinorBluesProgressionPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="minor-blues" displayName="Minor Blues Progression" />;
}
