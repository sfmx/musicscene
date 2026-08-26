import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('breakdowns-verse');

export default function VerseBreakdownsPage() {
  return <SongLessonDetailPageTemplate dataKey="breakdowns-verse" />;
}
