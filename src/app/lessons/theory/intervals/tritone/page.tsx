"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TritonePage() {
  return (
    <Layout>
      <Header
        title="Tritone Interval"
        subtitle="The Devil's Interval - 6 semitones of maximum tension that demands resolution and drives harmonic motion in Western music."
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
        <div className="bg-gradient-to-r from-red-700 to-orange-800 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Tritone Interval 😈</h1>
          <p className="text-xl opacity-90 mb-4">
            The tritone is the most dissonant and powerful interval in Western music, spanning 6 semitones 
            and creating maximum harmonic tension that demands resolution. Known as "diabolus in musica" 
            (the devil in music), it drives harmonic motion and defines tonal music.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">6 Semitones</span>
            <span className="bg-white/20 px-3 py-1 rounded">Maximum Dissonance</span>
            <span className="bg-white/20 px-3 py-1 rounded">Devil's Interval</span>
            <span className="bg-white/20 px-3 py-1 rounded">Harmonic Driver</span>
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
                  <span><strong>Size:</strong> 6 semitones (3 whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Augmented 4th / Diminished 5th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Maximum dissonance, unstable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Consonance:</strong> Most dissonant interval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Function:</strong> Demands resolution</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>F to B:</strong> Augmented 4th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>B to F:</strong> Diminished 5th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>"The Simpsons":</strong> Opening theme</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>"Maria" (West Side Story):</strong> Opening leap</span>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Fretboard Patterns</h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">6-Fret Pattern</h4>
                  <p className="text-sm text-red-700 mb-2">Tritone = 6 frets apart:</p>
                  <ul className="text-xs text-red-600 space-y-1">
                    <li>• Same string: 6 frets apart</li>
                    <li>• Low E to A string: 1st fret to 1st fret (F to Bb)</li>
                    <li>• A to D string: 2nd fret to 2nd fret (B to F)</li>
                    <li>• Cross-string tritones in power chord positions</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Dominant 7 Locations</h4>
                  <p className="text-sm text-orange-700 mb-2">Tritone in dominant chords:</p>
                  <ul className="text-xs text-orange-600 space-y-1">
                    <li>• C7: E (3rd) to Bb (7th) = tritone</li>
                    <li>• G7: B (3rd) to F (7th) = tritone</li>
                    <li>• Essential for blues and jazz</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Chord Applications</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Dominant 7th Chords</h4>
                  <ul className="text-sm text-purple-700 space-y-2">
                    <li>• <strong>C7:</strong> C-E-G-Bb (E to Bb = tritone)</li>
                    <li>• <strong>Tension and release:</strong> V7 → I progression</li>
                    <li>• <strong>Blues foundation:</strong> Essential blues sound</li>
                    <li>• <strong>Jazz harmony:</strong> Bebop and swing</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Diminished Chords</h4>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• <strong>Built from tritones:</strong> Cdim = C-Eb-Gb-A</li>
                    <li>• <strong>Symmetrical structure:</strong> All minor 3rds</li>
                    <li>• <strong>Passing chords:</strong> Connect diatonic chords</li>
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
                  <h4 className="font-semibold text-gray-800">"Maria" (West Side Story)</h4>
                  <p className="text-sm text-gray-600 mb-2">Opening tritone leap expresses intense longing</p>
                  <p className="text-xs text-gray-500">Bernstein uses tritone for emotional impact</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Medieval "Diabolus in Musica"</h4>
                  <p className="text-sm text-gray-600 mb-2">Forbidden in medieval music due to dissonance</p>
                  <p className="text-xs text-gray-500">Church considered it evil and unstable</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Music</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"The Simpsons" Theme</h4>
                  <p className="text-sm text-gray-600 mb-2">Distinctive tritone creates quirky, unsettling character</p>
                  <p className="text-xs text-gray-500">Danny Elfman's use of classical dissonance in TV</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Blues and Jazz Standards</h4>
                  <p className="text-sm text-gray-600 mb-2">Dominant 7th chords rely on tritone tension</p>
                  <p className="text-xs text-gray-500">Essential for authentic blues and jazz harmony</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">👂 Ear Training</h3>
              <ul className="text-red-700 text-sm space-y-2">
                <li>• Use "The Simpsons" as reference</li>
                <li>• Practice tritone vs. perfect 4th/5th</li>
                <li>• Listen to dominant 7th resolutions</li>
                <li>• Study jazz and blues progressions</li>
                <li>• Compare augmented 4th vs. diminished 5th</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-orange-700 text-sm space-y-2">
                <li>• Master 6-fret same-string tritones</li>
                <li>• Practice F-B and B-F intervals</li>
                <li>• Work on dominant 7th chord shapes</li>
                <li>• Study diminished chord patterns</li>
                <li>• Practice tritone substitutions</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Create tension with tritone leaps</li>
                <li>• Study V7-I resolution patterns</li>
                <li>• Explore jazz tritone substitutions</li>
                <li>• Practice blues dominant progressions</li>
                <li>• Analyze dissonance in favorite songs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Historical Context */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Historical Context & Cultural Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Medieval Prohibition</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Diabolus in Musica"</h4>
                  <p className="text-sm text-gray-600">Medieval church considered the tritone so dissonant and unstable that it was forbidden in sacred music, earning the nickname "the devil in music."</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Theoretical Foundation</h4>
                  <p className="text-sm text-gray-600">The tritone perfectly divides the octave in half, creating maximum distance from consonant perfect intervals.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Harmonic Essential</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Tonal Harmony Driver</h4>
                  <p className="text-sm text-gray-600">In tonal music, the tritone creates the tension that drives harmonic progression, especially in dominant 7th chords resolving to tonic.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Jazz and Blues Essential</h4>
                  <p className="text-sm text-gray-600">Modern jazz and blues rely heavily on tritone harmony for their characteristic sound and harmonic sophistication.</p>
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
              <h3 className="font-semibold text-green-800 mb-2">Perfect 4th</h3>
              <p className="text-sm text-green-700 mb-2">5 semitones - one semitone smaller</p>
              <p className="text-xs text-green-600">Stable vs. unstable - consonant vs. dissonant</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Perfect 5th</h3>
              <p className="text-sm text-blue-700 mb-2">7 semitones - one semitone larger</p>
              <p className="text-xs text-blue-600">Tritone sits exactly between perfect 4th and 5th</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Octave Division</h3>
              <p className="text-sm text-purple-700 mb-2">6 + 6 = 12 semitones</p>
              <p className="text-xs text-purple-600">Perfectly divides the octave - maximum distance from consonance</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Interval Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            From maximum dissonance, explore intervals that offer resolution and harmonic stability.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/intervals/perfect-4th" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect 4th</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Step back to stability - explore the consonant interval just below the tritone.
                </p>
                <span className="text-teal-600 font-medium text-sm group-hover:text-teal-700">
                  Find stability →
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
                  Step up to consonance - the stable interval just above the tritone.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Find resolution →
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
                  Explore another dissonant interval essential to dominant 7th chords.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
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
