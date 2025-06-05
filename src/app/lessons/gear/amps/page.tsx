import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ampTypes = [
  {
    name: 'Tube Amps',
    icon: <span style={{ fontSize: 32 }}>🔥</span>,
    href: '/lessons/gear/amps/tube',
    description: 'Warm, dynamic sound. Classic choice for many guitarists.',
  },
  {
    name: 'Solid State Amps',
    icon: <span style={{ fontSize: 32 }}>💡</span>,
    href: '/lessons/gear/amps/solid-state',
    description: 'Reliable, affordable, and lightweight.',
  },
  {
    name: 'Modeling Amps',
    icon: <span style={{ fontSize: 32 }}>🖥️</span>,
    href: '/lessons/gear/amps/modeling',
    description: 'Digital technology for a wide range of tones.',
  },
  {
    name: 'Hybrid Amps',
    icon: <span style={{ fontSize: 32 }}>🔀</span>,
    href: '/lessons/gear/amps/hybrid',
    description: 'Combines tube warmth with solid state reliability.',
  },
  {
    name: 'Bass Amps',
    icon: <span style={{ fontSize: 32 }}>🎵</span>,
    href: '/lessons/gear/amps/bass',
    description: 'Designed for bass frequencies and power.',
  },
  {
    name: 'Mini/Practice Amps',
    icon: <span style={{ fontSize: 32 }}>🔊</span>,
    href: '/lessons/gear/amps/mini',
    description: 'Portable and perfect for home practice.',
  },
];

export default function AmpsPage() {
  return (
    <Layout>
      <Header
        title="Amplifiers"
        subtitle="Explore different types of guitar and bass amps. Click an amp type to learn more."
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Types of Amplifiers</h1>
        <p>
          Discover the variety of amplifiers used by guitarists and bassists. Click an amp type below to explore its features, sound, and uses.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
          {ampTypes.map((amp) => (
            <Link
              key={amp.name}
              href={amp.href}
              className="flex flex-col items-center bg-slate-100 rounded-lg p-4 shadow hover:bg-slate-200 transition"
            >
              <div className="mb-2 text-blue-600">{amp.icon}</div>
              <div className="font-bold text-lg">{amp.name}</div>
              <div className="text-sm text-gray-600 text-center">{amp.description}</div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
