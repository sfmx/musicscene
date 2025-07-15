'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Minor3rdPage() {
  return (
    <Layout>
      <Header
        title="Minor 3rd Interval"
        subtitle="The melancholic interval - 3 semitones that defines minor chords and creates the emotional, introspective sound of minor tonality."
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
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Minor 3rd Interval</h1>
          <p className="text-xl opacity-90 mb-4">
            The minor 3rd is the defining interval of minor tonality, spanning 3 semitones and creating 
            the characteristic melancholic, introspective sound that distinguishes minor from major harmony.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">3 Semitones</span>
            <span className="bg-white/20 px-3 py-1 rounded">Minor Chord Foundation</span>
            <span className="bg-white/20 px-3 py-1 rounded">Emotional Depth</span>
            <span className="bg-white/20 px-3 py-1 rounded">Melancholic Beauty</span>
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
                  <span><strong>Size:</strong> 3 semitones (1½ whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Minor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Dark, melancholic, consonant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Consonance:</strong> Imperfect consonance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Function:</strong> Defines minor chord quality</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>C to Eb:</strong> Classic minor 3rd</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>A to C:</strong> In A minor chord</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>E to G:</strong> In E minor chord</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Do to Me:</strong> In natural minor scale</span>
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
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Minor Triads</h4>
                  <p className="text-sm text-blue-700 mb-2">Every minor chord contains a minor 3rd from the root:</p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• A Minor: A-C-E (minor 3rd: A to C)</li>
                    <li>• D Minor: D-F-A (minor 3rd: D to F)</li>
                    <li>• E Minor: E-G-B (minor 3rd: E to G)</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">Blues Harmony</h4>
                  <p className="text-sm text-indigo-700 mb-2">Minor 3rds in blues and rock contexts:</p>
                  <ul className="text-xs text-indigo-600 space-y-1">
                    <li>• Blue notes: ♭3 over major progression</li>
                    <li>• Minor pentatonic scales</li>
                    <li>• Power chord + minor 3rd additions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Fretboard Patterns</h3>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-2">Common Positions</h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• <strong>Same string:</strong> 3 frets apart</li>
                    <li>• <strong>Adjacent strings:</strong> Root on 6th, ♭3 on 4th string (1 fret down)</li>
                    <li>• <strong>Barre chords:</strong> Minor shapes and variations</li>
                    <li>• <strong>Open chords:</strong> Em, Am, Dm patterns</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Scale Relationships</h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• <strong>Natural minor:</strong> 1-♭3 relationship</li>
                    <li>• <strong>Minor pentatonic:</strong> Built on minor 3rd intervals</li>
                    <li>• <strong>Dorian mode:</strong> Minor 3rd with raised 6th</li>
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
                  <h4 className="font-semibold text-gray-800">Chopin's Funeral March</h4>
                  <p className="text-sm text-gray-600 mb-2">Bb minor with prominent minor 3rd (Bb to Db)</p>
                  <p className="text-xs text-gray-500">Exemplifies the somber quality of minor 3rds</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Bach's "Air on G String"</h4>
                  <p className="text-sm text-gray-600 mb-2">Beautiful minor harmonies featuring minor 3rd relationships</p>
                  <p className="text-xs text-gray-500">Shows expressive power of minor intervals</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Popular Music</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Stairway to Heaven" - Led Zeppelin</h4>
                  <p className="text-sm text-gray-600 mb-2">Am-C-D-F progression with minor 3rd foundations</p>
                  <p className="text-xs text-gray-500">Classic rock ballad using minor harmony</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Summertime" - George Gershwin</h4>
                  <p className="text-sm text-gray-600 mb-2">Minor blues harmony with expressive minor 3rds</p>
                  <p className="text-xs text-gray-500">Jazz standard showcasing minor tonality</p>
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
                <li>• Sing natural minor scales focusing on 1-♭3</li>
                <li>• Practice major vs minor 3rd recognition</li>
                <li>• Listen to minor chord progressions</li>
                <li>• Use "Greensleeves" (prominent minor 3rds)</li>
                <li>• Study blues scale minor 3rd relationships</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-indigo-700 text-sm space-y-2">
                <li>• Play minor 3rds across all string pairs</li>
                <li>• Practice minor chord arpeggios</li>
                <li>• Work on minor scale patterns</li>
                <li>• Practice minor pentatonic scales</li>
                <li>• Study minor chord progressions (i-iv-V-i)</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Compose melodies using minor 3rd leaps</li>
                <li>• Analyze minor progressions in songs</li>
                <li>• Practice minor key improvisation</li>
                <li>• Study modal minor scales (Dorian, Aeolian)</li>
                <li>• Work on minor chord voicings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emotional Expression */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Emotional Expression & Psychology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Psychological Impact</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Emotional Associations</h4>
                  <p className="text-sm text-gray-600">The minor 3rd creates feelings of introspection, melancholy, and emotional depth. It's neither harsh nor overly sweet, making it perfect for expressing complex emotions.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Cultural Context</h4>
                  <p className="text-sm text-gray-600">In Western music, minor 3rds are associated with sadness, contemplation, and sophistication, though this varies across different musical cultures.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Compositional Use</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Dramatic Effect</h4>
                  <p className="text-sm text-gray-600">Composers use minor 3rds to create emotional contrast, build tension, and provide resolution through major-minor relationships.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Genre Characteristics</h4>
                  <p className="text-sm text-gray-600">Essential in blues, jazz, classical minor keys, and modern alternative/indie music for creating authentic emotional expression.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Intervals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Intervals & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <h3 className="font-semibold text-yellow-800 mb-2">Major 3rd</h3>
              <p className="text-sm text-yellow-700 mb-2">4 semitones - creates major chord quality</p>
              <p className="text-xs text-yellow-600">Direct comparison shows major vs minor emotional qualities</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Perfect 5th</h3>
              <p className="text-sm text-green-700 mb-2">7 semitones - completes the minor triad</p>
              <p className="text-xs text-green-600">Root + Minor 3rd + Perfect 5th = Minor chord</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Major 6th</h3>
              <p className="text-sm text-purple-700 mb-2">9 semitones - inversion of minor 3rd</p>
              <p className="text-xs text-purple-600">Interval inversion: Minor 3rd inverts to Major 6th</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Interval Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the minor 3rd, explore how it relates to other intervals and creates different harmonic colors.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/intervals/major-3rd" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                  <span className="text-2xl">🌞</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major 3rd</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Compare the bright, happy sound of major 3rds against the introspective minor 3rd quality.
                </p>
                <span className="text-yellow-600 font-medium text-sm group-hover:text-yellow-700">
                  Study the contrast →
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
                  Learn the stable foundation that completes minor chords when combined with the minor 3rd.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Build stability →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/minor-7th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-rose-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-200 transition-colors">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor 7th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the rich, complex emotions created by extending minor harmony with 7th intervals.
                </p>
                <span className="text-rose-600 font-medium text-sm group-hover:text-rose-700">
                  Add complexity →
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
