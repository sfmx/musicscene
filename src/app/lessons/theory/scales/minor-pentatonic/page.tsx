import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('minor-pentatonic');
}

export default function MinorPentatonicAnalysis() {
  return (
    <ScaleAnalysisPageTemplate 
      scaleSlug="minor-pentatonic" 
      displayName="Minor Pentatonic Scale" 
    />
  );
}