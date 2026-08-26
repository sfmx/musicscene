import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('rhythm-fingerpicking');

export default function FingerpickingRhythmPage() {
  return <SongLessonDetailPageTemplate dataKey="rhythm-fingerpicking" />;
}
