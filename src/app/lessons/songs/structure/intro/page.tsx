import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('structure-intro');

export default function IntroStructurePage() {
  return <SongLessonDetailPageTemplate dataKey="structure-intro" />;
}
