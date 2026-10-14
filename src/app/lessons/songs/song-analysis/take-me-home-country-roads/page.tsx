import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('take-me-home-country-roads');

export default function TakeMeHomeCountryRoadsPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="take-me-home-country-roads"
      displayName="Take Me Home, Country Roads"
    />
  );
}

