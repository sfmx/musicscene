import { getIntervalMetadata } from '@/lib/seo';
import IntervalAnalysisPageTemplate from '@/components/IntervalAnalysis/IntervalAnalysisPageTemplate';

export const metadata = getIntervalMetadata('tritone');

export default function TritonePage() {
  return <IntervalAnalysisPageTemplate intervalSlug="tritone" displayName="Tritone Interval" />;
}
