'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import VexTabRenderer from '@/components/VexTabRenderer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

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
          
          {/* Natural Minor 2nds */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Natural Minor 2nds - E→F and B→C</h3>
            <p className="text-gray-600 mb-6">
              These are the only minor 2nd intervals that occur naturally in the major scale (no sharps or flats needed).
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* E to F Examples */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
                <h4 className="text-lg font-semibold text-red-800 mb-4">🎵 E → F Natural Semitone</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <h5 className="text-sm font-semibold text-red-700 mb-2">E (Open)</h5>
                    <SimpleFretboardDiagram chord="E_to_F" />
                    <p className="text-xs text-red-600 mt-2">1st string open</p>
                  </div>
                  <div className="text-center">
                    <h5 className="text-sm font-semibold text-red-700 mb-2">F (1st Fret)</h5>
                    <SimpleFretboardDiagram chord="F_from_E" />
                    <p className="text-xs text-red-600 mt-2">1st string, 1st fret</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 mb-3">
                  <VexTabRenderer 
                    vextab="tabstave notation=true tablature=false\nnotes :q E/5 F/5" 
                    width={240} 
                    scale={0.8}
                  />
                </div>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• <strong>No accidentals needed:</strong> Natural in major scale</li>
                  <li>• <strong>Leading tone:</strong> F resolves up to G or down to E</li>
                  <li>• <strong>Guitar advantage:</strong> Easy adjacent fret technique</li>
                </ul>
              </div>

              {/* B to C Examples */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">🎵 B → C Natural Semitone</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <h5 className="text-sm font-semibold text-blue-700 mb-2">B (Open)</h5>
                    <SimpleFretboardDiagram chord="B_to_C" />
                    <p className="text-xs text-blue-600 mt-2">2nd string open</p>
                  </div>
                  <div className="text-center">
                    <h5 className="text-sm font-semibold text-blue-700 mb-2">C (1st Fret)</h5>
                    <SimpleFretboardDiagram chord="C_from_B" />
                    <p className="text-xs text-blue-600 mt-2">2nd string, 1st fret</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 mb-3">
                  <VexTabRenderer 
                    vextab="tabstave notation=true tablature=false\nnotes :q B/4 C/5" 
                    width={240} 
                    scale={0.8}
                  />
                </div>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• <strong>Leading tone to C:</strong> Strong resolution tendency</li>
                  <li>• <strong>Scale degrees:</strong> 7→1 (ti→do) in C major</li>
                  <li>• <strong>Harmonic function:</strong> Creates dominant tension</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Chromatic Applications */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Chromatic Minor 2nd Applications</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
                <h4 className="text-lg font-semibold text-orange-800 mb-4">🎸 Melodic Chromatic Passing Tones</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-orange-700 mb-2">Chromatic Ascent: C → C# → D</h5>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Chromatic_C" />
                        <p className="text-xs text-orange-600 mt-1">C (3rd fret)</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Chromatic_Cs" />
                        <p className="text-xs text-orange-600 mt-1">C# (4th fret)</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Chromatic_D" />
                        <p className="text-xs text-orange-600 mt-1">D (5th fret)</p>
                      </div>
                    </div>
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q C/4 C#/4 D/4" 
                      width={260} 
                      scale={0.8}
                    />
                    <p className="text-xs text-orange-600 mt-2">Smooth voice leading using minor 2nds</p>
                  </div>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• <strong>Technique:</strong> Adjacent frets create smooth lines</li>
                    <li>• <strong>Usage:</strong> Jazz, blues, classical voice leading</li>
                    <li>• <strong>Effect:</strong> Eliminates melodic leaps</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
                <h4 className="text-lg font-semibold text-purple-800 mb-4">🎹 Harmonic Cluster Chords</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-purple-700 mb-2">Dissonant Cluster Example</h5>
                    <div className="text-center mb-3">
                      <SimpleFretboardDiagram chord="Minor2nd_Cluster" />
                      <p className="text-xs text-purple-600 mt-2">G-C-F#-Bb cluster (contains multiple minor 2nds)</p>
                    </div>
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :w (G/3 C/4 F#/4 Bb/4)" 
                      width={260} 
                      scale={0.8}
                    />
                    <p className="text-xs text-purple-600 mt-2">Dense harmony creating maximum tension</p>
                  </div>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• <strong>Modern usage:</strong> Jazz, contemporary classical</li>
                    <li>• <strong>Effect:</strong> Creates urgency and discomfort</li>
                    <li>• <strong>Resolution:</strong> Demands movement to consonance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Guitar Applications */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Technical Guitar Applications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 border border-emerald-200">
                <h4 className="text-lg font-semibold text-emerald-800 mb-4">🎯 Fretboard Navigation</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-emerald-700 mb-2">Universal Rule: Adjacent Frets = Minor 2nd</h5>
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :8 C/4 C#/4 D/4 D#/4 E/4 F/4 F#/4 G/4" 
                      width={280} 
                      scale={0.8}
                    />
                    <p className="text-xs text-emerald-600 mt-2">Chromatic scale: all minor 2nd intervals</p>
                  </div>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    <li>• <strong>Any string:</strong> Each fret = 1 semitone higher</li>
                    <li>• <strong>Practice tip:</strong> Use for chromatic scale exercises</li>
                    <li>• <strong>Theory connection:</strong> Foundation of equal temperament</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 border border-teal-200">
                <h4 className="text-lg font-semibold text-teal-800 mb-4">🎵 Musical Tension & Resolution</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-teal-700 mb-2">Leading Tone Resolution</h5>
                    <VexTabRenderer 
                      vextab="tabstave notation=true tablature=false\nnotes :q B/4 C/5 | F/4 E/4" 
                      width={280} 
                      scale={0.8}
                    />
                    <p className="text-xs text-teal-600 mt-2">B→C (up) and F→E (down) resolutions</p>
                  </div>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li>• <strong>Upward resolution:</strong> Leading tone to tonic</li>
                    <li>• <strong>Downward resolution:</strong> 4th degree to 3rd</li>
                    <li>• <strong>Harmonic drive:</strong> Creates forward motion</li>
                  </ul>
                </div>
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

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">👂 Ear Training</h3>
              <ul className="text-red-700 text-sm space-y-2">
                <li>• Use "Jaws" theme as reference</li>
                <li>• Practice minor 2nd vs. major 2nd</li>
                <li>• Listen to chromatic voice leading</li>
                <li>• Study horror movie soundtracks</li>
                <li>• Compare harmonic vs. melodic 2nds</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-pink-700 text-sm space-y-2">
                <li>• Master chromatic scales (1-fret steps)</li>
                <li>• Practice adjacent fret intervals</li>
                <li>• Work on E→F and B→C (natural minor 2nds)</li>
                <li>• Study chromatic chord progressions</li>
                <li>• Practice minor 2nd resolution patterns</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Create tension with chromatic passing tones</li>
                <li>• Study classical chromatic harmony</li>
                <li>• Explore jazz chromatic voice leading</li>
                <li>• Practice blues chromatic approaches</li>
                <li>• Analyze dissonance in favorite songs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Interval Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            From maximum tension, explore intervals that offer resolution and different harmonic colors.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/intervals/unison" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Unison</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Return to perfect unity - the foundation from which all intervals begin.
                </p>
                <span className="text-gray-600 font-medium text-sm group-hover:text-gray-700">
                  Find peace →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/major-2nd" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">🚶</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major 2nd</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Step up to smooth melodic movement - the foundation of scales and melodies.
                </p>
                <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                  Step forward →
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
                  Discover the sad beauty that forms the foundation of minor chords.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Feel the emotion →
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
