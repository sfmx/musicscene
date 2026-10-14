import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';
import type { ScaleData } from '@/lib/scaleData';
import scaleData from '@/data/scales/major.json';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('major');
}

export default function MajorScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="major"
      displayName="Major Scale"
      initialScaleData={scaleData as ScaleData}
    />
  );
}
