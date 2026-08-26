import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('circle-of-fifths');

export default function CircleOfFifthsPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="circle-of-fifths" displayName="Circle of Fifths" />;
}
