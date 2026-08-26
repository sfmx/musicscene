import { getIntervalMetadata } from '@/lib/seo';
import IntervalAnalysisPageTemplate from '@/components/IntervalAnalysis/IntervalAnalysisPageTemplate';

export const metadata = getIntervalMetadata('major-3rd');

export default function Major3rdPage() {
  return <IntervalAnalysisPageTemplate intervalSlug="major-3rd" displayName="Major 3rd Interval" />;
}
