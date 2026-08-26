import { getIntervalMetadata } from '@/lib/seo';
import IntervalAnalysisPageTemplate from '@/components/IntervalAnalysis/IntervalAnalysisPageTemplate';

export const metadata = getIntervalMetadata('major-7th');

export default function Major7thPage() {
  return <IntervalAnalysisPageTemplate intervalSlug="major-7th" displayName="Major 7th Interval" />;
}
