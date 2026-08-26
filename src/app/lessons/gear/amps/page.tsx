import type { Metadata } from 'next';
import GearLessonIndexPageTemplate from '@/components/GearLessons/GearLessonIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Amplifier Guide',
  description: 'Guide to guitar amplifiers. Tube, solid-state, modeling, hybrid, bass, and mini amps compared and explained.',
};

export default function AmpsIndexPage() {
  return <GearLessonIndexPageTemplate category="amps" />;
}
