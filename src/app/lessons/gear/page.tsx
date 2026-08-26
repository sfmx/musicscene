import type { Metadata } from 'next';
import GearRootIndexPageTemplate from '@/components/GearLessons/GearRootIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Gear Guide',
  description: 'Comprehensive guide to guitar gear. Guitars, amps, effects pedals, recording equipment, and accessories reviewed.',
};

export default function GearPage() {
  return <GearRootIndexPageTemplate />;
}
