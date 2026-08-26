import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('techniques-effects');

export default function EffectsTechniquesPage() {
  return <SongLessonDetailPageTemplate dataKey="techniques-effects" />;
}
