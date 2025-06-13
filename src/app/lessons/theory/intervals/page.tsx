import React from 'react';
import Link from 'next/link';
import { FretboardHighlight } from '@/components/FretboardHighlight';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const intervalTypes = [
  {
    name: 'Minor 2nd',
    icon: <span style={{ fontSize: 32 }}>1️⃣</span>,
    href: '/lessons/theory/intervals/minor-2nd',
    description: '1 semitone. Smallest interval in Western music.',
  },
  {
    name: 'Major 2nd',
    icon: <span style={{ fontSize: 32 }}>2️⃣</span>,
    href: '/lessons/theory/intervals/major-2nd',
    description: '2 semitones. Common melodic step.',
  },
  {
    name: 'Perfect 4th',
    icon: <span style={{ fontSize: 32 }}>4️⃣</span>,
    href: '/lessons/theory/intervals/perfect-4th',
    description: '5 semitones. Strong, stable sound.',
  },
  {
    name: 'Perfect 5th',
    icon: <span style={{ fontSize: 32 }}>5️⃣</span>,
    href: '/lessons/theory/intervals/perfect-5th',
    description: '7 semitones. Foundation of power chords.',
  },
  {
    name: 'Octave',
    icon: <span style={{ fontSize: 32 }}>8️⃣</span>,
    href: '/lessons/theory/intervals/octave',
    description: '12 semitones. Same note, higher pitch.',
  },
];

export default function ChordsPage() {
  return (
    <Layout>
      <Header
        title="Intervals"
        subtitle="Explore the building blocks of melody and harmony. Click an interval to learn more."
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Musical Intervals</h1>
        <p>
          An <strong>interval</strong> is the distance between two notes. Click an interval type below to explore its sound, shape, and musical uses.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
          {intervalTypes.map((interval) => (
            <Link
              key={interval.name}
              href={interval.href}
              className="flex flex-col items-center bg-slate-100 rounded-lg p-4 shadow hover:bg-slate-200 transition"
            >
              <div className="mb-2 text-blue-600">{interval.icon}</div>
              <div className="font-bold text-lg">{interval.name}</div>
              <div className="text-sm text-gray-600 text-center">{interval.description}</div>
            </Link>
          ))}
        </div>
        <h2>Examples</h2>
        <p>Compare some common intervals below:</p>
        <h3>Minor 2nd vs Major 2nd</h3>
        <p>Minor 2nd = 1 semitone; Major 2nd = 2 semitones</p>
        <FretboardHighlight root="C4" interval="m2" label="Minor 2nd (1 semitone)" />
        <FretboardHighlight root="C4" interval="M2" label="Major 2nd (2 semitones)" />

        <h3>Perfect 4th & Octave</h3>
        <p>Perfect 4th = 5 semitones; Octave = 12 semitones</p>
        <FretboardHighlight root="C4" interval="P4" label="Perfect 4th (5 semitones)" />
        <FretboardHighlight root="C4" interval="P8" label="Octave (12 semitones)" />
      </main>
      <Footer />
    </Layout>
  );
}
