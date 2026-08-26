import { getIntervalMetadata } from '@/lib/seo';
import IntervalAnalysisPageTemplate from '@/components/IntervalAnalysis/IntervalAnalysisPageTemplate';

export const metadata = getIntervalMetadata('perfect-5th');

export default function Perfect5thPage() {
  return <IntervalAnalysisPageTemplate intervalSlug="perfect-5th" displayName="Perfect 5th Interval" />;
}
