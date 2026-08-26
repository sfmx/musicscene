import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('effects-wah');

export default function WahEffectsPage() {
  return <SongLessonDetailPageTemplate dataKey="effects-wah" />;
}
