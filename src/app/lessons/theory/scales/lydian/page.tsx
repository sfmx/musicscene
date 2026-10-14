import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';
import type { ScaleData } from '@/lib/scaleData';
import scaleData from '@/data/scales/lydian.json';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('lydian');
}

export default function LydianScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="lydian"
      displayName="Lydian Mode"
      initialScaleData={scaleData as ScaleData}
    />
  );
}
