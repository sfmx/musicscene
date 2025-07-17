'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import Link from 'next/link';

export default function AugmentedChordsPage() {
  return (
    <Layout>
      <Header
        title="Augmented Chord Theory"
        subtitle="Master the mysterious and colorful world of augmented harmony - the unsettling, dramatic chords that create tension and anticipation."
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
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Augmented Chords</h1>
          <p className="text-xl opacity-90 mb-4">
            Augmented chords create an unsettling, mysterious quality through their symmetrical structure and raised fifth. 
            They're essential for dramatic effect, film scoring, and sophisticated harmonic movement.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Mysterious Sound</span>
            <span className="bg-white/20 px-3 py-1 rounded">Symmetrical Structure</span>
            <span className="bg-white/20 px-3 py-1 rounded">Dramatic Effect</span>
            <span className="bg-white/20 px-3 py-1 rounded">Film Scoring</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What Are Augmented Chords?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Definition:</strong> Three-note chords with raised (augmented) fifth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Formula:</strong> Root + Major 3rd + Augmented 5th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Interval Pattern:</strong> 4 + 4 semitones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Sound Quality:</strong> Unsettling, mysterious, unstable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Function:</strong> Transition chord, dramatic effect</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Classical:</strong> Romantic era, modulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Jazz:</strong> Chromatic movement, substitutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Film Music:</strong> Suspense, drama, mystery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Rock/Metal:</strong> Dissonant color, tension</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Understanding Augmented Chord Construction */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Understanding Augmented Chord Construction</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">C+ Example</h3>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• <strong>Root:</strong> C (1st degree)</li>
                <li>• <strong>Major 3rd:</strong> E (3rd degree)</li>
                <li>• <strong>Aug 5th:</strong> G# (raised 5th)</li>
                <li>• <strong>Semitones:</strong> C→E (4), E→G# (4)</li>
                <li>• <strong>Result:</strong> Unstable, mysterious triad</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Symmetrical Structure</h3>
              <ul className="text-indigo-700 text-sm space-y-2">
                <li>• <strong>Equal Intervals:</strong> Two major thirds</li>
                <li>• <strong>Symmetry:</strong> Divides octave equally</li>
                <li>• <strong>Inversions:</strong> Sound identical</li>
                <li>• <strong>Enharmonic:</strong> Multiple names possible</li>
                <li>• <strong>Ambiguity:</strong> No clear tonal center</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">Harmonic Function</h3>
              <ul className="text-pink-700 text-sm space-y-2">
                <li>• <strong>Purpose:</strong> Creates instability</li>
                <li>• <strong>Resolution:</strong> Usually moves to stable chord</li>
                <li>• <strong>Voice leading:</strong> Smooth chromatic motion</li>
                <li>• <strong>Usage:</strong> Passing chord, modulation</li>
                <li>• <strong>Effect:</strong> Dramatic, unsettling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Essential Augmented Chord Shapes */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Augmented Chord Shapes</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">🎸 Start Here</h3>
            <p className="text-purple-700">These augmented shapes will add mysterious drama to your playing.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">C+</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="C+" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> C-E-G#</p>
                <p><strong>Fingering:</strong> Compact shape</p>
                <p><strong>Use:</strong> Classical, film music</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">F+</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="F+" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> F-A-C#</p>
                <p><strong>Fingering:</strong> Barre variation</p>
                <p><strong>Use:</strong> Jazz, passing chord</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">A+</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="A+" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> A-C#-E#(F)</p>
                <p><strong>Fingering:</strong> Moveable shape</p>
                <p><strong>Use:</strong> Dramatic transitions</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">D+</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="D+" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> D-F#-A#</p>
                <p><strong>Fingering:</strong> Upper fret access</p>
                <p><strong>Use:</strong> Chromatic sequences</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">G+</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="G+" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> G-B-D#</p>
                <p><strong>Fingering:</strong> Open string variant</p>
                <p><strong>Use:</strong> Rock, metal accents</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">E+</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="E+" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> E-G#-B#(C)</p>
                <p><strong>Fingering:</strong> Modified E major</p>
                <p><strong>Use:</strong> Suspense, mystery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Progressions */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Augmented Progressions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">Chromatic Ascent</h3>
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <p className="font-mono text-center">C - C+ - F - F+</p>
                </div>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• <strong>Function:</strong> Chromatic bass line</li>
                  <li>• <strong>Feel:</strong> Building tension</li>
                  <li>• <strong>Use:</strong> Classical, film music</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-pink-50 rounded-lg p-6 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-4">Jazz Substitution</h3>
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <p className="font-mono text-center">C - A+ - Dm - G7</p>
                </div>
                <ul className="text-sm text-indigo-700 space-y-1">
                  <li>• <strong>Function:</strong> Chromatic approach</li>
                  <li>• <strong>Feel:</strong> Sophisticated movement</li>
                  <li>• <strong>Use:</strong> Jazz standards, bebop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Exercise 1: Symmetrical Cycle</h3>
              <div className="space-y-2 text-sm text-purple-700">
                <p className="font-medium mb-2">Practice: C+ - E+ - G#+ - C+</p>
                <p>Notice how each chord is a major third apart</p>
                <p>Listen for the mysterious, floating quality</p>
              </div>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Exercise 2: Chromatic Movement</h3>
              <div className="space-y-2 text-sm text-indigo-700">
                <p className="font-medium mb-2">Play: C - C+ - F - F+ - Bb</p>
                <p>Focus on smooth voice leading</p>
                <p>Practice resolving tension to stable chords</p>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Your Chord Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Chord Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand augmented chords, explore how they connect to other chord types and harmonic concepts.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/chords/diminished" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <span className="text-2xl">⚫</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Diminished Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore maximum tension and dramatic effect.
                </p>
                <span className="text-red-600 font-medium text-sm group-hover:text-red-700">
                  Add drama →
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
            
            <Link href="/lessons/theory/chords/major" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">☀️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Return to the bright, stable foundation of harmony.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Back to basics →
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
