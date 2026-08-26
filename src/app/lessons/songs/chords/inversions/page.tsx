import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('chords-inversions');

export default function InversionsChordsPage() {
  return <SongLessonDetailPageTemplate dataKey="chords-inversions" />;
}
