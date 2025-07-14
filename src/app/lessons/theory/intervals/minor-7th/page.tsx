"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';
import Link from 'next/link';

export default function Minor7thPage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Minor 7th Interval"
        subtitle="The essential jazz interval - 10 semitones that creates the characteristic sound of dominant 7th chords and blues harmony."
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
        <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-xl p-8 mb-12 border border-rose-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Minor 7th Interval</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The minor 7th is one of the most important intervals in popular music, spanning 10 semitones 
            and creating the essential sound of dominant 7th chords, blues harmony, and jazz standards. 
            This interval adds sophistication and color to basic triads without the harsh dissonance of 
            major 7ths or the strong pull of leading tones. The minor 7th is the backbone of blues, 
            jazz, and rock music, providing the perfect balance between consonance and harmonic interest 
            that makes chord progressions compelling and musical.
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
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>Size:</strong> 10 semitones (5 whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Minor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Bluesy, jazzy, mildly dissonant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>Consonance:</strong> Mild dissonance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>Function:</strong> Creates dominant 7th chords</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>C to Bb:</strong> Classic minor 7th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>G to F:</strong> In G7 chord</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>D to C:</strong> In D7 chord</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>Do to Te:</strong> In mixolydian mode</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dominant 7th Chords */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Dominant 7th Chord Construction</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Essential Chord Tones</h3>
              <div className="space-y-4">
                <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
                  <h4 className="font-semibold text-rose-800 mb-2">Dominant 7th Formula</h4>
                  <p className="text-sm text-rose-700 mb-2">Root + Major 3rd + Perfect 5th + Minor 7th</p>
                  <ul className="text-xs text-rose-600 space-y-1">
                    <li>• G7: G-B-D-F (minor 7th: G to F)</li>
                    <li>• C7: C-E-G-Bb (minor 7th: C to Bb)</li>
                    <li>• D7: D-F#-A-C (minor 7th: D to C)</li>
                  </ul>
                </div>
                <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                  <h4 className="font-semibold text-pink-800 mb-2">Harmonic Function</h4>
                  <p className="text-sm text-pink-700 mb-2">The minor 7th works with the major 3rd to create:</p>
                  <ul className="text-xs text-pink-600 space-y-1">
                    <li>• Tritone between 3rd and 7th</li>
                    <li>• Strong pull toward resolution</li>
                    <li>• Dominant function in progressions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Voice Leading</h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Resolution Patterns</h4>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• <strong>Minor 7th resolves down:</strong> F to E (in G7 to C)</li>
                    <li>• <strong>Major 3rd resolves up:</strong> B to C (in G7 to C)</li>
                    <li>• <strong>Smooth voice leading</strong> in V7-I progressions</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Common Progressions</h4>
                  <ul className="text-sm text-orange-700 space-y-2">
                    <li>• <strong>V7-I:</strong> G7-C, D7-G, A7-D</li>
                    <li>• <strong>Blues progression:</strong> I7-IV7-V7</li>
                    <li>• <strong>ii7-V7-I:</strong> Jazz standard progressions</li>
                  </ul>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Chord Voicings</h3>
              <div className="space-y-4">
                <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
                  <h4 className="font-semibold text-rose-800 mb-2">Open Position 7th Chords</h4>
                  <ul className="text-sm text-rose-700 space-y-2">
                    <li>• <strong>G7:</strong> 320001 (F is the minor 7th)</li>
                    <li>• <strong>D7:</strong> xx0212 (C is the minor 7th)</li>
                    <li>• <strong>A7:</strong> x02020 (G is the minor 7th)</li>
                    <li>• <strong>E7:</strong> 020100 (D is the minor 7th)</li>
                  </ul>
                </div>
                <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                  <h4 className="font-semibold text-pink-800 mb-2">Barre Chord Forms</h4>
                  <ul className="text-sm text-pink-700 space-y-2">
                    <li>• <strong>F7:</strong> 131211 (Eb is the minor 7th)</li>
                    <li>• <strong>B7:</strong> x21202 (A is the minor 7th)</li>
                    <li>• <strong>Moveable shapes</strong> for all keys</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Fretboard Patterns</h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Interval Positions</h4>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• <strong>Same string:</strong> 10 frets apart</li>
                    <li>• <strong>Adjacent strings:</strong> 5 frets up (standard tuning)</li>
                    <li>• <strong>String skipping:</strong> Various comfortable positions</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Scale Context</h4>
                  <ul className="text-sm text-orange-700 space-y-2">
                    <li>• <strong>Mixolydian mode:</strong> Natural minor 7th</li>
                    <li>• <strong>Blues scales:</strong> ♭7 as essential tone</li>
                    <li>• <strong>Dominant arpeggios:</strong> 1-3-5-♭7 patterns</li>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Blues & Rock</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Sweet Home Alabama" - Lynyrd Skynyrd</h4>
                  <p className="text-sm text-gray-600 mb-2">D-C-G progression with prominent D7 chord</p>
                  <p className="text-xs text-gray-500">Classic rock example of dominant 7th in major key</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">12-Bar Blues Progression</h4>
                  <p className="text-sm text-gray-600 mb-2">I7-IV7-V7 pattern uses minor 7ths throughout</p>
                  <p className="text-xs text-gray-500">Foundation of blues and rock music</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Jazz Standards</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Autumn Leaves"</h4>
                  <p className="text-sm text-gray-600 mb-2">ii7-V7-I progressions featuring minor 7th chords</p>
                  <p className="text-xs text-gray-500">Essential jazz harmonic movement</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"All of Me"</h4>
                  <p className="text-sm text-gray-600 mb-2">Dominant 7th chords create harmonic sophistication</p>
                  <p className="text-xs text-gray-500">Standard jazz repertoire with minor 7th intervals</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
              <h3 className="text-lg font-semibold text-rose-800 mb-3">👂 Ear Training</h3>
              <ul className="text-rose-700 text-sm space-y-2">
                <li>• Practice identifying minor 7th intervals</li>
                <li>• Compare with major 7th and octave</li>
                <li>• Listen to dominant 7th chord progressions</li>
                <li>• Study blues and jazz recordings</li>
                <li>• Recognize minor 7th in different contexts</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-pink-700 text-sm space-y-2">
                <li>• Play minor 7ths across all string pairs</li>
                <li>• Practice dominant 7th chord forms</li>
                <li>• Work on 7th chord progressions</li>
                <li>• Study mixolydian mode patterns</li>
                <li>• Practice dominant 7th arpeggios</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-red-700 text-sm space-y-2">
                <li>• Play 12-bar blues with 7th chords</li>
                <li>• Practice ii7-V7-I jazz progressions</li>
                <li>• Compose using dominant 7th harmony</li>
                <li>• Analyze songs with 7th chords</li>
                <li>• Work on voice leading exercises</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Blues & Jazz Context */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Blues & Jazz Context</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Blues Harmony</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Dominant 7th Blues</h4>
                  <p className="text-sm text-gray-600">The minor 7th is essential in blues harmony, creating the characteristic "bluesy" sound in I7-IV7-V7 progressions.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Blue Notes</h4>
                  <p className="text-sm text-gray-600">The ♭7 (minor 7th) is one of the primary blue notes that gives blues its distinctive harmonic flavor.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Jazz Applications</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Circle Progressions</h4>
                  <p className="text-sm text-gray-600">Minor 7th chords are fundamental in jazz circle-of-fifths progressions and ii7-V7-I cadences.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Extended Harmony</h4>
                  <p className="text-sm text-gray-600">The minor 7th serves as the foundation for extended dominant chords (9th, 11th, 13th).</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Intervals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Intervals & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
              <h3 className="font-semibold text-pink-800 mb-2">Major 7th</h3>
              <p className="text-sm text-pink-700 mb-2">11 semitones - brighter, more dissonant</p>
              <p className="text-xs text-pink-600">Half-step difference creates very different harmonic function</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Tritone</h3>
              <p className="text-sm text-purple-700 mb-2">6 semitones - forms tritone with major 3rd</p>
              <p className="text-xs text-purple-600">Combined with 3rd in dominant 7th chords for maximum tension</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 mb-2">Perfect Octave</h3>
              <p className="text-sm text-indigo-700 mb-2">12 semitones - resolution target</p>
              <p className="text-xs text-indigo-600">Minor 7th often resolves down by step to octave</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-8 border border-rose-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Master 7th Chord Harmony</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              The minor 7th is your gateway to sophisticated harmony. Explore how it combines with other intervals to create rich, colorful chords.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/lessons/theory/intervals/major-7th" className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors">
                Compare Major 7th
              </Link>
              <Link href="/lessons/theory/intervals/tritone" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Study Tritone Relationship
              </Link>
              <Link href="/lessons/theory/chords" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Learn 7th Chords
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
