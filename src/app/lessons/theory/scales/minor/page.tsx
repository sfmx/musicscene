"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { VexTab } from '@/components/VexTab';
import Link from 'next/link';

export default function MinorScalePage() {
  return (
    <Layout>
      <Header
        title="Natural Minor Scale"
        subtitle="The emotional heart of music - a versatile scale that expresses depth, melancholy, and beauty across all musical genres."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/scales" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Scale Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Natural Minor Scale</h1>
          <p className="text-xl opacity-90 mb-4">
            The natural minor scale brings emotional depth and introspective beauty to music, 
            creating a darker, more contemplative sound that resonates with the human soul.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">W-H-W-W-H-W-W</span>
            <span className="bg-white/20 px-3 py-1 rounded">7 Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">Dark & Emotional</span>
            <span className="bg-white/20 px-3 py-1 rounded">Relative to Major</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Scale Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Formula:</strong> W-H-W-W-H-W-W</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Intervals:</strong> 1-2-♭3-4-5-♭6-♭7-8</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Semitones:</strong> 2-1-2-2-1-2-2</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Character:</strong> Dark, emotional, introspective</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Function:</strong> Expressive, melancholic harmony</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">A Minor Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Notes:</strong> A-B-C-D-E-F-G-A</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>No accidentals:</strong> All natural notes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Half steps:</strong> B-C and E-F</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Relative major:</strong> C major (same notes)</span>
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
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">A Minor Scale - Open Position</h4>
                  <p className="text-sm text-purple-700 mb-3">Most accessible minor scale for beginners:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 0/5 2/5 3/5 0/4 | :q 2/4 3/4 0/3 1/3 | :q 3/3 1/3 0/3 3/4 | :q 2/4 0/4 3/5 2/5 0/5
                    `}
                    width={500}
                    scale={0.8}
                  />
                  <div className="mt-3">
                    <p className="text-xs text-purple-600 font-medium mb-1">Fingering Notes:</p>
                    <ul className="text-xs text-purple-600 space-y-1">
                      <li>• Start with A on 5th string open</li>
                      <li>• Use natural frets - no sharps/flats</li>
                      <li>• B-C and E-F natural half steps</li>
                      <li>• Easy transition to C major</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">Alternative Pattern - 2nd Position</h4>
                  <p className="text-sm text-indigo-700 mb-3">Higher position pattern:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 0/5 2/5 3/5 2/4 | :q 4/4 0/3 1/3 3/3 | :q 1/3 0/3 4/4 2/4 | :q 3/5 2/5 0/5
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Complete Scale Pattern</h4>
                  <p className="text-sm text-blue-700 mb-3">Two-octave minor scale:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :8 0/5 2/5 3/5 0/4 2/4 3/4 0/3 1/3 | :8 3/3 5/3 6/3 8/3 10/3 8/2 10/2 12/2
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Harmonic Applications</h3>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-2">Diatonic Chords</h4>
                  <p className="text-sm text-slate-700 mb-2">Chords built from the minor scale:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• i: A minor (A-C-E)</li>
                    <li>• ii°: B diminished (B-D-F)</li>
                    <li>• III: C major (C-E-G)</li>
                    <li>• iv: D minor (D-F-A)</li>
                    <li>• v: E minor (E-G-B)</li>
                    <li>• VI: F major (F-A-C)</li>
                    <li>• VII: G major (G-B-D)</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Scale Degrees</h4>
                  <p className="text-sm text-purple-700 mb-2">Functional roles of each degree:</p>
                  <ul className="text-xs text-purple-600 space-y-1">
                    <li>• 1st (Tonic): Minor home base</li>
                    <li>• 2nd (Supertonic): Subtle tension</li>
                    <li>• ♭3rd (Mediant): Minor quality</li>
                    <li>• 4th (Subdominant): Departure</li>
                    <li>• 5th (Dominant): Stable support</li>
                    <li>• ♭6th (Submediant): Dark color</li>
                    <li>• ♭7th (Subtonic): Weak resolution</li>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Classic Examples</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Stairway to Heaven" - Led Zeppelin</h4>
                  <p className="text-sm text-gray-600 mb-2">Famous Am progression in the intro</p>
                  <p className="text-xs text-gray-500">Iconic minor scale melody and harmony</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Scarborough Fair" - Traditional</h4>
                  <p className="text-sm text-gray-600 mb-2">Beautiful minor melody</p>
                  <p className="text-xs text-gray-500">Natural minor scale throughout</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Bach's "Invention No. 4"</h4>
                  <p className="text-sm text-gray-600 mb-2">Classical minor composition</p>
                  <p className="text-xs text-gray-500">Demonstrates minor scale harmony</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Applications</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Rock Ballads</h4>
                  <p className="text-sm text-gray-600 mb-2">Emotional depth and power</p>
                  <p className="text-xs text-gray-500">Minor progressions for impact</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Folk Music</h4>
                  <p className="text-sm text-gray-600 mb-2">Traditional melodies and storytelling</p>
                  <p className="text-xs text-gray-500">Natural minor for authenticity</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Metal & Alternative</h4>
                  <p className="text-sm text-gray-600 mb-2">Dark, heavy progressions</p>
                  <p className="text-xs text-gray-500">Minor scales for atmosphere</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">👂 Ear Training</h3>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• Compare major vs minor scales</li>
                <li>• Identify minor scale degrees</li>
                <li>• Practice minor intervals</li>
                <li>• Listen to minor progressions</li>
                <li>• Recognize relative major/minor</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-indigo-700 text-sm space-y-2">
                <li>• Practice natural minor positions</li>
                <li>• Work on smooth fingering</li>
                <li>• Practice with backing tracks</li>
                <li>• Learn all minor keys</li>
                <li>• Connect to relative majors</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Improvise over minor progressions</li>
                <li>• Create emotional melodies</li>
                <li>• Practice minor chord progressions</li>
                <li>• Learn songs in minor keys</li>
                <li>• Explore minor modes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises with VexTab */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Exercise 1: Scale Practice</h3>
              <p className="text-purple-700 text-sm mb-3">Practice the A minor scale ascending and descending:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :8 0/5 2/5 3/5 0/4 2/4 3/4 0/3 1/3 | :8 3/3 1/3 0/3 3/4 2/4 0/4 3/5 2/5 0/5
                `}
                width={550}
                scale={0.9}
              />
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Exercise 2: Minor Interval Practice</h3>
              <p className="text-indigo-700 text-sm mb-3">Practice minor thirds, perfect fifths, and minor sevenths from A:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 0/5 3/5 0/5 2/4 | :q 0/5 3/4 0/5 1/3 | :q 0/5 3/3 0/5 1/3
                `}
                width={550}
                scale={0.9}
              />
            </div>
            
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Common Minor Progressions</h3>
              <p className="text-slate-700 text-sm mb-3">i-iv-v-i progression (Am-Dm-Em-Am):</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :w (0/5.2/4.3/3) | :w (0/4.1/3.3/2) | :w (0/4.0/3.2/2) | :w (0/5.2/4.3/3)
                `}
                width={550}
                scale={0.9}
              />
            </div>
          </div>
        </div>

        {/* Scale Relationships */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Scale Relationships & Theory</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Relative & Parallel Relationships</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Relative Major</h4>
                  <p className="text-sm text-gray-600">A minor = C major (same notes, different starting point)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Parallel Major</h4>
                  <p className="text-sm text-gray-600">A minor = A major (same root, different intervals)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Modal Derivatives</h4>
                  <p className="text-sm text-gray-600">Aeolian mode of the major scale</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Minor Scale Variations</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Natural Minor</h4>
                  <p className="text-sm text-gray-600">Pure minor scale - no alterations</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Harmonic Minor</h4>
                  <p className="text-sm text-gray-600">Raised 7th degree for stronger resolution</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Minor Pentatonic</h4>
                  <p className="text-sm text-gray-600">5-note blues and rock favorite</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Different Keys */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Minor Scale in Different Keys</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">E Minor Scale - Open Position</h3>
              <p className="text-sm text-purple-700 mb-3">One sharp (F#) - guitar-friendly key:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 0/6 2/6 0/5 2/5 | :q 3/5 0/4 2/4 0/3 | :q 2/3 0/3 2/4 0/4 | :q 3/5 2/5 0/5 2/6 0/6
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-purple-600 mt-2">Notes: E-F#-G-A-B-C-D-E</p>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">D Minor Scale - Open Position</h3>
              <p className="text-sm text-indigo-700 mb-3">One flat (Bb) - warm, mellow tone:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 0/4 2/4 3/4 0/3 | :q 2/3 0/2 1/2 3/2 | :q 1/2 0/2 2/3 0/3 | :q 3/4 2/4 0/4
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-indigo-600 mt-2">Notes: D-E-F-G-A-Bb-C-D</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">F# Minor Scale - Position</h3>
              <p className="text-sm text-blue-700 mb-3">Three sharps (F#, C#, G#) - bright minor:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 2/6 4/6 1/5 2/5 | :q 4/5 1/4 2/4 4/4 | :q 2/4 1/4 4/5 2/5 | :q 1/5 4/6 2/6
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-blue-600 mt-2">Notes: F#-G#-A-B-C#-D-E-F#</p>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">B Minor Scale - Position</h3>
              <p className="text-sm text-slate-700 mb-3">Two sharps (F#, C#) - dramatic minor:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 2/5 4/5 1/4 2/4 | :q 4/4 2/3 4/3 1/2 | :q 4/3 2/3 4/4 2/4 | :q 1/4 4/5 2/5
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-slate-600 mt-2">Notes: B-C#-D-E-F#-G-A-B</p>
            </div>
          </div>
        </div>

        {/* Related Scales */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Scales & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Major Scale</h3>
              <p className="text-sm text-blue-700 mb-2">♮3, ♮6, ♮7 - brighter, happier quality</p>
              <p className="text-xs text-blue-600">Relative major shares same notes</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">Harmonic Minor</h3>
              <p className="text-sm text-red-700 mb-2">Raised 7th - exotic, classical sound</p>
              <p className="text-xs text-red-600">Creates dominant V chord in minor</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Minor Pentatonic</h3>
              <p className="text-sm text-green-700 mb-2">5-note subset - blues and rock essential</p>
              <p className="text-xs text-green-600">Removes 2nd and 6th degrees</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Scale Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the natural minor scale, explore its variations and related scales for greater musical expression.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/scales/harmonic-minor" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Harmonic Minor</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Discover the exotic sound of the raised 7th degree in minor scales.
                </p>
                <span className="text-red-600 font-medium text-sm group-hover:text-red-700">
                  Add drama →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/scales/minor-pentatonic" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🎸</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor Pentatonic</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Master the most essential scale for blues, rock, and improvisation.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Rock out →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/scales/dorian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🌊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dorian Mode</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the beautiful minor mode with a raised 6th degree.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Discover modes →
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
