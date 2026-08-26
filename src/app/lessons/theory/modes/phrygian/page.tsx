import { getModeMetadata } from '@/lib/seo';
import ModeAnalysisPageTemplate from '@/components/ModeAnalysis/ModeAnalysisPageTemplate';

export const metadata = getModeMetadata('phrygian');

export default function PhrygianModePage() {
  return <ModeAnalysisPageTemplate modeSlug="phrygian" displayName="Phrygian Mode" />;
}
