import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('phrygian');
}

export default function PhrygianScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="phrygian"
      displayName="Phrygian Mode"
    />
  );
}
