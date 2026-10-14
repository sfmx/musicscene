import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';
import type { ScaleData } from '@/lib/scaleData';
import scaleData from '@/data/scales/locrian.json';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('locrian');
}

export default function LocrianScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="locrian"
      displayName="Locrian Mode"
      initialScaleData={scaleData as ScaleData}
    />
  );
}
