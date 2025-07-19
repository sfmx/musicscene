"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { VexTab } from '@/components/VexTab';
import Link from 'next/link';

export default function IonianModePage() {
  return (
    <Layout>
      <Header
        title="Ionian Mode"
        subtitle="The foundational and bright mode - the familiar major scale that forms the basis of Western music harmony."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/modes" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Modal Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Ionian Mode</h1>
          <p className="text-xl opacity-90 mb-4">
            The ionian mode is the first mode of the major scale - in fact, it IS the major scale. 
            This is the most fundamental scale in Western music, providing the bright, happy, and stable foundation for countless songs.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">W-W-H-W-W-W-H</span>
            <span className="bg-white/20 px-3 py-1 rounded">7 Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">Natural Scale</span>
            <span className="bg-white/20 px-3 py-1 rounded">Bright & Stable</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Scale Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Formula:</strong> 1-2-3-4-5-6-7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Intervals:</strong> W-W-H-W-W-W-H</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Key characteristics:</strong> Natural major scale intervals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Character:</strong> Bright, happy, stable, familiar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Function:</strong> Foundation of Western harmony</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">C Ionian Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Notes:</strong> C-D-E-F-G-A-B-C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Parent scale:</strong> C major (starting on C)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Signature sound:</strong> Bright, familiar major scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Perfect for:</strong> Pop, rock, classical, country, folk</span>
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
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">C Ionian - Open Position</h4>
                  <p className="text-sm text-blue-700 mb-3">Classic open C major scale:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 3/5 0/4 2/4 3/4 | :q 0/3 2/3 0/2 1/2 | :q 3/2 1/2 0/2
                    `}
                    width={500}
                    scale={0.8}
                  />
                  <div className="mt-3">
                    <p className="text-xs text-blue-600 font-medium mb-1">Pattern Notes:</p>
                    <ul className="text-xs text-blue-600 space-y-1">
                      <li>• Root on 5th string, 3rd fret (C)</li>
                      <li>• Perfect 5th (G) on open 3rd string</li>
                      <li>• Major 3rd (E) on open 1st string</li>
                      <li>• Natural intervals create bright sound</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                  <h4 className="font-semibold text-cyan-800 mb-2">G Ionian - 3rd Position</h4>
                  <p className="text-sm text-cyan-700 mb-3">Popular key for guitar:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 3/6 5/6 2/5 3/5 | :q 5/5 2/4 4/4 2/3 | :q 4/3 2/2 4/2
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
                
                <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
                  <h4 className="font-semibold text-sky-800 mb-2">D Ionian - 7th Position</h4>
                  <p className="text-sm text-sky-700 mb-3">Higher register pattern:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 10/6 12/6 9/5 10/5 | :q 12/5 9/4 11/4 9/3 | :q 11/3 9/2 11/2
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Musical Applications</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Pop & Rock</h4>
                  <p className="text-sm text-green-700 mb-2">Foundation of popular music:</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• Verse and chorus melodies</li>
                    <li>• Lead guitar solos</li>
                    <li>• Harmonic progressions (I-V-vi-IV)</li>
                    <li>• Acoustic strumming patterns</li>
                    <li>• Classic rock anthems</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Classical & Traditional</h4>
                  <p className="text-sm text-blue-700 mb-2">Foundation of Western music:</p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• Classical compositions</li>
                    <li>• Folk melodies</li>
                    <li>• Hymns and spirituals</li>
                    <li>• Children's songs</li>
                    <li>• Traditional ballads</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Country & Folk</h4>
                  <p className="text-sm text-yellow-700 mb-2">Americana and roots music:</p>
                  <ul className="text-xs text-yellow-600 space-y-1">
                    <li>• Country song melodies</li>
                    <li>• Bluegrass fiddle tunes</li>
                    <li>• Folk guitar fingerpicking</li>
                    <li>• Americana songwriter style</li>
                    <li>• Traditional dance music</li>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Classic Examples</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800">The Beatles - "Let It Be"</h4>
                  <p className="text-sm text-blue-600 mb-2">Perfect example of C major songwriting</p>
                  <p className="text-xs text-blue-500">Simple, effective major scale melodies</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800">Eagles - "Hotel California"</h4>
                  <p className="text-sm text-blue-600 mb-2">Bm ionian in the famous solo</p>
                  <p className="text-xs text-blue-500">Classic rock guitar application</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800">Bach - Brandenburg Concertos</h4>
                  <p className="text-sm text-blue-600 mb-2">Classical major scale mastery</p>
                  <p className="text-xs text-blue-500">Baroque period harmonic foundation</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Contemporary Examples</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800">Ed Sheeran - "Perfect"</h4>
                  <p className="text-sm text-green-600 mb-2">Modern pop songwriting</p>
                  <p className="text-xs text-green-500">G major ionian throughout</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800">John Mayer - "Gravity"</h4>
                  <p className="text-sm text-green-600 mb-2">Blues-influenced major scale</p>
                  <p className="text-xs text-green-500">Contemporary guitar application</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800">Taylor Swift - Various Hits</h4>
                  <p className="text-sm text-green-600 mb-2">Country-pop major scale melodies</p>
                  <p className="text-xs text-green-500">Modern songwriter approach</p>
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
                <li>• Identify major scale intervals</li>
                <li>• Recognize Do-Re-Mi patterns</li>
                <li>• Practice with familiar songs</li>
                <li>• Sing scale degrees (1-2-3-4-5-6-7-8)</li>
                <li>• Compare to minor scales</li>
              </ul>
            </div>
            <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
              <h3 className="text-lg font-semibold text-cyan-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-cyan-700 text-sm space-y-2">
                <li>• Master all five CAGED positions</li>
                <li>• Practice ascending and descending</li>
                <li>• Work on string-by-string patterns</li>
                <li>• Connect different positions</li>
                <li>• Practice in all 12 keys</li>
              </ul>
            </div>
            <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
              <h3 className="text-lg font-semibold text-sky-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-sky-700 text-sm space-y-2">
                <li>• Create simple melodies</li>
                <li>• Practice over major chords</li>
                <li>• Study popular song melodies</li>
                <li>• Work on improvisation</li>
                <li>• Compose using major scale</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises with VexTab */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Exercise 1: C Major Scale</h3>
              <p className="text-blue-700 text-sm mb-3">Practice the fundamental C major scale:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :8 3/5 0/4 2/4 3/4 0/3 2/3 0/2 1/2 | :8 1/2 0/2 2/3 0/3 3/4 2/4 0/4 3/5
                `}
                width={550}
                scale={0.9}
              />
            </div>
            
            <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
              <h3 className="text-lg font-semibold text-cyan-800 mb-3">Exercise 2: Major Scale Melody</h3>
              <p className="text-cyan-700 text-sm mb-3">Simple major scale melody in C:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 3/5 0/4 2/4 :q 3/4 | :q 0/3 2/3 :q 0/2 | :h 1/2 | :w 3/5
                `}
                width={550}
                scale={0.9}
              />
            </div>
            
            <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
              <h3 className="text-lg font-semibold text-sky-800 mb-3">Exercise 3: Chord Tone Arpeggios</h3>
              <p className="text-sky-700 text-sm mb-3">Major triad arpeggios from the major scale:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 3/5 2/4 0/3 :q 1/2 | :q 1/2 0/3 :q 2/4 | :h 3/5 | :w 3/5
                `}
                width={550}
                scale={0.9}
              />
            </div>
          </div>
        </div>

        {/* Scale Relationships */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Scale Relationships & Theory</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Relationship to Other Scales</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800">Natural Minor (Aeolian)</h4>
                  <p className="text-sm text-blue-600">Same notes, different starting point</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800">Relative Minor</h4>
                  <p className="text-sm text-blue-600">Starts on the 6th degree of major</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800">Parallel Minor</h4>
                  <p className="text-sm text-blue-600">Same root note, different intervals</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modal Family</h3>
              <div className="space-y-3">
                <div className="bg-cyan-50 rounded-lg p-4">
                  <h4 className="font-semibold text-cyan-800">Dorian (2nd mode)</h4>
                  <p className="text-sm text-cyan-600">Minor with natural 6th</p>
                </div>
                <div className="bg-cyan-50 rounded-lg p-4">
                  <h4 className="font-semibold text-cyan-800">Phrygian (3rd mode)</h4>
                  <p className="text-sm text-cyan-600">Minor with flat 2nd</p>
                </div>
                <div className="bg-cyan-50 rounded-lg p-4">
                  <h4 className="font-semibold text-cyan-800">Lydian (4th mode)</h4>
                  <p className="text-sm text-cyan-600">Major with raised 4th</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Different Keys */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ionian Mode in Different Keys</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">G Ionian - 3rd Position</h3>
              <p className="text-sm text-blue-700 mb-3">Popular guitar key:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 3/6 5/6 2/5 3/5 5/5 | :q 2/4 4/4 2/3 | :q 4/3 2/2 4/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-blue-600 mt-2">Notes: G-A-B-C-D-E-F#-G</p>
            </div>
            
            <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
              <h3 className="text-lg font-semibold text-cyan-800 mb-3">D Ionian - 7th Position</h3>
              <p className="text-sm text-cyan-700 mb-3">Higher register pattern:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 10/6 12/6 9/5 10/5 12/5 | :q 9/4 11/4 9/3 | :q 11/3 9/2 11/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-cyan-600 mt-2">Notes: D-E-F#-G-A-B-C#-D</p>
            </div>
            
            <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
              <h3 className="text-lg font-semibold text-sky-800 mb-3">A Ionian - 5th Position</h3>
              <p className="text-sm text-sky-700 mb-3">Rock and pop favorite:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 5/6 7/6 4/5 5/5 7/5 | :q 4/4 6/4 4/3 | :q 6/3 4/2 6/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-sky-600 mt-2">Notes: A-B-C#-D-E-F#-G#-A</p>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">E Ionian - Open/12th Position</h3>
              <p className="text-sm text-indigo-700 mb-3">Open position alternative:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 0/6 2/6 1/5 2/5 4/5 | :q 1/4 3/4 1/3 | :q 3/3 1/2 3/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-indigo-600 mt-2">Notes: E-F#-G#-A-B-C#-D#-E</p>
            </div>
          </div>
        </div>

        {/* Related Scales */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Scales & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Natural Minor</h3>
              <p className="text-sm text-blue-700 mb-2">Relative minor - same notes different order</p>
              <p className="text-xs text-blue-600">A minor is relative to C major</p>
            </div>
            <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
              <h3 className="font-semibold text-cyan-800 mb-2">Pentatonic Major</h3>
              <p className="text-sm text-cyan-700 mb-2">Five-note subset of major scale</p>
              <p className="text-xs text-cyan-600">Removes 4th and 7th degrees</p>
            </div>
            <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
              <h3 className="font-semibold text-sky-800 mb-2">Lydian Mode</h3>
              <p className="text-sm text-sky-700 mb-2">Major scale with raised 4th</p>
              <p className="text-xs text-sky-600">Dreamy, ethereal variation</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Modal Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the foundational major scale, explore other modes to expand your musical vocabulary and add different colors to your playing.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/modes/dorian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🎷</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dorian Mode</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the jazzy minor mode with natural 6th.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Jazz minor →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/modes/lydian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lydian Mode</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Discover the dreamy major mode with raised 4th.
                </p>
                <span className="text-yellow-600 font-medium text-sm group-hover:text-yellow-700">
                  Dreamy major →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/modes" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">All Modes</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore all seven modes of the major scale.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Complete journey →
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
