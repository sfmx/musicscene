import { getModeMetadata } from '@/lib/seo';
import ModeAnalysisPageTemplate from '@/components/ModeAnalysis/ModeAnalysisPageTemplate';

export const metadata = getModeMetadata('ionian');

export default function IonianModePage() {
  return <ModeAnalysisPageTemplate modeSlug="ionian" displayName="Ionian Mode" />;
}
