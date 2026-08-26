import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('rhythm-palm-muting');

export default function PalmMutingRhythmPage() {
  return <SongLessonDetailPageTemplate dataKey="rhythm-palm-muting" />;
}
