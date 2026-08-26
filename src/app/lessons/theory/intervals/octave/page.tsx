import { getIntervalMetadata } from '@/lib/seo';
import IntervalAnalysisPageTemplate from '@/components/IntervalAnalysis/IntervalAnalysisPageTemplate';

export const metadata = getIntervalMetadata('octave');

export default function OctavePage() {
  return <IntervalAnalysisPageTemplate intervalSlug="octave" displayName="Octave Interval" />;
}
