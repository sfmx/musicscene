import { getIntervalMetadata } from '@/lib/seo';
import IntervalAnalysisPageTemplate from '@/components/IntervalAnalysis/IntervalAnalysisPageTemplate';

export const metadata = getIntervalMetadata('minor-6th');

export default function Minor6thPage() {
  return <IntervalAnalysisPageTemplate intervalSlug="minor-6th" displayName="Minor 6th Interval" />;
}
