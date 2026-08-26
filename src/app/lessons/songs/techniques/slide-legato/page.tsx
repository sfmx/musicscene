import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('techniques-slide-legato');

export default function SlideLegatoTechniquesPage() {
  return <SongLessonDetailPageTemplate dataKey="techniques-slide-legato" />;
}
