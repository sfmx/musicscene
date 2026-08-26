import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('riffs-slide');

export default function SlideRiffsPage() {
  return <SongLessonDetailPageTemplate dataKey="riffs-slide" />;
}
