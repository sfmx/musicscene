import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('locrian');
}

export default function LocrianScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="locrian"
      displayName="Locrian Mode"
    />
  );
}
