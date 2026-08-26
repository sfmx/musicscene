import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('effects-pitch');

export default function PitchEffectsPage() {
  return <SongLessonDetailPageTemplate dataKey="effects-pitch" />;
}
