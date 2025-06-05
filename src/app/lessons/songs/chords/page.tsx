import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const topics = [
  {
    title: 'Open Chords',
    href: '/lessons/songs/chords/open',
    icon: '🔓',
  },
  {
    title: 'Barre Chords',
    href: '/lessons/songs/chords/barre',
    icon: '➖',
  },
  {
    title: 'Power Chords',
    href: '/lessons/songs/chords/power',
    icon: '⚡',
  },
  {
    title: 'Seventh Chords',
    href: '/lessons/songs/chords/seventh',
    icon: '7️⃣',
  },
  {
    title: 'Suspended Chords',
    href: '/lessons/songs/chords/sus',
    icon: '🔄',
  },
  {
    title: 'Chord Progressions',
    href: '/lessons/songs/chords/progressions',
    icon: '🔗',
  },
  {
    title: 'Chord Inversions',
    href: '/lessons/songs/chords/inversions',
    icon: '🔀',
  },
  {
    title: 'Chord Substitutions',
    href: '/lessons/songs/chords/substitutions',
    icon: '♻️',
  },
];

export default function SongChordsPage() {
  return (
    <Layout>
      <Header
        title="Chords in Songs"
        subtitle="Explore the chords that make up your favorite songs. Click a card to learn more about each chord type and how it's used."
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
            Click a card above to explore chords in songs!
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
