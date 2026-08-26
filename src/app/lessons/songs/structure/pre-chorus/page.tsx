import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('structure-pre-chorus');

export default function PreChorusStructurePage() {
  return <SongLessonDetailPageTemplate dataKey="structure-pre-chorus" />;
}
