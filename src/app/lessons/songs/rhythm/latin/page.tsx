import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('rhythm-latin');

export default function LatinRhythmPage() {
  return <SongLessonDetailPageTemplate dataKey="rhythm-latin" />;
}
