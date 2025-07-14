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
    category: 'Distortion'
  },
  {
    name: 'Distortion',
    icon: <span style={{ fontSize: 32 }}>⚡</span>,
    href: '/lessons/gear/effects/distortion',
    description: 'Heavier, more aggressive sound. Used in metal and hard rock.',
    category: 'Distortion'
  },
  {
    name: 'Fuzz',
    icon: <span style={{ fontSize: 32 }}>🌪️</span>,
    href: '/lessons/gear/effects/fuzz',
    description: 'Vintage, buzzy tone. Iconic in psychedelic and classic rock.',
    category: 'Distortion'
  },
  {
    name: 'Chorus',
    icon: <span style={{ fontSize: 32 }}>🌊</span>,
    href: '/lessons/gear/effects/chorus',
    description: 'Thickens your sound with shimmering modulation.',
    category: 'Modulation'
  },
  {
    name: 'Delay',
    icon: <span style={{ fontSize: 32 }}>⏱️</span>,
    href: '/lessons/gear/effects/delay',
    description: 'Echoes your notes for rhythmic or ambient effects.',
    category: 'Time-Based'
  },
  {
    name: 'Reverb',
    icon: <span style={{ fontSize: 32 }}>🏛️</span>,
    href: '/lessons/gear/effects/reverb',
    description: 'Adds space and depth. Simulates rooms and halls.',
    category: 'Time-Based'
  },
  {
    name: 'Wah',
    icon: <span style={{ fontSize: 32 }}>👄</span>,
    href: '/lessons/gear/effects/wah',
    description: 'Expressive filter sweep. Famous in funk and rock.',
    category: 'Filter'
  },
  {
    name: 'Compressor',
    icon: <span style={{ fontSize: 32 }}>📏</span>,
    href: '/lessons/gear/effects/compressor',
    description: 'Evens out your dynamics for a polished sound.',
    category: 'Dynamics'
  },
  {
    name: 'Tremolo',
    icon: <span style={{ fontSize: 32 }}>🌗</span>,
    href: '/lessons/gear/effects/tremolo',
    description: 'Creates rhythmic volume swells.',
    category: 'Modulation'
  },
];

export default function EffectsPage() {
  return (
    <Layout>
      <Header
        title="Guitar Effects & Pedals"
        subtitle="Master the art of sonic sculpting - from classic overdrive to ambient reverb"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Effects: Shape Your Sound
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover the magical world of guitar effects, from subtle enhancement to complete sonic transformation.
            </p>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">What You&apos;ll Learn:</h3>
              <ul className="text-purple-700 space-y-1">
                <li>• How each effect type shapes and colors your guitar tone</li>
                <li>• Proper signal chain order for optimal sound</li>
                <li>• Famous effects used by legendary guitarists</li>
                <li>• Building your first pedalboard and advanced setups</li>
                <li>• Digital vs. analog effects and their characteristics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Effects Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Effects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
            {effectTypes.map((effect) => (
              <Link
                key={effect.name}
                href={effect.href}
                className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300"
              >
                <div className="mb-4 text-purple-600">{effect.icon}</div>
                <div className="font-bold text-xl mb-2 text-center">{effect.name}</div>
                <div className="text-xs text-purple-500 mb-2 uppercase tracking-wide">{effect.category}</div>
                <div className="text-sm text-gray-600 text-center leading-relaxed">
                  {effect.description}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Understanding Effects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding Guitar Effects</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">How Effects Work</h3>
              <p className="text-blue-700 mb-4">
                Effects pedals process your guitar signal in various ways - from simple EQ adjustments 
                to complex digital algorithms that completely transform your sound.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Input:</strong> Receives your guitar signal</li>
                <li>• <strong>Processing:</strong> Alters the signal electronically</li>
                <li>• <strong>Output:</strong> Sends modified signal to amp</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Signal Chain Order</h3>
              <p className="text-green-700 mb-4">
                The order of effects in your signal chain dramatically affects your tone. 
                Here's the traditional order for optimal results.
              </p>
              <div className="space-y-2 text-green-700 text-sm">
                <p>1. <strong>Dynamics:</strong> Compressor, Gate</p>
                <p>2. <strong>Distortion:</strong> Overdrive, Fuzz</p>
                <p>3. <strong>Modulation:</strong> Chorus, Tremolo</p>
                <p>4. <strong>Time:</strong> Delay, Reverb</p>
              </div>
            </div>
          </div>
        </section>

        {/* Building Your Pedalboard */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Building Your Pedalboard</h2>
          
          <div className="bg-yellow-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-3 text-yellow-800">🎯 Essential Effects for Beginners</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Starter Board (3-4 pedals)</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Overdrive/Distortion</li>
                  <li>• Delay</li>
                  <li>• Reverb</li>
                  <li>• Optional: Chorus</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Intermediate Board (5-7 pedals)</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Compressor</li>
                  <li>• Two drive pedals</li>
                  <li>• Modulation effects</li>
                  <li>• Delay and Reverb</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Advanced Board (8+ pedals)</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Multiple drive stages</li>
                  <li>• Specialized effects</li>
                  <li>• Loopers and switchers</li>
                  <li>• Expression pedals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Effects Users */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Legendary Effects Users</h2>
          
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-800">Icons and Their Signature Sounds</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Distortion Masters</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• <strong>Jimi Hendrix:</strong> Fuzz Face, Uni-Vibe</li>
                  <li>• <strong>Tony Iommi:</strong> Heavy distortion, wah</li>
                  <li>• <strong>Kurt Cobain:</strong> Big Muff, chorus</li>
                  <li>• <strong>Jack White:</strong> Vintage fuzz, octave</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Ambient Pioneers</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• <strong>David Gilmour:</strong> Delay, reverb, chorus</li>
                  <li>• <strong>The Edge:</strong> Dotted eighth delays</li>
                  <li>• <strong>Kevin Shields:</strong> Reverse reverb, tremolo</li>
                  <li>• <strong>Jonny Greenwood:</strong> Pitch shifting, loops</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
