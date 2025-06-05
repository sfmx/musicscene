import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const techniqueTypes = [
  {
    name: 'Alternate Picking',
    icon: <span style={{ fontSize: 32 }}>🎸</span>,
    href: '/lessons/practice/technique/alternate-picking',
    description: 'Improve speed and accuracy with up and down strokes.',
  },
  {
    name: 'Legato',
    icon: <span style={{ fontSize: 32 }}>➰</span>,
    href: '/lessons/practice/technique/legato',
    description: 'Smooth, connected notes using hammer-ons and pull-offs.',
  },
  {
    name: 'Sweep Picking',
    icon: <span style={{ fontSize: 32 }}>🧹</span>,
    href: '/lessons/practice/technique/sweep-picking',
    description: 'Play arpeggios quickly with a sweeping motion.',
  },
  {
    name: 'String Skipping',
    icon: <span style={{ fontSize: 32 }}>⏭️</span>,
    href: '/lessons/practice/technique/string-skipping',
    description: 'Jump across strings for wide intervals and unique lines.',
  },
  {
    name: 'Bending & Vibrato',
    icon: <span style={{ fontSize: 32 }}>🎶</span>,
    href: '/lessons/practice/technique/bending-vibrato',
    description: 'Expressive techniques for soulful playing.',
  },
  {
    name: 'Tapping',
    icon: <span style={{ fontSize: 32 }}>👆</span>,
    href: '/lessons/practice/technique/tapping',
    description: 'Use both hands on the fretboard for fast, fluid runs.',
  },
  {
    name: 'Palm Muting',
    icon: <span style={{ fontSize: 32 }}>✋</span>,
    href: '/lessons/practice/technique/palm-muting',
    description: 'Control sustain and add punch to your riffs.',
  },
  {
    name: 'Hybrid Picking',
    icon: <span style={{ fontSize: 32 }}>🤚</span>,
    href: '/lessons/practice/technique/hybrid-picking',
    description: 'Combine pick and fingers for versatile playing.',
  },
];

export default function TechniquePage() {
  return (
    <Layout>
      <Header
        title="Technique"
        subtitle="Master essential and advanced guitar techniques. Click a technique to learn more."
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Guitar Techniques</h1>
        <p>
          Explore and improve your guitar technique. Click a technique below to discover exercises, tips, and examples.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
          {techniqueTypes.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center bg-slate-100 rounded-lg p-4 shadow hover:bg-slate-200 transition"
            >
              <div className="mb-2 text-blue-600">{item.icon}</div>
              <div className="font-bold text-lg">{item.name}</div>
              <div className="text-sm text-gray-600 text-center">{item.description}</div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
