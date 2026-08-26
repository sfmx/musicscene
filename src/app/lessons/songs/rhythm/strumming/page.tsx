import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('rhythm-strumming');

export default function StrummingRhythmPage() {
  return <SongLessonDetailPageTemplate dataKey="rhythm-strumming" />;
}
