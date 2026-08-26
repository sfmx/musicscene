import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('techniques-rhythm');

export default function RhythmTechniquesPage() {
  return <SongLessonDetailPageTemplate dataKey="techniques-rhythm" />;
}
