"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import VexTabRenderer from '@/components/VexTabRenderer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function Minor6thPage() {
  return (
    <Layout>
      <Header
        title="Minor 6th Interval"
        subtitle="The inversion of the major 3rd - 8 semitones that creates a rich, complex sound with both consonant and slightly dissonant qualities."
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
        <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Minor 6th Interval</h1>
          <p className="text-xl opacity-90 mb-4">
            The minor 6th is the inversion of the major 3rd, spanning 8 semitones and creating 
            a rich, complex sound that bridges consonance and dissonance with sophisticated harmonic color.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">8 Semitones</span>
            <span className="bg-white/20 px-3 py-1 rounded">Major 3rd Inversion</span>
            <span className="bg-white/20 px-3 py-1 rounded">Rich & Complex</span>
            <span className="bg-white/20 px-3 py-1 rounded">Jazz Harmony</span>
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
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Size:</strong> 8 semitones (4 whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Minor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Rich, complex, somewhat dissonant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Consonance:</strong> Mild dissonance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Function:</strong> Adds harmonic color and sophistication</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>C to Ab:</strong> Classic minor 6th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>F to Db:</strong> In minor key context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Jazz voicings:</strong> In extended chords</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>"Love Story":</strong> Opening melody</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          
          {/* Minor 6th Interval Examples */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Minor 6th Intervals - Rich Harmonic Color</h3>
            <p className="text-gray-600 mb-6">
              The minor 6th (8 semitones) is the inversion of the major 3rd, creating a rich, complex sound that adds sophisticated harmonic color to music.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* C to Ab Minor 6th */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-purple-800 mb-2">C → Ab Minor 6th</h4>
                  <p className="text-sm text-purple-700 mb-3">Classic minor 6th relationship</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="C_to_Ab_m6" />
                      <p className="text-xs text-purple-600 mt-1">C (5th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="Ab_from_C_m6" />
                      <p className="text-xs text-purple-600 mt-1">Ab (4th string 6th fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q C/4 Ab/4" 
                      width={200} 
                      scale={0.8}
                    />
                  </div>
                  <p className="text-xs text-purple-600">Rich, complex harmonic color</p>
                </div>
              </div>

              {/* F to Db Minor 6th */}
              <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg p-5 border border-violet-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-violet-800 mb-2">F → Db Minor 6th</h4>
                  <p className="text-sm text-violet-700 mb-3">Minor key context example</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="F_to_Db_m6" />
                      <p className="text-xs text-violet-600 mt-1">F (6th string 1st fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="Db_from_F_m6" />
                      <p className="text-xs text-violet-600 mt-1">Db (5th string 4th fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q F/3 Db/4" 
                      width={200} 
                      scale={0.8}
                    />
                  </div>
                  <p className="text-xs text-violet-600">Natural minor scale relationship</p>
                </div>
              </div>

              {/* A to F Minor 6th */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-5 border border-indigo-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-indigo-800 mb-2">A → F Minor 6th</h4>
                  <p className="text-sm text-indigo-700 mb-3">Jazz voicing application</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="A_to_F_m6" />
                      <p className="text-xs text-indigo-600 mt-1">A (5th string open)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="F_from_A_m6" />
                      <p className="text-xs text-indigo-600 mt-1">F (4th string 3rd fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q A/2 F/4" 
                      width={200} 
                      scale={0.8}
                    />
                  </div>
                  <p className="text-xs text-indigo-600">Sophisticated harmonic movement</p>
                </div>
              </div>
            </div>
          </div>

          {/* 6th Chord Applications */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">6th Chord Applications - Adding Harmonic Color</h3>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* C6 Chord */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">🎸 C6 Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="C6" />
                    <p className="text-xs text-blue-600 mt-2">C6 with added major 6th (A)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w (C/4 E/4 G/4 A/4)" 
                      width={200} 
                      scale={0.8}
                    />
                    <p className="text-xs text-blue-600 mt-2">C-E-G-A: Major triad + major 6th</p>
                  </div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>Major 6th:</strong> C → A (adds sweetness)</li>
                    <li>• <strong>Jazz standard:</strong> Sophisticated resolution</li>
                    <li>• <strong>Folk/country:</strong> Open, friendly sound</li>
                  </ul>
                </div>
              </div>

              {/* Am6 Chord */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 border border-emerald-200">
                <h4 className="text-lg font-semibold text-emerald-800 mb-4">🎸 Am6 Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="Am6" />
                    <p className="text-xs text-emerald-600 mt-2">Am6 with added major 6th (F#)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w (A/2 C/4 E/4 F#/4)" 
                      width={200} 
                      scale={0.8}
                    />
                    <p className="text-xs text-emerald-600 mt-2">A-C-E-F#: Minor triad + major 6th</p>
                  </div>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    <li>• <strong>Major 6th:</strong> A → F# (brightens minor chord)</li>
                    <li>• <strong>Bossa nova:</strong> Essential Brazilian sound</li>
                    <li>• <strong>Modern jazz:</strong> Sophisticated minor harmony</li>
                  </ul>
                </div>
              </div>

              {/* Dm6 Chord */}
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-6 border border-rose-200">
                <h4 className="text-lg font-semibold text-rose-800 mb-4">🎸 Dm6 Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="Dm6" />
                    <p className="text-xs text-rose-600 mt-2">Dm6 with added major 6th (B)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w (D/3 F/4 A/3 B/3)" 
                      width={200} 
                      scale={0.8}
                    />
                    <p className="text-xs text-rose-600 mt-2">D-F-A-B: Minor triad + major 6th</p>
                  </div>
                  <ul className="text-sm text-rose-700 space-y-1">
                    <li>• <strong>Major 6th:</strong> D → B (complex minor color)</li>
                    <li>• <strong>Classical:</strong> Romantic period harmony</li>
                    <li>• <strong>Film music:</strong> Emotional, expressive quality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Minor Key Harmony and Jazz Applications */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Minor Key Harmony & Jazz Applications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
                <h4 className="text-lg font-semibold text-purple-800 mb-4">🎯 Natural Minor Scale Context</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-purple-700 mb-2">i-♭VI Progression</h5>
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w (A/2 C/4 E/4) (F/3 A/3 C/5)" 
                      width={280} 
                      scale={0.8}
                    />
                    <p className="text-xs text-purple-600 mt-2">Am to F: Root to ♭VI (minor 6th relationship)</p>
                  </div>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• <strong>♭VI chord:</strong> Natural minor scale harmony</li>
                    <li>• <strong>Modal interchange:</strong> Borrowed from parallel major</li>
                    <li>• <strong>Emotional impact:</strong> Melancholic, introspective</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6 border border-indigo-200">
                <h4 className="text-lg font-semibold text-indigo-800 mb-4">🎵 Jazz Harmony Applications</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-indigo-700 mb-2">Voice Leading with 6ths</h5>
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :h C/4 A/4 | :h Bb/4 G/4" 
                      width={280} 
                      scale={0.8}
                    />
                    <p className="text-xs text-indigo-600 mt-2">Smooth voice leading using 6th intervals</p>
                  </div>
                  <ul className="text-sm text-indigo-700 space-y-1">
                    <li>• <strong>Chord melody:</strong> Sophisticated harmonizations</li>
                    <li>• <strong>Bebop lines:</strong> Chromatic approach tones</li>
                    <li>• <strong>Comping:</strong> Rich chord voicings</li>
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
                  <h4 className="font-semibold text-gray-800">Bach's Minor Key Works</h4>
                  <p className="text-sm text-gray-600 mb-2">Natural minor 6th relationships in baroque harmony</p>
                  <p className="text-xs text-gray-500">Demonstrates minor 6th in classical voice leading</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Chopin's Nocturnes</h4>
                  <p className="text-sm text-gray-600 mb-2">Rich minor 6th harmonies in romantic piano music</p>
                  <p className="text-xs text-gray-500">Shows expressive potential of minor 6th intervals</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Popular Music</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Love Story" - Taylor Swift</h4>
                  <p className="text-sm text-gray-600 mb-2">Opening melody features prominent minor 6th leap</p>
                  <p className="text-xs text-gray-500">Modern pop song using minor 6th melodically</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Jazz Standards</h4>
                  <p className="text-sm text-gray-600 mb-2">Minor 6th chords and voice leading in jazz harmony</p>
                  <p className="text-xs text-gray-500">Sophisticated harmonic color in jazz context</p>
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
                <li>• Practice minor 6th vs major 6th recognition</li>
                <li>• Use "Love Story" theme as reference</li>
                <li>• Compare with major 3rd (its inversion)</li>
                <li>• Listen to natural minor scale patterns</li>
                <li>• Study jazz 6th chord progressions</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• Practice minor 6th intervals across strings</li>
                <li>• Work on 6th chord voicings</li>
                <li>• Study natural minor scale patterns</li>
                <li>• Practice minor 6th melodic leaps</li>
                <li>• Work on jazz chord progressions</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Compose melodies using minor 6th leaps</li>
                <li>• Analyze minor key progressions</li>
                <li>• Practice jazz chord-melody techniques</li>
                <li>• Study modal interchange applications</li>
                <li>• Work on voice leading with 6th chords</li>
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
                  <h4 className="font-semibold text-gray-800">Major 3rd Inversion</h4>
                  <p className="text-sm text-gray-600">Minor 6th is the inversion of major 3rd: 8 + 4 = 12 semitones (octave)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Complementary Function</h4>
                  <p className="text-sm text-gray-600">Where major 3rd is bright and consonant, minor 6th adds complexity and sophistication</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Harmonic Context</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Minor Key Function</h4>
                  <p className="text-sm text-gray-600">Natural occurrence in minor scales as root to ♭6 relationship</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Jazz Extensions</h4>
                  <p className="text-sm text-gray-600">Essential for sophisticated jazz harmony and chord extensions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Intervals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Intervals & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <h3 className="font-semibold text-yellow-800 mb-2">Major 3rd</h3>
              <p className="text-sm text-yellow-700 mb-2">4 semitones - inversion of minor 6th</p>
              <p className="text-xs text-yellow-600">Bright consonance vs complex sophistication</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Major 6th</h3>
              <p className="text-sm text-green-700 mb-2">9 semitones - one semitone larger</p>
              <p className="text-xs text-green-600">Compare minor vs major 6th emotional qualities</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Minor 7th</h3>
              <p className="text-sm text-blue-700 mb-2">10 semitones - common in jazz harmony</p>
              <p className="text-xs text-blue-600">Both add sophisticated color to basic triads</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Interval Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the minor 6th, explore its relationships with other intervals and harmonic applications.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/intervals/major-3rd" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major 3rd</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Study the inversion relationship between major 3rd and minor 6th intervals.
                </p>
                <span className="text-yellow-600 font-medium text-sm group-hover:text-yellow-700">
                  Study inversions →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/major-6th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major 6th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Compare the bright major 6th against the more complex minor 6th quality.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Feel the contrast →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/minor-7th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor 7th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore another sophisticated interval that adds jazz harmony and color.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Add sophistication →
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
