import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('analysis-method');

export default function AnalysisMethodPage() {
  return <SongLessonDetailPageTemplate dataKey="analysis-method" />;
}
