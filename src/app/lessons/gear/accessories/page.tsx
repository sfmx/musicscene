import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const accessoryTypes = [
  {
    name: 'Guitar Picks',
    icon: <span style={{ fontSize: 32 }}>🪙</span>,
    href: '/lessons/gear/accessories/picks',
    description: 'Essential for most guitarists. Available in many shapes and thicknesses.',
  },
  {
    name: 'Capos',
    icon: <span style={{ fontSize: 32 }}>🧲</span>,
    href: '/lessons/gear/accessories/capos',
    description: 'Change the key of your guitar easily.',
  },
  {
    name: 'Tuners',
    icon: <span style={{ fontSize: 32 }}>🎛️</span>,
    href: '/lessons/gear/accessories/tuners',
    description: 'Keep your instrument in perfect pitch.',
  },
  {
    name: 'Straps',
    icon: <span style={{ fontSize: 32 }}>🪢</span>,
    href: '/lessons/gear/accessories/straps',
    description: 'Play comfortably while standing.',
  },
  {
    name: 'Cables',
    icon: <span style={{ fontSize: 32 }}>🔌</span>,
    href: '/lessons/gear/accessories/cables',
    description: 'Connect your gear reliably.',
  },
  {
    name: 'Cases & Bags',
    icon: <span style={{ fontSize: 32 }}>🎒</span>,
    href: '/lessons/gear/accessories/cases',
    description: 'Protect your instrument on the go.',
  },
  {
    name: 'Stands & Hangers',
    icon: <span style={{ fontSize: 32 }}>🪑</span>,
    href: '/lessons/gear/accessories/stands',
    description: 'Store your instrument safely and accessibly.',
  },
  {
    name: 'Slides',
    icon: <span style={{ fontSize: 32 }}>🧊</span>,
    href: '/lessons/gear/accessories/slides',
    description: 'For blues and unique sounds.',
  },
  {
    name: 'Metronomes',
    icon: <span style={{ fontSize: 32 }}>⏲️</span>,
    href: '/lessons/gear/accessories/metronomes',
    description: 'Practice your timing and rhythm.',
  },
];

export default function AccessoriesPage() {
  return (
    <Layout>
      <Header
        title="Accessories"
        subtitle="Explore essential guitar and music accessories. Click an item to learn more."
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Accessories</h1>
        <p>
          Discover the accessories that make playing, practicing, and performing easier. Click an accessory below to explore its uses and tips.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
          {accessoryTypes.map((item) => (
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
