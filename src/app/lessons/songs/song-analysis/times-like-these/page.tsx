import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('times-like-these');

export default function TimesLikeThesePage() {
  return (
    <SongAnalysisPageTemplate
      songSlug="times-like-these"
      displayName="Times Like These"
    />
  );
}

