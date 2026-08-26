import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('melodic-minor');
}

export default function MelodicMinorScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="melodic-minor"
      displayName="Melodic Minor Scale"
    />
  );
}
