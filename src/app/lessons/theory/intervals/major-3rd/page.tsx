"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';
import Link from 'next/link';

export default function Major3rdPage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Major 3rd Interval"
        subtitle="The happy interval - 4 semitones that defines major chords and creates the bright, joyful sound characteristic of major tonality."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/intervals" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Intervals
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl p-8 mb-12 border border-yellow-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Major 3rd Interval</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The major 3rd is one of the most important intervals in Western music, spanning 4 semitones 
            and creating the characteristic "happy" sound of major chords and scales. This interval is 
            the defining feature that distinguishes major from minor tonality, giving major chords their 
            bright, optimistic quality. Found in every major triad, the major 3rd is essential for 
            understanding chord construction, harmonic progressions, and the emotional impact of major 
            versus minor tonalities. Its warm, consonant sound makes it fundamental to genres from 
            classical to pop music.
          </p>
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
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Chord Construction</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Major Triads</h4>
                  <p className="text-sm text-yellow-700 mb-2">Every major chord contains a major 3rd from the root:</p>
                  <ul className="text-xs text-yellow-600 space-y-1">
                    <li>• C Major: C-E-G (major 3rd: C to E)</li>
                    <li>• G Major: G-B-D (major 3rd: G to B)</li>
                    <li>• D Major: D-F#-A (major 3rd: D to F#)</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">Extended Chords</h4>
                  <p className="text-sm text-amber-700 mb-2">Major 3rds in jazz and extended harmony:</p>
                  <ul className="text-xs text-amber-600 space-y-1">
                    <li>• Maj7 chords: Root + Major 3rd + Perfect 5th + Major 7th</li>
                    <li>• 6th chords: Root + Major 3rd + Perfect 5th + Major 6th</li>
                    <li>• Add9 chords: Basic triad + Major 9th</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Fretboard Patterns</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Common Positions</h4>
                  <ul className="text-sm text-orange-700 space-y-2">
                    <li>• <strong>Same string:</strong> 4 frets apart</li>
                    <li>• <strong>Adjacent strings:</strong> Root on 6th, 3rd on 4th string (2 frets down)</li>
                    <li>• <strong>Octave shapes:</strong> Standard chord fingerings</li>
                    <li>• <strong>Barre chords:</strong> Major 3rd in standard positions</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Scale Degrees</h4>
                  <ul className="text-sm text-yellow-700 space-y-2">
                    <li>• <strong>1st to 3rd degree:</strong> Defines major scale character</li>
                    <li>• <strong>Major pentatonic:</strong> Contains multiple major 3rds</li>
                    <li>• <strong>Chord tones:</strong> Essential for outlining changes</li>
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

        {/* Next Steps */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-8 border border-yellow-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Your Interval Journey</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Now that you understand the major 3rd, explore its companion intervals and learn how they work together in harmony.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/lessons/theory/intervals/minor-3rd" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Learn Minor 3rd
              </Link>
              <Link href="/lessons/theory/intervals/perfect-5th" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Study Perfect 5th
              </Link>
              <Link href="/lessons/theory/intervals/major-6th" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Explore Major 6th
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
