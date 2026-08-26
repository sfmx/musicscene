import { getIntervalMetadata } from '@/lib/seo';
import IntervalAnalysisPageTemplate from '@/components/IntervalAnalysis/IntervalAnalysisPageTemplate';

export const metadata = getIntervalMetadata('minor-2nd');

export default function Minor2ndPage() {
  return <IntervalAnalysisPageTemplate intervalSlug="minor-2nd" displayName="Minor 2nd Interval" />;
}
