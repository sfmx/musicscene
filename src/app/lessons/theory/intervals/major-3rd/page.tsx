"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import VexTabRenderer from '@/components/VexTabRenderer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function Major3rdPage() {
  return (
    <Layout>
      <Header
        title="Major 3rd Interval"
        subtitle="The bright interval - 4 semitones that defines major chords and creates the joyful, optimistic sound characteristic of major tonality."
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
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Major 3rd Interval</h1>
          <p className="text-xl opacity-90 mb-4">
            The major 3rd is the defining interval of major tonality, spanning 4 semitones and creating 
            the characteristic bright, joyful sound that distinguishes major from minor harmony.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">4 Semitones</span>
            <span className="bg-white/20 px-3 py-1 rounded">Major Chord Foundation</span>
            <span className="bg-white/20 px-3 py-1 rounded">Bright & Happy</span>
            <span className="bg-white/20 px-3 py-1 rounded">Consonant</span>
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
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Size:</strong> 4 semitones (2 whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Major</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Bright, happy, consonant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Consonance:</strong> Imperfect consonance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Function:</strong> Defines major chord quality</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>C to E:</strong> Classic major 3rd</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>F to A:</strong> In F major chord</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>G to B:</strong> In G major chord</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Do to Mi:</strong> In solfege system</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          
          {/* Major 3rd Interval Examples */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Major 3rd Intervals - Foundation of Major Harmony</h3>
            <p className="text-gray-600 mb-6">
              The major 3rd (4 semitones) is the defining interval that creates major chord quality and the bright, optimistic character of major tonality.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* C to E Major 3rd */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-5 border border-yellow-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">C → E Major 3rd</h4>
                  <p className="text-sm text-yellow-700 mb-3">Foundation of C major chord</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="C_to_E" />
                      <p className="text-xs text-yellow-600 mt-1">C (5th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="E_from_C" />
                      <p className="text-xs text-yellow-600 mt-1">E (4th string 2nd fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q C/4 E/4" 
                      width={200} 
                      scale={0.8}
                    />
                  </div>
                  <p className="text-xs text-yellow-600">Bright, happy quality</p>
                </div>
              </div>

              {/* F to A Major 3rd */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-5 border border-orange-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-orange-800 mb-2">F → A Major 3rd</h4>
                  <p className="text-sm text-orange-700 mb-3">Foundation of F major chord</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="F_to_A" />
                      <p className="text-xs text-orange-600 mt-1">F (4th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="A_from_F" />
                      <p className="text-xs text-orange-600 mt-1">A (5th string open)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q F/3 A/3" 
                      width={200} 
                      scale={0.8}
                    />
                  </div>
                  <p className="text-xs text-orange-600">Warm, optimistic character</p>
                </div>
              </div>

              {/* G to B Major 3rd */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-5 border border-amber-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-amber-800 mb-2">G → B Major 3rd</h4>
                  <p className="text-sm text-amber-700 mb-3">Foundation of G major chord</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="G_to_B" />
                      <p className="text-xs text-amber-600 mt-1">G (6th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="B_from_G" />
                      <p className="text-xs text-amber-600 mt-1">B (5th string 2nd fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q G/2 B/3" 
                      width={200} 
                      scale={0.8}
                    />
                  </div>
                  <p className="text-xs text-amber-600">Strong, confident sound</p>
                </div>
              </div>
            </div>
          </div>

          {/* Major Chord Construction */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Major Chord Construction with Major 3rds</h3>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* C Major Chord */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
                <h4 className="text-lg font-semibold text-green-800 mb-4">🎸 C Major Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="C_chord_M3" />
                    <p className="text-xs text-green-600 mt-2">Complete C major chord</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w (C/4 E/4 G/4)" 
                      width={200} 
                      scale={0.8}
                    />
                    <p className="text-xs text-green-600 mt-2">C-E-G: Root, major 3rd, perfect 5th</p>
                  </div>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• <strong>Major 3rd:</strong> C → E (defines major quality)</li>
                    <li>• <strong>Perfect 5th:</strong> C → G (provides stability)</li>
                    <li>• <strong>Open fingering:</strong> Natural guitar chord</li>
                  </ul>
                </div>
              </div>

              {/* G Major Chord */}
              <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-lg p-6 border border-lime-200">
                <h4 className="text-lg font-semibold text-lime-800 mb-4">🎸 G Major Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="G_chord_M3" />
                    <p className="text-xs text-lime-600 mt-2">Complete G major chord</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w (G/2 B/3 D/4)" 
                      width={200} 
                      scale={0.8}
                    />
                    <p className="text-xs text-lime-600 mt-2">G-B-D: Root, major 3rd, perfect 5th</p>
                  </div>
                  <ul className="text-sm text-lime-700 space-y-1">
                    <li>• <strong>Major 3rd:</strong> G → B (creates major brightness)</li>
                    <li>• <strong>Perfect 5th:</strong> G → D (harmonic foundation)</li>
                    <li>• <strong>Four-finger chord:</strong> Full open position</li>
                  </ul>
                </div>
              </div>

              {/* D Major Chord */}
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-lg p-6 border border-sky-200">
                <h4 className="text-lg font-semibold text-sky-800 mb-4">🎸 D Major Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="D_chord_M3" />
                    <p className="text-xs text-sky-600 mt-2">Complete D major chord</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w (D/3 F#/3 A/3)" 
                      width={200} 
                      scale={0.8}
                    />
                    <p className="text-xs text-sky-600 mt-2">D-F#-A: Root, major 3rd, perfect 5th</p>
                  </div>
                  <ul className="text-sm text-sky-700 space-y-1">
                    <li>• <strong>Major 3rd:</strong> D → F# (major character)</li>
                    <li>• <strong>Perfect 5th:</strong> D → A (structural support)</li>
                    <li>• <strong>Compact voicing:</strong> Three-finger triangle</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Fretboard Patterns and Applications */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Fretboard Patterns & Musical Applications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border border-yellow-200">
                <h4 className="text-lg font-semibold text-yellow-800 mb-4">🎯 Fretboard Navigation</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-yellow-700 mb-2">Major 3rd Patterns</h5>
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q C/4 E/4 | F/4 A/4 | G/4 B/4" 
                      width={280} 
                      scale={0.8}
                    />
                    <p className="text-xs text-yellow-600 mt-2">Major 3rd intervals: 4 semitones apart</p>
                  </div>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• <strong>Same string:</strong> 4 frets apart</li>
                    <li>• <strong>Cross strings:</strong> Various fingering options</li>
                    <li>• <strong>Scale context:</strong> 1st to 3rd degree in major scales</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
                <h4 className="text-lg font-semibold text-orange-800 mb-4">🎵 Musical Expression</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-orange-700 mb-2">Harmonic Character</h5>
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :h C/4 E/4 | :h G/4 B/4" 
                      width={280} 
                      scale={0.8}
                    />
                    <p className="text-xs text-orange-600 mt-2">Major 3rds create bright, optimistic moods</p>
                  </div>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• <strong>Pop/Rock context:</strong> Foundation of major progressions</li>
                    <li>• <strong>Major scales:</strong> Ionian, Lydian modes</li>
                    <li>• <strong>Jazz applications:</strong> Major 7th, 6th chord extensions</li>
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
                  <h4 className="font-semibold text-gray-800">Beethoven's "Ode to Joy"</h4>
                  <p className="text-sm text-gray-600 mb-2">Opens with major 3rd movement (E to G# in E major)</p>
                  <p className="text-xs text-gray-500">Demonstrates the uplifting quality of major 3rds</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Bach's Major Preludes</h4>
                  <p className="text-sm text-gray-600 mb-2">Abundant use of major 3rds in arpeggiated passages</p>
                  <p className="text-xs text-gray-500">Shows structural importance in Baroque harmony</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Popular Music</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Let It Be" - The Beatles</h4>
                  <p className="text-sm text-gray-600 mb-2">Major chord progressions built on major 3rds</p>
                  <p className="text-xs text-gray-500">C-G-Am-F progression showcases major 3rd harmony</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Don't Stop Believin'" - Journey</h4>
                  <p className="text-sm text-gray-600 mb-2">Classic major chord progression with prominent 3rds</p>
                  <p className="text-xs text-gray-500">E-B-C#m-A progression relies on major 3rd relationships</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">👂 Ear Training</h3>
              <ul className="text-yellow-700 text-sm space-y-2">
                <li>• Sing major scales focusing on 1-3 relationship</li>
                <li>• Practice interval recognition (major vs minor 3rd)</li>
                <li>• Listen to major chord progressions</li>
                <li>• Use "When the Saints Go Marching In" (starts with major 3rd)</li>
                <li>• Compare with minor 3rd examples</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-orange-700 text-sm space-y-2">
                <li>• Play major 3rds across all string pairs</li>
                <li>• Practice major chord arpeggios</li>
                <li>• Work on major scale patterns emphasizing 3rds</li>
                <li>• Practice major chord progressions (I-IV-V-I)</li>
                <li>• Play major 3rd intervals in different positions</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-amber-700 text-sm space-y-2">
                <li>• Compose melodies using major 3rd leaps</li>
                <li>• Analyze major chord progressions in songs</li>
                <li>• Practice harmonizing melodies with major 3rds</li>
                <li>• Study major pentatonic scales</li>
                <li>• Work on major chord voicings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Theoretical Context */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theoretical Context</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Harmonic Function</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Chord Quality Determinant</h4>
                  <p className="text-sm text-gray-600">The major 3rd is what makes a chord "major" - it's the defining interval that creates the bright, stable character we associate with major harmony.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Tonal Center Establishment</h4>
                  <p className="text-sm text-gray-600">Major 3rds help establish and confirm key centers, especially in cadential progressions and tonic chord resolutions.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Historical Development</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Just Intonation</h4>
                  <p className="text-sm text-gray-600">In pure tuning, the major 3rd has a frequency ratio of 5:4, which creates the sweetest possible consonance for this interval.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Equal Temperament</h4>
                  <p className="text-sm text-gray-600">Modern tuning slightly compresses the major 3rd, but it remains one of the most consonant and stable intervals in music.</p>
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
              <h3 className="font-semibold text-blue-800 mb-2">Minor 3rd</h3>
              <p className="text-sm text-blue-700 mb-2">3 semitones - creates minor chord quality</p>
              <p className="text-xs text-blue-600">Compare the emotional difference between major and minor 3rds</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Perfect 5th</h3>
              <p className="text-sm text-green-700 mb-2">7 semitones - completes the major triad</p>
              <p className="text-xs text-green-600">Root + Major 3rd + Perfect 5th = Major chord</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Major 6th</h3>
              <p className="text-sm text-purple-700 mb-2">9 semitones - inversion of minor 3rd</p>
              <p className="text-xs text-purple-600">Interval inversion relationship: Major 3rd inverts to Minor 6th</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-yellow-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Interval Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the major 3rd, explore its companion intervals and learn how they work together in harmony.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/intervals/minor-3rd" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor 3rd</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Compare the melancholic sound of minor 3rds against the bright major 3rd quality.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Explore the contrast →
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
                  Learn the stable foundation that completes major chords when combined with the major 3rd.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Build stability →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/major-6th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major 6th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Discover how the major 3rd relates to its inversion and creates extended harmonies.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Add extensions →
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
