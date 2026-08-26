import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('techniques-bending');

export default function BendingTechniquesPage() {
  return <SongLessonDetailPageTemplate dataKey="techniques-bending" />;
}
