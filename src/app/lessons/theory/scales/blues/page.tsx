import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('blues');
}

export default function BluesScaleAnalysis() {
  return (
    <ScaleAnalysisPageTemplate 
      scaleSlug="blues" 
      displayName="Blues Scale" 
    />
  );
}