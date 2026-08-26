import type { Metadata } from 'next';
import GearLessonIndexPageTemplate from '@/components/GearLessons/GearLessonIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Types Guide',
  description: 'Guide to guitar types. Acoustic, electric, bass, classical, 12-string, and baritone guitars compared and explained.',
};

export default function GuitarsIndexPage() {
  return <GearLessonIndexPageTemplate category="guitars" />;
}
