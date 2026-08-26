import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('techniques-percussive');

export default function PercussiveTechniquesPage() {
  return <SongLessonDetailPageTemplate dataKey="techniques-percussive" />;
}
