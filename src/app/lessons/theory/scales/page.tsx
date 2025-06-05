import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const scaleTypes = [
  {
    name: 'Major',
    icon: <span style={{ fontSize: 32 }}>🎵</span>,
    href: '/lessons/theory/scales/major',
    description: 'Bright and happy sound. Foundation of Western music.',
  },
  {
    name: 'Minor',
    icon: <span style={{ fontSize: 32 }}>🎶</span>,
    href: '/lessons/theory/scales/minor',
    description: 'Sad or serious mood. Used in many genres.',
  },
  {
    name: 'Pentatonic',
    icon: <span style={{ fontSize: 32 }}>🎸</span>,
    href: '/lessons/theory/scales/pentatonic',
    description: '5-note scale. Essential for solos and riffs.',
  },
  {
    name: 'Blues',
    icon: <span style={{ fontSize: 32 }}>⭐</span>,
    href: '/lessons/theory/scales/blues',
    description: 'Adds a bluesy feel. Great for improvisation.',
  },
  {
    name: 'Modes',
    icon: <span style={{ fontSize: 32 }}>⚪</span>,
    href: '/lessons/theory/scales/modes',
    description: 'Explore Dorian, Phrygian, Lydian, and more.',
  },
];

export default function ScalesPage() {
  return (
    <Layout>
      <Header
        title="Lessons"
        subtitle="Choose your path: theory, song analysis, or gear. Start learning and playing smarter!"
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Guitar Scales</h1>
        <p>
          Learn about major, minor, pentatonic, blues, and modal scales. Click a scale type to explore patterns, theory, and examples.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
          {scaleTypes.map((scale) => (
            <Link
              key={scale.name}
              href={scale.href}
              className="flex flex-col items-center bg-slate-100 rounded-lg p-4 shadow hover:bg-slate-200 transition"
            >
              <div className="mb-2 text-blue-600">{scale.icon}</div>
              <div className="font-bold text-lg">{scale.name}</div>
              <div className="text-sm text-gray-600 text-center">{scale.description}</div>
            </Link>
          ))}
        </div>

      </main>
      <Footer />
    </Layout>
  );
}
