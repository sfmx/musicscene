import type { Metadata } from 'next';
import SongDiscoveryHub from '@/components/SongAnalysis/SongDiscoveryHub';

export const metadata: Metadata = {
  title: 'Song Analysis Collection',
  description: 'In-depth guitar analysis of iconic songs. Complete breakdowns with chords, tabs, techniques, and practice guides.',
};

export default function SongAnalysisPage() {
  return <SongDiscoveryHub />;
}
