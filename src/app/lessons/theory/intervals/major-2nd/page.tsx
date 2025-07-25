'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import VexTabRenderer from '@/components/VexTabRenderer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function Major2ndPage() {
  return (
    <Layout>
      <Header
        title="Major 2nd Interval"
        subtitle="The fundamental melodic step - 2 semitones that form the backbone of scales and create smooth, natural melodic movement."
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
        <div className="bg-gradient-to-r from-orange-600 to-yellow-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Major 2nd Interval</h1>
          <p className="text-xl opacity-90 mb-4">
            The major 2nd is the fundamental melodic step in Western music, spanning 2 semitones and creating 
            the smooth, natural movement that forms the backbone of scales and melodies.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">2 Semitones</span>
            <span className="bg-white/20 px-3 py-1 rounded">Whole Step</span>
            <span className="bg-white/20 px-3 py-1 rounded">Scale Foundation</span>
            <span className="bg-white/20 px-3 py-1 rounded">Natural Movement</span>
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
                  <span><strong>Size:</strong> 2 semitones (whole step)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Major</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Consonant, stable, melodic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Function:</strong> Fundamental scalar step</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>C to D (do-re)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>F to G</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>G to A</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>A to B</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          
          {/* Major 2nd Interval Examples */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Major 2nd Intervals - The Fundamental Melodic Step</h3>
            <p className="text-gray-600 mb-6">
              The major 2nd (2 semitones) is the most common interval in melodies, providing smooth, natural movement between notes.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* C to D Major 2nd */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">C → D Major 2nd</h4>
                  <p className="text-sm text-blue-700 mb-3">Classic whole step movement</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="C_to_D" />
                      <p className="text-xs text-blue-600 mt-1">C (5th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="D_from_C" />
                      <p className="text-xs text-blue-600 mt-1">D (5th string 5th fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q C/4 D/4" 
                      width={200} 
                      scale={0.8}
                    />
                  </div>
                  <p className="text-xs text-blue-600">Natural melodic movement</p>
                </div>
              </div>

              {/* G to A Major 2nd */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-5 border border-green-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">G → A Major 2nd</h4>
                  <p className="text-sm text-green-700 mb-3">Open string to 2nd fret</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="G_to_A" />
                      <p className="text-xs text-green-600 mt-1">G (6th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="A_from_G" />
                      <p className="text-xs text-green-600 mt-1">A (6th string 5th fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q G/2 A/2" 
                      width={200} 
                      scale={0.8}
                    />
                  </div>
                  <p className="text-xs text-green-600">Smooth scale movement</p>
                </div>
              </div>

              {/* D to E Major 2nd */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-purple-800 mb-2">D → E Major 2nd</h4>
                  <p className="text-sm text-purple-700 mb-3">Common in scale patterns</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="D_to_E" />
                      <p className="text-xs text-purple-600 mt-1">D (4th string open)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="E_from_D" />
                      <p className="text-xs text-purple-600 mt-1">E (4th string 2nd fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q D/3 E/3" 
                      width={200} 
                      scale={0.8}
                    />
                  </div>
                  <p className="text-xs text-purple-600">Foundation of major scales</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sus2 and Add9 Chord Applications */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Harmonic Applications - Sus2 & Add9 Chords</h3>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Dsus2 Chord */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
                <h4 className="text-lg font-semibold text-orange-800 mb-4">🎸 Dsus2 Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="Dsus2" />
                    <p className="text-xs text-orange-600 mt-2">D-E-A suspended 2nd chord</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w (D/3 E/3 A/3)" 
                      width={200} 
                      scale={0.8}
                    />
                    <p className="text-xs text-orange-600 mt-2">D-E-A: Root, major 2nd, perfect 5th</p>
                  </div>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• <strong>Major 2nd:</strong> D → E (creates open, airy sound)</li>
                    <li>• <strong>Perfect 5th:</strong> D → A (provides stability)</li>
                    <li>• <strong>Open voicing:</strong> Natural guitar fingering</li>
                  </ul>
                </div>
              </div>

              {/* Asus2 Chord */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 border border-teal-200">
                <h4 className="text-lg font-semibold text-teal-800 mb-4">🎸 Asus2 Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="Asus2" />
                    <p className="text-xs text-teal-600 mt-2">A-B-E suspended 2nd chord</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w (A/2 B/3 E/4)" 
                      width={200} 
                      scale={0.8}
                    />
                    <p className="text-xs text-teal-600 mt-2">A-B-E: Root, major 2nd, perfect 5th</p>
                  </div>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li>• <strong>Major 2nd:</strong> A → B (sweet suspension)</li>
                    <li>• <strong>Perfect 5th:</strong> A → E (harmonic foundation)</li>
                    <li>• <strong>Easy fingering:</strong> Minimal hand movement</li>
                  </ul>
                </div>
              </div>

              {/* Cadd9 Chord */}
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-6 border border-rose-200">
                <h4 className="text-lg font-semibold text-rose-800 mb-4">🎸 Cadd9 Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="Cadd9" />
                    <p className="text-xs text-rose-600 mt-2">C major with added 9th (D)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w (C/4 E/4 G/4 D/5)" 
                      width={200} 
                      scale={0.8}
                    />
                    <p className="text-xs text-rose-600 mt-2">C-E-G-D: Major triad + 9th</p>
                  </div>
                  <ul className="text-sm text-rose-700 space-y-1">
                    <li>• <strong>Major 9th:</strong> C → D (octave + major 2nd)</li>
                    <li>• <strong>Color tone:</strong> Adds brightness and richness</li>
                    <li>• <strong>Pop/folk favorite:</strong> Modern acoustic sound</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Scale Applications and Musical Expression */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Scale Applications & Musical Expression</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">🎯 Major Scale Foundation</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-blue-700 mb-2">C Major Scale Pattern</h5>
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q C/4 D/4 E/4 F/4 | G/4 A/4 B/4 C/5" 
                      width={280} 
                      scale={0.8}
                    />
                    <p className="text-xs text-blue-600 mt-2">Major 2nds: C-D, D-E, F-G, G-A, A-B</p>
                  </div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>5 out of 7 steps:</strong> Most intervals in major scales</li>
                    <li>• <strong>Natural movement:</strong> Easy to sing and play</li>
                    <li>• <strong>Melodic foundation:</strong> Basis for countless melodies</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
                <h4 className="text-lg font-semibold text-green-800 mb-4">🎵 Melodic Expression</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-green-700 mb-2">Smooth Melodic Movement</h5>
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :h C/4 D/4 | :h E/4 F/4" 
                      width={280} 
                      scale={0.8}
                    />
                    <p className="text-xs text-green-600 mt-2">Natural, flowing melodic motion</p>
                  </div>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• <strong>Vocal music:</strong> Comfortable singing intervals</li>
                    <li>• <strong>Instrumental lines:</strong> Smooth finger movement</li>
                    <li>• <strong>Connecting notes:</strong> Bridges between chord tones</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  <span><strong>Scale construction:</strong> Primary interval in major and minor scales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Melodic movement:</strong> Natural, flowing melodic steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Vocal music:</strong> Easy to sing and natural to the ear</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Arpeggios:</strong> Connecting chord tones smoothly</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h4 className="font-medium text-orange-800 mb-3">Melodic Major 2nds Example</h4>
                <p className="text-orange-700 text-sm mb-2">
                  <strong>Smooth Melodic Line Exercise:</strong> A string pattern
                </p>
                <div className="space-y-1 text-xs text-orange-600 font-mono">
                  <div>Ascending: 3rd → 5th → 6th → 8th → 10th frets</div>
                  <div>Descending: 10th → 8th → 6th → 5th → 3rd frets</div>
                  <div>(C → D → E → F → G, then G → F → E → D → C)</div>
                </div>
                <p className="text-orange-700 text-xs mt-2">
                  Notice how natural and flowing this melodic movement sounds
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Harmonic Uses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Sus2 chords:</strong> Adding the 2nd degree to triads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Add9 chords:</strong> Color tones in jazz and pop</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Voice leading:</strong> Smooth harmonic progressions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Polyphonic music:</strong> Independent melodic lines</span>
                </li>
              </ul>

              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-800 mb-3">Sus2 Chord Example</h4>
                <p className="text-purple-700 text-sm mb-2">
                  <strong>C major to Csus2 progression:</strong> Adding the major 2nd for color
                </p>
                <div className="space-y-2 text-xs text-purple-600">
                  <div><strong>C major:</strong> 3rd fret (low E), 3rd fret (A), open (D), 1st fret (G)</div>
                  <div><strong>Csus2:</strong> 3rd fret (low E), 5th fret (A), open (D), 1st fret (G)</div>
                  <div><strong>Change:</strong> Move the C note (3rd fret A string) to D (5th fret A string)</div>
                </div>
                <p className="text-purple-700 text-xs mt-2">
                  The major 2nd (D) replaces the major 3rd (E) creating an open, airy sound
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
                    <span>Pleasant and consonant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Natural melodic movement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Stable, doesn&apos;t need resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Familiar "do-re" sound</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-blue-800 mb-3">Practice Exercises</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Play major scales focusing on 2nd steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Compare with minor 2nd (1 semitone)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Practice "do-re-mi" patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Use two-fret spacing on guitar</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Memory Aid</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Think of the major 2nd as the "do-re" from "Do-Re-Mi" (Sound of Music). It&apos;s the first 
                step up the major scale and sounds natural and pleasant. Unlike the tense minor 2nd, 
                the major 2nd feels stable and doesn&apos;t create any urge to resolve. On guitar, it&apos;s 
                always two frets apart on the same string, making it easy to find and practice.
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
                  <strong>"Do-Re-Mi" (Sound of Music)</strong><br />
                  <span className="text-gray-600 text-sm">Perfect example of major 2nd movement</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Bach's inventions</strong><br />
                  <span className="text-gray-600 text-sm">Scalar passages with major 2nd steps</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Mozart's Piano Sonatas</strong><br />
                  <span className="text-gray-600 text-sm">Elegant melodic lines using stepwise motion</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Music</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>"Twinkle, Twinkle, Little Star"</strong><br />
                  <span className="text-gray-600 text-sm">Opening notes demonstrate major 2nd</span>
                </li>
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>"Happy Birthday"</strong><br />
                  <span className="text-gray-600 text-sm">First two notes are a major 2nd</span>
                </li>
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>Folk songs and children's songs</strong><br />
                  <span className="text-gray-600 text-sm">Natural melodic movement patterns</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">👂 Ear Training</h3>
              <ul className="text-orange-700 text-sm space-y-2">
                <li>• Use "Happy Birthday" as reference</li>
                <li>• Practice major 2nd vs. minor 2nd</li>
                <li>• Study major scale step patterns</li>
                <li>• Listen to diatonic melodies</li>
                <li>• Compare whole step vs. half step</li>
              </ul>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-yellow-700 text-sm space-y-2">
                <li>• Master major scales (2-fret steps)</li>
                <li>• Practice C-D, D-E, F-G, G-A, A-B</li>
                <li>• Work on smooth melodic lines</li>
                <li>• Study diatonic scale patterns</li>
                <li>• Practice major 2nd harmonies</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Create flowing melodic phrases</li>
                <li>• Study folk melody patterns</li>
                <li>• Explore diatonic harmonization</li>
                <li>• Practice scale-based improvisation</li>
                <li>• Analyze stepwise motion in songs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Interval Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            From smooth melodic movement, explore intervals that add emotion and harmonic color.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/intervals/minor-2nd" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <span className="text-2xl">😬</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor 2nd</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Step back to explore tension and dissonance - the smallest interval.
                </p>
                <span className="text-red-600 font-medium text-sm group-hover:text-red-700">
                  Feel the tension →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/minor-3rd" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">😢</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor 3rd</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Step forward to sad beauty - the foundation of minor chords.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Explore emotion →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/major-3rd" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                  <span className="text-2xl">😊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major 3rd</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Continue to bright happiness - the foundation of major chords.
                </p>
                <span className="text-yellow-600 font-medium text-sm group-hover:text-yellow-700">
                  Find joy →
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
