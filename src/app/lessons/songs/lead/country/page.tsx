import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('lead-country');

export default function CountryLeadPage() {
  return <SongLessonDetailPageTemplate dataKey="lead-country" />;
}
