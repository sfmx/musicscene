import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const scaleTypes = [
  {
    name: 'Major Scale',
    icon: <span style={{ fontSize: 32 }}>☀️</span>,
    href: '/lessons/theory/scales/major',
    description: 'The foundation of Western music. Bright, happy, and optimistic sound.',
    formula: 'W-W-H-W-W-W-H',
    degrees: 7,
    color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
    iconColor: 'text-yellow-600',
    mood: 'Bright & Happy'
  },
  {
    name: 'Natural Minor',
    icon: <span style={{ fontSize: 32 }}>�</span>,
    href: '/lessons/theory/scales/minor',
    description: 'Emotional and melancholic. The relative minor of the major scale.',
    formula: 'W-H-W-W-H-W-W',
    degrees: 7,
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    iconColor: 'text-blue-600',
    mood: 'Sad & Emotional'
  },
  {
    name: 'Major Pentatonic',
    icon: <span style={{ fontSize: 32 }}>🎸</span>,
    href: '/lessons/theory/scales/major-pentatonic',
    description: 'Five-note scale perfect for beginners. Easy to use and sounds great.',
    formula: '1-2-3-5-6',
    degrees: 5,
    color: 'bg-green-50 border-green-200 hover:bg-green-100',
    iconColor: 'text-green-600',
    mood: 'Simple & Pleasant'
  },
  {
    name: 'Minor Pentatonic',
    icon: <span style={{ fontSize: 32 }}>�</span>,
    href: '/lessons/theory/scales/minor-pentatonic',
    description: 'The most popular guitar scale. Essential for rock, blues, and solos.',
    formula: '1-♭3-4-5-♭7',
    degrees: 5,
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
    iconColor: 'text-orange-600',
    mood: 'Powerful & Expressive'
  },
  {
    name: 'Blues Scale',
    icon: <span style={{ fontSize: 32 }}>🎵</span>,
    href: '/lessons/theory/scales/blues',
    description: 'Minor pentatonic with added blue note. Perfect for blues and rock.',
    formula: '1-♭3-4-♭5-5-♭7',
    degrees: 6,
    color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
    iconColor: 'text-indigo-600',
    mood: 'Bluesy & Soulful'
  },
  {
    name: 'Dorian Mode',
    icon: <span style={{ fontSize: 32 }}>🎹</span>,
    href: '/lessons/theory/scales/dorian',
    description: 'Minor scale with raised 6th. Jazz and folk favorite.',
    formula: 'W-H-W-W-W-H-W',
    degrees: 7,
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    iconColor: 'text-purple-600',
    mood: 'Jazz & Folk'
  },
  {
    name: 'Mixolydian Mode',
    icon: <span style={{ fontSize: 32 }}>🎭</span>,
    href: '/lessons/theory/scales/mixolydian',
    description: 'Major scale with flat 7th. Dominant and bluesy sound.',
    formula: 'W-W-H-W-W-H-W',
    degrees: 7,
    color: 'bg-rose-50 border-rose-200 hover:bg-rose-100',
    iconColor: 'text-rose-600',
    mood: 'Dominant & Bluesy'
  },
  {
    name: 'Harmonic Minor',
    icon: <span style={{ fontSize: 32 }}>✨</span>,
    href: '/lessons/theory/scales/harmonic-minor',
    description: 'Minor scale with raised 7th. Exotic, classical sound.',
    formula: 'W-H-W-W-H-W½-H',
    degrees: 7,
    color: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
    iconColor: 'text-emerald-600',
    mood: 'Exotic & Classical'
  }
];

const scaleCategories = [
  { 
    name: 'Major Scales',
    scales: ['Major Scale', 'Major Pentatonic', 'Mixolydian Mode'],
    description: 'Bright, happy scales that form the foundation of major key music.',
    color: 'bg-yellow-50 border-yellow-200'
  },
  { 
    name: 'Minor Scales',
    scales: ['Natural Minor', 'Minor Pentatonic', 'Dorian Mode', 'Harmonic Minor'],
    description: 'Emotional, darker scales that create minor key characteristics.',
    color: 'bg-blue-50 border-blue-200'
  },
  { 
    name: 'Pentatonic Scales',
    scales: ['Major Pentatonic', 'Minor Pentatonic'],
    description: 'Five-note scales that are easy to learn and universally useful.',
    color: 'bg-green-50 border-green-200'
  },
  { 
    name: 'Blues & Rock',
    scales: ['Blues Scale', 'Minor Pentatonic', 'Mixolydian Mode'],
    description: 'Essential scales for rock, blues, and contemporary guitar styles.',
    color: 'bg-orange-50 border-orange-200'
  },
];

const musicalApplications = [
  {
    title: 'Melody Creation',
    description: 'Scales provide the notes for creating memorable melodies',
    icon: '🎵',
    examples: ['Pentatonic scales for catchy hooks', 'Major scales for happy melodies', 'Minor scales for emotional themes']
  },
  {
    title: 'Solo Construction',
    description: 'Guitar solos are built using scale patterns and techniques',
    icon: '🎸',
    examples: ['Minor pentatonic for rock solos', 'Blues scale for expressive bends', 'Modes for jazz improvisation']
  },
  {
    title: 'Chord Relationships',
    description: 'Scales determine which chords work together harmonically',
    icon: '🎼',
    examples: ['Major scale creates major key progressions', 'Natural minor for minor key harmony', 'Modes for modal interchange']
  },
  {
    title: 'Genre Characteristics',
    description: 'Different scales define the sound of musical genres',
    icon: '🎭',
    examples: ['Blues scale for blues/rock', 'Dorian mode for jazz/folk', 'Harmonic minor for classical/metal']
  }
];

export default function ScalesPage() {
  return (
    <Layout>
      <Header
        title="Music Theory: Scales"
        subtitle="Master the patterns that create melody, harmony, and musical expression"
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              href="/lessons/theory" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Back to Music Theory
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🎼</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Understanding Musical Scales
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Scales are organized sequences of notes that form the foundation of melody, harmony, and musical expression. 
              They provide the raw material for composing, improvising, and understanding how music works. 
              Master scales to unlock the full potential of the guitar fretboard and musical creativity.
            </p>
          </div>

          {/* What Are Scales */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Are Musical Scales?</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  A musical scale is a sequence of notes arranged in ascending or descending order by pitch. Scales are defined by their 
                  interval patterns and determine the character and mood of music. Understanding scales is essential because they control:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Melodic Foundation</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• Available notes for melodies and solos</li>
                      <li>• Characteristic sound and mood</li>
                      <li>• Phrase structure and direction</li>
                      <li>• Genre-specific melodic styles</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Harmonic Structure</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Chord progressions and relationships</li>
                      <li>• Key centers and tonal gravity</li>
                      <li>• Harmonic tension and resolution</li>
                      <li>• Modal interchange possibilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Scale Categories */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Scale Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {scaleCategories.map((category, index) => (
                  <div key={index} className={`${category.color} rounded-lg p-6 border-2`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.name}</h3>
                    <p className="text-sm text-gray-700 mb-4">{category.description}</p>
                    <div className="space-y-1">
                      {category.scales.map((scale, scaleIndex) => (
                        <div key={scaleIndex} className="text-xs bg-white bg-opacity-60 rounded px-2 py-1">
                          {scale}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Musical Applications */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Musical Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {musicalApplications.map((app, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="text-3xl mb-4 text-center">{app.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{app.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 text-center">{app.description}</p>
                    <div className="space-y-2">
                      {app.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="text-xs text-gray-500 bg-white rounded px-3 py-2">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* All Scales */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Guitar Scales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {scaleTypes.map((scale) => (
                  <Link
                    key={scale.name}
                    href={scale.href}
                    className={`${scale.color} rounded-lg border-2 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
                  >
                    <div className="text-center mb-4">
                      <div className={`text-4xl mb-2 ${scale.iconColor}`}>{scale.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                        {scale.name}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 text-center">{scale.description}</p>
                      <div className="bg-white bg-opacity-60 rounded p-3 space-y-2">
                        <div className="text-xs text-gray-500">
                          <span className="font-medium">Formula:</span> {scale.formula}
                        </div>
                        <div className="text-xs text-gray-500">
                          <span className="font-medium">Notes:</span> {scale.degrees}
                        </div>
                        <div className="text-xs text-gray-500">
                          <span className="font-medium">Mood:</span> {scale.mood}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Get Started */}
          <section>
            <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Start Your Scale Journey</h2>
              <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                Begin with the fundamental scales and gradually expand your knowledge. 
                Understanding scales is essential for melody, improvisation, and musical expression.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/lessons/theory/scales/major-pentatonic" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Start with Pentatonic</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Begin with the most beginner-friendly scale - easy to learn and sounds great.
                    </p>
                    <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                      Simple foundation →
                    </span>
                  </div>
                </Link>
                
                <Link href="/lessons/theory/scales/major" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                      <span className="text-2xl">☀️</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Master Major Scale</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Learn the foundation of Western music theory and harmony.
                    </p>
                    <span className="text-yellow-600 font-medium text-sm group-hover:text-yellow-700">
                      Build understanding →
                    </span>
                  </div>
                </Link>
                
                <Link href="/lessons/theory/scales/blues" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                      <span className="text-2xl">🎸</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore Blues Scale</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Add blues flavor and emotional expression to your playing.
                    </p>
                    <span className="text-indigo-600 font-medium text-sm group-hover:text-indigo-700">
                      Feel the blues →
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
