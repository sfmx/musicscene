import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('crazy-on-you');

export default function CrazyOnYouPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="crazy-on-you"
      displayName="Crazy on You"
    />
  );
}

