"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Perfect5thPage() {
  return (
    <Layout>
      <Header
        title="Perfect 5th Interval"
        subtitle="The most consonant interval after the octave - 7 semitones that forms the foundation of power chords and harmonic relationships."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/intervals" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Interval Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Perfect 5th Interval</h1>
          <p className="text-xl opacity-90 mb-4">
            The perfect 5th is the most consonant interval after the octave, spanning 7 semitones 
            and creating a pure, stable, and harmonious sound that forms the foundation of all harmony.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">7 Semitones</span>
            <span className="bg-white/20 px-3 py-1 rounded">Perfect Consonance</span>
            <span className="bg-white/20 px-3 py-1 rounded">Power Chords</span>
            <span className="bg-white/20 px-3 py-1 rounded">Harmonic Foundation</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Interval Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Size:</strong> 7 semitones (3½ whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Perfect</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Pure, stable, powerful</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Function:</strong> Harmonic foundation, chord building</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>C to G</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>G to D</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>D to A</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>All power chord intervals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Visual Examples Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Visual Examples
          </h2>
          
          {/* Power Chord Connection */}
          <div className="bg-white rounded-xl border border-emerald-200 shadow-sm p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Power Chord Foundation</h3>
            <div className="space-y-6">
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <h4 className="text-lg font-medium text-emerald-800 mb-3">Two-String Power Chords</h4>
                <p className="text-emerald-700 text-sm mb-2">
                  <strong>Root + 5th:</strong> The basic power chord structure
                </p>
                <p className="text-emerald-700 text-sm mb-2">
                  <strong>6th + 5th strings:</strong> Root on 6th, 5th on 5th string (same fret)
                </p>
                <p className="text-emerald-700 text-sm mb-2">
                  <strong>5th + 4th strings:</strong> Root on 5th, 5th on 4th string (same fret)
                </p>
                <p className="text-emerald-700 text-sm">
                  <strong>Exception:</strong> Adjust for G-B string interval difference
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="text-lg font-medium text-blue-800 mb-3">Seven-Fret Pattern</h4>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Same String:</strong> 7 frets apart creates a perfect 5th
                </p>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Example:</strong> 3rd fret to 10th fret on same string
                </p>
                <p className="text-blue-700 text-sm">
                  <strong>Octave relationship:</strong> 5th + 4th = octave (12 frets)
                </p>
              </div>
            </div>
          </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Power Chords</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Basic Power Chords</h4>
                  <p className="text-sm text-green-700 mb-2">Perfect 5th intervals form the foundation of rock music:</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• E5: E (6th string) + B (5th string)</li>
                    <li>• A5: A (5th string) + E (4th string)</li>
                    <li>• G5: G (6th string, 3rd fret) + D (5th string, 3rd fret)</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-800 mb-2">Fretboard Patterns</h4>
                  <p className="text-sm text-emerald-700 mb-2">Perfect 5ths across string pairs:</p>
                  <ul className="text-xs text-emerald-600 space-y-1">
                    <li>• Same string: 7 frets apart</li>
                    <li>• Adjacent strings: Same fret (except G-B strings)</li>
                    <li>• Power chord shapes: Moveable patterns</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Harmonic Applications</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Chord Construction</h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• <strong>Triads:</strong> Root + 3rd + 5th = complete chord</li>
                    <li>• <strong>Sus4 chords:</strong> Root + 4th + 5th</li>
                    <li>• <strong>Add9 chords:</strong> 5th provides stability for extensions</li>
                    <li>• <strong>Open tunings:</strong> Natural 5ths in alternate tunings</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Lead Guitar</h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• <strong>Pentatonic scales:</strong> Built on 5th relationships</li>
                    <li>• <strong>Melodic intervals:</strong> Strong, stable leaps</li>
                    <li>• <strong>Harmonics:</strong> Natural harmonics at 7th fret</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
                  staves={[{
                    id: 'rock-riff',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q (0/6.0/5) (3/6.3/5) (0/6.0/5) (5/6.5/5) | :q (3/6.3/5) (0/6.0/5) (3/6.3/5) (0/6.0/5)`,
                    width: 400,
                    scale: 0.9,
                    title: 'Classic rock power chord progression'
                  }]}
                />
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Classical & Traditional Uses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Triadic harmony:</strong> Essential component of major/minor chords</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Melodic intervals:</strong> Strong, heroic melodic leaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Voice leading:</strong> Stable harmonic foundation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Cadential patterns:</strong> Dominant to tonic relationships</span>
                </li>
              </ul>

              <div className="mt-6">
                <MusicScore
                  title="Classical Perfect 5th"
                  staves={[{
                    id: 'classical-5th',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (3/6.3/5.0/4.3/3) | :w (3/6.3/5.2/4.3/3)`,
                    width: 400,
                    scale: 0.9,
                    title: 'G major chord - perfect 5th provides stability'
                  }]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Guitar-Specific Techniques */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Guitar-Specific Techniques
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Power Chord Variations</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Root position:</strong> Root on lower string, 5th above</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Octave doubling:</strong> Adding octave of root above 5th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Multiple string sets:</strong> Different positions for same chord</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Single-note emphasis:</strong> Playing 5ths as melodic intervals</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fingering Strategies</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Index finger barre:</strong> Cover both strings with one finger</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Two-finger approach:</strong> Index and ring for clarity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Moveable shapes:</strong> Same fingering, different positions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>String muting:</strong> Control unwanted string noise</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ear Training Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Ear Training & Recognition
          </h2>
          
          <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Recognition Tips</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-blue-800 mb-3">Sound Characteristics</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Extremely consonant and stable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Pure, clear harmonic relationship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Strong, powerful sound</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Almost sounds like one note</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-blue-800 mb-3">Practice Exercises</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Practice power chords extensively</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Use seven-fret pattern on single strings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Compare with tritone (diminished 5th)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Listen to major chord progressions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Memory Aid</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Think of the perfect 5th as the "Star Wars" theme interval - the opening two notes 
                create that heroic, powerful sound. It's also the foundation of every power chord 
                in rock music. The interval is so consonant that it barely sounds like two separate 
                notes, creating a sense of unity and strength. "Twinkle, Twinkle, Little Star" 
                also starts with a perfect 5th, demonstrating its natural, stable quality.
              </p>
            </div>
          </div>
        </section>

        {/* Famous Examples Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Famous Musical Examples
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Classical & Traditional</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>"Star Wars" Main Theme</strong><br />
                  <span className="text-gray-600 text-sm">Opening perfect 5th creates heroic character</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>"Twinkle, Twinkle, Little Star"</strong><br />
                  <span className="text-gray-600 text-sm">First two notes demonstrate perfect 5th</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Bach's Well-Tempered Clavier</strong><br />
                  <span className="text-gray-600 text-sm">Perfect 5ths in harmonic progressions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rock & Popular Music</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>Classic rock power chords</strong><br />
                  <span className="text-gray-600 text-sm">Foundation of rock rhythm guitar</span>
                </li>
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>Metal riffs</strong><br />
                  <span className="text-gray-600 text-sm">Low tuned perfect 5ths for heavy sound</span>
                </li>
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>Folk and country music</strong><br />
                  <span className="text-gray-600 text-sm">Strong melodic intervals and harmony</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Exercises Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Practice Exercises
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 1: Power Chord Fundamentals</h3>
              <p className="text-gray-700 mb-4">
                Master the basic power chord shapes using perfect 5th intervals.
              </p>
              <MusicScore
                title="Power Chord Practice"
                staves={[{
                  id: 'power-chord-fundamentals',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (0/6.0/5) | :w (3/6.3/5) | :w (5/6.5/5) | :w (7/6.7/5)`,
                  width: 550,
                  scale: 1.0,
                  title: 'E5, G5, A5, B5 power chords'
                }]}
              />
            </div>

            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 2: Seven-Fret Pattern</h3>
              <p className="text-gray-700 mb-4">
                Practice finding perfect 5ths using the seven-fret rule on single strings.
              </p>
              <MusicScore
                title="Seven-Fret Perfect 5th Pattern"
                staves={[{
                  id: 'seven-fret-pattern',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h 0/6 7/6 | :h 3/6 10/6 | :h 0/5 7/5 | :h 2/5 9/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'Perfect 5ths seven frets apart'
                }]}
              />
            </div>

            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 3: Melodic Perfect 5ths</h3>
              <p className="text-gray-700 mb-4">
                Practice perfect 5ths as melodic intervals to develop ear recognition.
              </p>
              <MusicScore
                title="Melodic Perfect 5th Exercise"
                staves={[{
                  id: 'melodic-5ths',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 3/6 3/5 3/6 3/5 | :q 0/5 0/4 0/5 0/4 | :q 2/5 2/4 2/5 2/4 | :q 3/5 3/4 3/5 3/4`,
                  width: 550,
                  scale: 1.0,
                  title: 'Melodic perfect 5th patterns'
                }]}
              />
            </div>

            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 4: Power Chord Progressions</h3>
              <p className="text-gray-700 mb-4">
                Combine perfect 5ths in common rock progressions to develop musical context.
              </p>
              <MusicScore
                title="Power Chord Progression"
                staves={[{
                  id: 'power-progressions',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (0/6.0/5) | :w (5/6.5/5) | :w (3/6.3/5) | :w (0/6.0/5) |
notes :w (2/5.2/4) | :w (0/5.0/4) | :w (3/5.3/4) | :w (2/5.2/4)`,
                  width: 550,
                  scale: 1.0,
                  title: 'E5-A5-G5-E5 and B5-A5-C5-B5 progressions'
                }]}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
