import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('rhythm-shuffle');

export default function ShuffleRhythmPage() {
  return <SongLessonDetailPageTemplate dataKey="rhythm-shuffle" />;
}
