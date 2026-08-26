import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('ii-v-i');

export default function IiVIProgressionPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="ii-v-i" displayName="ii-V-I Progression" />;
}
