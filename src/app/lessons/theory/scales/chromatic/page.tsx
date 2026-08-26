import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('chromatic');
}

export default function ChromaticScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="chromatic"
      displayName="Chromatic Scale"
    />
  );
}
