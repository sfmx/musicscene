"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { VexTab } from '@/components/VexTab';
import Link from 'next/link';

export default function BluesScalePage() {
  return (
    <Layout>
      <Header
        title="Blues Scale"
        subtitle="The heart of blues, rock, and soul - a powerful six-note scale that captures the raw emotion and character that defines these genres."
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
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Blues Scale</h1>
          <p className="text-xl opacity-90 mb-4">
            The blues scale is the foundation of blues, rock, and soul music. Built from the minor pentatonic 
            scale with an added ♭5 "blue note," it creates that distinctive gritty, emotional sound.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">1-♭3-4-♭5-5-♭7</span>
            <span className="bg-white/20 px-3 py-1 rounded">6 Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">Gritty & Soulful</span>
            <span className="bg-white/20 px-3 py-1 rounded">Blue Note</span>
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
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Formula:</strong> 1-♭3-4-♭5-5-♭7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Intervals:</strong> m3-W-H-H-m3-W</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Blue Note:</strong> ♭5 (tritone) adds tension</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Character:</strong> Gritty, emotional, soulful</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Function:</strong> Basis for blues and rock music</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">A Blues Scale Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Notes:</strong> A-C-D-D#/E♭-E-G</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Blue note:</strong> D#/E♭ (♭5)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Based on:</strong> A minor pentatonic + blue note</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Guitar friendly:</strong> Box patterns work well</span>
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
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">A Blues Scale - Box 1 (5th Fret)</h4>
                  <p className="text-sm text-indigo-700 mb-3">Most common blues position:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 5/6 8/6 5/5 7/5 | :q 5/4 6/4 7/4 5/3 | :q 7/3 5/2 8/2 5/6
                    `}
                    width={500}
                    scale={0.8}
                  />
                  <div className="mt-3">
                    <p className="text-xs text-indigo-600 font-medium mb-1">Pattern Notes:</p>
                    <ul className="text-xs text-indigo-600 space-y-1">
                      <li>• Root A on 6th string, 5th fret</li>
                      <li>• Blue note (♭5) on 4th string, 6th fret</li>
                      <li>• Natural 5th on 4th string, 7th fret</li>
                      <li>• Use bending for expression</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Extended Pattern - Two Octaves</h4>
                  <p className="text-sm text-purple-700 mb-3">Fuller range for leads:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :8 5/6 8/6 5/5 7/5 5/4 6/4 7/4 5/3 | :8 7/3 5/2 8/2 5/1 8/1 5/1 8/2 5/2
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">E Blues Scale - Open Position</h4>
                  <p className="text-sm text-gray-700 mb-3">Great for beginners:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 0/6 3/6 0/5 2/5 | :q 0/4 1/4 2/4 0/3 | :q 2/3 0/2 3/2 0/6
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Techniques & Expression</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Essential Techniques</h4>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• <strong>String bending:</strong> ♭3 to 3, ♭5 to 5</li>
                    <li>• <strong>Vibrato:</strong> On sustained notes</li>
                    <li>• <strong>Slides:</strong> Between scale degrees</li>
                    <li>• <strong>Hammer-ons/Pull-offs:</strong> For fluidity</li>
                    <li>• <strong>Double stops:</strong> Two-note harmonies</li>
                    <li>• <strong>Call and response:</strong> Phrase structure</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Blue Note Usage</h4>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• <strong>Passing tone:</strong> Quick movement through ♭5</li>
                    <li>• <strong>Target note:</strong> Resolve to natural 5th</li>
                    <li>• <strong>Tension creator:</strong> Hold and bend</li>
                    <li>• <strong>Chromatic approach:</strong> To chord tones</li>
                    <li>• <strong>Blues inflection:</strong> Slight bend up</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Rhythm Applications</h4>
                  <ul className="text-xs text-orange-600 space-y-1">
                    <li>• <strong>12-bar blues:</strong> Perfect scale choice</li>
                    <li>• <strong>Rock progressions:</strong> Works over power chords</li>
                    <li>• <strong>Minor keys:</strong> Natural fit</li>
                    <li>• <strong>Major blues:</strong> Mix with major pentatonic</li>
                    <li>• <strong>Shuffle rhythms:</strong> Triplet-based feels</li>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Blues Classics</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">B.B. King - "The Thrill Is Gone"</h4>
                  <p className="text-sm text-gray-600 mb-2">Masterful use of blues scale with bending</p>
                  <p className="text-xs text-gray-500">Blue notes create emotional expression</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Muddy Waters - "Mannish Boy"</h4>
                  <p className="text-sm text-gray-600 mb-2">Classic electric blues riff</p>
                  <p className="text-xs text-gray-500">Simple but powerful blues scale usage</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Robert Johnson - "Cross Road Blues"</h4>
                  <p className="text-sm text-gray-600 mb-2">Delta blues foundation</p>
                  <p className="text-xs text-gray-500">Acoustic blues scale applications</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Rock & Modern Uses</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Black Sabbath - "Paranoid"</h4>
                  <p className="text-sm text-gray-600 mb-2">Heavy rock riffs from blues scale</p>
                  <p className="text-xs text-gray-500">Blues scale drives hard rock</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Led Zeppelin - "Black Dog"</h4>
                  <p className="text-sm text-gray-600 mb-2">Blues-rock fusion mastery</p>
                  <p className="text-xs text-gray-500">Complex rhythms with blues scale</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Stevie Ray Vaughan - "Pride and Joy"</h4>
                  <p className="text-sm text-gray-600 mb-2">Modern blues guitar virtuosity</p>
                  <p className="text-xs text-gray-500">Technical precision with blues scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">👂 Ear Training</h3>
              <ul className="text-indigo-700 text-sm space-y-2">
                <li>• Identify the blue note in recordings</li>
                <li>• Practice bending to pitch</li>
                <li>• Learn classic blues licks by ear</li>
                <li>• Distinguish blues vs pentatonic</li>
                <li>• Recognize blues scale in rock songs</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• Master all five box patterns</li>
                <li>• Practice string bending accuracy</li>
                <li>• Work on vibrato control</li>
                <li>• Practice blues scale sequences</li>
                <li>• Learn connecting patterns</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Improvise over 12-bar blues</li>
                <li>• Create your own blues licks</li>
                <li>• Practice call and response</li>
                <li>• Learn famous blues solos</li>
                <li>• Mix with major pentatonic</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises with VexTab */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Exercise 1: Basic Blues Scale</h3>
              <p className="text-blue-700 text-sm mb-3">Practice the A blues scale ascending and descending:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :8 5/6 8/6 5/5 7/5 5/4 6/4 7/4 5/3 | :8 7/3 5/2 8/2 7/3 5/3 7/4 6/4 5/4 7/5 5/5 8/6 5/6
                `}
                width={550}
                scale={0.9}
              />
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Exercise 2: Blue Note Focus</h3>
              <p className="text-green-700 text-sm mb-3">Practice emphasizing the blue note (♭5):</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 5/6 6/4 7/4 6/4 | :q 5/6 6/4 7/4 8/2 | :q 5/6 6/4 5/6
                `}
                width={550}
                scale={0.9}
              />
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Exercise 3: Classic Blues Lick</h3>
              <p className="text-purple-700 text-sm mb-3">Essential blues lick pattern:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :8 8/6 5/5 7/5 6/4 7/4 5/3 7/3 5/2
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Related Scales</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Minor Pentatonic</h4>
                  <p className="text-sm text-gray-600">Blues scale = minor pentatonic + blue note (♭5)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Major Blues</h4>
                  <p className="text-sm text-gray-600">Major pentatonic + ♭3 blue note</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Natural Minor</h4>
                  <p className="text-sm text-gray-600">Contains all blues scale notes plus 2nd and 6th</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Harmonic Function</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Over Minor Chords</h4>
                  <p className="text-sm text-gray-600">Perfect fit - all notes are chord tones or tensions</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Over Dominant 7ths</h4>
                  <p className="text-sm text-gray-600">Works great - blue note adds tritone tension</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">12-Bar Blues</h4>
                  <p className="text-sm text-gray-600">Works over all three chords (I7-IV7-V7)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Different Keys */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Blues Scale in Different Keys</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">E Blues Scale - Open Position</h3>
              <p className="text-sm text-red-700 mb-3">Great for beginners, uses open strings:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 0/6 3/6 0/5 2/5 | :q 0/4 1/4 2/4 0/3 | :q 2/3 0/2 3/2 0/6
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-red-600 mt-2">Notes: E-G-A-A#/B♭-B-D</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">G Blues Scale - 3rd Position</h3>
              <p className="text-sm text-blue-700 mb-3">Popular key for rock and blues:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 3/6 6/6 3/5 5/5 | :q 3/4 4/4 5/4 3/3 | :q 5/3 3/2 6/2 3/6
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-blue-600 mt-2">Notes: G-B♭-C-C#/D♭-D-F</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">C Blues Scale - 8th Position</h3>
              <p className="text-sm text-green-700 mb-3">Higher register, great for leads:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 8/6 11/6 8/5 10/5 | :q 8/4 9/4 10/4 8/3 | :q 10/3 8/2 11/2 8/6
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-green-600 mt-2">Notes: C-E♭-F-F#/G♭-G-B♭</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">D Blues Scale - 10th Position</h3>
              <p className="text-sm text-purple-700 mb-3">High energy position:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 10/6 13/6 10/5 12/5 | :q 10/4 11/4 12/4 10/3 | :q 12/3 10/2 13/2 10/6
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-purple-600 mt-2">Notes: D-F-G-G#/A♭-A-C</p>
            </div>
          </div>
        </div>

        {/* Related Scales */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Scales & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Minor Pentatonic</h3>
              <p className="text-sm text-blue-700 mb-2">Remove the blue note (♭5) for cleaner sound</p>
              <p className="text-xs text-blue-600">5 notes vs 6 notes</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Major Blues</h3>
              <p className="text-sm text-green-700 mb-2">Major pentatonic + ♭3 blue note</p>
              <p className="text-xs text-green-600">Brighter but still bluesy</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Dorian Mode</h3>
              <p className="text-sm text-purple-700 mb-2">Natural minor with raised 6th</p>
              <p className="text-xs text-purple-600">Jazzy alternative to blues scale</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Scale Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the blues scale, explore its relationships with pentatonic scales and other blues-related scales.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/scales/minor-pentatonic" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor Pentatonic</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Master the foundation scale that the blues scale is built upon.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Learn the foundation →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/scales/major-pentatonic" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">☀️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major Pentatonic</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the brighter counterpart for major blues and rock.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Brighten your sound →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/scales/minor" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Natural Minor</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Expand to the full seven-note minor scale for more melodic options.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Expand your range →
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
