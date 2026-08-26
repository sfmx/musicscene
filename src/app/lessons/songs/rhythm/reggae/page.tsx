import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('rhythm-reggae');

export default function ReggaeRhythmPage() {
  return <SongLessonDetailPageTemplate dataKey="rhythm-reggae" />;
}
