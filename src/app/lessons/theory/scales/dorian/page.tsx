import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';
import type { ScaleData } from '@/lib/scaleData';
import scaleData from '@/data/scales/dorian.json';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('dorian');
}

export default function DorianScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="dorian"
      displayName="Dorian Scale"
      initialScaleData={scaleData as ScaleData}
    />
  );
}
