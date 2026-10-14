import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';
import type { ScaleData } from '@/lib/scaleData';
import scaleData from '@/data/scales/phrygian.json';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('phrygian');
}

export default function PhrygianScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="phrygian"
      displayName="Phrygian Mode"
      initialScaleData={scaleData as ScaleData}
    />
  );
}
