"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { VexTab } from '@/components/VexTab';
import Link from 'next/link';

export default function HarmonicMinorScalePage() {
  return (
    <Layout>
      <Header
        title="Harmonic Minor Scale"
        subtitle="The exotic minor scale - adding a raised 7th to natural minor creates dramatic tension and a distinctive Middle Eastern sound perfect for classical and metal music."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/scales" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Scale Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Harmonic Minor Scale</h1>
          <p className="text-xl opacity-90 mb-4">
            The harmonic minor scale takes the natural minor scale and raises the 7th degree, creating 
            a distinctive augmented 2nd interval that gives it an exotic, dramatic character beloved in 
            classical, metal, and world music.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">W-H-W-W-H-Aug2-H</span>
            <span className="bg-white/20 px-3 py-1 rounded">7 Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">Minor with ♮7</span>
            <span className="bg-white/20 px-3 py-1 rounded">Exotic & Dramatic</span>
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
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Formula:</strong> 1-2-♭3-4-5-♭6-7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Intervals:</strong> W-H-W-W-H-Aug2-H</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Key difference:</strong> Natural 7th (vs ♭7 in natural minor)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Character:</strong> Exotic, dramatic, mysterious</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Function:</strong> Classical harmony, metal, world music</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">A Harmonic Minor Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Notes:</strong> A-B-C-D-E-F-G#-A</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Augmented 2nd:</strong> F to G# (3 semitones)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Leading tone:</strong> G# strongly resolves to A</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Perfect for:</strong> A minor with dominant function</span>
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
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">A Harmonic Minor - Open Position</h4>
                  <p className="text-sm text-purple-700 mb-3">Natural guitar key with open strings:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 0/5 2/5 3/5 0/4 | :q 2/4 3/4 0/3 1/3 | :q 4/3 1/3 0/3 3/4 | :q 2/4 0/4 3/5 2/5 0/5
                    `}
                    width={500}
                    scale={0.8}
                  />
                  <div className="mt-3">
                    <p className="text-xs text-purple-600 font-medium mb-1">Pattern Notes:</p>
                    <ul className="text-xs text-purple-600 space-y-1">
                      <li>• Root on 5th string, open (A)</li>
                      <li>• Augmented 2nd: F (3rd fret) to G# (4th fret)</li>
                      <li>• Easy access to dramatic interval</li>
                      <li>• Perfect for classical and metal styles</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">E Harmonic Minor - Open Position</h4>
                  <p className="text-sm text-indigo-700 mb-3">Another natural guitar key:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 0/6 2/6 3/6 0/5 | :q 2/5 3/5 0/4 1/4 | :q 4/4 1/4 0/4 3/5 | :q 2/5 0/5 3/6 2/6 0/6
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
                
                <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
                  <h4 className="font-semibold text-violet-800 mb-2">D Harmonic Minor - 5th Position</h4>
                  <p className="text-sm text-violet-700 mb-3">Higher position for lead work:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 5/5 7/5 8/5 5/4 | :q 7/4 8/4 5/3 6/3 | :q 9/3 6/3 5/3 8/4 | :q 7/4 5/4 8/5 7/5 5/5
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
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Classical Applications</h4>
                  <p className="text-sm text-red-700 mb-2">Traditional classical harmony:</p>
                  <ul className="text-xs text-red-600 space-y-1">
                    <li>• V7-i resolutions in minor keys</li>
                    <li>• Baroque and Classical period compositions</li>
                    <li>• Leading tone function</li>
                    <li>• Dramatic tension and release</li>
                    <li>• Perfect for arpeggiated accompaniments</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Metal & Rock</h4>
                  <p className="text-sm text-gray-700 mb-2">Modern heavy music applications:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Neoclassical metal solos</li>
                    <li>• Progressive metal compositions</li>
                    <li>• Dark, dramatic riffs</li>
                    <li>• Symphonic metal arrangements</li>
                    <li>• Technical death metal passages</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">World Music</h4>
                  <p className="text-sm text-orange-700 mb-2">Global musical traditions:</p>
                  <ul className="text-xs text-orange-600 space-y-1">
                    <li>• Middle Eastern music scales</li>
                    <li>• Flamenco and Spanish guitar</li>
                    <li>• Jewish klezmer music</li>
                    <li>• Eastern European folk</li>
                    <li>• Exotic modal improvisation</li>
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
                  <h4 className="font-semibold text-gray-800">Bach - "Invention No. 4 in D minor"</h4>
                  <p className="text-sm text-gray-600 mb-2">Masterful use of harmonic minor</p>
                  <p className="text-xs text-gray-500">Demonstrates classical harmony perfectly</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Mozart - "Requiem in D minor"</h4>
                  <p className="text-sm text-gray-600 mb-2">Dramatic harmonic minor passages</p>
                  <p className="text-xs text-gray-500">Shows the scale's emotional power</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Chopin - Various Nocturnes</h4>
                  <p className="text-sm text-gray-600 mb-2">Romantic period harmonic minor</p>
                  <p className="text-xs text-gray-500">Elegant melodic and harmonic use</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Applications</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Neoclassical Metal</h4>
                  <p className="text-sm text-gray-600 mb-2">Yngwie Malmsteen, Jason Becker</p>
                  <p className="text-xs text-gray-500">Classical technique meets metal power</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Progressive Metal</h4>
                  <p className="text-sm text-gray-600 mb-2">Symphony X, Dream Theater</p>
                  <p className="text-xs text-gray-500">Complex harmonic structures</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Film Scores</h4>
                  <p className="text-sm text-gray-600 mb-2">Horror and drama soundtracks</p>
                  <p className="text-xs text-gray-500">Creates suspense and darkness</p>
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
                <li>• Compare to natural minor</li>
                <li>• Focus on the augmented 2nd</li>
                <li>• Practice leading tone resolution</li>
                <li>• Identify in classical pieces</li>
                <li>• Sing the exotic interval</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-indigo-700 text-sm space-y-2">
                <li>• Learn all positions</li>
                <li>• Practice the augmented 2nd skip</li>
                <li>• Work on smooth fingering</li>
                <li>• Connect to minor chord shapes</li>
                <li>• Practice arpeggiated patterns</li>
              </ul>
            </div>
            <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
              <h3 className="text-lg font-semibold text-violet-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-violet-700 text-sm space-y-2">
                <li>• Improvise over minor progressions</li>
                <li>• Create dramatic melodies</li>
                <li>• Study classical compositions</li>
                <li>• Learn metal techniques</li>
                <li>• Practice with backing tracks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises with VexTab */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Exercise 1: A Harmonic Minor Scale</h3>
              <p className="text-purple-700 text-sm mb-3">Practice the A harmonic minor scale with emphasis on the augmented 2nd:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :8 0/5 2/5 3/5 0/4 2/4 3/4 0/3 4/3 | :8 4/3 0/3 3/4 2/4 0/4 3/5 2/5 0/5
                `}
                width={550}
                scale={0.9}
              />
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Exercise 2: Augmented 2nd Focus</h3>
              <p className="text-indigo-700 text-sm mb-3">Isolate and practice the characteristic augmented 2nd interval:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 3/4 4/3 :h 4/3 :q 3/4 | :q 3/5 4/3 :h 4/3 :q 3/5 | :q 0/4 4/3 :h 4/3 :q 0/4 | :w 0/5
                `}
                width={550}
                scale={0.9}
              />
            </div>
            
            <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
              <h3 className="text-lg font-semibold text-violet-800 mb-3">Exercise 3: Classical Arpeggio</h3>
              <p className="text-violet-700 text-sm mb-3">Practice broken chord patterns in harmonic minor:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :8 0/5 3/5 2/4 4/3 3/5 2/4 4/3 0/3 | :8 4/3 2/4 3/5 4/3 2/4 3/5 0/5 | :w 0/5
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
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Natural Minor vs Harmonic Minor</h4>
                  <p className="text-sm text-gray-600">Harmonic minor has a natural 7th instead of flat 7th</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Harmonic Function</h4>
                  <p className="text-sm text-gray-600">Creates strong leading tone resolution</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Exotic Character</h4>
                  <p className="text-sm text-gray-600">Augmented 2nd creates Middle Eastern flavor</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Related Scales</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Melodic Minor</h4>
                  <p className="text-sm text-gray-600">Alternative minor scale with raised 6th and 7th</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Phrygian Dominant</h4>
                  <p className="text-sm text-gray-600">5th mode of harmonic minor</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Hungarian Minor</h4>
                  <p className="text-sm text-gray-600">Similar exotic character with raised 4th</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Different Keys */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Harmonic Minor in Different Keys</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">E Harmonic Minor - Open Position</h3>
              <p className="text-sm text-red-700 mb-3">Natural guitar key:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 0/6 2/6 3/6 0/5 | :q 2/5 3/5 0/4 4/4 | :q 4/4 0/4 3/5 2/5 | :q 0/5 3/6 2/6 0/6
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-red-600 mt-2">Notes: E-F#-G-A-B-C-D#-E</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">B Harmonic Minor - 7th Position</h3>
              <p className="text-sm text-blue-700 mb-3">Higher position for lead:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 7/6 9/6 10/6 7/5 | :q 9/5 10/5 7/4 10/4 | :q 10/4 7/4 10/5 9/5 | :q 7/5 10/6 9/6 7/6
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-blue-600 mt-2">Notes: B-C#-D-E-F#-G-A#-B</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">F# Harmonic Minor - 2nd Position</h3>
              <p className="text-sm text-green-700 mb-3">Alternative fingering:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 2/6 4/6 5/6 2/5 | :q 4/5 5/5 2/4 5/4 | :q 5/4 2/4 5/5 4/5 | :q 2/5 5/6 4/6 2/6
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-green-600 mt-2">Notes: F#-G#-A-B-C#-D-E#-F#</p>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">C Harmonic Minor - 8th Position</h3>
              <p className="text-sm text-yellow-700 mb-3">Classical position:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 8/6 10/6 11/6 8/5 | :q 10/5 11/5 8/4 11/4 | :q 11/4 8/4 11/5 10/5 | :q 8/5 11/6 10/6 8/6
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-yellow-600 mt-2">Notes: C-D-E♭-F-G-A♭-B-C</p>
            </div>
          </div>
        </div>

        {/* Related Scales */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Scales & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Natural Minor</h3>
              <p className="text-sm text-blue-700 mb-2">Same as harmonic minor but with ♭7</p>
              <p className="text-xs text-blue-600">Softer, more traditional minor sound</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Melodic Minor</h3>
              <p className="text-sm text-green-700 mb-2">Raises both 6th and 7th degrees</p>
              <p className="text-xs text-green-600">Smoother melodic motion than harmonic</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Phrygian Dominant</h3>
              <p className="text-sm text-purple-700 mb-2">5th mode of harmonic minor</p>
              <p className="text-xs text-purple-600">Spanish/flamenco character</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Scale Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand harmonic minor, explore other minor variations and exotic scales.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/scales/minor" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Natural Minor</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Compare with the traditional natural minor scale.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Compare scales →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/scales/dorian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dorian Mode</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore another sophisticated minor scale option.
                </p>
                <span className="text-teal-600 font-medium text-sm group-hover:text-teal-700">
                  Learn dorian →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/scales/modes" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🌈</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Harmonic Minor Modes</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Discover the modes derived from harmonic minor.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Explore modes →
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
