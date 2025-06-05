import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const recordingTypes = [
  {
    name: 'Audio Interfaces',
    icon: <span style={{ fontSize: 32 }}>🎚️</span>,
    href: '/lessons/gear/recording/interfaces',
    description: 'Connect your instruments and microphones to your computer.',
  },
  {
    name: 'Microphones',
    icon: <span style={{ fontSize: 32 }}>🎤</span>,
    href: '/lessons/gear/recording/microphones',
    description: 'Capture vocals and instruments with clarity.',
  },
  {
    name: 'DAWs',
    icon: <span style={{ fontSize: 32 }}>💻</span>,
    href: '/lessons/gear/recording/daw',
    description: 'Digital Audio Workstations for recording and mixing.',
  },
  {
    name: 'Monitors & Headphones',
    icon: <span style={{ fontSize: 32 }}>🎧</span>,
    href: '/lessons/gear/recording/monitors-headphones',
    description: 'Hear your music accurately while mixing and recording.',
  },
  {
    name: 'Preamps',
    icon: <span style={{ fontSize: 32 }}>🔊</span>,
    href: '/lessons/gear/recording/preamps',
    description: 'Boost microphone and instrument signals for recording.',
  },
  {
    name: 'Cables & Accessories',
    icon: <span style={{ fontSize: 32 }}>🔌</span>,
    href: '/lessons/gear/recording/cables',
    description: 'Essential connections and tools for your studio.',
  },
];

export default function RecordingPage() {
  return (
    <Layout>
      <Header
        title="Recording Gear"
        subtitle="Explore essential recording equipment. Click a category to learn more."
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Recording Equipment</h1>
        <p>
          Discover the gear you need to record music at home or in the studio. Click a category below to explore its uses, features, and tips.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
          {recordingTypes.map((item) => (
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
