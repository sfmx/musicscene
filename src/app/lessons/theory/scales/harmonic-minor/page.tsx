import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('harmonic-minor');
}

export default function HarmonicMinorScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="harmonic-minor"
      displayName="Harmonic Minor Scale"
    />
  );
}
