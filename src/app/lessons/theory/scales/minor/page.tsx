import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('minor');
}

export default function MinorScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate 
      scaleSlug="minor" 
      displayName="Natural Minor Scale" 
    />
  );
}