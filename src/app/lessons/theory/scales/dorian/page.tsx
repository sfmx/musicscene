import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('dorian');
}

export default function DorianScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="dorian"
      displayName="Dorian Scale"
    />
  );
}
