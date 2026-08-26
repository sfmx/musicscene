import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('effects-compression');

export default function CompressionEffectsPage() {
  return <SongLessonDetailPageTemplate dataKey="effects-compression" />;
}
