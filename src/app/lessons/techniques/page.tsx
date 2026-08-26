import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

export const metadata: Metadata = {
  title: 'Guitar Techniques Overview',
  description: 'Overview of essential guitar techniques. Picking, strumming, bending, tapping, legato, and more for all skill levels.',
};

export default function GuitarTechniquesPage() {
  return (
    <Layout>
      <Header
        title="Guitar Techniques"
        subtitle="Learn various guitar techniques with interactive notation"
      />
      <main className="prose mx-auto px-4 py-8 max-w-4xl">
        <h1>Guitar Techniques</h1>

        <p>
          This page demonstrates various guitar techniques with interactive notation.
          You can see both the notation and learn the finger positioning for each technique.
        </p>

        <section className="mt-8">
          <h2>Hammer-ons and Pull-offs</h2>

          <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Basic Hammer-on Exercise</h3>
            <p className="mt-2 text-sm text-gray-600">
              Practice hammer-ons using your index and ring fingers. Focus on clean articulation.
            </p>
            <AlphaTexRenderer
              alphaTex={`\\title "Hammer-on Exercise"
\\tempo 80
.
:4 5.3{h} 7.3 5.3{h} 7.3 | 5.3{h} 7.3 5.3{h} 7.3 |
5.2{h} 7.2 5.2{h} 7.2 | 5.2{h} 7.2 5.2{h} 7.2`}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
