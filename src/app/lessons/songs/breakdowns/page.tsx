import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const topics = [
  {
    title: 'Intro Breakdown',
    href: '/lessons/songs/breakdowns/intro',
    icon: '🚪',
  },
  {
    title: 'Verse Breakdown',
    href: '/lessons/songs/breakdowns/verse',
    icon: '📝',
  },
  {
    title: 'Chorus Breakdown',
    href: '/lessons/songs/breakdowns/chorus',
    icon: '🎶',
  },
  {
    title: 'Bridge Breakdown',
    href: '/lessons/songs/breakdowns/bridge',
    icon: '🌉',
  },
  {
    title: 'Solo Breakdown',
    href: '/lessons/songs/breakdowns/solo',
    icon: '🎤',
  },
  {
    title: 'Instrumental Breakdown',
    href: '/lessons/songs/breakdowns/instrumental',
    icon: '🎸',
  },
  {
    title: 'Outro Breakdown',
    href: '/lessons/songs/breakdowns/outro',
    icon: '🚦',
  },
  {
    title: 'Full Song Analysis',
    href: '/lessons/songs/breakdowns/full',
    icon: '🔍',
  },
  {
    title: "We're Not Gonna Take It (Twisted Sister)",
    href: '/lessons/songs/breakdowns/were-not-gonna-take-it',
    icon: '🤘',
  },
];

export default function SongBreakdownsPage() {
  return (
    <Layout>
      <Header
        title="Song Breakdowns"
        subtitle="Analyze every section of a song. Click a card to dive into detailed breakdowns and playing tips."
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
            Click a card above to explore song breakdowns!
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
