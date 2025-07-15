'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Minor2ndPage() {
  return (
    <Layout>
      <Header
        title="Minor 2nd Interval"
        subtitle="The smallest interval in Western music - 1 semitone that creates tension and dissonance in melodies and harmonies."
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
        <div className="bg-gradient-to-r from-red-600 to-pink-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Minor 2nd Interval</h1>
          <p className="text-xl opacity-90 mb-4">
            The minor 2nd is the smallest interval in Western music, spanning just 1 semitone and creating 
            significant tension and dissonance that demands resolution.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">1 Semitone</span>
            <span className="bg-white/20 px-3 py-1 rounded">Maximum Tension</span>
            <span className="bg-white/20 px-3 py-1 rounded">Demands Resolution</span>
            <span className="bg-white/20 px-3 py-1 rounded">Chromatic Foundation</span>
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
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Size:</strong> 1 semitone (half step)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Minor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Highly dissonant, tense</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Function:</strong> Creates tension, needs resolution</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>C to D♭ (or C#)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>E to F (natural semitone)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>B to C (natural semitone)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Any note to its chromatic neighbor</span>
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
          
          {/* Fretboard Examples */}
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Fretboard Locations</h3>
            <div className="space-y-6">
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="text-lg font-medium text-red-800 mb-3">Natural Semitones on Guitar</h4>
                <p className="text-red-700 text-sm mb-2">
                  <strong>E to F:</strong> Open 1st string (high E) to 1st fret = minor 2nd
                </p>
                <p className="text-red-700 text-sm mb-2">
                  <strong>B to C:</strong> Open 2nd string (B) to 1st fret = minor 2nd
                </p>
                <p className="text-red-700 text-sm">
                  These are the only natural minor 2nds (no sharps/flats needed)
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="text-lg font-medium text-blue-800 mb-3">Adjacent Frets Rule</h4>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Universal Rule:</strong> Any two adjacent frets on the same string form a minor 2nd
                </p>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Examples:</strong> 3rd fret to 4th fret, 7th fret to 8th fret, etc.
                </p>
                <p className="text-blue-700 text-sm">
                  This makes minor 2nds the easiest interval to find on guitar!
                </p>
              </div>
            </div>
          </div>

          {/* Musical Notation */}
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Musical Examples</h3>
            
            <div className="space-y-6">
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="text-lg font-medium text-red-800 mb-3">Ascending Minor 2nds</h4>
                <div className="space-y-2 text-sm text-red-700">
                  <div className="flex justify-between items-center">
                    <span>E (open) → F (1st fret)</span>
                    <span className="font-mono bg-red-100 px-2 py-1 rounded">Low E string</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>G# (4th fret) → A (5th fret)</span>
                    <span className="font-mono bg-red-100 px-2 py-1 rounded">Low E string</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>A (open) → A# (1st fret)</span>
                    <span className="font-mono bg-red-100 px-2 py-1 rounded">A string</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>E (open) → F (1st fret)</span>
                    <span className="font-mono bg-red-100 px-2 py-1 rounded">High E string</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="text-lg font-medium text-purple-800 mb-3">Harmonic Minor 2nds (Dissonance)</h4>
                <p className="text-purple-700 text-sm mb-3">
                  Playing minor 2nds simultaneously creates maximum harmonic tension. These intervals 
                  are rarely used in traditional harmony except as passing tones or for special effect.
                </p>
                <div className="space-y-1 text-xs text-purple-600">
                  <div>• Try playing adjacent frets on two strings simultaneously</div>
                  <div>• Notice how the dissonance demands resolution</div>
                  <div>• Used in modern classical and jazz for color</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Applications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Practical Applications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-orange-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Melodic Uses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Chromatic passing tones:</strong> Smooth voice leading between chord tones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Blues and jazz:</strong> Characteristic bend and chromatic approach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Classical music:</strong> Leading tones resolving to tonic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Horror film scores:</strong> Creates unease and tension</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h4 className="font-medium text-orange-800 mb-3">Chromatic Passing Tone Example</h4>
                <p className="text-orange-700 text-sm mb-2">
                  <strong>Guitar Exercise:</strong> Play ascending chromatic line on the A string
                </p>
                <div className="space-y-1 text-xs text-orange-600 font-mono">
                  <div>3rd fret → 4th fret → 5th fret → 6th fret → 7th fret → 8th fret → 9th fret → 10th fret</div>
                  <div>(C → C# → D → D# → E → F → F# → G)</div>
                </div>
                <p className="text-orange-700 text-xs mt-2">
                  Each step is a minor 2nd interval creating smooth chromatic movement
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Harmonic Uses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Cluster chords:</strong> Dense, dissonant harmonies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Suspended resolutions:</strong> Creating and releasing tension</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Jazz voicings:</strong> Adding color and sophistication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Modern classical:</strong> 20th-century harmonic language</span>
                </li>
              </ul>

              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-800 mb-3">Minor 2nd in Harmony Example</h4>
                <p className="text-purple-700 text-sm mb-2">
                  <strong>Cluster Chord Exercise:</strong> Create tension with close intervals
                </p>
                <div className="space-y-2 text-xs text-purple-600">
                  <div><strong>Frets:</strong> 3rd fret (low E), 3rd fret (A), 4th fret (D), 3rd fret (G)</div>
                  <div><strong>Notes:</strong> G - C - F# - Bb (contains multiple minor 2nds)</div>
                  <div><strong>Effect:</strong> Dense, dissonant cluster requiring resolution</div>
                </div>
                <p className="text-purple-700 text-xs mt-2">
                  This type of harmony is common in jazz and modern classical music
                </p>
              </div>
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
                    <span>Very harsh and dissonant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Creates strong urge to resolve</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Sounds "crunchy" or "gritty"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Almost like two notes fighting</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-blue-800 mb-3">Practice Exercises</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Play white keys E→F and B→C</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Compare with major 2nd (2 semitones)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Practice on adjacent frets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Sing along to internalize the sound</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Memory Aid</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Think of the minor 2nd as the sound of suspense in a horror movie - it's the musical 
                equivalent of tension that demands resolution. The theme from "Jaws" features prominent 
                minor 2nds that create that sense of impending danger. In classical music, it's often 
                called a "semitone" and is fundamental to chromatic harmony and voice leading.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Classical Music</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Bach's Chromatic Fantasy</strong><br />
                  <span className="text-gray-600 text-sm">Extensive use of chromatic minor 2nds</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Chopin's Nocturnes</strong><br />
                  <span className="text-gray-600 text-sm">Chromatic voice leading with minor 2nds</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Wagner's Tristan und Isolde</strong><br />
                  <span className="text-gray-600 text-sm">Revolutionary use of chromatic harmony</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Music</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>"Jaws" Theme (John Williams)</strong><br />
                  <span className="text-gray-600 text-sm">Alternating minor 2nds create suspense</span>
                </li>
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>Blues and Jazz Standards</strong><br />
                  <span className="text-gray-600 text-sm">Chromatic passing tones and approach notes</span>
                </li>
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>Rock Guitar Solos</strong><br />
                  <span className="text-gray-600 text-sm">Chromatic runs and bending effects</span>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 1: Chromatic Scale</h3>
              <p className="text-gray-700 mb-4">
                Practice playing chromatic scales to familiarize yourself with consecutive minor 2nd intervals.
              </p>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-800 mb-3">Chromatic Scale on Low E String</h4>
                <div className="space-y-2 text-sm text-amber-700">
                  <div><strong>Ascending:</strong> Open → 1st → 2nd → 3rd → 4th → 5th → 6th → 7th → 8th → 9th → 10th → 11th → 12th frets</div>
                  <div><strong>Notes:</strong> E → F → F# → G → G# → A → A# → B → C → C# → D → D# → E (octave)</div>
                  <div><strong>Practice:</strong> Play slowly, focusing on the tense sound of each minor 2nd step</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 2: Interval Recognition</h3>
              <p className="text-gray-700 mb-4">
                Practice identifying minor 2nds by ear. Play these examples and listen to the characteristic dissonance.
              </p>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-800 mb-3">Harmonic Minor 2nd Practice</h4>
                <div className="space-y-2 text-sm text-amber-700">
                  <div><strong>Example 1:</strong> Low E open + Low E 1st fret (E and F together)</div>
                  <div><strong>Example 2:</strong> A string 4th fret + A string 5th fret (C# and D together)</div>
                  <div><strong>Example 3:</strong> D string open + D string 1st fret (D and D# together)</div>
                  <div><strong>Practice:</strong> Play each pair together, then resolve to consonant intervals</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Continue Your Interval Journey */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Continue Your Interval Journey</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/lessons/theory/intervals/unison" className="group">
              <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-colors">
                <h3 className="font-medium text-gray-800 group-hover:text-gray-900 mb-2">Unison</h3>
                <p className="text-sm text-gray-600">Perfect unity - explore the foundation of musical pitch</p>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/major-2nd" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-4 border border-orange-200 hover:border-orange-300 transition-colors">
                <h3 className="font-medium text-orange-800 group-hover:text-orange-900 mb-2">Major 2nd</h3>
                <p className="text-sm text-orange-600">Smooth melodic movement - the next step up</p>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/minor-3rd" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200 hover:border-blue-300 transition-colors">
                <h3 className="font-medium text-blue-800 group-hover:text-blue-900 mb-2">Minor 3rd</h3>
                <p className="text-sm text-blue-600">Sad and beautiful - foundation of minor chords</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
