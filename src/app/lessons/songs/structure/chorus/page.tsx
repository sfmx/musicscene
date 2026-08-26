import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('structure-chorus');

export default function ChorusStructurePage() {
  return <SongLessonDetailPageTemplate dataKey="structure-chorus" />;
}
