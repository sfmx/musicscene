import type { Metadata } from 'next';
import GearLessonIndexPageTemplate from '@/components/GearLessons/GearLessonIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Accessories Guide',
  description: 'Essential guitar accessories guide. Picks, capos, tuners, straps, cables, cases, stands, slides, and metronomes.',
};

export default function AccessoriesIndexPage() {
  return <GearLessonIndexPageTemplate category="accessories" />;
}
