import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const topics = [
  {
    title: 'Classic Rock Riffs',
    href: '/lessons/songs/riffs/classic-rock',
    icon: '🤘',
  },
  {
    title: 'Blues Riffs',
    href: '/lessons/songs/riffs/blues',
    icon: '🎷',
  },
  {
    title: 'Metal Riffs',
    href: '/lessons/songs/riffs/metal',
    icon: '⚡',
  },
  {
    title: 'Funk Riffs',
    href: '/lessons/songs/riffs/funk',
    icon: '🕺',
  },
  {
    title: 'Pop Riffs',
    href: '/lessons/songs/riffs/pop',
    icon: '🎤',
  },
  {
    title: 'Jazz Riffs',
    href: '/lessons/songs/riffs/jazz',
    icon: '🎺',
  },
  {
    title: 'Fingerstyle Riffs',
    href: '/lessons/songs/riffs/fingerstyle',
    icon: '🖐️',
  },
  {
    title: 'Slide Riffs',
    href: '/lessons/songs/riffs/slide',
    icon: '🧊',
  },
];

export default function SongRiffsPage() {
  return (
    <Layout>
      <Header
        title="Riffs & Licks"
        subtitle="Explore iconic riffs and licks from every genre. Click a card to learn how to play and use them."
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
            Click a card above to explore riffs and licks!
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
