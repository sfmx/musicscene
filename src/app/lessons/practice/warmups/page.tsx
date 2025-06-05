import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const warmupTypes = [
  {
    name: 'Finger Exercises',
    icon: <span style={{ fontSize: 32 }}>🤲</span>,
    href: '/lessons/practice/warmups/finger-exercises',
    description: 'Improve finger strength, dexterity, and independence.',
  },
  {
    name: 'Picking Patterns',
    icon: <span style={{ fontSize: 32 }}>🎸</span>,
    href: '/lessons/practice/warmups/picking-patterns',
    description: 'Warm up your picking hand with alternate and economy picking.',
  },
  {
    name: 'Chord Changes',
    icon: <span style={{ fontSize: 32 }}>🔄</span>,
    href: '/lessons/practice/warmups/chord-changes',
    description: 'Practice smooth and fast transitions between chords.',
  },
  {
    name: 'Scales & Modes',
    icon: <span style={{ fontSize: 32 }}>🎶</span>,
    href: '/lessons/practice/warmups/scales-modes',
    description: 'Run through scales and modes to build speed and accuracy.',
  },
  {
    name: 'Stretching',
    icon: <span style={{ fontSize: 32 }}>🧘</span>,
    href: '/lessons/practice/warmups/stretching',
    description: 'Prevent injury and increase flexibility before playing.',
  },
  {
    name: 'Rhythm Drills',
    icon: <span style={{ fontSize: 32 }}>🥁</span>,
    href: '/lessons/practice/warmups/rhythm-drills',
    description: 'Get your timing tight with metronome and rhythm exercises.',
  },
];

export default function WarmupsPage() {
  return (
    <Layout>
      <Header
        title="Warmups"
        subtitle="Get your hands and mind ready to play. Click a warmup to learn more."
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Warmup Exercises</h1>
        <p>
          Prepare for practice or performance with these warmup routines. Click a warmup below to explore exercises and tips.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
          {warmupTypes.map((item) => (
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
