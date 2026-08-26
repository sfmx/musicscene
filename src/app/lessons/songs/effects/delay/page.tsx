import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('effects-delay');

export default function DelayEffectsPage() {
  return <SongLessonDetailPageTemplate dataKey="effects-delay" />;
}
