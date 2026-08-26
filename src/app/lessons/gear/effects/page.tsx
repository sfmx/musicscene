import type { Metadata } from 'next';
import GearLessonIndexPageTemplate from '@/components/GearLessons/GearLessonIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Effects Pedals Guide',
  description: 'Guide to guitar effects pedals. Overdrive, distortion, fuzz, chorus, delay, reverb, wah, compressor, and tremolo.',
};

export default function EffectsIndexPage() {
  return <GearLessonIndexPageTemplate category="effects" />;
}
