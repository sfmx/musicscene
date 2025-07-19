"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import VexTabRenderer from '@/components/VexTabRenderer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

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
          
          {/* Minor 7th Interval Examples */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Minor 7th Intervals - Jazz Foundation</h3>
            <p className="text-gray-600 mb-6">
              The minor 7th (10 semitones) creates a smooth, mellow dissonance that's essential for jazz harmony and sophisticated chord progressions.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* C to Bb Minor 7th */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">C → Bb Minor 7th</h4>
                  <p className="text-sm text-blue-700 mb-3">Classic minor 7th relationship</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="C_to_Bb_m7" />
                      <p className="text-xs text-blue-600 mt-1">C (5th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="Bb_from_C_m7" />
                      <p className="text-xs text-blue-600 mt-1">Bb (5th string 1st fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q C/4 Bb/3" 
                      width={200} 
                      scale={0.8}
                    />
                  </div>
                  <p className="text-xs text-blue-600">Smooth, mellow dissonance</p>
                </div>
              </div>

              {/* G to F Minor 7th */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-5 border border-indigo-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-indigo-800 mb-2">G → F Minor 7th</h4>
                  <p className="text-sm text-indigo-700 mb-3">G7 chord essential interval</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="G_to_F_m7" />
                      <p className="text-xs text-indigo-600 mt-1">G (6th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="F_from_G_m7" />
                      <p className="text-xs text-indigo-600 mt-1">F (6th string 1st fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q G/3 F/3" 
                      width={200} 
                      scale={0.8}
                    />
                  </div>
                  <p className="text-xs text-indigo-600">Dominant 7th chord tension</p>
                </div>
              </div>

              {/* D to C Minor 7th */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-purple-800 mb-2">D → C Minor 7th</h4>
                  <p className="text-sm text-purple-700 mb-3">Jazz progression application</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="D_to_C_m7" />
                      <p className="text-xs text-purple-600 mt-1">D (4th string open)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="C_from_D_m7" />
                      <p className="text-xs text-purple-600 mt-1">C (5th string 3rd fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q D/4 C/4" 
                      width={200} 
                      scale={0.8}
                    />
                  </div>
                  <p className="text-xs text-purple-600">Sophisticated harmonic movement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dominant 7th Chord Applications */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Dominant 7th Chord Applications - V7 Function</h3>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* G7 Chord */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
                <h4 className="text-lg font-semibold text-red-800 mb-4">🎸 G7 Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="G7" />
                    <p className="text-xs text-red-600 mt-2">G7 with minor 7th (F)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w (G/3 B/3 D/4 F/3)" 
                      width={200} 
                      scale={0.8}
                    />
                    <p className="text-xs text-red-600 mt-2">G-B-D-F: Major triad + minor 7th</p>
                  </div>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• <strong>Minor 7th:</strong> G → F (smooth tension)</li>
                    <li>• <strong>Dominant function:</strong> Resolves to C</li>
                    <li>• <strong>Blues/jazz:</strong> Essential V7 chord</li>
                  </ul>
                </div>
              </div>

              {/* C7 Chord */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
                <h4 className="text-lg font-semibold text-orange-800 mb-4">🎸 C7 Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="C7" />
                    <p className="text-xs text-orange-600 mt-2">C7 with minor 7th (Bb)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w (C/4 E/4 G/4 Bb/3)" 
                      width={200} 
                      scale={0.8}
                    />
                    <p className="text-xs text-orange-600 mt-2">C-E-G-Bb: Major triad + minor 7th</p>
                  </div>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• <strong>Minor 7th:</strong> C → Bb (jazz sophistication)</li>
                    <li>• <strong>Blues progression:</strong> I7 chord function</li>
                    <li>• <strong>Secondary dominant:</strong> V7/V applications</li>
                  </ul>
                </div>
              </div>

              {/* Minor 7th Chords */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 border border-teal-200">
                <h4 className="text-lg font-semibold text-teal-800 mb-4">🎸 Am7 Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="Am7" />
                    <p className="text-xs text-teal-600 mt-2">Am7 with minor 7th (G)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w (A/2 C/4 E/4 G/3)" 
                      width={200} 
                      scale={0.8}
                    />
                    <p className="text-xs text-teal-600 mt-2">A-C-E-G: Minor triad + minor 7th</p>
                  </div>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li>• <strong>Minor 7th:</strong> A → G (mellow sophistication)</li>
                    <li>• <strong>ii chord:</strong> ii-V-I progressions</li>
                    <li>• <strong>Jazz harmony:</strong> Essential minor 7th sound</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Jazz Applications & Voice Leading */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Jazz Applications & Voice Leading</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 border border-emerald-200">
                <h4 className="text-lg font-semibold text-emerald-800 mb-4">🎯 ii-V-I Progression</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-emerald-700 mb-2">Jazz Standard Movement</h5>
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w (D/3 F/4 A/3 C/4) (G/3 B/3 D/4 F/3) (C/4 E/4 G/4)" 
                      width={280} 
                      scale={0.8}
                    />
                    <p className="text-xs text-emerald-600 mt-2">Dm7 - G7 - C: Minor 7th in both ii and V chords</p>
                  </div>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    <li>• <strong>Dm7:</strong> D → C minor 7th</li>
                    <li>• <strong>G7:</strong> G → F minor 7th</li>
                    <li>• <strong>Smooth voice leading:</strong> Essential jazz movement</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg p-6 border border-violet-200">
                <h4 className="text-lg font-semibold text-violet-800 mb-4">🎵 "Somewhere" Reference</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-violet-700 mb-2">Classic Minor 7th Leap</h5>
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w C/4 Bb/3" 
                      width={280} 
                      scale={0.8}
                    />
                    <p className="text-xs text-violet-600 mt-2">"Somewhere" opening - most famous minor 7th in music</p>
                  </div>
                  <ul className="text-sm text-violet-700 space-y-1">
                    <li>• <strong>Ear training:</strong> Perfect reference interval</li>
                    <li>• <strong>Melodic leap:</strong> Expressive, yearning quality</li>
                    <li>• <strong>Broadway classic:</strong> West Side Story</li>
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
