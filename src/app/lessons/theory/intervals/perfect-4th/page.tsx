import { getIntervalMetadata } from '@/lib/seo';
import IntervalAnalysisPageTemplate from '@/components/IntervalAnalysis/IntervalAnalysisPageTemplate';

export const metadata = getIntervalMetadata('perfect-4th');

export default function Perfect4thPage() {
  return <IntervalAnalysisPageTemplate intervalSlug="perfect-4th" displayName="Perfect 4th Interval" />;
}
