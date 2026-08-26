import type { Metadata } from 'next';
import { getScaleMetadata } from '@/lib/seo';
import ScaleAnalysisPageTemplate from '@/components/ScaleAnalysis/ScaleAnalysisPageTemplate';

export async function generateMetadata(): Promise<Metadata> {
  return getScaleMetadata('major-pentatonic');
}

export default function MajorPentatonicAnalysis() {
  return (
    <ScaleAnalysisPageTemplate 
      scaleSlug="major-pentatonic" 
      displayName="Major Pentatonic Scale" 
    />
  );
}