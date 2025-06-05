import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const topics = [
  {
    title: 'Verse',
    href: '/lessons/songs/structure/verse',
    icon: '📝',
  },
  {
    title: 'Chorus',
    href: '/lessons/songs/structure/chorus',
    icon: '🎶',
  },
  {
    title: 'Bridge',
    href: '/lessons/songs/structure/bridge',
    icon: '🌉',
  },
  {
    title: 'Intro',
    href: '/lessons/songs/structure/intro',
    icon: '🚪',
  },
  {
    title: 'Outro',
    href: '/lessons/songs/structure/outro',
    icon: '🚦',
  },
  {
    title: 'Pre-Chorus',
    href: '/lessons/songs/structure/pre-chorus',
    icon: '⏭️',
  },
  {
    title: 'Instrumental',
    href: '/lessons/songs/structure/instrumental',
    icon: '🎸',
  },
  {
    title: 'Solo',
    href: '/lessons/songs/structure/solo',
    icon: '🎤',
  },
  {
    title: 'Breakdown',
    href: '/lessons/songs/structure/breakdown',
    icon: '🔻',
  },
];

export default function SongStructurePage() {
  return (
    <Layout>
      <Header
        title="Song Structure"
        subtitle="Explore the building blocks of songs. Click a section to learn more about its role and how to play it."
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
            Click a card above to explore song structure lessons!
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
