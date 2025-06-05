import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const effectTypes = [
  {
    name: 'Overdrive',
    icon: <span style={{ fontSize: 32 }}>🔥</span>,
    href: '/lessons/gear/effects/overdrive',
    description: 'Adds warmth and grit. Essential for rock and blues.',
  },
  {
    name: 'Distortion',
    icon: <span style={{ fontSize: 32 }}>⚡</span>,
    href: '/lessons/gear/effects/distortion',
    description: 'Heavier, more aggressive sound. Used in metal and hard rock.',
  },
  {
    name: 'Fuzz',
    icon: <span style={{ fontSize: 32 }}>🌪️</span>,
    href: '/lessons/gear/effects/fuzz',
    description: 'Vintage, buzzy tone. Iconic in psychedelic and classic rock.',
  },
  {
    name: 'Chorus',
    icon: <span style={{ fontSize: 32 }}>🌊</span>,
    href: '/lessons/gear/effects/chorus',
    description: 'Thickens your sound with shimmering modulation.',
  },
  {
    name: 'Delay',
    icon: <span style={{ fontSize: 32 }}>⏱️</span>,
    href: '/lessons/gear/effects/delay',
    description: 'Echoes your notes for rhythmic or ambient effects.',
  },
  {
    name: 'Reverb',
    icon: <span style={{ fontSize: 32 }}>🏛️</span>,
    href: '/lessons/gear/effects/reverb',
    description: 'Adds space and depth. Simulates rooms and halls.',
  },
  {
    name: 'Wah',
    icon: <span style={{ fontSize: 32 }}>👄</span>,
    href: '/lessons/gear/effects/wah',
    description: 'Expressive filter sweep. Famous in funk and rock.',
  },
  {
    name: 'Compressor',
    icon: <span style={{ fontSize: 32 }}>📏</span>,
    href: '/lessons/gear/effects/compressor',
    description: 'Evens out your dynamics for a polished sound.',
  },
  {
    name: 'Tremolo',
    icon: <span style={{ fontSize: 32 }}>🌗</span>,
    href: '/lessons/gear/effects/tremolo',
    description: 'Creates rhythmic volume swells.',
  },
];

export default function EffectsPage() {
  return (
    <Layout>
      <Header
        title="Effects"
        subtitle="Explore different types of guitar effects. Click an effect to learn more."
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Types of Effects</h1>
        <p>
          Discover the world of guitar effects pedals and processors. Click an effect below to explore its sound, uses, and famous examples.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
          {effectTypes.map((effect) => (
            <Link
              key={effect.name}
              href={effect.href}
              className="flex flex-col items-center bg-slate-100 rounded-lg p-4 shadow hover:bg-slate-200 transition"
            >
              <div className="mb-2 text-blue-600">{effect.icon}</div>
              <div className="font-bold text-lg">{effect.name}</div>
              <div className="text-sm text-gray-600 text-center">{effect.description}</div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
