import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('techniques-advanced-picking');

export default function AdvancedPickingTechniquesPage() {
  return <SongLessonDetailPageTemplate dataKey="techniques-advanced-picking" />;
}
