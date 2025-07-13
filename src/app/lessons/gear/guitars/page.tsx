import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const guitarTypes = [
  {
    name: 'Acoustic',
    icon: <span style={{ fontSize: 32 }}>🎸</span>,
    href: '/lessons/gear/guitars/acoustic',
    description: 'Classic steel-string and nylon-string guitars for unplugged sound.',
  },
  {
    name: 'Electric',
    icon: <span style={{ fontSize: 32 }}>⚡</span>,
    href: '/lessons/gear/guitars/electric',
    description: 'Versatile and expressive. Used in rock, blues, jazz, and more.',
  },
  {
    name: 'Bass',
    icon: <span style={{ fontSize: 32 }}>🎵</span>,
    href: '/lessons/gear/guitars/bass',
    description: 'Provides the low end and groove in bands.',
  },
  {
    name: 'Classical',
    icon: <span style={{ fontSize: 32 }}>🎼</span>,
    href: '/lessons/gear/guitars/classical',
    description: 'Nylon strings, wide neck. Used for classical and flamenco.',
  },
  {
    name: '12-String',
    icon: <span style={{ fontSize: 32 }}>🔔</span>,
    href: '/lessons/gear/guitars/12-string',
    description: 'Rich, shimmering sound. Great for folk and rock.',
  },
  {
    name: 'Baritone',
    icon: <span style={{ fontSize: 32 }}>⬇️</span>,
    href: '/lessons/gear/guitars/baritone',
    description: 'Lower tuning for deep, powerful tones.',
  },
];

export default function GuitarsPage() {
  return (
    <Layout>
      <Header
        title="Guitar Types & Buying Guide"
        subtitle="Master the art of choosing the perfect guitar for your style and budget"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Find Your Perfect Guitar
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              From acoustic to electric, classical to bass - discover the unique characteristics, 
              sound qualities, and ideal uses for each type of guitar.
            </p>
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-semibold text-orange-800 mb-2">What You'll Learn:</h3>
              <ul className="text-orange-700 space-y-1">
                <li>• Sound characteristics and tonal qualities</li>
                <li>• Best genres and playing styles for each type</li>
                <li>• Budget considerations and buying tips</li>
                <li>• Setup and maintenance requirements</li>
                <li>• Recommended models for beginners and pros</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Types Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Guitar Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
            {guitarTypes.map((guitar) => (
              <Link
                key={guitar.name}
                href={guitar.href}
                className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300"
              >
                <div className="mb-4 text-orange-600">{guitar.icon}</div>
                <div className="font-bold text-xl mb-3 text-center">{guitar.name}</div>
                <div className="text-sm text-gray-600 text-center leading-relaxed">
                  {guitar.description}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Quick Comparison Guide</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Guitar Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Best For</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price Range</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Beginner Friendly</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Acoustic</td>
                  <td className="px-6 py-4">Folk, country, singer-songwriter</td>
                  <td className="px-6 py-4">$100 - $3000+</td>
                  <td className="px-6 py-4">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Electric</td>
                  <td className="px-6 py-4">Rock, blues, jazz, metal</td>
                  <td className="px-6 py-4">$150 - $5000+</td>
                  <td className="px-6 py-4">⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Classical</td>
                  <td className="px-6 py-4">Classical, flamenco, fingerstyle</td>
                  <td className="px-6 py-4">$200 - $8000+</td>
                  <td className="px-6 py-4">⭐⭐⭐</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Bass</td>
                  <td className="px-6 py-4">All genres - rhythm section</td>
                  <td className="px-6 py-4">$200 - $4000+</td>
                  <td className="px-6 py-4">⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Buying Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Buying Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">For Beginners</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Start with a budget of $200-500</li>
                <li>• Consider acoustic for simplicity</li>
                <li>• Electric if you love rock/blues</li>
                <li>• Try before you buy if possible</li>
                <li>• Factor in amplifier costs for electric</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">For Intermediate Players</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Upgrade based on your playing style</li>
                <li>• Consider specialized guitars (12-string, etc.)</li>
                <li>• Look for solid wood construction</li>
                <li>• Research pickup types for electrics</li>
                <li>• Don't forget about setup and maintenance</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
