"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function OctavePage() {
  return (
    <Layout>
      <Header
        title="Octave Interval"
        subtitle="The most consonant interval - 12 semitones that creates perfect unity while doubling the frequency, fundamental to all musical scales and harmony."
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
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Octave Interval</h1>
          <p className="text-xl opacity-90 mb-4">
            The octave is the most consonant and fundamental interval in music, spanning 12 semitones 
            and representing perfect unity - the same note name at exactly double the frequency.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">12 Semitones</span>
            <span className="bg-white/20 px-3 py-1 rounded">Perfect Consonance</span>
            <span className="bg-white/20 px-3 py-1 rounded">2:1 Frequency Ratio</span>
            <span className="bg-white/20 px-3 py-1 rounded">Foundation of Music</span>
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
                  <span><strong>Size:</strong> 12 semitones (6 whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Perfect</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Perfect unity, same note name</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Consonance:</strong> Most consonant interval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Function:</strong> Defines pitch classes and scales</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>C to C:</strong> Perfect octave (any C)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Open strings:</strong> 12th fret harmonics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Do to Do:</strong> Scale completion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>"Somewhere Over the Rainbow":</strong> Opening leap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          
          {/* Octave Interval Examples */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Octave Intervals - Perfect Unity</h3>
            <p className="text-gray-600 mb-6">
              The octave (12 semitones) represents perfect consonance and unity - the same note name at exactly double the frequency, fundamental to all musical structure.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* E Low to High Octave */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-purple-800 mb-2">E → E Octave</h4>
                  <p className="text-sm text-purple-700 mb-3">Same string, 12 frets apart</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="E_low_octave" />
                      <p className="text-xs text-purple-600 mt-1">E (6th string open)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="E_high_octave" />
                      <p className="text-xs text-purple-600 mt-1">E (6th string 12th fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="2.1{q} 3.1{q}" 
                      className="scale-75"
                    />
                  </div>
                  <p className="text-xs text-purple-600">Perfect unity, same note name</p>
                </div>
              </div>

              {/* A Low to High Octave */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-5 border border-indigo-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-indigo-800 mb-2">A → A Octave</h4>
                  <p className="text-sm text-indigo-700 mb-3">12th fret harmonic relationship</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="A_low_octave" />
                      <p className="text-xs text-indigo-600 mt-1">A (5th string open)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="A_high_octave" />
                      <p className="text-xs text-indigo-600 mt-1">A (5th string 12th fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="2.1{q} 3.1{q}" 
                      className="scale-75"
                    />
                  </div>
                  <p className="text-xs text-indigo-600">Natural harmonic at 12th fret</p>
                </div>
              </div>

              {/* D Low to High Octave */}
              <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg p-5 border border-violet-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-violet-800 mb-2">D → D Octave</h4>
                  <p className="text-sm text-violet-700 mb-3">Scale completion pattern</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="D_low_octave" />
                      <p className="text-xs text-violet-600 mt-1">D (4th string open)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="D_high_octave" />
                      <p className="text-xs text-violet-600 mt-1">D (4th string 12th fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="3.1{q} 4.1{q}" 
                      className="scale-75"
                    />
                  </div>
                  <p className="text-xs text-violet-600">Root to root completion</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cross-String Octave Patterns */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Cross-String Octave Patterns - Fretboard Navigation</h3>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {/* C Octave Pattern */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 border border-emerald-200">
                <h4 className="text-lg font-semibold text-emerald-800 mb-4">🎸 C Octave Pattern</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="C_5th_string" />
                      <p className="text-xs text-emerald-600 mt-2">C (5th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="C_3rd_string" />
                      <p className="text-xs text-emerald-600 mt-2">C (3rd string 5th fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <AlphaTexRenderer 
                      alphaTex="4.1{w} 5.1{w}" 
                      className="scale-75"
                    />
                    <p className="text-xs text-emerald-600 mt-2">5th string to 3rd string: +2 frets, +2 strings</p>
                  </div>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    <li>• <strong>Pattern:</strong> 5th to 3rd string octave</li>
                    <li>• <strong>Fretboard navigation:</strong> Cross-string movement</li>
                    <li>• <strong>Scale work:</strong> Position playing applications</li>
                  </ul>
                </div>
              </div>

              {/* G Octave Pattern */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">🎸 G Octave Pattern</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="G_6th_string" />
                      <p className="text-xs text-blue-600 mt-2">G (6th string 3rd fret)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="G_4th_string" />
                      <p className="text-xs text-blue-600 mt-2">G (4th string 5th fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <AlphaTexRenderer 
                      alphaTex="3.1{w} 4.1{w}" 
                      className="scale-75"
                    />
                    <p className="text-xs text-blue-600 mt-2">6th string to 4th string: +2 frets, +2 strings</p>
                  </div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>Pattern:</strong> 6th to 4th string octave</li>
                    <li>• <strong>Chord work:</strong> Bass note doubling</li>
                    <li>• <strong>Lead guitar:</strong> Register displacement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Musical Applications & Harmonics */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Musical Applications & Natural Harmonics</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 border border-amber-200">
                <h4 className="text-lg font-semibold text-amber-800 mb-4">🎯 12th Fret Harmonics</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-amber-700 mb-2">Natural Octave Harmonics</h5>
                    <AlphaTexRenderer 
                      alphaTex="2.1{w} 3.1{w} 2.1{w} 3.1{w} 3.1{w} 4.1{w}" 
                      className="scale-75"
                    />
                    <p className="text-xs text-amber-600 mt-2">12th fret harmonics: Perfect octave above open strings</p>
                  </div>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• <strong>Bell-like tone:</strong> Pure harmonic content</li>
                    <li>• <strong>Same pitch:</strong> As 12th fret fretted notes</li>
                    <li>• <strong>Physics:</strong> String vibrating in halves</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-6 border border-rose-200">
                <h4 className="text-lg font-semibold text-rose-800 mb-4">🎵 "Somewhere Over the Rainbow"</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-rose-700 mb-2">Classic Octave Leap</h5>
                    <AlphaTexRenderer 
                      alphaTex="4.1{w} 5.1{w}" 
                      className="scale-75"
                    />
                    <p className="text-xs text-rose-600 mt-2">"Somewhere" opening - most famous octave leap in music</p>
                  </div>
                  <ul className="text-sm text-rose-700 space-y-1">
                    <li>• <strong>Emotional impact:</strong> Yearning and expansion</li>
                    <li>• <strong>Ear training:</strong> Perfect octave reference</li>
                    <li>• <strong>Musical theater:</strong> Wizard of Oz classic</li>
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
                  <h4 className="font-semibold text-gray-800">"Somewhere Over the Rainbow"</h4>
                  <p className="text-sm text-gray-600 mb-2">Opening octave leap creates sense of yearning and expansion</p>
                  <p className="text-xs text-gray-500">Perfect example of octave's emotional impact</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Bach's "Well-Tempered Clavier"</h4>
                  <p className="text-sm text-gray-600 mb-2">Octave relationships define key centers and harmonic structure</p>
                  <p className="text-xs text-gray-500">Demonstrates octave equivalence in classical harmony</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Popular Music</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Rock Guitar Solos</h4>
                  <p className="text-sm text-gray-600 mb-2">Octave doubling for powerful melodic emphasis</p>
                  <p className="text-xs text-gray-500">Creates fuller, more impactful lead guitar sounds</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Bass and Melody Doubling</h4>
                  <p className="text-sm text-gray-600 mb-2">Bass notes doubled an octave higher for harmonic richness</p>
                  <p className="text-xs text-gray-500">Common in arrangement and orchestration</p>
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
                <li>• Practice recognizing octaves vs. other intervals</li>
                <li>• Use "Somewhere Over the Rainbow" as reference</li>
                <li>• Listen to 12th fret harmonics</li>
                <li>• Compare octaves with perfect 5ths</li>
                <li>• Study scale patterns from root to root</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-indigo-700 text-sm space-y-2">
                <li>• Master 12-fret octave patterns</li>
                <li>• Practice string-to-string octave shapes</li>
                <li>• Work on 12th fret natural harmonics</li>
                <li>• Study major scale octave relationships</li>
                <li>• Practice octave doubling in melodies</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Create melodies using octave leaps</li>
                <li>• Practice octave doubling in arrangements</li>
                <li>• Study how octaves define key centers</li>
                <li>• Work on bass line octave displacement</li>
                <li>• Analyze octave usage in favorite songs</li>
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
                  <h4 className="font-semibold text-gray-800">2:1 Ratio</h4>
                  <p className="text-sm text-gray-600">The octave has the simplest frequency relationship possible - exactly double or half the frequency, creating perfect acoustic unity.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Harmonic Series</h4>
                  <p className="text-sm text-gray-600">The octave appears as the 2nd harmonic in the natural harmonic series, making it the first and strongest overtone.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Cultural Universality</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Universal Recognition</h4>
                  <p className="text-sm text-gray-600">Every musical culture recognizes octave equivalence - notes an octave apart are considered the "same" note.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Perceptual Unity</h4>
                  <p className="text-sm text-gray-600">The brain processes octaves as so similar that they create a sense of completion and return.</p>
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
              <p className="text-sm text-green-700 mb-2">7 semitones - second most consonant</p>
              <p className="text-xs text-green-600">Octave = Perfect 5th + Perfect 4th</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Perfect 4th</h3>
              <p className="text-sm text-blue-700 mb-2">5 semitones - complements perfect 5th</p>
              <p className="text-xs text-blue-600">Perfect 4th + Perfect 5th = Octave</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="font-semibold text-orange-800 mb-2">Compound Intervals</h3>
              <p className="text-sm text-orange-700 mb-2">9th, 11th, 13th - octave + simple intervals</p>
              <p className="text-xs text-orange-600">All intervals larger than octave are "compound"</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Interval Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the octave, explore how it relates to other fundamental intervals and creates musical structure.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/intervals/perfect-5th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect 5th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Study the second most consonant interval and how it builds toward the octave.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Build harmony →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/unison" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Unison</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Return to the starting point - the interval of perfect identity and unity.
                </p>
                <span className="text-gray-600 font-medium text-sm group-hover:text-gray-700">
                  Start simple →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/major-7th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major 7th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the tense interval that leads powerfully into the octave resolution.
                </p>
                <span className="text-red-600 font-medium text-sm group-hover:text-red-700">
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
