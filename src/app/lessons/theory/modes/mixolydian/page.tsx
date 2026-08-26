import { getModeMetadata } from '@/lib/seo';
import ModeAnalysisPageTemplate from '@/components/ModeAnalysis/ModeAnalysisPageTemplate';

export const metadata = getModeMetadata('mixolydian');

export default function MixolydianModePage() {
  return <ModeAnalysisPageTemplate modeSlug="mixolydian" displayName="Mixolydian Mode" />;
}
