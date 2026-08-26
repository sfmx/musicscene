import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('whole-tone');
}

export default function WholeToneScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate
      scaleSlug="whole-tone"
      displayName="Whole Tone Scale"
    />
  );
}
