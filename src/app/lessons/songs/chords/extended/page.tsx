import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('chords-extended');

export default function ExtendedChordsPage() {
  return <SongLessonDetailPageTemplate dataKey="chords-extended" />;
}
