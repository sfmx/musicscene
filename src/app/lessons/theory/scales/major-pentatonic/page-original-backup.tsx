"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import Link from 'next/link';

export default function PentatonicScalePage() {
  return (
    <Layout>
      <Header
        title="Major Pentatonic Scale"
        subtitle="The most versatile and user-friendly scale - five notes that create beautiful melodies and solos in any musical context."
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
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Major Pentatonic Scale</h1>
          <p className="text-xl opacity-90 mb-4">
            The major pentatonic scale is the guitarist's best friend - a five-note scale that sounds great in almost 
            any musical context and forms the foundation for countless melodies and solos.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">1-2-3-5-6</span>
            <span className="bg-white/20 px-3 py-1 rounded">5 Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">Always Safe</span>
            <span className="bg-white/20 px-3 py-1 rounded">Universal Scale</span>
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
                  <span><strong>Formula:</strong> 1-2-3-5-6 (removes 4th and 7th)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Intervals:</strong> W-W-W+H-W-W+H</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Character:</strong> Safe, melodic, versatile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Function:</strong> Soloing, improvisation, melody</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Advantage:</strong> No avoid notes or dissonance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">C Major Pentatonic Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Notes:</strong> C-D-E-G-A-C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Omitted:</strong> F (4th) and B (7th)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Why it works:</strong> No tritones or leading tones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Perfect for:</strong> Beginners and professionals alike</span>
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
                  <h4 className="font-semibold text-orange-800 mb-2">C Major Pentatonic - Position 1</h4>
                  <p className="text-sm text-orange-700 mb-3">Most common and accessible pattern:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 3/5 0/4 2/4 0/3 2/3 | :q 0/2 3/2 2/3 0/3 2/4 | :q 0/4 3/5
                    `}
                    className="scale-75"
                  />
                  <div className="mt-3">
                    <p className="text-xs text-orange-600 font-medium mb-1">Pattern Notes:</p>
                    <ul className="text-xs text-orange-600 space-y-1">
                      <li>• Root on 5th string, 3rd fret (C)</li>
                      <li>• Two notes per string in most positions</li>
                      <li>• Easy to memorize and use for solos</li>
                      <li>• Works over major and dominant chords</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Position 2 - Higher Pattern</h4>
                  <p className="text-sm text-red-700 mb-3">Extended range pattern:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 5/5 7/5 5/4 7/4 5/3 | :q 7/3 5/2 8/2 7/3 5/3 | :q 7/4 5/4 7/5 5/5
                    `}
                    className="scale-75"
                  />
                </div>
                
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">Complete Pentatonic Pattern</h4>
                  <p className="text-sm text-amber-700 mb-3">Two-octave major pentatonic:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :8 3/5 0/4 2/4 0/3 2/3 0/2 3/2 | :8 5/2 8/2 10/2 8/1 10/1 12/1
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
                  <h4 className="font-semibold text-blue-800 mb-2">Solo Techniques</h4>
                  <p className="text-sm text-blue-700 mb-2">Essential pentatonic soloing approaches:</p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• Bend strings for bluesy expression</li>
                    <li>• Use slides between pattern positions</li>
                    <li>• Add vibrato on sustained notes</li>
                    <li>• Combine with minor pentatonic for variety</li>
                    <li>• Target chord tones for strong resolution</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Genre Applications</h4>
                  <p className="text-sm text-green-700 mb-2">Where major pentatonic shines:</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• Country music: clean, bright solos</li>
                    <li>• Rock ballads: emotional lead lines</li>
                    <li>• Pop music: catchy, memorable melodies</li>
                    <li>• Blues: mixed with minor for contrast</li>
                    <li>• Folk: simple, accessible melodies</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Harmonic Context</h4>
                  <p className="text-sm text-purple-700 mb-2">Best chord progressions for major pentatonic:</p>
                  <ul className="text-xs text-purple-600 space-y-1">
                    <li>• I-V-vi-IV progressions</li>
                    <li>• Major key blues (I-IV-V)</li>
                    <li>• Country progressions</li>
                    <li>• Folk chord patterns</li>
                    <li>• Pop ballad progressions</li>
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
                  <h4 className="font-semibold text-gray-800">"My Girl" - The Temptations</h4>
                  <p className="text-sm text-gray-600 mb-2">Classic major pentatonic melody line</p>
                  <p className="text-xs text-gray-500">Perfect example of pentatonic melodic beauty</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Country Guitar Solos</h4>
                  <p className="text-sm text-gray-600 mb-2">Brad Paisley, Keith Urban, Vince Gill</p>
                  <p className="text-xs text-gray-500">Clean, bright pentatonic lead playing</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Blackbird" - The Beatles</h4>
                  <p className="text-sm text-gray-600 mb-2">Fingerpicked pentatonic patterns</p>
                  <p className="text-xs text-gray-500">Shows pentatonic in acoustic context</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Applications</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Pop Ballads</h4>
                  <p className="text-sm text-gray-600 mb-2">Ed Sheeran, John Mayer style</p>
                  <p className="text-xs text-gray-500">Emotional, accessible melodic content</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Rock Solos</h4>
                  <p className="text-sm text-gray-600 mb-2">Mixed with minor pentatonic</p>
                  <p className="text-xs text-gray-500">Creates major/minor contrast</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Singer-Songwriter</h4>
                  <p className="text-sm text-gray-600 mb-2">Taylor Swift, James Taylor</p>
                  <p className="text-xs text-gray-500">Natural, singing melodic lines</p>
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
                <li>• Sing pentatonic scales</li>
                <li>• Compare to full major scale</li>
                <li>• Identify pentatonic melodies</li>
                <li>• Practice call and response</li>
                <li>• Listen to country/pop solos</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• Practice all five positions</li>
                <li>• Work on smooth transitions</li>
                <li>• Practice bends and vibrato</li>
                <li>• Learn sequence patterns</li>
                <li>• Practice in different keys</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Improvise over I-V-vi-IV</li>
                <li>• Create simple melodies</li>
                <li>• Practice over backing tracks</li>
                <li>• Learn pentatonic songs</li>
                <li>• Mix major and minor pentatonic</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises with VexTab */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Exercise 1: Basic Pattern</h3>
              <p className="text-blue-700 text-sm mb-3">Practice the C major pentatonic ascending and descending:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :8 3/5 0/4 2/4 0/3 2/3 0/2 3/2 5/2 | :8 3/2 0/2 2/3 0/3 2/4 0/4 3/5
                `}
                className="scale-75"
              />
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Exercise 2: Sequence Practice</h3>
              <p className="text-green-700 text-sm mb-3">Practice pentatonic sequences in thirds:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :8 3/5 2/4 0/4 0/3 2/4 2/3 0/3 0/2 | :8 2/3 3/2 0/2 5/2 3/2 3/2 0/2 2/3
                `}
                className="scale-75"
              />
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Exercise 3: Melodic Phrases</h3>
              <p className="text-purple-700 text-sm mb-3">Simple pentatonic melody over C-Am-F-G:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 3/5 0/4 :h 2/4 :q 0/3 | :q 2/3 0/2 :h 3/2 | :q 0/2 2/3 :h 0/3 | :q 2/4 0/4 :h 3/5
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Relationship to Major Scale</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Derived from Major</h4>
                  <p className="text-sm text-gray-600">Remove 4th and 7th degrees from major scale</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Why These Notes?</h4>
                  <p className="text-sm text-gray-600">4th and 7th create tension against tonic</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Universal Appeal</h4>
                  <p className="text-sm text-gray-600">Found in music worldwide - natural intervals</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Related Scales</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Minor Pentatonic</h4>
                  <p className="text-sm text-gray-600">Same notes, different tonal center (relative)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Blues Scale</h4>
                  <p className="text-sm text-gray-600">Minor pentatonic + ♭5 (blue note)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Major Scale</h4>
                  <p className="text-sm text-gray-600">Add 4th and 7th back for complete scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Different Keys */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Major Pentatonic in Different Keys</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">G Major Pentatonic - Open Position</h3>
              <p className="text-sm text-green-700 mb-3">Great for country and folk styles:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 3/6 0/5 2/5 0/4 2/4 | :q 0/3 2/3 0/2 3/2 2/3 | :q 0/3 2/4 0/4 2/5 | :q 0/5 3/6
                `}
                className="scale-75"
              />
              <p className="text-xs text-green-600 mt-2">Notes: G-A-B-D-E-G</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">D Major Pentatonic - Open Position</h3>
              <p className="text-sm text-blue-700 mb-3">Bright, cheerful sound:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 0/4 2/4 0/3 2/3 4/3 | :q 2/2 4/2 2/3 0/3 2/4 | :q 0/4
                `}
                className="scale-75"
              />
              <p className="text-xs text-blue-600 mt-2">Notes: D-E-F#-A-B-D</p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">A Major Pentatonic - Open Position</h3>
              <p className="text-sm text-orange-700 mb-3">Popular key for guitar:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 0/5 2/5 0/4 2/4 1/3 | :q 2/3 0/2 2/2 1/3 2/4 | :q 0/4 2/5 0/5
                `}
                className="scale-75"
              />
              <p className="text-xs text-orange-600 mt-2">Notes: A-B-C#-E-F#-A</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">E Major Pentatonic - Open Position</h3>
              <p className="text-sm text-purple-700 mb-3">Fundamental guitar key:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 0/6 2/6 0/5 2/5 1/4 | :q 2/4 0/3 2/3 1/4 2/5 | :q 0/5 2/6 0/6
                `}
                className="scale-75"
              />
              <p className="text-xs text-purple-600 mt-2">Notes: E-F#-G#-B-C#-E</p>
            </div>
          </div>
        </div>

        {/* Related Scales */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Scales & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Minor Pentatonic</h3>
              <p className="text-sm text-blue-700 mb-2">Same notes, minor center - darker mood</p>
              <p className="text-xs text-blue-600">A minor pent = C major pent (relative scales)</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Major Scale</h3>
              <p className="text-sm text-green-700 mb-2">Add 4th and 7th for complete scale</p>
              <p className="text-xs text-green-600">More harmonic possibilities but less safe</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Blues Scale</h3>
              <p className="text-sm text-purple-700 mb-2">Minor pentatonic + ♭5 blue note</p>
              <p className="text-xs text-purple-600">Adds bluesy character and tension</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Scale Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the major pentatonic scale, explore its darker counterpart and other essential scales.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/scales/minor" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor Pentatonic</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the bluesy, emotional counterpart to major pentatonic.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Get bluesy →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/scales/major" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major Scale</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Add the 4th and 7th back for the complete major scale.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Complete the scale →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/scales/blues" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Blues Scale</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Add the blue note for that classic blues sound.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Learn the blues →
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
