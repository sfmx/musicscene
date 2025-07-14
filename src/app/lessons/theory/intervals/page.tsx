import React from 'react';
import Link from 'next/link';
import { FretboardHighlight } from '@/components/FretboardHighlight';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const intervalTypes = [
  {
    name: 'Unison',
    icon: <span style={{ fontSize: 32 }}>0️⃣</span>,
    href: '/lessons/theory/intervals/unison',
    description: '0 semitones. Same pitch, perfect consonance.',
    semitones: 0,
    quality: 'Perfect',
    color: 'bg-gray-50 border-gray-200 hover:bg-gray-100',
    iconColor: 'text-gray-600',
    consonance: 'Perfect Consonance'
  },
  {
    name: 'Minor 2nd',
    icon: <span style={{ fontSize: 32 }}>1️⃣</span>,
    href: '/lessons/theory/intervals/minor-2nd',
    description: '1 semitone. Smallest interval, creates tension.',
    semitones: 1,
    quality: 'Minor',
    color: 'bg-red-50 border-red-200 hover:bg-red-100',
    iconColor: 'text-red-600',
    consonance: 'Strong Dissonance'
  },
  {
    name: 'Major 2nd',
    icon: <span style={{ fontSize: 32 }}>2️⃣</span>,
    href: '/lessons/theory/intervals/major-2nd',
    description: '2 semitones. Common melodic step.',
    semitones: 2,
    quality: 'Major',
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
    iconColor: 'text-orange-600',
    consonance: 'Mild Dissonance'
  },
  {
    name: 'Minor 3rd',
    icon: <span style={{ fontSize: 32 }}>♭3️⃣</span>,
    href: '/lessons/theory/intervals/minor-3rd',
    description: '3 semitones. Foundation of minor chords.',
    semitones: 3,
    quality: 'Minor',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    iconColor: 'text-blue-600',
    consonance: 'Imperfect Consonance'
  },
  {
    name: 'Major 3rd',
    icon: <span style={{ fontSize: 32 }}>3️⃣</span>,
    href: '/lessons/theory/intervals/major-3rd',
    description: '4 semitones. Foundation of major chords.',
    semitones: 4,
    quality: 'Major',
    color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
    iconColor: 'text-yellow-600',
    consonance: 'Imperfect Consonance'
  },
  {
    name: 'Perfect 4th',
    icon: <span style={{ fontSize: 32 }}>4️⃣</span>,
    href: '/lessons/theory/intervals/perfect-4th',
    description: '5 semitones. Strong, stable sound.',
    semitones: 5,
    quality: 'Perfect',
    color: 'bg-green-50 border-green-200 hover:bg-green-100',
    iconColor: 'text-green-600',
    consonance: 'Perfect Consonance'
  },
  {
    name: 'Tritone',
    icon: <span style={{ fontSize: 32 }}>🔺</span>,
    href: '/lessons/theory/intervals/tritone',
    description: '6 semitones. The "devil\'s interval" with maximum tension.',
    semitones: 6,
    quality: 'Augmented 4th / Diminished 5th',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    iconColor: 'text-purple-600',
    consonance: 'Strong Dissonance'
  },
  {
    name: 'Perfect 5th',
    icon: <span style={{ fontSize: 32 }}>5️⃣</span>,
    href: '/lessons/theory/intervals/perfect-5th',
    description: '7 semitones. Foundation of power chords.',
    semitones: 7,
    quality: 'Perfect',
    color: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
    iconColor: 'text-emerald-600',
    consonance: 'Perfect Consonance'
  },
  {
    name: 'Minor 6th',
    icon: <span style={{ fontSize: 32 }}>♭6️⃣</span>,
    href: '/lessons/theory/intervals/minor-6th',
    description: '8 semitones. Melancholic, expressive interval.',
    semitones: 8,
    quality: 'Minor',
    color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
    iconColor: 'text-indigo-600',
    consonance: 'Imperfect Consonance'
  },
  {
    name: 'Major 6th',
    icon: <span style={{ fontSize: 32 }}>6️⃣</span>,
    href: '/lessons/theory/intervals/major-6th',
    description: '9 semitones. Sweet, warm harmonic color.',
    semitones: 9,
    quality: 'Major',
    color: 'bg-teal-50 border-teal-200 hover:bg-teal-100',
    iconColor: 'text-teal-600',
    consonance: 'Imperfect Consonance'
  },
  {
    name: 'Minor 7th',
    icon: <span style={{ fontSize: 32 }}>♭7️⃣</span>,
    href: '/lessons/theory/intervals/minor-7th',
    description: '10 semitones. Essential for dominant 7th chords.',
    semitones: 10,
    quality: 'Minor',
    color: 'bg-rose-50 border-rose-200 hover:bg-rose-100',
    iconColor: 'text-rose-600',
    consonance: 'Mild Dissonance'
  },
  {
    name: 'Major 7th',
    icon: <span style={{ fontSize: 32 }}>7️⃣</span>,
    href: '/lessons/theory/intervals/major-7th',
    description: '11 semitones. Jazz harmony, sophisticated sound.',
    semitones: 11,
    quality: 'Major',
    color: 'bg-pink-50 border-pink-200 hover:bg-pink-100',
    iconColor: 'text-pink-600',
    consonance: 'Mild Dissonance'
  },
  {
    name: 'Octave',
    icon: <span style={{ fontSize: 32 }}>8️⃣</span>,
    href: '/lessons/theory/intervals/octave',
    description: '12 semitones. Same note, higher pitch.',
    semitones: 12,
    quality: 'Perfect',
    color: 'bg-violet-50 border-violet-200 hover:bg-violet-100',
    iconColor: 'text-violet-600',
    consonance: 'Perfect Consonance'
  },
];

const intervalCategories = [
  { 
    name: 'Perfect Intervals',
    intervals: ['Unison', 'Perfect 4th', 'Perfect 5th', 'Octave'],
    description: 'Stable, consonant intervals that sound complete and resolved.',
    color: 'bg-green-50 border-green-200'
  },
  { 
    name: 'Major Intervals',
    intervals: ['Major 2nd', 'Major 3rd', 'Major 6th', 'Major 7th'],
    description: 'Bright, happy intervals that create major chord qualities.',
    color: 'bg-yellow-50 border-yellow-200'
  },
  { 
    name: 'Minor Intervals',
    intervals: ['Minor 2nd', 'Minor 3rd', 'Minor 6th', 'Minor 7th'],
    description: 'Darker, more emotional intervals that create minor chord qualities.',
    color: 'bg-blue-50 border-blue-200'
  },
  { 
    name: 'Augmented/Diminished',
    intervals: ['Tritone'],
    description: 'Altered intervals that create tension and need resolution.',
    color: 'bg-purple-50 border-purple-200'
  },
];

const musicalApplications = [
  {
    title: 'Melody Construction',
    description: 'Intervals create the shape and character of melodies',
    icon: '🎵',
    examples: ['Stepwise motion uses 2nds', 'Leaps use larger intervals', 'Octave jumps for dramatic effect']
  },
  {
    title: 'Harmony Building',
    description: 'Chords are built by stacking specific intervals',
    icon: '🎼',
    examples: ['Major chords: Root + Major 3rd + Perfect 5th', 'Minor chords: Root + Minor 3rd + Perfect 5th', 'Dominant 7ths add Minor 7th']
  },
  {
    title: 'Tension & Resolution',
    description: 'Dissonant intervals create tension that resolves to consonance',
    icon: '⚡',
    examples: ['Minor 2nd resolves down', 'Major 7th resolves up', 'Tritone resolves outward']
  },
  {
    title: 'Emotional Expression',
    description: 'Different intervals evoke specific emotional responses',
    icon: '❤️',
    examples: ['Minor 3rds sound sad', 'Major 3rds sound happy', 'Perfect 5ths sound powerful']
  }
];

export default function IntervalsPage() {
  return (
    <Layout>
      <Header
        title="Music Theory: Intervals"
        subtitle="Master the fundamental building blocks of melody, harmony, and musical expression"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12">
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
              Understanding Musical Intervals
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Intervals are the distances between notes and the foundation of all music theory. 
              They determine the character of melodies, the quality of chords, and the emotional impact of harmonic progressions. 
              Master intervals to unlock the secrets of musical expression.
            </p>
          </div>

          {/* What Are Intervals */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Are Musical Intervals?</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  A musical interval is the difference in pitch between two notes. Intervals can be measured in semitones (half-steps) 
                  and are classified by their size and quality. Understanding intervals is essential because they determine:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Harmonic Function</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Chord quality (major, minor, diminished, augmented)</li>
                      <li>• Harmonic tension and resolution</li>
                      <li>• Voice leading in progressions</li>
                      <li>• Harmonic extensions and alterations</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Melodic Character</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• Melodic contour and shape</li>
                      <li>• Emotional expression and mood</li>
                      <li>• Phrase structure and direction</li>
                      <li>• Musical style and genre characteristics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interval Categories */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Interval Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {intervalCategories.map((category, index) => (
                  <div key={index} className={`${category.color} rounded-lg p-6 border-2`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.name}</h3>
                    <p className="text-sm text-gray-700 mb-4">{category.description}</p>
                    <div className="space-y-1">
                      {category.intervals.map((interval, intervalIndex) => (
                        <div key={intervalIndex} className="text-xs bg-white bg-opacity-60 rounded px-2 py-1">
                          {interval}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interval Theory Fundamentals */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Interval Theory Fundamentals</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Measuring Intervals</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Semitones (Half-Steps)</h4>
                      <p className="text-sm text-gray-600">The smallest interval in Western music. 12 semitones = 1 octave.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Letter Name Distance</h4>
                      <p className="text-sm text-gray-600">Count the letter names: C to E = 3rd, C to G = 5th.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Quality Classification</h4>
                      <p className="text-sm text-gray-600">Perfect, Major, Minor, Augmented, Diminished.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Consonance & Dissonance</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-800 mb-2">Perfect Consonance</h4>
                      <p className="text-sm text-green-700">Unison, Perfect 4th, Perfect 5th, Octave - Completely stable</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                      <h4 className="font-semibold text-blue-800 mb-2">Imperfect Consonance</h4>
                      <p className="text-sm text-blue-700">Major/Minor 3rds and 6ths - Pleasant but not completely stable</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                      <h4 className="font-semibold text-red-800 mb-2">Dissonance</h4>
                      <p className="text-sm text-red-700">2nds, 7ths, Tritone - Create tension, need resolution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* All Intervals Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Interval Reference</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {intervalTypes.map((interval) => (
                <Link
                  key={interval.name}
                  href={interval.href}
                  className={`${interval.color} border-2 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 group`}
                >
                  <div className="text-center">
                    <div className={`${interval.iconColor} mb-3 group-hover:scale-110 transition-transform`}>
                      {interval.icon}
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{interval.name}</h3>
                    <div className="flex justify-center gap-1 mb-2">
                      <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-gray-100 text-gray-800">
                        {interval.semitones} ST
                      </span>
                    </div>
                    <p className="text-xs text-gray-700 leading-tight mb-2">{interval.description}</p>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      interval.consonance === 'Perfect Consonance' ? 'bg-green-100 text-green-800' :
                      interval.consonance === 'Imperfect Consonance' ? 'bg-blue-100 text-blue-800' :
                      interval.consonance === 'Mild Dissonance' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {interval.consonance}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Musical Applications */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Musical Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {musicalApplications.map((application, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">{application.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{application.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{application.description}</p>
                    <ul className="space-y-2">
                      {application.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Practice Exercises */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Interval Practice Exercises</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">👂 Ear Training</h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>• Practice interval recognition by ear</li>
                    <li>• Start with perfect intervals</li>
                    <li>• Use interval training apps</li>
                    <li>• Sing intervals with solfege</li>
                    <li>• Identify intervals in songs</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">🎸 Fretboard Practice</h3>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>• Find intervals on single strings</li>
                    <li>• Practice cross-string intervals</li>
                    <li>• Use different fingering patterns</li>
                    <li>• Map intervals across positions</li>
                    <li>• Practice interval sequences</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">📝 Theory Application</h3>
                  <ul className="text-purple-800 text-sm space-y-2">
                    <li>• Analyze chord structures</li>
                    <li>• Study interval progressions</li>
                    <li>• Compose with specific intervals</li>
                    <li>• Transcribe melodic intervals</li>
                    <li>• Practice interval math</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Progressions */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Intervals in Common Progressions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Chord Construction</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800">Major Triad</h4>
                      <p className="text-sm text-gray-600">Root + Major 3rd + Perfect 5th</p>
                      <p className="text-xs text-gray-500">Example: C - E - G (0-4-7 semitones)</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800">Minor Triad</h4>
                      <p className="text-sm text-gray-600">Root + Minor 3rd + Perfect 5th</p>
                      <p className="text-xs text-gray-500">Example: C - Eb - G (0-3-7 semitones)</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800">Dominant 7th</h4>
                      <p className="text-sm text-gray-600">Root + Major 3rd + Perfect 5th + Minor 7th</p>
                      <p className="text-xs text-gray-500">Example: C - E - G - Bb (0-4-7-10 semitones)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Melodic Movement</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800">Stepwise Motion</h4>
                      <p className="text-sm text-gray-600">Movement by 2nds (Major and Minor)</p>
                      <p className="text-xs text-gray-500">Smooth, flowing melodic lines</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800">Leaps</h4>
                      <p className="text-sm text-gray-600">Movement by 3rds, 4ths, 5ths</p>
                      <p className="text-xs text-gray-500">More dramatic melodic contours</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800">Large Intervals</h4>
                      <p className="text-sm text-gray-600">6ths, 7ths, Octaves and beyond</p>
                      <p className="text-xs text-gray-500">Bold, expressive melodic statements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get Started */}
          <section className="text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Your Interval Journey</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Begin with the fundamental intervals and gradually work your way through the complete chromatic spectrum. 
                Understanding intervals is key to unlocking harmony, melody, and musical expression.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/lessons/theory/intervals/perfect-5th" className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                  Start with Perfect 5th
                </Link>
                <Link href="/lessons/theory/intervals/major-3rd" className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors">
                  Learn Major 3rd
                </Link>
                <Link href="/lessons/theory/intervals/octave" className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors">
                  Master the Octave
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
