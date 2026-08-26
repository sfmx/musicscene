import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('12-bar-blues');

export default function TwelveBarBluesPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="12-bar-blues" displayName="12 Bar Blues Progression" />;
}
