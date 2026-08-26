import type { Metadata } from 'next';
import SongLessonIndexPageTemplate from '@/components/SongLessons/SongLessonIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Riffs by Genre',
  description: 'Learn iconic guitar riffs across genres. Blues, classic rock, metal, funk, pop, jazz, fingerstyle, and slide riffs.',
};

export default function RiffsIndexPage() {
  return <SongLessonIndexPageTemplate category="riffs" />;
}
