import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('need-you-tonight');

export default function NeedYouTonightPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="need-you-tonight"
      displayName="Need You Tonight"
    />
  );
}
