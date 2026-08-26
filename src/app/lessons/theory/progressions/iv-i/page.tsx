import { getProgressionMetadata } from '@/lib/seo';
import ProgressionAnalysisPageTemplate from '@/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate';

export const metadata = getProgressionMetadata('iv-i');

export default function IVIProgressionPage() {
  return <ProgressionAnalysisPageTemplate progressionSlug="iv-i" displayName="IV-I Plagal Cadence" />;
}
