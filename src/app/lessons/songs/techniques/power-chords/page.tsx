import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('techniques-power-chords');

export default function PowerChordsTechniquesPage() {
  return <SongLessonDetailPageTemplate dataKey="techniques-power-chords" />;
}
