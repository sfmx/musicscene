import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('chords-substitutions');

export default function SubstitutionsChordsPage() {
  return <SongLessonDetailPageTemplate dataKey="chords-substitutions" />;
}
