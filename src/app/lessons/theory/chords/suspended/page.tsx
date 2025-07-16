'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import Link from 'next/link';

export default function SuspendedChordsPage() {
  return (
    <Layout>
      <Header
        title="Suspended Chord Theory"
        subtitle="Discover the tension and beauty of suspended chords - the harmonies that create anticipation and release through their unique interval structures."
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
        <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Suspended Chords</h1>
          <p className="text-xl opacity-90 mb-4">
            Suspended chords create musical tension through the deliberate avoidance of the traditional major or minor third, 
            replacing it with either the second or fourth degree of the scale.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Musical Tension</span>
            <span className="bg-white/20 px-3 py-1 rounded">Yearning Resolution</span>
            <span className="bg-white/20 px-3 py-1 rounded">Floating Quality</span>
            <span className="bg-white/20 px-3 py-1 rounded">Emotional Depth</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What Are Suspended Chords?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Definition:</strong> Chords where the 3rd is replaced by the 2nd or 4th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Sus4 Formula:</strong> Root + Perfect 4th + Perfect 5th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Sus2 Formula:</strong> Root + Major 2nd + Perfect 5th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Sound Quality:</strong> Floating, unresolved, tension</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Function:</strong> Creates motion, delays resolution</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Rock/Pop:</strong> Dramatic chord changes and hooks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Folk:</strong> Open, ringing acoustic textures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Jazz:</strong> Smooth voice leading and tensions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Classical:</strong> Suspension and resolution patterns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Understanding Suspended Chord Construction */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Understanding Suspended Chord Construction</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Dsus4 Example</h3>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• <strong>Root:</strong> D (1st degree)</li>
                <li>• <strong>Perfect 4th:</strong> G (4th degree)</li>
                <li>• <strong>Perfect 5th:</strong> A (5th degree)</li>
                <li>• <strong>Missing:</strong> F# (major 3rd)</li>
                <li>• <strong>Result:</strong> Tension seeking resolution</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">Dsus2 Example</h3>
              <ul className="text-pink-700 text-sm space-y-2">
                <li>• <strong>Root:</strong> D (1st degree)</li>
                <li>• <strong>Major 2nd:</strong> E (2nd degree)</li>
                <li>• <strong>Perfect 5th:</strong> A (5th degree)</li>
                <li>• <strong>Missing:</strong> F# (major 3rd)</li>
                <li>• <strong>Result:</strong> Open, floating quality</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Resolution Tendency</h3>
              <ul className="text-indigo-700 text-sm space-y-2">
                <li>• <strong>Sus4:</strong> Wants to resolve down to 3rd</li>
                <li>• <strong>Sus2:</strong> Can move up to 3rd</li>
                <li>• <strong>Tension:</strong> Created by avoiding 3rd</li>
                <li>• <strong>Release:</strong> Resolution to major/minor</li>
                <li>• <strong>Voice Leading:</strong> Smooth stepwise motion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Essential Sus4 Chords */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Sus4 Chords</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">🎸 Sus4 Fundamentals</h3>
            <p className="text-purple-700">These sus4 chords create tension that naturally wants to resolve to the major chord.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Dsus4</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="Dsus4" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> D-G-A</p>
                <p><strong>Fingering:</strong> Easy, common shape</p>
                <p><strong>Resolves to:</strong> D major</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Asus4</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="Asus4" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> A-D-E</p>
                <p><strong>Fingering:</strong> Add one finger to Am</p>
                <p><strong>Resolves to:</strong> A major</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Esus4</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="Esus4" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> E-A-B</p>
                <p><strong>Fingering:</strong> Add finger to Em</p>
                <p><strong>Resolves to:</strong> E major</p>
              </div>
            </div>
          </div>
        </div>

        {/* Essential Sus2 Chords */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Sus2 Chords</h2>
          
          <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-pink-800 mb-3">🎵 Sus2 Fundamentals</h3>
            <p className="text-pink-700">These sus2 chords create an open, floating quality perfect for atmospheric playing.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Dsus2</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="Dsus2" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> D-E-A</p>
                <p><strong>Fingering:</strong> Simple two-finger shape</p>
                <p><strong>Character:</strong> Bright and open</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Asus2</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="Asus2" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> A-B-E</p>
                <p><strong>Fingering:</strong> Remove one finger from A</p>
                <p><strong>Character:</strong> Ethereal and spacious</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Esus2</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="Esus2" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> E-F#-B</p>
                <p><strong>Fingering:</strong> Higher fret alternative</p>
                <p><strong>Character:</strong> Modern, ambient</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Suspended Chord Progressions */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Suspended Chord Progressions</h2>
          
          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-cyan-800 mb-3">🎵 Essential Progressions</h3>
            <p className="text-cyan-700">These progressions demonstrate how suspended chords create tension and release in different musical contexts.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sus4 Resolution Patterns</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium mb-2">Classic Sus4 → Major</h4>
                  <p className="text-sm mb-2"><strong>Pattern:</strong> Dsus4 - D - G - A</p>
                  <p className="text-sm text-gray-600">Immediate resolution creates satisfaction</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium mb-2">Delayed Resolution</h4>
                  <p className="text-sm mb-2"><strong>Pattern:</strong> Asus4 - Am - F - G</p>
                  <p className="text-sm text-gray-600">Sus4 to minor creates different color</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium mb-2">Rock Progression</h4>
                  <p className="text-sm mb-2"><strong>Pattern:</strong> Esus4 - E - A - B</p>
                  <p className="text-sm text-gray-600">Common in rock and pop music</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sus2 Atmospheric Progressions</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium mb-2">Open String Magic</h4>
                  <p className="text-sm mb-2"><strong>Pattern:</strong> Dsus2 - Asus2 - G - Em</p>
                  <p className="text-sm text-gray-600">Creates floating, ethereal atmosphere</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium mb-2">Modern Folk</h4>
                  <p className="text-sm mb-2"><strong>Pattern:</strong> G - Dsus2 - Em - Csus2</p>
                  <p className="text-sm text-gray-600">Contemporary acoustic sound</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium mb-2">Ambient Progression</h4>
                  <p className="text-sm mb-2"><strong>Pattern:</strong> Asus2 - Esus2 - F#sus2 - Dsus2</p>
                  <p className="text-sm text-gray-600">Sustained, contemplative mood</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Famous Songs with Suspended Chords */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Famous Songs Using Suspended Chords</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-100 rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">🎸 Rock & Pop Classics</h3>
              <ul className="space-y-2 text-sm text-purple-700">
                <li>• "Pinball Wizard" - The Who (Dsus4-D progression)</li>
                <li>• "Crazy Little Thing Called Love" - Queen (sus4 embellishments)</li>
                <li>• "The Scientist" - Coldplay (Dsus2, Asus2)</li>
                <li>• "Black" - Pearl Jam (Esus2, Asus2)</li>
                <li>• "More Than Words" - Extreme (sus2 and sus4)</li>
              </ul>
            </div>

            <div className="bg-pink-100 rounded-lg p-6 border border-pink-200">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">🎵 Folk & Alternative</h3>
              <ul className="space-y-2 text-sm text-pink-700">
                <li>• "Dust in the Wind" - Kansas (Dsus2, Asus2)</li>
                <li>• "Behind Blue Eyes" - The Who (sus4 resolutions)</li>
                <li>• "Disarm" - Smashing Pumpkins (Dsus2 featured)</li>
                <li>• "Interstate Love Song" - Stone Temple Pilots</li>
                <li>• "Good Riddance" - Green Day (Gsus4, Dsus4)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">🎯 Building Suspended Chord Skills</h3>
            <p className="text-blue-700">These exercises will help you master suspended chords and their unique harmonic functions.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Exercise 1: Sus4 Resolution Practice</h3>
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <p className="font-medium mb-2">Pattern: Dsus4-D, Asus4-A, Esus4-E</p>
                <p className="text-sm text-gray-600 mb-2">Practice clean transitions from suspended to resolved chords</p>
                <p className="text-sm">Focus on the voice leading of the suspended note</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Exercise 2: Sus2 Atmospheric Playing</h3>
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <p className="font-medium mb-2">Progression: Dsus2 - Asus2 - G - Em</p>
                <p className="text-sm text-gray-600 mb-2">Create floating, ambient textures</p>
                <p className="text-sm">Let chords ring out, focus on open string resonance</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Exercise 3: Mixed Suspension Progressions</h3>
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <p className="font-medium mb-2">Pattern: G - Dsus4 - D - Asus2 - Am</p>
                <p className="text-sm text-gray-600 mb-2">Combine sus2 and sus4 in one progression</p>
                <p className="text-sm">Notice the different tension qualities and resolutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Suspended Chord Concepts */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Suspended Chord Concepts</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">🎸 Extended Suspensions</h3>
              <ul className="space-y-2 text-sm text-indigo-700">
                <li>• <strong>7sus4:</strong> Sus4 with added 7th (G7sus4)</li>
                <li>• <strong>9sus4:</strong> Sus4 with added 9th (C9sus4)</li>
                <li>• <strong>Add9sus2:</strong> Sus2 with added 9th</li>
                <li>• <strong>11th Chords:</strong> Natural sus4 extensions</li>
                <li>• <strong>Jazz Applications:</strong> Sophisticated voicings</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">🎵 Compositional Techniques</h3>
              <ul className="space-y-2 text-sm text-orange-700">
                <li>• <strong>Retardation:</strong> Sus4 resolving down</li>
                <li>• <strong>Anticipation:</strong> Sus2 resolving up</li>
                <li>• <strong>Neighboring Tones:</strong> Brief suspensions</li>
                <li>• <strong>Pedal Points:</strong> Sustained notes with suspensions</li>
                <li>• <strong>Modal Harmony:</strong> Suspensions in modes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Continue Your Chord Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Chord Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand suspended chords, explore how they connect to other chord types and harmonic concepts.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
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
            
            <Link href="/lessons/theory/chords/diminished" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <span className="text-2xl">⚫</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Diminished Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Add tension and drama with diminished harmony.
                </p>
                <span className="text-red-600 font-medium text-sm group-hover:text-red-700">
                  Add tension →
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