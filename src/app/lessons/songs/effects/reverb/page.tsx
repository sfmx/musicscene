import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('effects-reverb');

export default function ReverbEffectsPage() {
  return <SongLessonDetailPageTemplate dataKey="effects-reverb" />;
}
