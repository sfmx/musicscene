import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('effects-distortion');

export default function DistortionEffectsPage() {
  return <SongLessonDetailPageTemplate dataKey="effects-distortion" />;
}
