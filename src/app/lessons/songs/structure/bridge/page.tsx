import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('structure-bridge');

export default function BridgeStructurePage() {
  return <SongLessonDetailPageTemplate dataKey="structure-bridge" />;
}
