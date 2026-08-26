import { getIntervalMetadata } from '@/lib/seo';
import IntervalAnalysisPageTemplate from '@/components/IntervalAnalysis/IntervalAnalysisPageTemplate';

export const metadata = getIntervalMetadata('major-2nd');

export default function Major2ndPage() {
  return <IntervalAnalysisPageTemplate intervalSlug="major-2nd" displayName="Major 2nd Interval" />;
}
