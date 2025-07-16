'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import Link from 'next/link';

export default function DiminishedChordsPage() {
  return (
    <Layout>
      <Header
        title="Diminished Chord Theory"
        subtitle="Master the dark, tense, and dramatically powerful world of diminished chords - essential tools for sophisticated harmony and dramatic effect."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/chords" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Chord Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-700 to-purple-800 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Diminished Chords</h1>
          <p className="text-xl opacity-90 mb-4">
            Diminished chords create maximum tension and instability, making them powerful tools for drama, transition, and sophisticated harmony.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Maximum Tension</span>
            <span className="bg-white/20 px-3 py-1 rounded">Unstable Harmony</span>
            <span className="bg-white/20 px-3 py-1 rounded">Dramatic Effect</span>
            <span className="bg-white/20 px-3 py-1 rounded">Jazz Essential</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What Are Diminished Chords?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Definition:</strong> Chords built from stacked minor thirds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Triad Formula:</strong> Root + Minor 3rd + Diminished 5th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>7th Formula:</strong> Root + Minor 3rd + Dim 5th + Dim 7th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Sound Quality:</strong> Tense, unstable, dramatic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Function:</strong> Transition, passing, dramatic effect</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Jazz:</strong> Essential for sophisticated harmony</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Classical:</strong> Drama and tension building</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Blues:</strong> Passing chords and chromatic movement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Rock/Metal:</strong> Dark, ominous atmosphere</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Understanding Diminished Chord Construction */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Understanding Diminished Chord Construction</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Diminished Triad</h3>
              <p className="text-sm text-red-700 mb-3">Built from two minor thirds stacked</p>
              <div className="bg-white rounded-lg p-3 border border-red-200">
                <p className="text-sm font-medium">C° = C - E♭ - G♭</p>
                <p className="text-xs text-gray-600 mt-1">Root + m3 + dim5</p>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Diminished 7th</h3>
              <p className="text-sm text-purple-700 mb-3">Three minor thirds create symmetry</p>
              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <p className="text-sm font-medium">C°7 = C - E♭ - G♭ - A</p>
                <p className="text-xs text-gray-600 mt-1">Root + m3 + dim5 + dim7</p>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Half-Diminished 7th</h3>
              <p className="text-sm text-slate-700 mb-3">Diminished triad + minor 7th</p>
              <div className="bg-white rounded-lg p-3 border border-slate-200">
                <p className="text-sm font-medium">Cø7 = C - E♭ - G♭ - B♭</p>
                <p className="text-xs text-gray-600 mt-1">Root + m3 + dim5 + m7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Essential Diminished Chord Shapes */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Diminished Chord Shapes</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-red-800 mb-3">🎯 Master These Core Shapes</h3>
            <p className="text-red-700">These diminished chord shapes are essential for creating dramatic tension and sophisticated harmony.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">A°</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="A°" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> A-C-E♭</p>
                <p><strong>Fingering:</strong> Easy open position</p>
                <p><strong>Use:</strong> Passing chord, dramatic effect</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">D°</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="D°" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> D-F-A♭</p>
                <p><strong>Fingering:</strong> Simple three-finger shape</p>
                <p><strong>Use:</strong> Between major chords</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">C°</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="C°" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> C-E♭-G♭</p>
                <p><strong>Fingering:</strong> Compact form</p>
                <p><strong>Use:</strong> Jazz progressions</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">E°</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="E°" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> E-G-B♭</p>
                <p><strong>Fingering:</strong> Open strings included</p>
                <p><strong>Use:</strong> Chromatic passing</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">F°</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="F°" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> F-A♭-C♭</p>
                <p><strong>Fingering:</strong> Barre-based form</p>
                <p><strong>Use:</strong> Classical progressions</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">G°</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="G°" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> G-B♭-D♭</p>
                <p><strong>Fingering:</strong> Mixed open/fretted</p>
                <p><strong>Use:</strong> Transition chords</p>
              </div>
            </div>
          </div>
        </div>

        {/* Diminished 7th Chords */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Diminished 7th Chords</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">🎯 Symmetrical Magic</h3>
            <p className="text-purple-700">Diminished 7th chords are perfectly symmetrical - the same shape works for four different chords!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">G°7</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="G°7" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> G-B♭-D♭-E</p>
                <p><strong>Fingering:</strong> Four-finger barre shape</p>
                <p><strong>Use:</strong> Jazz, classical, dramatic passages</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Bø7</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="Bø7" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> B-D-F-A</p>
                <p><strong>Fingering:</strong> Half-diminished shape</p>
                <p><strong>Use:</strong> Minor ii chord, jazz ballads</p>
              </div>
            </div>
          </div>
        </div>

        {/* Famous Songs Using Diminished Chords */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Famous Songs Using Diminished Chords</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-100 rounded-lg p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">🎸 Rock & Pop Classics</h3>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• "Michelle" - The Beatles (diminished passing chords)</li>
                <li>• "Creep" - Radiohead (chromatic descending line)</li>
                <li>• "Still Got the Blues" - Gary Moore (jazz-influenced)</li>
                <li>• "Hotel California" - Eagles (sophisticated harmony)</li>
                <li>• "Europe" - Santana (diminished 7th arpeggios)</li>
              </ul>
            </div>

            <div className="bg-purple-100 rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">🎵 Jazz & Classical</h3>
              <ul className="space-y-2 text-sm text-purple-700">
                <li>• "All of Me" - Jazz standard (diminished passing)</li>
                <li>• "Autumn Leaves" - Jazz standard (half-diminished)</li>
                <li>• Bach - Well-Tempered Clavier (classical diminished)</li>
                <li>• "Summertime" - Gershwin (sophisticated harmony)</li>
                <li>• "My Funny Valentine" - Jazz ballad (ø7 chords)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">🎯 Building Diminished Chord Skills</h3>
            <p className="text-blue-700">These exercises will help you master diminished chords and their dramatic harmonic applications.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Exercise 1: Chromatic Passing Practice</h3>
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <p className="font-medium mb-2">Pattern: C - C#° - Dm - D#° - Em</p>
                <p className="text-sm text-gray-600 mb-2">Practice smooth transitions using diminished passing chords</p>
                <p className="text-sm">Focus on clean chord changes and voice leading</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Exercise 2: Diminished 7th Symmetry</h3>
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <p className="font-medium mb-2">Pattern: G°7 (3rd fret) - Same shape at 6th, 9th, 12th frets</p>
                <p className="text-sm text-gray-600 mb-2">Explore the symmetrical nature of diminished 7th chords</p>
                <p className="text-sm">Notice how the same shape creates different chord names</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Exercise 3: Jazz Progression Integration</h3>
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <p className="font-medium mb-2">Pattern: Am - A#° - Bm7b5 - E7 - Am</p>
                <p className="text-sm text-gray-600 mb-2">Practice incorporating diminished chords into jazz progressions</p>
                <p className="text-sm">Work on smooth voice leading between chords</p>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Your Chord Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Chord Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand diminished chords, explore how they connect to other chord types and harmonic concepts.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/chords/minor" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore emotional depth and melancholic beauty.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Feel the emotion →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/chords/suspended" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Suspended Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Create tension and release with suspended harmony.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Build tension →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/chords/extended" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">🎼</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Extended Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Master complex jazz harmony with 9ths, 11ths, and 13ths.
                </p>
                <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                  Expand harmony →
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

