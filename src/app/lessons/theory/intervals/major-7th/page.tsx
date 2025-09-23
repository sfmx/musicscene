"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function Major7thPage() {
  return (
    <Layout>
      <Header
        title="Major 7th Interval"
        subtitle="The sophisticated interval - 11 semitones that creates rich jazz harmony and adds elegant tension that resolves beautifully to the octave."
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
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Major 7th Interval</h1>
          <p className="text-xl opacity-90 mb-4">
            The major 7th is the epitome of sophisticated harmony, spanning 11 semitones and creating 
            elegant tension that defines jazz music and adds refined color to any harmonic context.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">11 Semitones</span>
            <span className="bg-white/20 px-3 py-1 rounded">Jazz Essential</span>
            <span className="bg-white/20 px-3 py-1 rounded">Elegant Tension</span>
            <span className="bg-white/20 px-3 py-1 rounded">Sophisticated</span>
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
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Size:</strong> 11 semitones (5½ whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Major</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Sophisticated, elegant tension</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Consonance:</strong> Mild dissonance seeking resolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Function:</strong> Jazz harmony and sophisticated extensions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>C to B:</strong> Classic major 7th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Cmaj7:</strong> C-E-G-B chord</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Jazz standards:</strong> Essential harmony</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>"Take Five":</strong> Dave Brubeck classic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          
          {/* Major 7th Interval Examples */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Major 7th Intervals - Elegant Tension</h3>
            <p className="text-gray-600 mb-6">
              The major 7th (11 semitones) creates sophisticated, elegant tension that defines jazz harmony and adds refined color to any musical context.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* C to B Major 7th */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-5 border border-amber-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-amber-800 mb-2">C → B Major 7th</h4>
                  <p className="text-sm text-amber-700 mb-3">Classic major 7th relationship</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="C_to_B_M7" />
                      <p className="text-xs text-amber-600 mt-1">C (5th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="B_from_C_M7" />
                      <p className="text-xs text-amber-600 mt-1">B (5th string 2nd fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="3.5.4 2.5.4" 
                      title="C to B Major 7th" 
                      className="scale-75"
                    />
                  </div>
                  <p className="text-xs text-amber-600">Sophisticated, elegant tension</p>
                </div>
              </div>

              {/* F to E Major 7th */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-5 border border-orange-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-orange-800 mb-2">F → E Major 7th</h4>
                  <p className="text-sm text-orange-700 mb-3">Fmaj7 chord essential interval</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="F_to_E_M7" />
                      <p className="text-xs text-orange-600 mt-1">F (6th string 1st fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="E_from_F_M7" />
                      <p className="text-xs text-orange-600 mt-1">E (6th string open)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="1.6.4 0.6.4" 
                      title="F to E Major 7th" 
                      className="scale-75"
                    />
                  </div>
                  <p className="text-xs text-orange-600">Jazz chord essential harmony</p>
                </div>
              </div>

              {/* G to F# Major 7th */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-5 border border-yellow-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">G → F# Major 7th</h4>
                  <p className="text-sm text-yellow-700 mb-3">Gmaj7 chord application</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="G_to_Fs_M7" />
                      <p className="text-xs text-yellow-600 mt-1">G (6th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="Fs_from_G_M7" />
                      <p className="text-xs text-yellow-600 mt-1">F# (6th string 2nd fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="3.6.4 2.6.4" 
                      title="G to F# Major 7th" 
                      className="scale-75"
                    />
                  </div>
                  <p className="text-xs text-yellow-600">Sophisticated tonic harmony</p>
                </div>
              </div>
            </div>
          </div>

          {/* Major 7th Chord Applications */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Major 7th Chord Applications - Jazz Sophistication</h3>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Cmaj7 Chord */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">🎸 Cmaj7 Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="CMaj7" />
                    <p className="text-xs text-blue-600 mt-2">Cmaj7 with major 7th (B)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <AlphaTexRenderer 
                      alphaTex="(3.5 2.4 3.3 2.5).1" 
                      title="Cmaj7 Chord" 
                      className="scale-75"
                    />
                    <p className="text-xs text-blue-600 mt-2">C-E-G-B: Major triad + major 7th</p>
                  </div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>Major 7th:</strong> C → B (elegant sophistication)</li>
                    <li>• <strong>Jazz tonic:</strong> Sophisticated I chord</li>
                    <li>• <strong>Ballads:</strong> Refined harmonic color</li>
                  </ul>
                </div>
              </div>

              {/* Fmaj7 Chord */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 border border-emerald-200">
                <h4 className="text-lg font-semibold text-emerald-800 mb-4">🎸 Fmaj7 Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="FMaj7" />
                    <p className="text-xs text-emerald-600 mt-2">Fmaj7 with major 7th (E)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <AlphaTexRenderer 
                      alphaTex="(1.6 5.5 3.2 0.6).1" 
                      title="Fmaj7 Chord" 
                      className="scale-75"
                    />
                    <p className="text-xs text-emerald-600 mt-2">F-A-C-E: Major triad + major 7th</p>
                  </div>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    <li>• <strong>Major 7th:</strong> F → E (smooth jazz harmony)</li>
                    <li>• <strong>IV chord:</strong> Sophisticated subdominant</li>
                    <li>• <strong>Bossa nova:</strong> Essential Brazilian sound</li>
                  </ul>
                </div>
              </div>

              {/* Gmaj7 Chord */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 border border-teal-200">
                <h4 className="text-lg font-semibold text-teal-800 mb-4">🎸 Gmaj7 Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="GMaj7" />
                    <p className="text-xs text-teal-600 mt-2">Gmaj7 with major 7th (F#)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <AlphaTexRenderer 
                      alphaTex="(3.6 4.5 0.4 2.6).1" 
                      title="Gmaj7 Chord" 
                      className="scale-75"
                    />
                    <p className="text-xs text-teal-600 mt-2">G-B-D-F#: Major triad + major 7th</p>
                  </div>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li>• <strong>Major 7th:</strong> G → F# (bright sophistication)</li>
                    <li>• <strong>V chord:</strong> Non-dominant resolution</li>
                    <li>• <strong>Modal jazz:</strong> Lydian and Ionian applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Jazz Applications & Voice Leading */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Jazz Applications & Sophisticated Harmony</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
                <h4 className="text-lg font-semibold text-purple-800 mb-4">🎯 Jazz Standard Progressions</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-purple-700 mb-2">I - vi - ii - V with maj7</h5>
                    <AlphaTexRenderer 
                      alphaTex="(3.5 2.4 3.3 2.5).1 | (0.5 3.4 2.4 1.6).1 | (0.4 1.4 2.5 3.4).1 | (3.6 4.5 0.4 1.6).1" 
                      title="Jazz Progression with maj7" 
                      className="scale-75"
                    />
                    <p className="text-xs text-purple-600 mt-2">Cmaj7 - Am7 - Dm7 - G7: Major 7th sophistication</p>
                  </div>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• <strong>Cmaj7:</strong> Sophisticated tonic resolution</li>
                    <li>• <strong>Voice leading:</strong> Smooth major 7th movement</li>
                    <li>• <strong>Jazz ballads:</strong> Essential harmonic color</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6 border border-indigo-200">
                <h4 className="text-lg font-semibold text-indigo-800 mb-4">🎵 Resolution & Tension</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-indigo-700 mb-2">Major 7th to Octave Resolution</h5>
                    <AlphaTexRenderer 
                      alphaTex="2.5.2 3.5.2" 
                      title="Major 7th to Octave Resolution" 
                      className="scale-75"
                    />
                    <p className="text-xs text-indigo-600 mt-2">Natural upward resolution tendency of major 7th</p>
                  </div>
                  <ul className="text-sm text-indigo-700 space-y-1">
                    <li>• <strong>Leading tone:</strong> Wants to resolve up</li>
                    <li>• <strong>Elegant tension:</strong> Sophisticated dissonance</li>
                    <li>• <strong>Chord melody:</strong> Beautiful voice leading</li>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Jazz Standards</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Take Five" - Dave Brubeck</h4>
                  <p className="text-sm text-gray-600 mb-2">Classic jazz piece featuring prominent maj7 harmony</p>
                  <p className="text-xs text-gray-500">Demonstrates sophisticated major 7th chord usage</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Giant Steps" - John Coltrane</h4>
                  <p className="text-sm text-gray-600 mb-2">Complex jazz harmony with multiple maj7 chords</p>
                  <p className="text-xs text-gray-500">Advanced application of major 7th intervals</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Popular Music</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Fly Me to the Moon"</h4>
                  <p className="text-sm text-gray-600 mb-2">Beautiful major 7th harmonies in classic ballad</p>
                  <p className="text-xs text-gray-500">Elegant use of maj7 chords for sophisticated color</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Modern Jazz-influenced Pop</h4>
                  <p className="text-sm text-gray-600 mb-2">Contemporary songs using maj7 chords for sophistication</p>
                  <p className="text-xs text-gray-500">Neo-soul and jazz-fusion applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">👂 Ear Training</h3>
              <ul className="text-amber-700 text-sm space-y-2">
                <li>• Practice maj7 vs dominant 7th recognition</li>
                <li>• Use jazz standards as reference</li>
                <li>• Study maj7 chord progressions</li>
                <li>• Listen to resolution to octave</li>
                <li>• Compare with minor 7th intervals</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• Master maj7 chord voicings</li>
                <li>• Practice jazz comping patterns</li>
                <li>• Work on smooth voice leading</li>
                <li>• Study chord melody applications</li>
                <li>• Practice extended harmony (maj9, maj13)</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Learn jazz standards with maj7 chords</li>
                <li>• Practice reharmonization with maj7</li>
                <li>• Compose using sophisticated harmony</li>
                <li>• Study modal jazz applications</li>
                <li>• Work on tension and resolution</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Jazz Theory Context */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Jazz Theory & Advanced Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Harmonic Function</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Tonic Function</h4>
                  <p className="text-sm text-gray-600">Major 7th chords often serve as sophisticated tonic harmony in jazz</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Color Tones</h4>
                  <p className="text-sm text-gray-600">The major 7th adds elegant color without changing the chord's basic function</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Resolution Tendencies</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Upward Resolution</h4>
                  <p className="text-sm text-gray-600">Major 7th naturally wants to resolve up to the octave (root)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Voice Leading</h4>
                  <p className="text-sm text-gray-600">Smooth movement of major 7th in chord progressions creates sophisticated harmony</p>
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
              <h3 className="font-semibold text-blue-800 mb-2">Minor 7th</h3>
              <p className="text-sm text-blue-700 mb-2">10 semitones - one semitone smaller</p>
              <p className="text-xs text-blue-600">Compare elegant maj7 vs bluesy min7 qualities</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Octave</h3>
              <p className="text-sm text-purple-700 mb-2">12 semitones - natural resolution point</p>
              <p className="text-xs text-purple-600">Major 7th wants to resolve up to octave</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Minor 2nd</h3>
              <p className="text-sm text-green-700 mb-2">1 semitone - inversion of major 7th</p>
              <p className="text-xs text-green-600">Sharp dissonance vs elegant tension</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-amber-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Interval Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the major 7th, explore its relationships and applications in sophisticated harmony.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/intervals/minor-7th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor 7th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Compare the bluesy minor 7th against the elegant major 7th quality.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Feel the contrast →
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
                  Study the natural resolution point of the major 7th interval.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Find resolution →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/minor-2nd" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor 2nd</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the inversion relationship between major 7th and minor 2nd.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Study inversions →
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
