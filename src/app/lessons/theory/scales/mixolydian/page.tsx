import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';
import type { ScaleData } from '@/lib/scaleData';
import scaleData from '@/data/scales/mixolydian.json';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('mixolydian');
}

export default function MixolydianScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="mixolydian"
      displayName="Mixolydian Scale"
      initialScaleData={scaleData as ScaleData}
    />
  );
}
