"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function Major6thPage() {
  return (
    <Layout>
      <Header
        title="Major 6th Interval"
        subtitle="The sweet interval - 9 semitones that creates warm, romantic harmony and is the inversion of the minor 3rd."
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
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Major 6th Interval</h1>
          <p className="text-xl opacity-90 mb-4">
            The major 6th is one of the most beautiful and emotionally resonant intervals in music, spanning 
            9 semitones and creating warm, sweet harmonic color that evokes romance and nostalgia.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">9 Semitones</span>
            <span className="bg-white/20 px-3 py-1 rounded">Sweet & Romantic</span>
            <span className="bg-white/20 px-3 py-1 rounded">Minor 3rd Inversion</span>
            <span className="bg-white/20 px-3 py-1 rounded">Warm Harmony</span>
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
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Size:</strong> 9 semitones (4½ whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Major</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Sweet, warm, romantic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Consonance:</strong> Moderately consonant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Inversion:</strong> Minor 3rd (3 semitones)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>C to A:</strong> Major 6th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>F to D:</strong> Major 6th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>"My Bonnie Lies Over the Ocean":</strong> Opening leap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>"Nobody Knows the Trouble I've Seen":</strong> "No-bo-dy"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          
          {/* Major 6th Interval Examples */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Major 6th Intervals - Sweet & Romantic</h3>
            <p className="text-gray-600 mb-6">
              The major 6th (9 semitones) creates one of music's most beautiful and emotionally resonant intervals, evoking warmth, romance, and nostalgia.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* C to A Major 6th */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-5 border border-emerald-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-emerald-800 mb-2">C → A Major 6th</h4>
                  <p className="text-sm text-emerald-700 mb-3">Classic major 6th relationship</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="C_to_A_M6" />
                      <p className="text-xs text-emerald-600 mt-1">C (5th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="A_from_C_M6" />
                      <p className="text-xs text-emerald-600 mt-1">A (5th string open)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="3.5.4 5.5.4" 
                      title="C to A Major 6th" 
                      className="scale-75"
                    />
                  </div>
                  <p className="text-xs text-emerald-600">Sweet, romantic harmonic color</p>
                </div>
              </div>

              {/* F to D Major 6th */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-5 border border-teal-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-teal-800 mb-2">F → D Major 6th</h4>
                  <p className="text-sm text-teal-700 mb-3">Folk and country music staple</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="F_to_D_M6" />
                      <p className="text-xs text-teal-600 mt-1">F (6th string 1st fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="D_from_F_M6" />
                      <p className="text-xs text-teal-600 mt-1">D (4th string open)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="1.6.4 0.4.4" 
                      title="F to D Major 6th" 
                      className="scale-75"
                    />
                  </div>
                  <p className="text-xs text-teal-600">Warm, open folk harmony</p>
                </div>
              </div>

              {/* G to E Major 6th */}
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg p-5 border border-cyan-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-cyan-800 mb-2">G → E Major 6th</h4>
                  <p className="text-sm text-cyan-700 mb-3">Jazz and ballad application</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="G_to_E_M6" />
                      <p className="text-xs text-cyan-600 mt-1">G (6th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="E_from_G_M6" />
                      <p className="text-xs text-cyan-600 mt-1">E (4th string 2nd fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="3.6.4 2.4.4" 
                      title="G to E Major 6th" 
                      className="scale-75"
                    />
                  </div>
                  <p className="text-xs text-cyan-600">Sophisticated melodic movement</p>
                </div>
              </div>
            </div>
          </div>

          {/* 6th Chord Applications */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">6th Chord Applications - Adding Sweetness</h3>
            
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
                    <AlphaTexRenderer 
                      alphaTex="(3.5 2.4 3.3 5.5).1" 
                      title="C6 Chord" 
                      className="scale-75"
                    />
                    <p className="text-xs text-blue-600 mt-2">C-E-G-A: Major triad + major 6th</p>
                  </div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>Major 6th:</strong> C → A (romantic sweetness)</li>
                    <li>• <strong>Jazz standard:</strong> Final resolution chord</li>
                    <li>• <strong>Folk/country:</strong> Warm, open sound</li>
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
                    <AlphaTexRenderer 
                      alphaTex="(0.5 3.4 2.4 2.1).1" 
                      title="Am6 Chord" 
                      className="scale-75"
                    />
                    <p className="text-xs text-emerald-600 mt-2">A-C-E-F#: Minor triad + major 6th</p>
                  </div>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    <li>• <strong>Major 6th:</strong> A → F# (brightens minor)</li>
                    <li>• <strong>Bossa nova:</strong> Essential Brazilian sound</li>
                    <li>• <strong>Jazz ballads:</strong> Sophisticated minor harmony</li>
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
                    <AlphaTexRenderer 
                      alphaTex="(0.4 1.4 2.5 4.6).1" 
                      title="Dm6 Chord" 
                      className="scale-75"
                    />
                    <p className="text-xs text-rose-600 mt-2">D-F-A-B: Minor triad + major 6th</p>
                  </div>
                  <ul className="text-sm text-rose-700 space-y-1">
                    <li>• <strong>Major 6th:</strong> D → B (complex sweetness)</li>
                    <li>• <strong>Classical:</strong> Romantic period harmony</li>
                    <li>• <strong>Film music:</strong> Nostalgic, expressive quality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Melodic Applications & Genre Contexts */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Melodic Applications & Genre Contexts</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 border border-amber-200">
                <h4 className="text-lg font-semibold text-amber-800 mb-4">🎯 "My Bonnie" Reference</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-amber-700 mb-2">Classic Major 6th Leap</h5>
                    <AlphaTexRenderer 
                      alphaTex="3.5.1 5.5.1" 
                      title="My Bonnie Leap" 
                      className="scale-75"
                    />
                    <p className="text-xs text-amber-600 mt-2">"My Bonnie lies over the ocean" - iconic major 6th</p>
                  </div>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• <strong>Yearning quality:</strong> Expansive, reaching emotion</li>
                    <li>• <strong>Melodic leap:</strong> Creates dramatic musical moment</li>
                    <li>• <strong>Traditional song:</strong> Perfect ear training reference</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg p-6 border border-violet-200">
                <h4 className="text-lg font-semibold text-violet-800 mb-4">🎵 Jazz & Modern Applications</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-violet-700 mb-2">Sophisticated Harmony</h5>
                    <AlphaTexRenderer 
                      alphaTex="(3.5 2.4 3.3 5.5).2 | (1.6 5.5 3.2 5.1).2" 
                      title="C6 to F6 Progression" 
                      className="scale-75"
                    />
                    <p className="text-xs text-violet-600 mt-2">C6 to F6 progression - jazz standard movement</p>
                  </div>
                  <ul className="text-sm text-violet-700 space-y-1">
                    <li>• <strong>Ballad endings:</strong> Non-dominant resolution</li>
                    <li>• <strong>Country music:</strong> Pedal steel guitar effects</li>
                    <li>• <strong>Bossa nova:</strong> Minor 6th chord sophistication</li>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Classical & Traditional</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"My Bonnie Lies Over the Ocean"</h4>
                  <p className="text-sm text-gray-600 mb-2">Opening major 6th leap creates yearning, expansive feeling</p>
                  <p className="text-xs text-gray-500">Classic example of major 6th's romantic character</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Nobody Knows the Trouble I've Seen"</h4>
                  <p className="text-sm text-gray-600 mb-2">"No-bo-dy" features distinctive major 6th interval</p>
                  <p className="text-xs text-gray-500">Spiritual demonstrates interval's emotional depth</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Music</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Jazz Standards & Ballads</h4>
                  <p className="text-sm text-gray-600 mb-2">Major 6th chords in "The Way You Look Tonight", "Misty"</p>
                  <p className="text-xs text-gray-500">Essential for sophisticated jazz harmony</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Country & Folk Music</h4>
                  <p className="text-sm text-gray-600 mb-2">Pedal steel guitar and major 6th chord progressions</p>
                  <p className="text-xs text-gray-500">Creates characteristic country and folk warmth</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">👂 Ear Training</h3>
              <ul className="text-emerald-700 text-sm space-y-2">
                <li>• Use "My Bonnie" as reference</li>
                <li>• Practice major 6th vs. minor 6th</li>
                <li>• Listen to major 6th chord progressions</li>
                <li>• Study jazz ballad harmony</li>
                <li>• Compare with perfect 5th and minor 7th</li>
              </ul>
            </div>
            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-teal-700 text-sm space-y-2">
                <li>• Master 9-fret same-string 6ths</li>
                <li>• Practice C-A, F-D, G-E intervals</li>
                <li>• Work on major 6th chord shapes</li>
                <li>• Study cross-string 6th patterns</li>
                <li>• Practice major 6th melodic leaps</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Create romantic melodic phrases</li>
                <li>• Study jazz major 6th chord usage</li>
                <li>• Explore country/folk 6th harmony</li>
                <li>• Practice modal interchange (Dorian)</li>
                <li>• Analyze major 6th in favorite songs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Theory & Harmony */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory & Harmonic Function</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Inversion Relationship</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Minor 3rd Inversion</h4>
                  <p className="text-sm text-gray-600">The major 6th inverts to a minor 3rd. When you flip a C-A major 6th, you get A-C (minor 3rd), creating an interesting harmonic duality.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Harmonic Series Position</h4>
                  <p className="text-sm text-gray-600">The major 6th appears later in the harmonic series, giving it a more complex but still consonant character.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Chord Functions</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Major 6th Chords</h4>
                  <p className="text-sm text-gray-600">Add warmth without the pull of dominant 7th chords. Often used as tonic substitutes in jazz and as color chords in folk music.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Modal Color</h4>
                  <p className="text-sm text-gray-600">The major 6th gives Dorian mode its characteristic sound, distinguishing it from natural minor.</p>
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
              <h3 className="font-semibold text-blue-800 mb-2">Minor 6th</h3>
              <p className="text-sm text-blue-700 mb-2">8 semitones - one semitone smaller</p>
              <p className="text-xs text-blue-600">Sad vs. sweet - same interval quality, different emotion</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Perfect 5th</h3>
              <p className="text-sm text-green-700 mb-2">7 semitones - two semitones smaller</p>
              <p className="text-xs text-green-600">Rock solid vs. romantically expansive</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Minor 7th</h3>
              <p className="text-sm text-purple-700 mb-2">10 semitones - one semitone larger</p>
              <p className="text-xs text-purple-600">Sweet vs. bluesy - different harmonic functions</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Interval Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            From sweet romance, explore intervals that add different emotional colors and harmonic functions.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/intervals/minor-6th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">😢</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor 6th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Compare the sad beauty - explore the minor 6th's melancholic character.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Feel the sadness →
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
                  Step back to rock-solid stability - the foundation of power chords.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Find power →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/minor-7th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor 7th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Step up to bluesy sophistication - essential for dominant 7th chords.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Add blues →
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
