import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('babe-im-gonna-leave-you');

export default function BabeImGonnaLeaveYouPage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="babe-im-gonna-leave-you"
      displayName="Babe I\'m Gonna Leave You"
    />
  );
}
