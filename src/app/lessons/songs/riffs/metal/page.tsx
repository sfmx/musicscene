import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('riffs-metal');

export default function MetalRiffsPage() {
  return <SongLessonDetailPageTemplate dataKey="riffs-metal" />;
}
