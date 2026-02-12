"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';

export default function FingerExercisesClient() {
  return (
    <Layout>
      <Header
        title="Finger Exercises"
        subtitle="Build dexterity, independence, and strength with these essential finger exercises."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 mb-12 border border-green-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Guitar Finger Exercises</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Developing finger strength, independence, and coordination is fundamental to becoming a proficient guitarist.
            These exercises will help you build the dexterity needed for complex chord shapes, fast runs, and smooth transitions.
          </p>
        </div>

        {/* Practice Guidelines */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Finger Exercise Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Proper Technique</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Keep fingers curved and use fingertips
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Press just hard enough for clean notes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Keep unused fingers close to the fretboard
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Maintain a relaxed hand and wrist position
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Practice Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Start slowly and focus on accuracy
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Use a metronome for consistent timing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Gradually increase speed over time
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Take breaks if you feel tension or pain
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chromatic Exercises Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Chromatic Finger Exercises
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 1: Basic Chromatic */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Basic Chromatic Exercise</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Beginner</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The foundational chromatic exercise. Play frets 1-2-3-4 on each string using one finger per fret.
                  This builds basic coordination and finger independence.
                </p>
              </div>
              
              <MusicScore
                title="Basic Chromatic Exercise"
                staves={[{
                  id: 'basic-chromatic',
                  alphaTex: `\\ts 4 4
                    1.1.4 2.1.4 3.1.4 4.1.4 | 1.2.4 2.2.4 3.2.4 4.2.4 |
                    1.3.4 2.3.4 3.3.4 4.3.4 | 1.4.4 2.4.4 3.4.4 4.4.4 |
                    1.5.4 2.5.4 3.5.4 4.5.4 | 1.6.4 2.6.4 3.6.4 4.6.4`,
                  title: '1-2-3-4 Pattern Across All Strings'
                }]}
              />
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Practice Notes</h4>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  Use your index finger for fret 1, middle finger for fret 2, ring finger for fret 3, and pinky for fret 4.
                  Keep each finger down until you need to move it to the next string.
                </p>
                <div className="flex items-center justify-center bg-blue-100 rounded-md py-2 px-4">
                  <span className="text-blue-700 font-medium text-sm">Suggested starting tempo: 60 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 2: Reverse Chromatic */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Reverse Chromatic Exercise</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Beginner</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The reverse of the basic chromatic. Play frets 4-3-2-1 descending on each string.
                  This helps develop control when lifting fingers off the fretboard.
                </p>
              </div>
              
              <MusicScore
                title="Reverse Chromatic Exercise"
                staves={[{
                  id: 'reverse-chromatic',
                  alphaTex: `\\ts 4 4
                    4.1.4 3.1.4 2.1.4 1.1.4 | 4.2.4 3.2.4 2.2.4 1.2.4 |
                    4.3.4 3.3.4 2.3.4 1.3.4 | 4.4.4 3.4.4 2.4.4 1.4.4 |
                    4.5.4 3.5.4 2.5.4 1.5.4 | 4.6.4 3.6.4 2.6.4 1.6.4`,
                  title: '4-3-2-1 Pattern Across All Strings'
                }]}
              />
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-900 mb-2">Practice Notes</h4>
                <p className="text-green-800 text-sm leading-relaxed mb-3">
                  Start with all four fingers in position. Lift each finger cleanly and precisely.
                  Focus on keeping the remaining fingers pressed down until they need to move.
                </p>
                <div className="flex items-center justify-center bg-green-100 rounded-md py-2 px-4">
                  <span className="text-green-700 font-medium text-sm">Suggested starting tempo: 60 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 3: Spider Exercise */}
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Spider Exercise</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Intermediate</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  A challenging exercise that moves diagonally across the fretboard.
                  This develops finger independence and string-crossing coordination.
                </p>
              </div>
              
              <MusicScore
                title="Spider Exercise"
                staves={[{
                  id: 'spider-exercise',
                  alphaTex: `\\ts 4 4
                    1.1.8 2.2.8 3.3.8 4.4.8 | 2.1.8 3.2.8 4.3.8 5.4.8 |
                    3.1.8 4.2.8 5.3.8 6.4.8 | 4.1.8 5.2.8 6.3.8 7.4.8`,
                  title: 'Diagonal Movement Pattern'
                }]}
              />
              
              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Practice Notes</h4>
                <p className="text-purple-800 text-sm leading-relaxed mb-3">
                  This exercise challenges your fingers to work independently. Start very slowly and
                  ensure each note rings clearly before moving to the next.
                </p>
                <div className="flex items-center justify-center bg-purple-100 rounded-md py-2 px-4">
                  <span className="text-purple-700 font-medium text-sm">Suggested starting tempo: 50 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Finger Independence Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Finger Independence Exercises
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 4: Trills */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Finger Trills</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Intermediate</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Rapidly alternate between two fingers on the same string. Start with index-middle,
                  then practice all finger combinations: index-ring, index-pinky, middle-ring, middle-pinky, ring-pinky.
                </p>
              </div>
              
              <MusicScore
                title="Finger Trills Exercise"
                staves={[{
                  id: 'finger-trills',
                  alphaTex: `\\ts 4 4
                    5.1.16 7.1.16 5.1.16 7.1.16 5.1.16 7.1.16 5.1.16 7.1.16 |
                    5.1.16 8.1.16 5.1.16 8.1.16 5.1.16 8.1.16 5.1.16 8.1.16 |
                    5.1.16 9.1.16 5.1.16 9.1.16 5.1.16 9.1.16 5.1.16 9.1.16`,
                  title: 'Index-Middle, Index-Ring, Index-Pinky Trills'
                }]}
              />
              
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Practice Notes</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  Keep your hand relaxed and let the fingers do the work. The index-pinky combination
                  is often the most challenging - give it extra attention.
                </p>
                <div className="flex items-center justify-center bg-amber-100 rounded-md py-2 px-4">
                  <span className="text-amber-700 font-medium text-sm">Suggested starting tempo: 80 BPM (for 16th notes)</span>
                </div>
              </div>
            </div>

            {/* Exercise 5: Permutation Exercise */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Permutation Patterns</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Practice all 24 permutations of fingers 1-2-3-4. This comprehensive exercise builds
                  complete finger independence. Examples: 1-2-3-4, 1-2-4-3, 1-3-2-4, 1-3-4-2, etc.
                </p>
              </div>
              
              <MusicScore
                title="Permutation Exercise Examples"
                staves={[{
                  id: 'permutation',
                  alphaTex: `\\ts 4 4
                    1.1.8 2.1.8 4.1.8 3.1.8 | 1.1.8 3.1.8 2.1.8 4.1.8 |
                    1.1.8 3.1.8 4.1.8 2.1.8 | 1.1.8 4.1.8 2.1.8 3.1.8`,
                  title: 'Sample Permutations: 1-2-4-3, 1-3-2-4, 1-3-4-2, 1-4-2-3'
                }]}
              />
              
              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Practice Notes</h4>
                <p className="text-red-800 text-sm leading-relaxed mb-3">
                  Work through each permutation systematically. Some patterns will feel natural while
                  others will be challenging. Focus extra time on the difficult ones.
                </p>
                <div className="flex items-center justify-center bg-red-100 rounded-md py-2 px-4">
                  <span className="text-red-700 font-medium text-sm">Suggested starting tempo: 60 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Tips Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Essential Finger Exercise Tips
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Building Strength</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-green-800">Practice consistently - daily short sessions beat occasional long ones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-green-800">Focus on the pinky - it typically needs the most development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-green-800">Use minimum pressure needed for clean notes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-green-800">Track your progress with tempo goals</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Why Finger Exercises Matter</h3>
              <p className="text-blue-800 leading-relaxed">
                Strong, independent fingers are the foundation of advanced guitar technique. Whether you want 
                to play fast solos, complex chord voicings, or intricate fingerpicking patterns, these 
                exercises build the mechanical foundation that makes musical expression possible. Invest 
                time in these basics and watch your overall playing improve dramatically.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
