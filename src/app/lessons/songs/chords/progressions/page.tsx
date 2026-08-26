import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('chords-progressions');

export default function ProgressionsChordsPage() {
  return <SongLessonDetailPageTemplate dataKey="chords-progressions" />;
}
