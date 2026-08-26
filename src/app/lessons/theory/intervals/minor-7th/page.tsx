import { getIntervalMetadata } from '@/lib/seo';
import IntervalAnalysisPageTemplate from '@/components/IntervalAnalysis/IntervalAnalysisPageTemplate';

export const metadata = getIntervalMetadata('minor-7th');

export default function Minor7thPage() {
  return <IntervalAnalysisPageTemplate intervalSlug="minor-7th" displayName="Minor 7th Interval" />;
}
