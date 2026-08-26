import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('structure-transitions');

export default function TransitionsStructurePage() {
  return <SongLessonDetailPageTemplate dataKey="structure-transitions" />;
}
