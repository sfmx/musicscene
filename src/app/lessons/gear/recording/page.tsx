import type { Metadata } from 'next';
import GearLessonIndexPageTemplate from '@/components/GearLessons/GearLessonIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Recording Equipment Guide',
  description: 'Guide to guitar recording equipment. Audio interfaces, microphones, DAWs, monitors, headphones, preamps, and cables.',
};

export default function RecordingIndexPage() {
  return <GearLessonIndexPageTemplate category="recording" />;
}
