"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';
import Link from 'next/link';

export default function Major6thPage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Major 6th Interval"
        subtitle="The sweet interval - 9 semitones that creates warm, romantic harmony and is the inversion of the minor 3rd."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/intervals" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Intervals
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl p-8 mb-12 border border-teal-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Major 6th Interval</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The major 6th is one of the most beautiful and emotionally resonant intervals in music, spanning 
            9 semitones and creating a warm, sweet harmonic color. This interval is the inversion of the 
            minor 3rd, which gives it a complex relationship between brightness and depth. The major 6th 
            appears in major 6th chords, adds romantic character to melodies, and creates some of the most 
            memorable moments in popular music. Its open, expansive sound makes it perfect for creating 
            feelings of longing, romance, and nostalgic beauty across all musical genres.
          </p>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Interval Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Size:</strong> 9 semitones (4½ whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Major</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Sweet, warm, romantic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Consonance:</strong> Imperfect consonance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Function:</strong> Adds warmth, creates 6th chords</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>C to A:</strong> Classic major 6th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>F to D:</strong> In F6 chord</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>G to E:</strong> In G6 chord</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Do to La:</strong> 1st to 6th scale degree</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interval Inversion */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interval Inversion Relationship</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Major 6th ↔ Minor 3rd</h3>
              <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
                <h4 className="font-semibold text-teal-800 mb-3">Inversion Properties</h4>
                <ul className="text-sm text-teal-700 space-y-2">
                  <li>• <strong>Major 6th:</strong> 9 semitones up = 3 semitones down</li>
                  <li>• <strong>Minor 3rd:</strong> 3 semitones up = 9 semitones down</li>
                  <li>• <strong>Combined:</strong> 9 + 3 = 12 semitones (octave)</li>
                  <li>• <strong>Emotional complement:</strong> Bright warmth ↔ Dark beauty</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Musical Implications</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Chord Voicing</h4>
                  <p className="text-sm text-gray-600">A C major chord (C-E-G) inverted becomes E-G-C, where C-A creates a major 6th.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Harmonic Color</h4>
                  <p className="text-sm text-gray-600">The same notes create different emotional effects depending on which note is in the bass.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Chord Construction</h3>
              <div className="space-y-4">
                <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                  <h4 className="font-semibold text-teal-800 mb-2">Major 6th Chords</h4>
                  <p className="text-sm text-teal-700 mb-2">Add the major 6th to basic triads:</p>
                  <ul className="text-xs text-teal-600 space-y-1">
                    <li>• C6: C-E-G-A (major 6th: C to A)</li>
                    <li>• Am6: A-C-E-F# (major 6th: A to F#)</li>
                    <li>• F6: F-A-C-D (major 6th: F to D)</li>
                  </ul>
                </div>
                <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                  <h4 className="font-semibold text-cyan-800 mb-2">Jazz Harmony</h4>
                  <p className="text-sm text-cyan-700 mb-2">Major 6ths in sophisticated voicings:</p>
                  <ul className="text-xs text-cyan-600 space-y-1">
                    <li>• 6/9 chords: Add both 6th and 9th</li>
                    <li>• Minor 6th chords: Minor triad + major 6th</li>
                    <li>• Quartal harmony: Stacked 4ths create 6th relationships</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Fretboard Patterns</h3>
              <div className="space-y-4">
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-800 mb-2">Common Positions</h4>
                  <ul className="text-sm text-emerald-700 space-y-2">
                    <li>• <strong>Same string:</strong> 9 frets apart</li>
                    <li>• <strong>Adjacent strings:</strong> 4 frets up (standard tuning)</li>
                    <li>• <strong>Open chords:</strong> Am6, Em6, Dm6 shapes</li>
                    <li>• <strong>Barre chords:</strong> Adding 6th to moveable shapes</li>
                  </ul>
                </div>
                <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                  <h4 className="font-semibold text-teal-800 mb-2">Scale Applications</h4>
                  <ul className="text-sm text-teal-700 space-y-2">
                    <li>• <strong>Major scale:</strong> 1st to 6th degree relationship</li>
                    <li>• <strong>Pentatonic:</strong> Major 6th intervals within patterns</li>
                    <li>• <strong>Dorian mode:</strong> Natural major 6th in minor context</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Musical Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Examples & Famous Uses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Classical Examples</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Debussy's "Clair de Lune"</h4>
                  <p className="text-sm text-gray-600 mb-2">Beautiful major 6th harmonies create impressionist color</p>
                  <p className="text-xs text-gray-500">Demonstrates the romantic, dreamy quality of major 6ths</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Mozart's Piano Sonatas</h4>
                  <p className="text-sm text-gray-600 mb-2">Graceful melodic major 6ths in classical style</p>
                  <p className="text-xs text-gray-500">Elegant use of 6th intervals for melodic beauty</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Popular Music</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"My Way" - Frank Sinatra</h4>
                  <p className="text-sm text-gray-600 mb-2">Opens with a memorable major 6th leap</p>
                  <p className="text-xs text-gray-500">Classic example of major 6th's emotional impact</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Music Box Dancer" - Frank Mills</h4>
                  <p className="text-sm text-gray-600 mb-2">Built around major 6th chord progressions</p>
                  <p className="text-xs text-gray-500">Showcases the sweet, nostalgic quality of 6th chords</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">👂 Ear Training</h3>
              <ul className="text-teal-700 text-sm space-y-2">
                <li>• Practice major 6th interval recognition</li>
                <li>• Compare with minor 6th and perfect 5th</li>
                <li>• Listen to 6th chord progressions</li>
                <li>• Use "My Way" as reference (opening interval)</li>
                <li>• Study inversion relationship with minor 3rd</li>
              </ul>
            </div>
            <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
              <h3 className="text-lg font-semibold text-cyan-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-cyan-700 text-sm space-y-2">
                <li>• Play major 6ths across all string pairs</li>
                <li>• Practice 6th chord voicings and progressions</li>
                <li>• Work on major scale 1-6 relationships</li>
                <li>• Study jazz 6/9 chord voicings</li>
                <li>• Practice major 6th arpeggios</li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-emerald-700 text-sm space-y-2">
                <li>• Compose melodies featuring major 6th leaps</li>
                <li>• Analyze songs using 6th chords</li>
                <li>• Practice harmonizing with major 6ths</li>
                <li>• Study Dorian mode (natural 6th)</li>
                <li>• Experiment with 6th chord substitutions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emotional Character */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Emotional Character & Expression</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Emotional Qualities</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Romance & Nostalgia</h4>
                  <p className="text-sm text-gray-600">The major 6th creates a bittersweet feeling that's perfect for romantic ballads and nostalgic themes.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Warmth & Comfort</h4>
                  <p className="text-sm text-gray-600">Unlike the brightness of major 3rds, major 6ths provide warmth without being overly cheerful.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Stylistic Applications</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Jazz Standards</h4>
                  <p className="text-sm text-gray-600">Major 6th chords are essential in jazz for their sophisticated, mature harmonic color.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Folk Music</h4>
                  <p className="text-sm text-gray-600">Natural major 6ths in folk melodies create an authentic, earthy quality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Harmonic Function */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Harmonic Function & Theory</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Chord Extensions</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Add6 Chords</h4>
                  <p className="text-sm text-gray-600">Adding the major 6th to triads creates rich, full harmonies without the pull of 7th chords.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">6/9 Chords</h4>
                  <p className="text-sm text-gray-600">Combining 6th and 9th creates sophisticated jazz voicings with open, spacious sound.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Voice Leading</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Smooth Motion</h4>
                  <p className="text-sm text-gray-600">Major 6ths resolve beautifully to perfect 5ths, creating elegant voice leading patterns.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Modal Harmony</h4>
                  <p className="text-sm text-gray-600">Essential in Dorian mode, where the natural 6th distinguishes it from natural minor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Intervals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Intervals & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Minor 3rd</h3>
              <p className="text-sm text-blue-700 mb-2">3 semitones - inversion of major 6th</p>
              <p className="text-xs text-blue-600">Same notes in different octaves create contrasting emotions</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 mb-2">Minor 6th</h3>
              <p className="text-sm text-indigo-700 mb-2">8 semitones - darker, more melancholic</p>
              <p className="text-xs text-indigo-600">Half-step difference creates very different emotional quality</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Perfect 5th</h3>
              <p className="text-sm text-green-700 mb-2">7 semitones - more stable resolution target</p>
              <p className="text-xs text-green-600">Major 6ths often resolve down to perfect 5ths</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Warm Harmony</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              The major 6th adds warmth and sophistication to your harmonic palette. Discover how it relates to other intervals and enhances musical expression.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/lessons/theory/intervals/minor-3rd" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Study Minor 3rd (Inversion)
              </Link>
              <Link href="/lessons/theory/intervals/minor-6th" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Compare Minor 6th
              </Link>
              <Link href="/lessons/theory/intervals/major-7th" className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors">
                Learn Major 7th
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
