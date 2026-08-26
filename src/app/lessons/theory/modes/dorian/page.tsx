import { getModeMetadata } from '@/lib/seo';
import ModeAnalysisPageTemplate from '@/components/ModeAnalysis/ModeAnalysisPageTemplate';

export const metadata = getModeMetadata('dorian');

export default function DorianModePage() {
  return <ModeAnalysisPageTemplate modeSlug="dorian" displayName="Dorian Mode" />;
}
