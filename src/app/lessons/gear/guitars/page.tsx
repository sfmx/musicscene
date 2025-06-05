import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const guitarTypes = [
  {
    name: 'Acoustic',
    icon: <span style={{ fontSize: 32 }}>🎸</span>,
    href: '/lessons/theory/guitars/acoustic',
    description: 'Classic steel-string and nylon-string guitars for unplugged sound.',
  },
  {
    name: 'Electric',
    icon: <span style={{ fontSize: 32 }}>⚡</span>,
    href: '/lessons/theory/guitars/electric',
    description: 'Versatile and expressive. Used in rock, blues, jazz, and more.',
  },
  {
    name: 'Bass',
    icon: <span style={{ fontSize: 32 }}>🎵</span>,
    href: '/lessons/theory/guitars/bass',
    description: 'Provides the low end and groove in bands.',
  },
  {
    name: 'Classical',
    icon: <span style={{ fontSize: 32 }}>🎼</span>,
    href: '/lessons/theory/guitars/classical',
    description: 'Nylon strings, wide neck. Used for classical and flamenco.',
  },
  {
    name: '12-String',
    icon: <span style={{ fontSize: 32 }}>🔔</span>,
    href: '/lessons/theory/guitars/12-string',
    description: 'Rich, shimmering sound. Great for folk and rock.',
  },
  {
    name: 'Baritone',
    icon: <span style={{ fontSize: 32 }}>⬇️</span>,
    href: '/lessons/theory/guitars/baritone',
    description: 'Lower tuning for deep, powerful tones.',
  },
];

export default function GuitarsPage() {
  return (
    <Layout>
      <Header
        title="Guitars"
        subtitle="Explore different types of guitars and their unique sounds. Click a guitar type to learn more."
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Types of Guitars</h1>
        <p>
          Discover the variety of guitars used in music. Click a guitar type below to explore its features, sound, and musical uses.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
          {guitarTypes.map((guitar) => (
            <Link
              key={guitar.name}
              href={guitar.href}
              className="flex flex-col items-center bg-slate-100 rounded-lg p-4 shadow hover:bg-slate-200 transition"
            >
              <div className="mb-2 text-blue-600">{guitar.icon}</div>
              <div className="font-bold text-lg">{guitar.name}</div>
              <div className="text-sm text-gray-600 text-center">{guitar.description}</div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
