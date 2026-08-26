import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import SongAnalyticsOverview from '@/components/SongAnalysis/SongAnalyticsOverview';

export const metadata: Metadata = {
  title: 'Song Analysis Analytics',
  description: 'Analytics and statistics for our song analysis collection. Difficulty ratings, genre distribution, and technique coverage.',
};

export default function SongAnalyticsPage() {
  return (
    <Layout>
      <Header
        title="Song Library Analytics"
        subtitle="Insights and statistics about our comprehensive song analysis collection"
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <SongAnalyticsOverview />
      </main>
    </Layout>
  );
}
