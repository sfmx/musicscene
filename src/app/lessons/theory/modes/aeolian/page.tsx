import { getModeMetadata } from '@/lib/seo';
import ModeAnalysisPageTemplate from '@/components/ModeAnalysis/ModeAnalysisPageTemplate';

export const metadata = getModeMetadata('aeolian');

export default function AeolianModePage() {
  return <ModeAnalysisPageTemplate modeSlug="aeolian" displayName="Aeolian Mode" />;
}
