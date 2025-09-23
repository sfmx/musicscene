"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function Perfect4thPage() {
  return (
    <Layout>
      <Header
        title="Perfect 4th Interval"
        subtitle="A stable, consonant interval of 5 semitones that forms the foundation of harmonic relationships and is essential to guitar tuning."
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
        <div className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Perfect 4th Interval</h1>
          <p className="text-xl opacity-90 mb-4">
            The perfect 4th is a stable, consonant interval spanning 5 semitones that creates an open, 
            hollow sound and forms the foundation of guitar tuning and harmonic stability.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">5 Semitones</span>
            <span className="bg-white/20 px-3 py-1 rounded">Perfect Consonance</span>
            <span className="bg-white/20 px-3 py-1 rounded">Guitar Tuning Foundation</span>
            <span className="bg-white/20 px-3 py-1 rounded">Sus4 Chords</span>
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
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Size:</strong> 5 semitones (2½ whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Perfect</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Stable, open, slightly hollow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Consonance:</strong> Consonant (stable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Function:</strong> Foundation of sus4 chords</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>C to F:</strong> Perfect 4th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Guitar tuning:</strong> Most string intervals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>"Here Comes the Bride":</strong> Opening interval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>"Amazing Grace":</strong> "A-ma-zing"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          
          {/* Perfect 4th Interval Examples */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Perfect 4th Intervals - Guitar Tuning Foundation</h3>
            <p className="text-gray-600 mb-6">
              The perfect 4th (5 semitones) forms the foundation of guitar tuning and creates stable, open-sounding intervals essential to guitar harmony.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* C to F Perfect 4th */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-5 border border-teal-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-teal-800 mb-2">C → F Perfect 4th</h4>
                  <p className="text-sm text-teal-700 mb-3">Classic perfect 4th relationship</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="C_to_F_P4" />
                      <p className="text-xs text-teal-600 mt-1">C (5th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="F_from_C_P4" />
                      <p className="text-xs text-teal-600 mt-1">F (4th string 3rd fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="4.1{q} 4.4{q}" 
                       
                      
                    />
                  </div>
                  <p className="text-xs text-teal-600">Stable, consonant interval</p>
                </div>
              </div>

              {/* G to C Perfect 4th */}
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg p-5 border border-cyan-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-cyan-800 mb-2">G → C Perfect 4th</h4>
                  <p className="text-sm text-cyan-700 mb-3">Guitar tuning interval</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="G_to_C_P4" />
                      <p className="text-xs text-cyan-600 mt-1">G (6th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="C_from_G_P4" />
                      <p className="text-xs text-cyan-600 mt-1">C (5th string 3rd fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="tabstave notation=true tablature=false\nnotes :q G/2 C/4" 
                       
                      
                    />
                  </div>
                  <p className="text-xs text-cyan-600">Foundation of guitar tuning</p>
                </div>
              </div>

              {/* D to G Perfect 4th */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">D → G Perfect 4th</h4>
                  <p className="text-sm text-blue-700 mb-3">Open string relationship</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="D_to_G_P4" />
                      <p className="text-xs text-blue-600 mt-1">D (4th string open)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="G_from_D_P4" />
                      <p className="text-xs text-blue-600 mt-1">G (3rd string open)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="tabstave notation=true tablature=false\nnotes :q D/3 G/3" 
                       
                      
                    />
                  </div>
                  <p className="text-xs text-blue-600">Natural guitar harmony</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sus4 Chord Applications */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Sus4 Chord Applications - 4th Replaces 3rd</h3>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Dsus4 Chord */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
                <h4 className="text-lg font-semibold text-orange-800 mb-4">🎸 Dsus4 Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="Dsus4" />
                    <p className="text-xs text-orange-600 mt-2">D-G-A suspended 4th chord</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <AlphaTexRenderer 
                      alphaTex=" (D/3 G/3 A/3)" 
                       
                      
                    />
                    <p className="text-xs text-orange-600 mt-2">D-G-A: Root, perfect 4th, perfect 5th</p>
                  </div>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• <strong>Perfect 4th:</strong> D → G (replaces F# major 3rd)</li>
                    <li>• <strong>Suspension:</strong> Creates anticipation for resolution</li>
                    <li>• <strong>Open fingering:</strong> Easy guitar chord</li>
                  </ul>
                </div>
              </div>

              {/* Gsus4 Chord */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 border border-emerald-200">
                <h4 className="text-lg font-semibold text-emerald-800 mb-4">🎸 Gsus4 Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="Gsus4" />
                    <p className="text-xs text-emerald-600 mt-2">G-C-D suspended 4th chord</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <AlphaTexRenderer 
                      alphaTex=" (G/2 C/4 D/4)" 
                       
                      
                    />
                    <p className="text-xs text-emerald-600 mt-2">G-C-D: Root, perfect 4th, perfect 5th</p>
                  </div>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    <li>• <strong>Perfect 4th:</strong> G → C (replaces B major 3rd)</li>
                    <li>• <strong>Folk favorite:</strong> Common in acoustic music</li>
                    <li>• <strong>Smooth resolution:</strong> Sus4 → major</li>
                  </ul>
                </div>
              </div>

              {/* Csus4 Chord */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6 border border-indigo-200">
                <h4 className="text-lg font-semibold text-indigo-800 mb-4">🎸 Csus4 Chord</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord="Csus4" />
                    <p className="text-xs text-indigo-600 mt-2">C-F-G suspended 4th chord</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <AlphaTexRenderer 
                      alphaTex=" (C/4 F/4 G/4)" 
                       
                      
                    />
                    <p className="text-xs text-indigo-600 mt-2">C-F-G: Root, perfect 4th, perfect 5th</p>
                  </div>
                  <ul className="text-sm text-indigo-700 space-y-1">
                    <li>• <strong>Perfect 4th:</strong> C → F (replaces E major 3rd)</li>
                    <li>• <strong>Neither major nor minor:</strong> Ambiguous quality</li>
                    <li>• <strong>Rock ballads:</strong> Emotional suspension effect</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quartal Harmony and Guitar Tuning */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Quartal Harmony & Guitar Tuning Foundation</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 border border-teal-200">
                <h4 className="text-lg font-semibold text-teal-800 mb-4">🎯 Guitar Tuning System</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-teal-700 mb-2">Standard Tuning Pattern</h5>
                    <AlphaTexRenderer 
                      alphaTex="tabstave notation=true tablature=false\nnotes :q E/2 A/2 D/3 G/3 | B/3 E/4" 
                       
                      
                    />
                    <p className="text-xs text-teal-600 mt-2">Mostly perfect 4ths: E-A-D-G, then major 3rd G-B, then 4th B-E</p>
                  </div>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li>• <strong>4 out of 5 intervals:</strong> Perfect 4ths</li>
                    <li>• <strong>Exception:</strong> G to B (major 3rd)</li>
                    <li>• <strong>Cross-string patterns:</strong> Same fret, different strings</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">🎵 Quartal Harmony</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-blue-700 mb-2">Stacked 4ths Harmony</h5>
                    <AlphaTexRenderer 
                      alphaTex=" (C/4 F/4 Bb/4 Eb/5)" 
                       
                      
                    />
                    <p className="text-xs text-blue-600 mt-2">Modern jazz voicings built from perfect 4ths</p>
                  </div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>Open sound:</strong> Neither major nor minor</li>
                    <li>• <strong>Jazz applications:</strong> McCoy Tyner, Bill Evans</li>
                    <li>• <strong>Ambient textures:</strong> Floating, spacious harmony</li>
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
                  <h4 className="font-semibold text-gray-800">"Here Comes the Bride"</h4>
                  <p className="text-sm text-gray-600 mb-2">Opening perfect 4th creates ceremonial, stable feeling</p>
                  <p className="text-xs text-gray-500">Wagner's "Bridal Chorus" - iconic 4th interval</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Amazing Grace"</h4>
                  <p className="text-sm text-gray-600 mb-2">"A-ma-zing" features upward perfect 4th</p>
                  <p className="text-xs text-gray-500">Creates sense of yearning and spiritual uplift</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Music</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Rock & Folk Sus4 Chords</h4>
                  <p className="text-sm text-gray-600 mb-2">Csus4, Dsus4 create open, ringing textures</p>
                  <p className="text-xs text-gray-500">Common in The Who, Led Zeppelin, folk music</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Jazz Quartal Harmony</h4>
                  <p className="text-sm text-gray-600 mb-2">McCoy Tyner's 4th-based chord voicings</p>
                  <p className="text-xs text-gray-500">Creates modern, sophisticated harmonic colors</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">👂 Ear Training</h3>
              <ul className="text-teal-700 text-sm space-y-2">
                <li>• Use "Here Comes the Bride" as reference</li>
                <li>• Practice 4th vs. 5th recognition</li>
                <li>• Listen to sus4 chord resolutions</li>
                <li>• Study guitar tuning intervals</li>
                <li>• Compare ascending vs. descending 4ths</li>
              </ul>
            </div>
            <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
              <h3 className="text-lg font-semibold text-cyan-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-cyan-700 text-sm space-y-2">
                <li>• Practice 5-fret same-string 4ths</li>
                <li>• Master cross-string 4th patterns</li>
                <li>• Work on sus4 chord shapes</li>
                <li>• Study quartal chord voicings</li>
                <li>• Practice 4th-based melodic patterns</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Create melodies using 4th leaps</li>
                <li>• Write sus4 chord progressions</li>
                <li>• Explore quartal harmony textures</li>
                <li>• Study folk and rock sus4 usage</li>
                <li>• Analyze 4ths in favorite songs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Physics and Acoustics */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Physics & Acoustics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Frequency Relationships</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">4:3 Ratio</h4>
                  <p className="text-sm text-gray-600">The perfect 4th has a 4:3 frequency ratio, creating a stable but slightly hollow sound due to the wider ratio.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Complementary to 5th</h4>
                  <p className="text-sm text-gray-600">Perfect 4th + Perfect 5th = Octave (5 + 7 = 12 semitones)</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Harmonic Context</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Medieval Organum</h4>
                  <p className="text-sm text-gray-600">Perfect 4ths were considered the most consonant interval in medieval music, used extensively in early polyphony.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Modern Recontextualization</h4>
                  <p className="text-sm text-gray-600">Jazz and modern music have rediscovered the 4th's unique harmonic color through quartal harmony.</p>
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
              <h3 className="font-semibold text-green-800 mb-2">Perfect 5th</h3>
              <p className="text-sm text-green-700 mb-2">7 semitones - complement of perfect 4th</p>
              <p className="text-xs text-green-600">4th + 5th = Octave (inversions)</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Major 3rd</h3>
              <p className="text-sm text-blue-700 mb-2">4 semitones - one semitone smaller</p>
              <p className="text-xs text-blue-600">Sus4 resolves down to major 3rd</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="font-semibold text-orange-800 mb-2">Tritone</h3>
              <p className="text-sm text-orange-700 mb-2">6 semitones - augmented 4th</p>
              <p className="text-xs text-orange-600">One semitone larger, creates instability</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Interval Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the perfect 4th, explore its complement and other related intervals.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/intervals/perfect-5th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect 5th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the perfect 4th's complement - together they complete the octave.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Complete the pair →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/major-3rd" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">😊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major 3rd</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Study what sus4 chords resolve to - the bright, happy major 3rd.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Find resolution →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/tritone" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">😈</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tritone</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Compare the stable 4th with its unstable cousin - the devil's interval.
                </p>
                <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                  Feel the tension →
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
