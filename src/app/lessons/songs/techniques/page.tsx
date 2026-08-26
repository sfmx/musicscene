import type { Metadata } from 'next';
import SongLessonIndexPageTemplate from '@/components/SongLessons/SongLessonIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Techniques in Songs',
  description: 'Learn guitar techniques through songs. Rhythm, lead, fingerpicking, bending, picking, slide, and effects techniques.',
};

export default function TechniquesIndexPage() {
  return <SongLessonIndexPageTemplate category="techniques" />;
}
