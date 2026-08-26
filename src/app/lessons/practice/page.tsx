import type { Metadata } from 'next';
import CategoryRootPageTemplate from '@/components/CategoryRoot/CategoryRootPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Practice Exercises',
  description: 'Structured guitar practice exercises. Warmups, technique drills, and improvisation exercises for all skill levels.',
};

export default function PracticePage() {
  return <CategoryRootPageTemplate category="practice" />;
}
