"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Major6thPage() {
  return (
    <Layout>
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
            Back to Interval Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Major 6th Interval</h1>
          <p className="text-xl opacity-90 mb-4">
            The major 6th is one of the most beautiful and emotionally resonant intervals in music, spanning 
            9 semitones and creating warm, sweet harmonic color that evokes romance and nostalgia.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">9 Semitones</span>
            <span className="bg-white/20 px-3 py-1 rounded">Sweet & Romantic</span>
            <span className="bg-white/20 px-3 py-1 rounded">Minor 3rd Inversion</span>
            <span className="bg-white/20 px-3 py-1 rounded">Warm Harmony</span>
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
                  <span><strong>Size:</strong> 9 semitones (4½ whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Major</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Sweet, warm, romantic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Consonance:</strong> Moderately consonant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Inversion:</strong> Minor 3rd (3 semitones)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>C to A:</strong> Major 6th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>F to D:</strong> Major 6th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>"My Bonnie Lies Over the Ocean":</strong> Opening leap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>"Nobody Knows the Trouble I've Seen":</strong> "No-bo-dy"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Fretboard Patterns</h3>
              <div className="space-y-4">
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-800 mb-2">9-Fret Pattern</h4>
                  <p className="text-sm text-emerald-700 mb-2">Major 6th = 9 frets apart:</p>
                  <ul className="text-xs text-emerald-600 space-y-1">
                    <li>• Same string: 9 frets apart</li>
                    <li>• Cross-string: root on 6th string, 6th on 4th string (+2 frets)</li>
                    <li>• Open string to 9th fret relationships</li>
                    <li>• Chord inversion patterns</li>
                  </ul>
                </div>
                <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                  <h4 className="font-semibold text-teal-800 mb-2">Major 6th Chord Voicings</h4>
                  <p className="text-sm text-teal-700 mb-2">Adding the 6th to major chords:</p>
                  <ul className="text-xs text-teal-600 space-y-1">
                    <li>• C6: C-E-G-A (root, 3rd, 5th, 6th)</li>
                    <li>• Am6: A-C-E-F# (minor with major 6th)</li>
                    <li>• Jazz and folk chord extensions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Musical Applications</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Major 6th Chords</h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• <strong>Jazz standards:</strong> Sophisticated harmony</li>
                    <li>• <strong>Folk music:</strong> Warm, open sound</li>
                    <li>• <strong>Gospel:</strong> Soulful chord extensions</li>
                    <li>• <strong>Pop ballads:</strong> Romantic atmosphere</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-800 mb-2">Melodic Applications</h4>
                  <ul className="text-sm text-emerald-700 space-y-2">
                    <li>• <strong>Romantic melodies:</strong> Expressive leaps</li>
                    <li>• <strong>Modal interchange:</strong> Dorian mode color</li>
                    <li>• <strong>Country music:</strong> Pedal steel guitar sounds</li>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Classical & Traditional</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"My Bonnie Lies Over the Ocean"</h4>
                  <p className="text-sm text-gray-600 mb-2">Opening major 6th leap creates yearning, expansive feeling</p>
                  <p className="text-xs text-gray-500">Classic example of major 6th's romantic character</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Nobody Knows the Trouble I've Seen"</h4>
                  <p className="text-sm text-gray-600 mb-2">"No-bo-dy" features distinctive major 6th interval</p>
                  <p className="text-xs text-gray-500">Spiritual demonstrates interval's emotional depth</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Music</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Jazz Standards & Ballads</h4>
                  <p className="text-sm text-gray-600 mb-2">Major 6th chords in "The Way You Look Tonight", "Misty"</p>
                  <p className="text-xs text-gray-500">Essential for sophisticated jazz harmony</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Country & Folk Music</h4>
                  <p className="text-sm text-gray-600 mb-2">Pedal steel guitar and major 6th chord progressions</p>
                  <p className="text-xs text-gray-500">Creates characteristic country and folk warmth</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">👂 Ear Training</h3>
              <ul className="text-emerald-700 text-sm space-y-2">
                <li>• Use "My Bonnie" as reference</li>
                <li>• Practice major 6th vs. minor 6th</li>
                <li>• Listen to major 6th chord progressions</li>
                <li>• Study jazz ballad harmony</li>
                <li>• Compare with perfect 5th and minor 7th</li>
              </ul>
            </div>
            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-teal-700 text-sm space-y-2">
                <li>• Master 9-fret same-string 6ths</li>
                <li>• Practice C-A, F-D, G-E intervals</li>
                <li>• Work on major 6th chord shapes</li>
                <li>• Study cross-string 6th patterns</li>
                <li>• Practice major 6th melodic leaps</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Create romantic melodic phrases</li>
                <li>• Study jazz major 6th chord usage</li>
                <li>• Explore country/folk 6th harmony</li>
                <li>• Practice modal interchange (Dorian)</li>
                <li>• Analyze major 6th in favorite songs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Theory & Harmony */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory & Harmonic Function</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Inversion Relationship</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Minor 3rd Inversion</h4>
                  <p className="text-sm text-gray-600">The major 6th inverts to a minor 3rd. When you flip a C-A major 6th, you get A-C (minor 3rd), creating an interesting harmonic duality.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Harmonic Series Position</h4>
                  <p className="text-sm text-gray-600">The major 6th appears later in the harmonic series, giving it a more complex but still consonant character.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Chord Functions</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Major 6th Chords</h4>
                  <p className="text-sm text-gray-600">Add warmth without the pull of dominant 7th chords. Often used as tonic substitutes in jazz and as color chords in folk music.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Modal Color</h4>
                  <p className="text-sm text-gray-600">The major 6th gives Dorian mode its characteristic sound, distinguishing it from natural minor.</p>
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
              <h3 className="font-semibold text-blue-800 mb-2">Minor 6th</h3>
              <p className="text-sm text-blue-700 mb-2">8 semitones - one semitone smaller</p>
              <p className="text-xs text-blue-600">Sad vs. sweet - same interval quality, different emotion</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Perfect 5th</h3>
              <p className="text-sm text-green-700 mb-2">7 semitones - two semitones smaller</p>
              <p className="text-xs text-green-600">Rock solid vs. romantically expansive</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Minor 7th</h3>
              <p className="text-sm text-purple-700 mb-2">10 semitones - one semitone larger</p>
              <p className="text-xs text-purple-600">Sweet vs. bluesy - different harmonic functions</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Interval Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            From sweet romance, explore intervals that add different emotional colors and harmonic functions.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/intervals/minor-6th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">😢</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor 6th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Compare the sad beauty - explore the minor 6th's melancholic character.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Feel the sadness →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/perfect-5th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect 5th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Step back to rock-solid stability - the foundation of power chords.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Find power →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/minor-7th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor 7th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Step up to bluesy sophistication - essential for dominant 7th chords.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Add blues →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
