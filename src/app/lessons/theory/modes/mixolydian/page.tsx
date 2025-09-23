"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import Link from 'next/link';

export default function MixolydianModePage() {
  return (
    <Layout>
      <Header
        title="Mixolydian Mode"
        subtitle="The dominant mode - a major scale with a flattened seventh that creates the perfect sound for blues, rock, and dominant chord progressions."
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
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Mixolydian Mode</h1>
          <p className="text-xl opacity-90 mb-4">
            The mixolydian mode is the fifth mode of the major scale, creating a dominant, bluesy sound 
            that's essential for rock, blues, and jazz music. It's like a major scale with attitude!
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">W-W-H-W-W-H-W</span>
            <span className="bg-white/20 px-3 py-1 rounded">7 Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">Major with ♭7</span>
            <span className="bg-white/20 px-3 py-1 rounded">Dominant & Bluesy</span>
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
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Formula:</strong> 1-2-3-4-5-6-♭7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Intervals:</strong> W-W-H-W-W-H-W</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Key difference:</strong> Flat 7th (vs natural 7th in major)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Character:</strong> Dominant, bluesy, rock-friendly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Function:</strong> Dominant 7th chords, blues, rock solos</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">G Mixolydian Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Notes:</strong> G-A-B-C-D-E-F-G</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Parent scale:</strong> C major (starting on G)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Signature sound:</strong> Major with bluesy flat 7th (F natural)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Perfect for:</strong> G7 chords, blues in G, rock solos</span>
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
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">G Mixolydian - Open Position</h4>
                  <p className="text-sm text-orange-700 mb-3">Perfect for blues and rock:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 3/6 0/5 2/5 3/5 | :q 0/4 2/4 3/4 1/3 | :q 3/3 0/2 1/2 3/2
                    `}
                    className="scale-75"
                  />
                  <div className="mt-3">
                    <p className="text-xs text-orange-600 font-medium mb-1">Pattern Notes:</p>
                    <ul className="text-xs text-orange-600 space-y-1">
                      <li>• Root on 6th string, 3rd fret (G)</li>
                      <li>• Flat 7th on 2nd string, 1st fret (F)</li>
                      <li>• Natural fingering in open position</li>
                      <li>• Perfect for G7 chord progressions</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">A Mixolydian - 5th Position</h4>
                  <p className="text-sm text-red-700 mb-3">Rock and blues favorite:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 5/6 7/6 9/6 5/5 | :q 7/5 9/5 5/4 7/4 | :q 5/3 7/3 5/2 7/2
                    `}
                    className="scale-75"
                  />
                </div>
                
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">D Mixolydian - Open/2nd Position</h4>
                  <p className="text-sm text-amber-700 mb-3">Country and folk applications:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 0/4 2/4 4/4 0/3 | :q 2/3 4/3 0/2 2/2 | :q 3/2 0/1 2/1 3/1
                    `}
                    className="scale-75"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Musical Applications</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Blues Applications</h4>
                  <p className="text-sm text-blue-700 mb-2">Essential for blues guitar:</p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• Use over dominant 7th chords</li>
                    <li>• Perfect for 12-bar blues progressions</li>
                    <li>• Emphasize the flat 7th interval</li>
                    <li>• Mix with pentatonic scales</li>
                    <li>• Great for shuffle rhythms</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Rock & Country</h4>
                  <p className="text-sm text-green-700 mb-2">Genre-defining applications:</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• Classic rock guitar solos</li>
                    <li>• Country guitar licks and runs</li>
                    <li>• Southern rock progressions</li>
                    <li>• Jam band improvisation</li>
                    <li>• Folk and bluegrass melodies</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Jazz Context</h4>
                  <p className="text-sm text-purple-700 mb-2">Jazz harmony applications:</p>
                  <ul className="text-xs text-purple-600 space-y-1">
                    <li>• V7 chords in ii-V-I progressions</li>
                    <li>• Dominant substitutions</li>
                    <li>• Blues-jazz crossover styles</li>
                    <li>• Chord-scale theory foundation</li>
                    <li>• Modal jazz compositions</li>
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
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Fire on the Mountain" - Grateful Dead</h4>
                  <p className="text-sm text-gray-600 mb-2">Classic jam in A mixolydian</p>
                  <p className="text-xs text-gray-500">Perfect example of modal rock jamming</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Sweet Home Alabama" - Lynyrd Skynyrd</h4>
                  <p className="text-sm text-gray-600 mb-2">Southern rock using mixolydian progressions</p>
                  <p className="text-xs text-gray-500">Iconic use of mixolydian in rock music</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Norwegian Wood" - The Beatles</h4>
                  <p className="text-sm text-gray-600 mb-2">Mixolydian melody over folk progression</p>
                  <p className="text-xs text-gray-500">Shows modal harmony in popular music</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Applications</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Blues Rock</h4>
                  <p className="text-sm text-gray-600 mb-2">Joe Bonamassa, Gary Moore</p>
                  <p className="text-xs text-gray-500">Modern blues guitar mastery</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Country Music</h4>
                  <p className="text-sm text-gray-600 mb-2">Keith Urban, Brad Paisley</p>
                  <p className="text-xs text-gray-500">Contemporary country guitar</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Jam Bands</h4>
                  <p className="text-sm text-gray-600 mb-2">Phish, Widespread Panic</p>
                  <p className="text-xs text-gray-500">Extended modal improvisation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">👂 Ear Training</h3>
              <ul className="text-orange-700 text-sm space-y-2">
                <li>• Compare to major scale</li>
                <li>• Focus on the flat 7th</li>
                <li>• Sing mixolydian scales</li>
                <li>• Identify in blues songs</li>
                <li>• Practice over G7 chords</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-red-700 text-sm space-y-2">
                <li>• Learn all five positions</li>
                <li>• Practice dominant arpeggios</li>
                <li>• Work on bending to flat 7th</li>
                <li>• Connect to chord shapes</li>
                <li>• Practice in different keys</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-amber-700 text-sm space-y-2">
                <li>• Improvise over blues progressions</li>
                <li>• Create rock riffs</li>
                <li>• Study country licks</li>
                <li>• Learn Grateful Dead songs</li>
                <li>• Practice with backing tracks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises with VexTab */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Exercise 1: G Mixolydian Scale</h3>
              <p className="text-orange-700 text-sm mb-3">Practice the G mixolydian scale ascending and descending:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :8 3/6 0/5 2/5 3/5 0/4 2/4 3/4 1/3 | :8 1/3 3/4 2/4 0/4 3/5 2/5 0/5 3/6
                `}
                className="scale-75"
              />
            </div>
            
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Exercise 2: Dominant 7th Emphasis</h3>
              <p className="text-red-700 text-sm mb-3">Emphasize the flat 7th to hear the mixolydian character:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 3/6 1/3 :h 1/3 :q 3/6 | :q 0/5 1/3 :h 1/3 :q 0/5 | :q 2/5 1/3 :h 1/3 :q 2/5 | :w 3/6
                `}
                className="scale-75"
              />
            </div>
            
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Exercise 3: Blues Rock Lick</h3>
              <p className="text-amber-700 text-sm mb-3">Classic mixolydian blues rock phrase:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :8 3/6 0/5 2/5 0/4 :q 3/4 1/3 | :q 3/3 0/2 :8 1/2 3/2 1/3 | :q 3/4 2/4 :h 0/5 | :w 3/6
                `}
                className="scale-75"
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
                  <h4 className="font-semibold text-gray-800">Major Scale vs Mixolydian</h4>
                  <p className="text-sm text-gray-600">Mixolydian has a flat 7th instead of natural 7th</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Major Scale Relationship</h4>
                  <p className="text-sm text-gray-600">Fifth mode of major scale</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Dominant Character</h4>
                  <p className="text-sm text-gray-600">Perfect for dominant 7th chord contexts</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Related Modes</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Dorian Mode</h4>
                  <p className="text-sm text-gray-600">Minor counterpart with natural 6th</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Lydian Mode</h4>
                  <p className="text-sm text-gray-600">Major mode with raised 4th</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Blues Scale</h4>
                  <p className="text-sm text-gray-600">Shares the bluesy, dominant character</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Different Keys */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Mixolydian Mode in Different Keys</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">A Mixolydian - 5th Position</h3>
              <p className="text-sm text-blue-700 mb-3">Popular rock key:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 5/6 7/6 9/6 5/5 | :q 7/5 9/5 5/4 7/4 | :q 5/3 7/3 5/2 7/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-blue-600 mt-2">Notes: A-B-C#-D-E-F#-G-A</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">E Mixolydian - Open Position</h3>
              <p className="text-sm text-green-700 mb-3">Natural guitar key:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 0/6 2/6 4/6 0/5 | :q 2/5 4/5 0/4 2/4 | :q 0/3 2/3 0/2 3/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-green-600 mt-2">Notes: E-F#-G#-A-B-C#-D-E</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">C Mixolydian - Open Position</h3>
              <p className="text-sm text-purple-700 mb-3">Easy to visualize:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 8/6 10/6 12/6 8/5 | :q 10/5 12/5 8/4 10/4 | :q 8/3 10/3 8/2 10/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-purple-600 mt-2">Notes: C-D-E-F-G-A-B♭-C</p>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">F Mixolydian - 1st Position</h3>
              <p className="text-sm text-yellow-700 mb-3">Country and folk favorite:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 1/6 3/6 5/6 1/5 | :q 3/5 5/5 1/4 3/4 | :q 1/3 3/3 1/2 4/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-yellow-600 mt-2">Notes: F-G-A-B♭-C-D-E♭-F</p>
            </div>
          </div>
        </div>

        {/* Related Scales */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Scales & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Major Scale</h3>
              <p className="text-sm text-blue-700 mb-2">Same as mixolydian but with natural 7th</p>
              <p className="text-xs text-blue-600">Brighter, more resolved sound</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Blues Scale</h3>
              <p className="text-sm text-green-700 mb-2">Shares the bluesy character</p>
              <p className="text-xs text-green-600">Perfect combination for blues guitar</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Dorian Mode</h3>
              <p className="text-sm text-purple-700 mb-2">Minor version of modal harmony</p>
              <p className="text-xs text-purple-600">Sophisticated minor counterpart</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Modal Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand mixolydian mode, explore other modes to complete your modal knowledge and expand your musical expression.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/modes/dorian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <span className="text-2xl">🎷</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dorian Mode</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the sophisticated minor mode that complements mixolydian.
                </p>
                <span className="text-teal-600 font-medium text-sm group-hover:text-teal-700">
                  Jazz minor →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/modes/ionian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">☀️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ionian Mode</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Return to the foundational major scale mode.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Foundation →
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
