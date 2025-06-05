import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const chordTypes = [
  {
    name: 'Major',
    icon: <span style={{ fontSize: 32 }}>🎵</span>,
    href: '/lessons/theory/chords/major',
    description: 'Bright, stable sound. The foundation of harmony.',
  },
  {
    name: 'Minor',
    icon: <span style={{ fontSize: 32 }}>🎶</span>,
    href: '/lessons/theory/chords/minor',
    description: 'Sadder, more emotional than major chords.',
  },
  {
    name: 'Seventh',
    icon: <span style={{ fontSize: 32 }}>7️⃣</span>,
    href: '/lessons/theory/chords/seventh',
    description: 'Adds color and tension. Used in blues and jazz.',
  },
  {
    name: 'Suspended',
    icon: <span style={{ fontSize: 32 }}>🔄</span>,
    href: '/lessons/theory/chords/sus',
    description: 'Neither major nor minor. Creates a sense of suspense.',
  },
  {
    name: 'Diminished',
    icon: <span style={{ fontSize: 32 }}>⬇️</span>,
    href: '/lessons/theory/chords/diminished',
    description: 'Tense and unstable. Used for dramatic effect.',
  },
  {
    name: 'Augmented',
    icon: <span style={{ fontSize: 32 }}>➕</span>,
    href: '/lessons/theory/chords/augmented',
    description: 'Unusual, mysterious sound. Rare but colorful.',
  },
];

export default function ChordsPage() {
  return (
    <Layout>
      <Header
        title="Chords"
        subtitle="Explore chord types, shapes, and their musical uses. Click a chord type to learn more."
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Guitar Chords</h1>
        <p>
          Learn about major, minor, seventh, and other chord types. Click a chord type below to explore shapes, theory, and examples.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
          {chordTypes.map((chord) => (
            <Link
              key={chord.name}
              href={chord.href}
              className="flex flex-col items-center bg-slate-100 rounded-lg p-4 shadow hover:bg-slate-200 transition"
            >
              <div className="mb-2 text-blue-600">{chord.icon}</div>
              <div className="font-bold text-lg">{chord.name}</div>
              <div className="text-sm text-gray-600 text-center">{chord.description}</div>
            </Link>
          ))}
        </div>
        <h2>Chord Examples</h2>
        <p>Here are the major and minor chords in the key of C:</p>
        <SimpleFretboardDiagram chord="C_major" />
        <SimpleFretboardDiagram chord="C_minor" />
      </main>
      <Footer />
    </Layout>
  );
}
