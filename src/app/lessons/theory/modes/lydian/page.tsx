import { getModeMetadata } from '@/lib/seo';
import ModeAnalysisPageTemplate from '@/components/ModeAnalysis/ModeAnalysisPageTemplate';

export const metadata = getModeMetadata('lydian');

export default function LydianModePage() {
  return <ModeAnalysisPageTemplate modeSlug="lydian" displayName="Lydian Mode" />;
}
