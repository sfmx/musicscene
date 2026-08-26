import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('rhythm-syncopation');

export default function SyncopationRhythmPage() {
  return <SongLessonDetailPageTemplate dataKey="rhythm-syncopation" />;
}
