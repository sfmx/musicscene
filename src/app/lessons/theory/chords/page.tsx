import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const chordTypes = [
  {
    name: 'Major Triads',
    symbol: 'M',
    icon: <span style={{ fontSize: 32 }}>☀️</span>,
    href: '/lessons/theory/chords/major',
    description: 'Bright, stable, happy sound. Foundation of Western harmony.',
    formula: '1 - 3 - 5',
    intervals: 'Root + Major 3rd + Perfect 5th',
    examples: ['C Major (C-E-G)', 'G Major (G-B-D)', 'F Major (F-A-C)'],
    color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
    iconColor: 'text-yellow-600',
    mood: 'Happy, Bright, Stable'
  },
  {
    name: 'Minor Triads',
    symbol: 'm',
    icon: <span style={{ fontSize: 32 }}>�</span>,
    href: '/lessons/theory/chords/minor',
    description: 'Darker, more emotional than major. Essential for expression.',
    formula: '1 - ♭3 - 5',
    intervals: 'Root + Minor 3rd + Perfect 5th',
    examples: ['A Minor (A-C-E)', 'E Minor (E-G-B)', 'D Minor (D-F-A)'],
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    iconColor: 'text-blue-600',
    mood: 'Sad, Emotional, Introspective'
  },
  {
    name: 'Dominant 7th',
    symbol: '7',
    icon: <span style={{ fontSize: 32 }}>⚡</span>,
    href: '/lessons/theory/chords/seventh',
    description: 'Adds tension and color. Essential for blues, jazz, and rock.',
    formula: '1 - 3 - 5 - ♭7',
    intervals: 'Major Triad + Minor 7th',
    examples: ['G7 (G-B-D-F)', 'C7 (C-E-G-B♭)', 'A7 (A-C#-E-G)'],
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
    iconColor: 'text-orange-600',
    mood: 'Bluesy, Tense, Driving'
  },
  {
    name: 'Minor 7th',
    symbol: 'm7',
    icon: <span style={{ fontSize: 32 }}>🎷</span>,
    href: '/lessons/theory/chords/minor-seventh',
    description: 'Smooth, jazzy sound. Perfect for sophisticated harmony.',
    formula: '1 - ♭3 - 5 - ♭7',
    intervals: 'Minor Triad + Minor 7th',
    examples: ['Am7 (A-C-E-G)', 'Dm7 (D-F-A-C)', 'Em7 (E-G-B-D)'],
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    iconColor: 'text-purple-600',
    mood: 'Jazzy, Smooth, Sophisticated'
  },
  {
    name: 'Major 7th',
    symbol: 'maj7',
    icon: <span style={{ fontSize: 32 }}>✨</span>,
    href: '/lessons/theory/chords/major-seventh',
    description: 'Dreamy, ethereal quality. Common in jazz and neo-soul.',
    formula: '1 - 3 - 5 - 7',
    intervals: 'Major Triad + Major 7th',
    examples: ['Cmaj7 (C-E-G-B)', 'Fmaj7 (F-A-C-E)', 'Gmaj7 (G-B-D-F#)'],
    color: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
    iconColor: 'text-emerald-600',
    mood: 'Dreamy, Ethereal, Sophisticated'
  },
  {
    name: 'Suspended',
    symbol: 'sus',
    icon: <span style={{ fontSize: 32 }}>🔄</span>,
    href: '/lessons/theory/chords/suspended',
    description: 'Neither major nor minor. Creates suspense and resolution.',
    formula: '1 - 4 - 5 (sus4) or 1 - 2 - 5 (sus2)',
    intervals: 'Root + 4th/2nd + Perfect 5th',
    examples: ['Csus4 (C-F-G)', 'Dsus2 (D-E-A)', 'Gsus4 (G-C-D)'],
    color: 'bg-teal-50 border-teal-200 hover:bg-teal-100',
    iconColor: 'text-teal-600',
    mood: 'Suspended, Floating, Anticipatory'
  },
  {
    name: 'Diminished',
    symbol: 'dim',
    icon: <span style={{ fontSize: 32 }}>⬇️</span>,
    href: '/lessons/theory/chords/diminished',
    description: 'Tense and unstable. Used for dramatic effect and transitions.',
    formula: '1 - ♭3 - ♭5',
    intervals: 'Root + Minor 3rd + Diminished 5th',
    examples: ['Bdim (B-D-F)', 'F#dim (F#-A-C)', 'Gdim (G-B♭-D♭)'],
    color: 'bg-red-50 border-red-200 hover:bg-red-100',
    iconColor: 'text-red-600',
    mood: 'Tense, Dark, Unstable'
  },
  {
    name: 'Augmented',
    symbol: 'aug',
    icon: <span style={{ fontSize: 32 }}>➕</span>,
    href: '/lessons/theory/chords/augmented',
    description: 'Mysterious, whole-tone sound. Creates harmonic ambiguity.',
    formula: '1 - 3 - #5',
    intervals: 'Root + Major 3rd + Augmented 5th',
    examples: ['Caug (C-E-G#)', 'Faug (F-A-C#)', 'Gaug (G-B-D#)'],
    color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
    iconColor: 'text-indigo-600',
    mood: 'Mysterious, Ambiguous, Floating'
  },
  {
    name: 'Extended Chords',
    symbol: '9, 11, 13',
    icon: <span style={{ fontSize: 32 }}>🎹</span>,
    href: '/lessons/theory/chords/extended',
    description: 'Add 9ths, 11ths, and 13ths for rich, complex harmony.',
    formula: 'Add 9, 11, or 13 to basic triads and 7ths',
    intervals: 'Basic chord + upper extensions',
    examples: ['Cmaj9 (C-E-G-B-D)', 'Am11 (A-C-E-G-D)', 'G13 (G-B-D-F-E)'],
    color: 'bg-rose-50 border-rose-200 hover:bg-rose-100',
    iconColor: 'text-rose-600',
    mood: 'Complex, Rich, Modern'
  }
];

const chordFunctions = [
  {
    title: 'Tonic Function',
    description: 'Provides stability and resolution',
    icon: '🏠',
    chords: ['I (Major)', 'vi (Minor)', 'iii (Minor)'],
    feeling: 'Home, Rest, Stability',
    color: 'bg-green-50 border-green-200'
  },
  {
    title: 'Subdominant Function',
    description: 'Creates departure from tonic',
    icon: '🚶',
    chords: ['IV (Major)', 'ii (Minor)', 'vi (Minor)'],
    feeling: 'Movement, Departure',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Dominant Function',
    description: 'Creates tension that wants to resolve',
    icon: '⚡',
    chords: ['V (Major)', 'V7 (Dom7)', 'vii° (Diminished)'],
    feeling: 'Tension, Pull, Resolution',
    color: 'bg-orange-50 border-orange-200'
  }
];

const commonProgressions = [
  {
    name: 'I-V-vi-IV',
    description: 'The most popular progression in Western music',
    example: 'C-G-Am-F',
    genres: ['Pop', 'Rock', 'Country'],
    songs: ['"Let It Be"', '"Don\'t Stop Believin\'"', '"Someone Like You"']
  },
  {
    name: 'ii-V-I',
    description: 'The cornerstone of jazz harmony',
    example: 'Dm7-G7-Cmaj7',
    genres: ['Jazz', 'R&B', 'Neo-Soul'],
    songs: ['"All The Things You Are"', '"Autumn Leaves"', '"Fly Me To The Moon"']
  },
  {
    name: 'I-vi-ii-V',
    description: 'Circle of fifths progression',
    example: 'C-Am-Dm-G',
    genres: ['Jazz', 'Doo-wop', 'Ballads'],
    songs: ['"Heart and Soul"', '"Blue Moon"', '"Stand By Me"']
  },
  {
    name: 'vi-IV-I-V',
    description: 'Emotional pop progression',
    example: 'Am-F-C-G',
    genres: ['Pop', 'Alternative', 'Indie'],
    songs: ['"Zombie"', '"Basket Case"', '"What\'s Up?"']
  }
];

const practiceExercises = [
  {
    title: 'Chord Construction',
    description: 'Build chords from scales and intervals',
    steps: [
      'Choose a root note',
      'Apply the chord formula',
      'Practice on different strings',
      'Play in different positions'
    ]
  },
  {
    title: 'Progression Practice',
    description: 'Master smooth chord transitions',
    steps: [
      'Start with simple triads',
      'Practice common progressions',
      'Focus on smooth voice leading',
      'Add rhythm and strumming'
    ]
  },
  {
    title: 'Function Analysis',
    description: 'Understand how chords work in context',
    steps: [
      'Identify chord functions',
      'Analyze favorite songs',
      'Practice cadences',
      'Experiment with substitutions'
    ]
  }
];

export default function ChordsPage() {
  return (
    <Layout>
      <Header
        title="Music Theory: Chords"
        subtitle="Master harmony through systematic understanding of chord construction, function, and application"
      />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12">
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
              Understanding Musical Chords
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Chords are the harmonic foundation of music, created by combining three or more notes played simultaneously. 
              They provide the emotional context, establish key centers, and create the harmonic progressions that drive songs forward. 
              Master chord theory to unlock the secrets of harmony and composition.
            </p>
          </div>

          {/* What Are Chords */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Are Musical Chords?</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  A chord is a combination of three or more different notes played together. Chords are built by stacking intervals, 
                  most commonly thirds, creating harmonic structures that support melodies and establish musical context. Understanding chords involves:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-amber-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-amber-900 mb-4">Chord Construction</h3>
                    <ul className="text-amber-800 space-y-2">
                      <li>• Root note (foundation of the chord)</li>
                      <li>• Intervals that determine chord quality</li>
                      <li>• Extensions that add color and complexity</li>
                      <li>• Inversions that change bass note and voicing</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-orange-900 mb-4">Harmonic Function</h3>
                    <ul className="text-orange-800 space-y-2">
                      <li>• Tonic function (stability and rest)</li>
                      <li>• Dominant function (tension and resolution)</li>
                      <li>• Subdominant function (departure and movement)</li>
                      <li>• Modal interchange and substitutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chord Functions */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Harmonic Functions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {chordFunctions.map((func, index) => (
                  <div key={index} className={`${func.color} rounded-lg p-6 border-2`}>
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{func.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900">{func.title}</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-4 text-center">{func.description}</p>
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-gray-800">Common Chords:</div>
                      {func.chords.map((chord, chordIndex) => (
                        <div key={chordIndex} className="text-xs bg-white bg-opacity-60 rounded px-2 py-1">
                          {chord}
                        </div>
                      ))}
                      <div className="text-xs font-semibold text-gray-800 mt-3">Feeling:</div>
                      <div className="text-xs bg-white bg-opacity-60 rounded px-2 py-1">
                        {func.feeling}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Chord Construction Theory */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Chord Construction Fundamentals</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Building Triads</h3>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">Major Triad Formula</h4>
                      <p className="text-yellow-700 text-sm">Root + Major 3rd + Perfect 5th</p>
                      <p className="text-yellow-600 text-xs mt-1">Example: C Major = C + E + G</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Minor Triad Formula</h4>
                      <p className="text-blue-700 text-sm">Root + Minor 3rd + Perfect 5th</p>
                      <p className="text-blue-600 text-xs mt-1">Example: A Minor = A + C + E</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-2">Diminished Triad Formula</h4>
                      <p className="text-red-700 text-sm">Root + Minor 3rd + Diminished 5th</p>
                      <p className="text-red-600 text-xs mt-1">Example: B Diminished = B + D + F</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Seventh Chords</h3>
                  <div className="space-y-4">
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-800 mb-2">Dominant 7th</h4>
                      <p className="text-orange-700 text-sm">Major Triad + Minor 7th</p>
                      <p className="text-orange-600 text-xs mt-1">Creates strong pull to tonic</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Minor 7th</h4>
                      <p className="text-purple-700 text-sm">Minor Triad + Minor 7th</p>
                      <p className="text-purple-600 text-xs mt-1">Smooth, jazzy sound</p>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-4">
                      <h4 className="font-semibold text-emerald-800 mb-2">Major 7th</h4>
                      <p className="text-emerald-700 text-sm">Major Triad + Major 7th</p>
                      <p className="text-emerald-600 text-xs mt-1">Dreamy, ethereal quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chord Types Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Chord Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chordTypes.map((chord) => (
                <Link
                  key={chord.name}
                  href={chord.href}
                  className={`${chord.color} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className="flex flex-col h-full">
                    <div className="text-center mb-4">
                      <div className={`${chord.iconColor} mb-2`}>
                        {chord.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{chord.name}</h3>
                      <div className="text-sm font-mono text-gray-600 bg-white bg-opacity-60 rounded px-2 py-1 inline-block">
                        {chord.symbol}
                      </div>
                    </div>
                    
                    <div className="flex-grow space-y-3">
                      <p className="text-gray-700 text-sm leading-relaxed">{chord.description}</p>
                      
                      <div className="bg-white bg-opacity-60 rounded p-3 space-y-2">
                        <div>
                          <span className="text-xs font-semibold text-gray-700">Formula:</span>
                          <div className="text-xs text-gray-600 font-mono">{chord.formula}</div>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-gray-700">Intervals:</span>
                          <div className="text-xs text-gray-600">{chord.intervals}</div>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-gray-700">Mood:</span>
                          <div className="text-xs text-gray-600">{chord.mood}</div>
                        </div>
                      </div>
                      
                      <div className="bg-white bg-opacity-60 rounded p-2">
                        <div className="text-xs font-semibold text-gray-700 mb-1">Examples:</div>
                        {chord.examples.map((example, index) => (
                          <div key={index} className="text-xs text-gray-600 font-mono">
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Common Progressions */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Chord Progressions</h2>
              <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                Chord progressions are the backbone of songs. These fundamental patterns appear across all genres 
                and provide the harmonic framework for countless compositions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commonProgressions.map((progression, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900 font-mono">{progression.name}</h3>
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {progression.example}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{progression.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">Genres:</h4>
                        <div className="space-y-1">
                          {progression.genres.map((genre, genreIndex) => (
                            <span key={genreIndex} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full inline-block mr-1">
                              {genre}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">Famous Songs:</h4>
                        <div className="space-y-1">
                          {progression.songs.map((song, songIndex) => (
                            <div key={songIndex} className="text-xs text-gray-600">
                              {song}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Practice Exercises */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Practice Exercises</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {practiceExercises.map((exercise, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{exercise.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{exercise.description}</p>
                    <div className="space-y-2">
                      {exercise.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start">
                          <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                            {stepIndex + 1}
                          </div>
                          <div className="text-sm text-gray-700">{step}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Harmonic Philosophy */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Language of Harmony</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Chords are more than just combinations of notes—they're emotional vocabularies that communicate feelings, 
                  create expectations, and guide listeners through musical journeys. Each chord type has its own character, 
                  and understanding these personalities helps you choose the right harmonic tools for your musical expression.
                </p>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Daily Chord Study Routine</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Theory Practice (15 min)</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Build chords from different roots</li>
                        <li>• Practice chord formulas and intervals</li>
                        <li>• Analyze chord functions in songs</li>
                        <li>• Study voice leading between chords</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Practical Application (15 min)</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Practice common chord progressions</li>
                        <li>• Work on smooth chord transitions</li>
                        <li>• Experiment with different voicings</li>
                        <li>• Apply chords to favorite songs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
