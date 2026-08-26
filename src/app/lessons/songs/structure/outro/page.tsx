import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('structure-outro');

export default function OutroStructurePage() {
  return <SongLessonDetailPageTemplate dataKey="structure-outro" />;
}
