"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Minor7thPage() {
  return (
    <Layout>
      <Header
        title="Minor 7th Interval"
        subtitle="The foundation of jazz harmony - 10 semitones that creates a smooth, mellow dissonance essential for sophisticated musical expression."
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
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Minor 7th Interval</h1>
          <p className="text-xl opacity-90 mb-4">
            The minor 7th is the cornerstone of jazz harmony, spanning 10 semitones and creating 
            a smooth, mellow dissonance that's essential for sophisticated chord progressions and modern musical expression.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">10 Semitones</span>
            <span className="bg-white/20 px-3 py-1 rounded">Jazz Foundation</span>
            <span className="bg-white/20 px-3 py-1 rounded">Smooth Dissonance</span>
            <span className="bg-white/20 px-3 py-1 rounded">Dominant Function</span>
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
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Size:</strong> 10 semitones (5 whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Minor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Smooth, mellow dissonance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Consonance:</strong> Mild dissonance, stable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Function:</strong> Creates tension that resolves smoothly</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>C to Bb:</strong> Classic minor 7th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>G7 chord:</strong> G-B-D-F (G to F)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Mixolydian mode:</strong> 7th degree relationship</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>"Somewhere":</strong> Opening interval from West Side Story</span>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Dominant 7th Chords</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">V7 Function</h4>
                  <p className="text-sm text-blue-700 mb-2">Minor 7th in dominant 7th chords:</p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• G7: G-B-D-F (minor 7th: G to F)</li>
                    <li>• C7: C-E-G-Bb (minor 7th: C to Bb)</li>
                    <li>• Essential for blues and jazz progressions</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">Minor 7th Chords</h4>
                  <p className="text-sm text-indigo-700 mb-2">Minor 7th in minor seventh chords:</p>
                  <ul className="text-xs text-indigo-600 space-y-1">
                    <li>• Am7: A-C-E-G (minor 7th: A to G)</li>
                    <li>• Dm7: D-F-A-C (minor 7th: D to C)</li>
                    <li>• Jazz ii-V-I progressions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Fretboard Patterns</h3>
              <div className="space-y-4">
                <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                  <h4 className="font-semibold text-cyan-800 mb-2">Common Positions</h4>
                  <ul className="text-sm text-cyan-700 space-y-2">
                    <li>• <strong>Same string:</strong> 10 frets apart</li>
                    <li>• <strong>Adjacent strings:</strong> 5th fret difference</li>
                    <li>• <strong>Chord voicings:</strong> Various fingerings</li>
                    <li>• <strong>Scale patterns:</strong> Mixolydian relationships</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Jazz Guitar Techniques</h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• <strong>Drop 2 voicings:</strong> Smooth voice leading</li>
                    <li>• <strong>Chord-melody:</strong> Harmonic sophistication</li>
                    <li>• <strong>Bebop scales:</strong> Dominant 7th applications</li>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Classical & Broadway</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Somewhere" - West Side Story</h4>
                  <p className="text-sm text-gray-600 mb-2">Opening leap is a perfect minor 7th interval</p>
                  <p className="text-xs text-gray-500">Most recognizable minor 7th in popular culture</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Bach's Chorale Harmonizations</h4>
                  <p className="text-sm text-gray-600 mb-2">Minor 7th in dominant 7th chord resolutions</p>
                  <p className="text-xs text-gray-500">Demonstrates classical voice leading principles</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Jazz & Blues</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Jazz Standards</h4>
                  <p className="text-sm text-gray-600 mb-2">Minor 7th chords throughout jazz repertoire</p>
                  <p className="text-xs text-gray-500">Foundation of jazz harmonic language</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Blues Progressions</h4>
                  <p className="text-sm text-gray-600 mb-2">Dominant 7th chords with minor 7th intervals</p>
                  <p className="text-xs text-gray-500">Essential for authentic blues sound</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">👂 Ear Training</h3>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• Use "Somewhere" melody as reference</li>
                <li>• Practice minor 7th vs major 7th recognition</li>
                <li>• Listen to dominant 7th chord qualities</li>
                <li>• Study Mixolydian mode relationships</li>
                <li>• Analyze jazz progressions with minor 7ths</li>
              </ul>
            </div>
            <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
              <h3 className="text-lg font-semibold text-cyan-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-cyan-700 text-sm space-y-2">
                <li>• Practice minor 7th intervals across strings</li>
                <li>• Work on dominant 7th chord shapes</li>
                <li>• Study minor 7th chord voicings</li>
                <li>• Practice minor 7th melodic leaps</li>
                <li>• Work on jazz chord progressions</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Compose with minor 7th intervals</li>
                <li>• Analyze jazz standard chord progressions</li>
                <li>• Practice ii-V-I progressions</li>
                <li>• Study blues form with 7th chords</li>
                <li>• Work on chord-melody arrangements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interval Relationships */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interval Relationships & Theory</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Inversion Relationship</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Major 2nd Inversion</h4>
                  <p className="text-sm text-gray-600">Minor 7th is the inversion of major 2nd: 10 + 2 = 12 semitones (octave)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Resolution Tendency</h4>
                  <p className="text-sm text-gray-600">Minor 7th resolves down by step, major 2nd resolves up by step</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Harmonic Function</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Dominant Function</h4>
                  <p className="text-sm text-gray-600">Essential component of V7 chords creating tension toward tonic</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Jazz Extensions</h4>
                  <p className="text-sm text-gray-600">Foundation for more complex jazz harmony and chord extensions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Intervals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Intervals & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Major 2nd</h3>
              <p className="text-sm text-green-700 mb-2">2 semitones - inversion of minor 7th</p>
              <p className="text-xs text-green-600">Stepwise motion vs large leap relationship</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h3 className="font-semibold text-amber-800 mb-2">Major 7th</h3>
              <p className="text-sm text-amber-700 mb-2">11 semitones - one semitone larger</p>
              <p className="text-xs text-amber-600">Compare minor vs major 7th tensions</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Minor 6th</h3>
              <p className="text-sm text-purple-700 mb-2">8 semitones - both add sophisticated color</p>
              <p className="text-xs text-purple-600">Similar harmonic complexity and jazz applications</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Interval Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the minor 7th, explore its relationships with other intervals and harmonic applications.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/intervals/major-2nd" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major 2nd</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Study the inversion relationship between major 2nd and minor 7th intervals.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Study inversions →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/major-7th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major 7th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Compare the smooth minor 7th against the sharp tension of the major 7th.
                </p>
                <span className="text-amber-600 font-medium text-sm group-hover:text-amber-700">
                  Feel the tension →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/perfect-5th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect 5th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Return to the stable perfect 5th to understand consonance vs dissonance.
                </p>
                <span className="text-indigo-600 font-medium text-sm group-hover:text-indigo-700">
                  Compare stability →
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
