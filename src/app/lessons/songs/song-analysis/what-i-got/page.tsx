import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('what-i-got');

export default function WhatIGotAnalysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="what-i-got"
      displayName="What I Got"
    />
  );
}
