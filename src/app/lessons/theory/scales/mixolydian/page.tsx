import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('mixolydian');
}

export default function MixolydianScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="mixolydian"
      displayName="Mixolydian Scale"
    />
  );
}
