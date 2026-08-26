import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('structure-forms');

export default function FormsStructurePage() {
  return <SongLessonDetailPageTemplate dataKey="structure-forms" />;
}
