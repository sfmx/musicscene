import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const improvTypes = [
  {
    name: 'Phrasing',
    icon: <span style={{ fontSize: 32 }}>🗣️</span>,
    href: '/lessons/practice/improv/phrasing',
    description: 'Shape your solos with musical sentences and pauses.',
  },
  {
    name: 'Call & Response',
    icon: <span style={{ fontSize: 32 }}>🔁</span>,
    href: '/lessons/practice/improv/call-response',
    description: 'Create conversations in your improvisation.',
  },
  {
    name: 'Motif Development',
    icon: <span style={{ fontSize: 32 }}>🎼</span>,
    href: '/lessons/practice/improv/motif-development',
    description: 'Build solos by repeating and varying short ideas.',
  },
  {
    name: 'Target Notes',
    icon: <span style={{ fontSize: 32 }}>🎯</span>,
    href: '/lessons/practice/improv/target-notes',
    description: 'Land on strong chord tones for melodic solos.',
  },
  {
    name: 'Improvising with Scales',
    icon: <span style={{ fontSize: 32 }}>🎶</span>,
    href: '/lessons/practice/improv/scales',
    description: 'Use major, minor, and modal scales for soloing.',
  },
  {
    name: 'Improvising with Arpeggios',
    icon: <span style={{ fontSize: 32 }}>🔔</span>,
    href: '/lessons/practice/improv/arpeggios',
    description: 'Outline chords and add color to your lines.',
  },
  {
    name: 'Rhythmic Variation',
    icon: <span style={{ fontSize: 32 }}>🥁</span>,
    href: '/lessons/practice/improv/rhythm',
    description: 'Make your solos interesting with rhythmic ideas.',
  },
];

export default function ImprovPage() {
  return (
    <Layout>
      <Header
        title="Improvisation"
        subtitle="Develop your soloing and creative skills. Click a topic to learn more."
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Improvisation Skills</h1>
        <p>
          Learn to create music on the spot. Click a topic below to explore improvisation concepts, exercises, and tips.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
          {improvTypes.map((item) => (
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
