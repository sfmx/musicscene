import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const topics = [
  {
    title: 'Alternate Picking',
    href: '/lessons/techniques/alternate-picking',
    icon: '🎸',
  },
  {
    title: 'Legato',
    href: '/lessons/techniques/legato',
    icon: '➰',
  },
  {
    title: 'Sweep Picking',
    href: '/lessons/techniques/sweep-picking',
    icon: '🧹',
  },
  {
    title: 'String Skipping',
    href: '/lessons/techniques/string-skipping',
    icon: '⏭️',
  },
  {
    title: 'Bending & Vibrato',
    href: '/lessons/techniques/bending-vibrato',
    icon: '🎶',
  },
  {
    title: 'Tapping',
    href: '/lessons/techniques/tapping',
    icon: '👆',
  },
  {
    title: 'Palm Muting',
    href: '/lessons/techniques/palm-muting',
    icon: '✋',
  },
  {
    title: 'Hybrid Picking',
    href: '/lessons/techniques/hybrid-picking',
    icon: '🤚',
  },
];

export default function TechniquesPage() {
  return (
    <Layout>
      <Header
        title="Technique Lessons"
        subtitle="Master essential and advanced guitar techniques. Click a card to explore lessons, exercises, and tips."
      />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="flex flex-col items-center justify-center space-y-2 p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-5xl">{t.icon}</div>
              <div className="text-lg font-medium">{t.title}</div>
            </Link>
          ))}
        </section>
        <section className="mt-16 text-center">
          <p className="text-gray-700">
            Click a card above to explore technique lessons!
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
