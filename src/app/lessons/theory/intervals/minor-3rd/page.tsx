import { getIntervalMetadata } from '@/lib/seo';
import IntervalAnalysisPageTemplate from '@/components/IntervalAnalysis/IntervalAnalysisPageTemplate';

export const metadata = getIntervalMetadata('minor-3rd');

export default function Minor3rdPage() {
  return <IntervalAnalysisPageTemplate intervalSlug="minor-3rd" displayName="Minor 3rd Interval" />;
}
