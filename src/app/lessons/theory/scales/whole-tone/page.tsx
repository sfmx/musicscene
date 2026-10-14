import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';
import type { ScaleData } from '@/lib/scaleData';
import scaleData from '@/data/scales/whole-tone.json';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('whole-tone');
}

export default function WholeToneScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="whole-tone"
      displayName="Whole Tone Scale"
      initialScaleData={scaleData as ScaleData}
    />
  );
}
