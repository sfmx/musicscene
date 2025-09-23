"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function Perfect5thPage() {
  return (
    <Layout>
      <Header
        title="Perfect 5th Interval"
        subtitle="The most consonant interval after the octave - 7 semitones that forms the foundation of power chords and harmonic relationships."
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
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Perfect 5th Interval</h1>
          <p className="text-xl opacity-90 mb-4">
            The perfect 5th is the most consonant interval after the octave, spanning 7 semitones 
            and creating a pure, stable, and harmonious sound that forms the foundation of all harmony.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">7 Semitones</span>
            <span className="bg-white/20 px-3 py-1 rounded">Perfect Consonance</span>
            <span className="bg-white/20 px-3 py-1 rounded">Power Chords</span>
            <span className="bg-white/20 px-3 py-1 rounded">Harmonic Foundation</span>
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
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Size:</strong> 7 semitones (3½ whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Perfect</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Strong, stable, consonant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Consonance:</strong> Perfect consonance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Function:</strong> Harmonic foundation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>C to G:</strong> Classic perfect 5th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>G to D:</strong> In all major scales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Power chords:</strong> All rock progressions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>"Star Wars":</strong> Opening theme</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          
          {/* Power Chords Section */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Power Chords - Perfect 5th Foundation</h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {/* E5 Power Chord */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-5 border border-red-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-red-800 mb-2">E5 Power Chord</h4>
                  <p className="text-sm text-red-700 mb-3">Root: E, Fifth: B (7 semitones)</p>
                  <div className="flex justify-center mb-3">
                    <SimpleFretboardDiagram chord="E5" />
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="0.6.4 2.5.4" 
                      title="E to B Perfect 5th" 
                      className="scale-75"
                    />
                  </div>
                  <p className="text-xs text-red-600">Frets: 0-2-2 (low E, A, D strings)</p>
                </div>
              </div>

              {/* A5 Power Chord */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">A5 Power Chord</h4>
                  <p className="text-sm text-blue-700 mb-3">Root: A, Fifth: E (7 semitones)</p>
                  <div className="flex justify-center mb-3">
                    <SimpleFretboardDiagram chord="A5" />
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="0.5.4 2.4.4" 
                      title="A to E Perfect 5th" 
                      className="scale-75"
                    />
                  </div>
                  <p className="text-xs text-blue-600">Frets: x-0-2-2 (A, D strings)</p>
                </div>
              </div>

              {/* G5 Power Chord */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-5 border border-green-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">G5 Power Chord</h4>
                  <p className="text-sm text-green-700 mb-3">Root: G, Fifth: D (7 semitones)</p>
                  <div className="flex justify-center mb-3">
                    <SimpleFretboardDiagram chord="G5" />
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="3.6.4 5.5.4" 
                      title="G to D Perfect 5th" 
                      className="scale-75"
                    />
                  </div>
                  <p className="text-xs text-green-600">Frets: 3-5-5 (low E, A strings)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fretboard Patterns */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Perfect 5th Fretboard Patterns</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
                <h4 className="text-lg font-semibold text-purple-800 mb-4">🎯 Same String Pattern</h4>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <AlphaTexRenderer 
                    alphaTex="0.6.4 7.6.4 | 3.6.4 10.6.4" 
                    title="Same String Perfect 5ths" 
                    className="scale-90"
                  />
                </div>
                <ul className="text-sm text-purple-700 space-y-2">
                  <li>• <strong>7 frets apart:</strong> Any string, perfect 5th</li>
                  <li>• <strong>E string:</strong> 0 (E) → 7 (B), 3 (G) → 10 (D)</li>
                  <li>• <strong>Practice:</strong> Play intervals across all strings</li>
                  <li>• <strong>Memory aid:</strong> Always exactly 7 frets</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
                <h4 className="text-lg font-semibold text-orange-800 mb-4">🔄 Cross-String Pattern</h4>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <AlphaTexRenderer 
                    alphaTex="0.6.4 2.5.4 | 3.6.4 5.5.4 | 5.6.4 7.5.4" 
                    title="Cross String Perfect 5ths" 
                    className="scale-90"
                  />
                </div>
                <ul className="text-sm text-orange-700 space-y-2">
                  <li>• <strong>Adjacent strings:</strong> +2 frets (except G-B)</li>
                  <li>• <strong>E to A:</strong> 0 → 2, 3 → 5, 5 → 7</li>
                  <li>• <strong>Power chords:</strong> Built on this pattern</li>
                  <li>• <strong>Exception:</strong> G-B strings need +3 frets</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Musical Applications */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Harmonic & Melodic Applications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 border border-emerald-200">
                <h4 className="text-lg font-semibold text-emerald-800 mb-4">🏗️ Chord Construction</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-emerald-700 mb-2">Basic Triad (C Major)</h5>
                    <AlphaTexRenderer 
                      alphaTex="(3.5 2.4 3.3).1" 
                      title="C Major Triad" 
                      className="scale-75"
                    />
                    <p className="text-xs text-emerald-600 mt-2">Root + 3rd + 5th = Complete harmony</p>
                  </div>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    <li>• <strong>5th provides:</strong> Harmonic stability</li>
                    <li>• <strong>Foundation:</strong> All chords built on perfect 5th</li>
                    <li>• <strong>Sus4 chords:</strong> 4th replaces 3rd, 5th remains</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 border border-teal-200">
                <h4 className="text-lg font-semibold text-teal-800 mb-4">🎵 Melodic Applications</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-teal-700 mb-2">Perfect 5th Melodic Leap</h5>
                    <AlphaTexRenderer 
                      alphaTex="3.5.4 3.3.4 3.2.4 3.3.4" 
                      title="Perfect 5th Arpeggios" 
                      className="scale-75"
                    />
                    <p className="text-xs text-teal-600 mt-2">Strong, heroic melodic intervals</p>
                  </div>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li>• <strong>Character:</strong> Heroic, stable, strong</li>
                    <li>• <strong>Pentatonic:</strong> Built on 5th relationships</li>
                    <li>• <strong>Natural harmonics:</strong> 7th fret produces 5th</li>
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
                  <h4 className="font-semibold text-gray-800">"Star Wars" Main Theme</h4>
                  <p className="text-sm text-gray-600 mb-2">Opening perfect 5th creates heroic character</p>
                  <p className="text-xs text-gray-500">Demonstrates the powerful, stable quality of perfect 5ths</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Twinkle, Twinkle, Little Star"</h4>
                  <p className="text-sm text-gray-600 mb-2">First two notes demonstrate perfect 5th</p>
                  <p className="text-xs text-gray-500">Simple example of perfect 5th's consonant nature</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Rock & Popular Music</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Classic Rock Power Chords</h4>
                  <p className="text-sm text-gray-600 mb-2">Foundation of rock rhythm guitar in all genres</p>
                  <p className="text-xs text-gray-500">Perfect 5ths create the driving force of rock music</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Metal & Heavy Music</h4>
                  <p className="text-sm text-gray-600 mb-2">Low-tuned perfect 5ths for heavy, powerful sound</p>
                  <p className="text-xs text-gray-500">Perfect consonance cuts through distortion clearly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">👂 Ear Training</h3>
              <ul className="text-green-700 text-sm space-y-2">
                <li>• Practice power chord recognition</li>
                <li>• Use "Star Wars" theme as reference</li>
                <li>• Compare with perfect 4th intervals</li>
                <li>• Listen to 7-fret patterns on guitar</li>
                <li>• Study triadic harmony progressions</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• Master basic power chord shapes</li>
                <li>• Practice 7-fret pattern on all strings</li>
                <li>• Work on power chord progressions</li>
                <li>• Study perfect 5ths in major scales</li>
                <li>• Practice harmonic and melodic 5ths</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Create rock riffs using power chords</li>
                <li>• Analyze classic rock progressions</li>
                <li>• Practice perfect 5th melodic leaps</li>
                <li>• Study circle of 5ths relationships</li>
                <li>• Work on sus4 chord progressions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Physics and Acoustics */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Physics & Acoustics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Harmonic Series</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Natural Resonance</h4>
                  <p className="text-sm text-gray-600">The perfect 5th appears as the 3rd harmonic in the natural harmonic series, making it inherently consonant and stable.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Frequency Ratio</h4>
                  <p className="text-sm text-gray-600">Perfect 5th has a 3:2 frequency ratio, creating a simple mathematical relationship that the ear perceives as stable.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Guitar Physics</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">String Resonance</h4>
                  <p className="text-sm text-gray-600">Perfect 5ths create sympathetic resonance between strings, making power chords ring naturally on guitar.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Distortion Clarity</h4>
                  <p className="text-sm text-gray-600">The simple frequency ratio means perfect 5ths stay clear under heavy distortion, unlike more complex intervals.</p>
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
              <h3 className="font-semibold text-blue-800 mb-2">Perfect 4th</h3>
              <p className="text-sm text-blue-700 mb-2">5 semitones - inversion of perfect 5th</p>
              <p className="text-xs text-blue-600">5th + 4th = octave (12 semitones)</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">Tritone</h3>
              <p className="text-sm text-red-700 mb-2">6 semitones - diminished 5th</p>
              <p className="text-xs text-red-600">Contrasts perfectly with perfect 5th stability</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Octave</h3>
              <p className="text-sm text-purple-700 mb-2">12 semitones - most consonant interval</p>
              <p className="text-xs text-purple-600">Perfect 5th is 2nd most consonant after octave</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Interval Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the perfect 5th, explore how it relates to other intervals and creates harmonic foundations.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/intervals/perfect-4th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect 4th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn the inversion of the perfect 5th and how they complement each other.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Study inversions →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/tritone" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tritone</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the "devil's interval" that contrasts dramatically with the perfect 5th.
                </p>
                <span className="text-red-600 font-medium text-sm group-hover:text-red-700">
                  Feel the tension →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/octave" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Octave</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Discover the most consonant interval and how it relates to the perfect 5th.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Reach completion →
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
