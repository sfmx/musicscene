import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('rhythm-funk');

export default function FunkRhythmPage() {
  return <SongLessonDetailPageTemplate dataKey="rhythm-funk" />;
}
