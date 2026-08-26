import type { Metadata } from 'next';
import SongLessonIndexPageTemplate from '@/components/SongLessons/SongLessonIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Lead Guitar in Songs',
  description: 'Study lead guitar techniques in songs. Scales, phrasing, solo construction, intervals, and genre-specific approaches.',
};

export default function LeadIndexPage() {
  return <SongLessonIndexPageTemplate category="lead" />;
}
