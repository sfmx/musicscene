import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ampTypes = [
  {
    name: 'Tube Amps',
    icon: <span style={{ fontSize: 32 }}>🔥</span>,
    href: '/lessons/gear/amps/tube',
    description: 'Warm, dynamic sound. Classic choice for many guitarists.',
  },
  {
    name: 'Solid State Amps',
    icon: <span style={{ fontSize: 32 }}>💡</span>,
    href: '/lessons/gear/amps/solid-state',
    description: 'Reliable, affordable, and lightweight.',
  },
  {
    name: 'Modeling Amps',
    icon: <span style={{ fontSize: 32 }}>🖥️</span>,
    href: '/lessons/gear/amps/modeling',
    description: 'Digital technology for a wide range of tones.',
  },
  {
    name: 'Hybrid Amps',
    icon: <span style={{ fontSize: 32 }}>🔀</span>,
    href: '/lessons/gear/amps/hybrid',
    description: 'Combines tube warmth with solid state reliability.',
  },
  {
    name: 'Bass Amps',
    icon: <span style={{ fontSize: 32 }}>🎵</span>,
    href: '/lessons/gear/amps/bass',
    description: 'Designed for bass frequencies and power.',
  },
  {
    name: 'Mini/Practice Amps',
    icon: <span style={{ fontSize: 32 }}>🔊</span>,
    href: '/lessons/gear/amps/mini',
    description: 'Portable and perfect for home practice.',
  },
];

export default function AmpsPage() {
  return (
    <Layout>
      <Header
        title="Guitar & Bass Amplifiers"
        subtitle="Master the art of amplification - from vintage tubes to modern modeling technology"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Amplifiers: Your Sound, Amplified
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover the world of guitar and bass amplification, from classic tube warmth to cutting-edge digital modeling.
            </p>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-800 mb-2">What You&apos;ll Learn:</h3>
              <ul className="text-amber-700 space-y-1">
                <li>• Different amplifier technologies and their unique characteristics</li>
                <li>• How to choose the right amp for your style and venue</li>
                <li>• Understanding power ratings, speaker configurations, and features</li>
                <li>• Maintenance tips and getting the best tone from your amp</li>
                <li>• Famous amplifiers used by legendary musicians</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Amplifier Types Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Amplifiers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
            {ampTypes.map((amp) => (
              <Link
                key={amp.name}
                href={amp.href}
                className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300"
              >
                <div className="mb-4 text-orange-600">{amp.icon}</div>
                <div className="font-bold text-xl mb-3 text-center">{amp.name}</div>
                <div className="text-sm text-gray-600 text-center leading-relaxed">
                  {amp.description}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Understanding Amplifiers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding Amplifier Basics</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">How Amplifiers Work</h3>
              <p className="text-blue-700 mb-4">
                An amplifier takes the weak electrical signal from your guitar pickup and amplifies it to drive speakers, 
                making your guitar audible and shaping its tone in the process.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Preamp:</strong> Shapes and colors the tone</li>
                <li>• <strong>Power amp:</strong> Provides volume and dynamics</li>
                <li>• <strong>Speaker:</strong> Converts electrical energy to sound waves</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Key Specifications</h3>
              <p className="text-green-700 mb-4">
                Understanding amp specifications helps you choose the right amplifier for your needs and playing situations.
              </p>
              <div className="space-y-2 text-green-700">
                <p>• <strong>Wattage:</strong> Power output and volume capability</p>
                <p>• <strong>Speaker size:</strong> Affects tone and frequency response</p>
                <p>• <strong>Channels:</strong> Clean and distorted sound options</p>
              </div>
            </div>
          </div>
        </section>

        {/* Choosing the Right Amp */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Choosing Your Amplifier</h2>
          
          <div className="bg-yellow-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-3 text-yellow-800">🎯 Consider Your Needs</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Practice at Home</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• 1-15 watts</li>
                  <li>• Headphone output</li>
                  <li>• Built-in effects</li>
                  <li>• Compact size</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Small Venues</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• 15-30 watts</li>
                  <li>• Good clean headroom</li>
                  <li>• Effects loop</li>
                  <li>• Portable but powerful</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Large Venues</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• 50+ watts</li>
                  <li>• Multiple channels</li>
                  <li>• Professional features</li>
                  <li>• Road-worthy construction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tone Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting Great Tone</h2>
          
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-800">Essential Tone Tips</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">EQ Settings</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• Start with all knobs at 12 o'clock</li>
                  <li>• Adjust bass for room acoustics</li>
                  <li>• Use mids for cutting through the mix</li>
                  <li>• Treble adds clarity and sparkle</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Volume Sweet Spots</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• Tube amps sound best when pushed</li>
                  <li>• Find the amp's natural breakup point</li>
                  <li>• Use attenuators for apartment playing</li>
                  <li>• Stage volume vs. recorded volume</li>
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
