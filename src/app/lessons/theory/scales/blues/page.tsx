import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';
import type { ScaleData } from '@/lib/scaleData';
import scaleData from '@/data/scales/blues.json';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('blues');
}

export default function BluesScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="blues"
      displayName="Blues Scale"
      initialScaleData={scaleData as ScaleData}
    />
  );
}
