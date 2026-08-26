import { getIntervalMetadata } from '@/lib/seo';
import IntervalAnalysisPageTemplate from '@/components/IntervalAnalysis/IntervalAnalysisPageTemplate';

export const metadata = getIntervalMetadata('unison');

export default function UnisonPage() {
  return <IntervalAnalysisPageTemplate intervalSlug="unison" displayName="Unison Interval" />;
}
