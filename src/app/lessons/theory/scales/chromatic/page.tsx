import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';
import type { ScaleData } from '@/lib/scaleData';
import scaleData from '@/data/scales/chromatic.json';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('chromatic');
}

export default function ChromaticScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="chromatic"
      displayName="Chromatic Scale"
      initialScaleData={scaleData as ScaleData}
    />
  );
}
