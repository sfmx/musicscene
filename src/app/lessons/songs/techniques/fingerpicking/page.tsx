import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('techniques-fingerpicking');

export default function FingerpickingTechniquesPage() {
  return <SongLessonDetailPageTemplate dataKey="techniques-fingerpicking" />;
}
