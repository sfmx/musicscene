import { getModeMetadata } from '@/lib/seo';
import ModeAnalysisPageTemplate from '@/components/ModeAnalysis/ModeAnalysisPageTemplate';

export const metadata = getModeMetadata('locrian');

export default function LocrianModePage() {
  return <ModeAnalysisPageTemplate modeSlug="locrian" displayName="Locrian Mode" />;
}
