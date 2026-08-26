import { getIntervalMetadata } from '@/lib/seo';
import IntervalAnalysisPageTemplate from '@/components/IntervalAnalysis/IntervalAnalysisPageTemplate';

export const metadata = getIntervalMetadata('major-6th');

export default function Major6thPage() {
  return <IntervalAnalysisPageTemplate intervalSlug="major-6th" displayName="Major 6th Interval" />;
}
