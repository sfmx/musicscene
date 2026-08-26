import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('chords-secondary-dominants');

export default function SecondaryDominantsChordsPage() {
  return <SongLessonDetailPageTemplate dataKey="chords-secondary-dominants" />;
}
