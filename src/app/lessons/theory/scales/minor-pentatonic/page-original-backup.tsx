"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import Link from 'next/link';

export default function MinorPentatonicScalePage() {
  return (
    <Layout>
      <Header
        title="Minor Pentatonic Scale"
        subtitle="The most essential guitar scale - five notes that deliver powerful, bluesy expression in rock, blues, and beyond."
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
          <h1 className="text-3xl font-bold mb-4">Minor Pentatonic Scale</h1>
          <p className="text-xl opacity-90 mb-4">
            The minor pentatonic scale is the backbone of rock and blues guitar - a five-note powerhouse that 
            delivers emotional depth and raw expression in every genre from blues to metal.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">1-♭3-4-5-♭7</span>
            <span className="bg-white/20 px-3 py-1 rounded">5 Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">Powerful & Expressive</span>
            <span className="bg-white/20 px-3 py-1 rounded">Rock & Blues Essential</span>
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
                  <span><strong>Formula:</strong> 1-♭3-4-5-♭7 (removes 2nd and 6th)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Intervals:</strong> W+H-W-W-W+H-W</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Character:</strong> Dark, powerful, emotional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Function:</strong> Lead guitar, soloing, riffs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Advantage:</strong> Works over most chord progressions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">A Minor Pentatonic Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Notes:</strong> A-C-D-E-G-A</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Omitted:</strong> B (2nd) and F (6th)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Why it works:</strong> No major intervals against minor tonality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Perfect for:</strong> Rock solos, blues expression, emotional leads</span>
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
                  <h4 className="font-semibold text-purple-800 mb-2">A Minor Pentatonic - Position 1</h4>
                  <p className="text-sm text-purple-700 mb-3">The most famous guitar pattern ever:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 5/6 8/6 5/5 7/5 5/4 | :q 7/4 5/3 7/3 5/2 8/2 | :q 5/1 8/1
                    `}
                    className="scale-75"
                  />
                  <div className="mt-3">
                    <p className="text-xs text-purple-600 font-medium mb-1">Pattern Notes:</p>
                    <ul className="text-xs text-purple-600 space-y-1">
                      <li>• Root on 6th string, 5th fret (A)</li>
                      <li>• Box pattern covering 4 frets</li>
                      <li>• Foundation for countless rock solos</li>
                      <li>• Works over Am, C, F, G progressions</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">Position 2 - Extension Pattern</h4>
                  <p className="text-sm text-indigo-700 mb-3">Higher register extension:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 8/6 10/6 7/5 10/5 7/4 | :q 10/4 8/3 10/3 8/2 10/2 | :q 8/1 10/1
                    `}
                    className="scale-75"
                  />
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-2">Complete Two-Octave Pattern</h4>
                  <p className="text-sm text-slate-700 mb-3">Full range minor pentatonic:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :8 5/6 8/6 5/5 7/5 5/4 7/4 5/3 7/3 | :8 5/2 8/2 5/1 8/1 10/1 12/1
                    `}
                    className="scale-75"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Musical Applications</h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Rock & Metal Techniques</h4>
                  <p className="text-sm text-red-700 mb-2">Essential rock guitar approaches:</p>
                  <ul className="text-xs text-red-600 space-y-1">
                    <li>• Power bends on the 3rd fret notes</li>
                    <li>• Fast alternate picking runs</li>
                    <li>• Palm-muted riffs using scale notes</li>
                    <li>• Combine with power chords</li>
                    <li>• Use with distortion for heavy tones</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Blues Expression</h4>
                  <p className="text-sm text-blue-700 mb-2">Classic blues guitar techniques:</p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• String bends for emotional expression</li>
                    <li>• Vibrato on sustained notes</li>
                    <li>• Call and response phrasing</li>
                    <li>• Combine with major pentatonic</li>
                    <li>• Use over 12-bar blues progressions</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Harmonic Context</h4>
                  <p className="text-sm text-green-700 mb-2">Best chord progressions for minor pentatonic:</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• i-VII-VI progressions</li>
                    <li>• 12-bar blues in minor keys</li>
                    <li>• Rock progressions (Am-F-C-G)</li>
                    <li>• Minor key ballads</li>
                    <li>• Heavy rock/metal progressions</li>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Legendary Solos</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Stairway to Heaven" - Led Zeppelin</h4>
                  <p className="text-sm text-gray-600 mb-2">Jimmy Page's iconic solo heavily uses minor pentatonic</p>
                  <p className="text-xs text-gray-500">Perfect example of emotional rock expression</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Sweet Child O' Mine" - Guns N' Roses</h4>
                  <p className="text-sm text-gray-600 mb-2">Slash's memorable solos rooted in minor pentatonic</p>
                  <p className="text-xs text-gray-500">Modern rock guitar at its finest</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">BB King Blues Style</h4>
                  <p className="text-sm text-gray-600 mb-2">Master of minor pentatonic expression</p>
                  <p className="text-xs text-gray-500">Shows the emotional power of simple scales</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Applications</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Alternative Rock</h4>
                  <p className="text-sm text-gray-600 mb-2">Nirvana, Pearl Jam, Soundgarden</p>
                  <p className="text-xs text-gray-500">Grunge and alternative foundation</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Hard Rock/Metal</h4>
                  <p className="text-sm text-gray-600 mb-2">Black Sabbath, Metallica, Iron Maiden</p>
                  <p className="text-xs text-gray-500">Power and aggression in heavy music</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Modern Blues Rock</h4>
                  <p className="text-sm text-gray-600 mb-2">Joe Bonamassa, Gary Clark Jr.</p>
                  <p className="text-xs text-gray-500">Contemporary blues expression</p>
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
              <h3 className="text-lg font-semibold text-purple-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• Master the box pattern</li>
                <li>• Practice string bends</li>
                <li>• Work on vibrato technique</li>
                <li>• Connect pattern positions</li>
                <li>• Practice in all keys</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎵 Musical Expression</h3>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• Learn classic rock licks</li>
                <li>• Practice blues phrasing</li>
                <li>• Work on call and response</li>
                <li>• Study famous solos</li>
                <li>• Improvise over backing tracks</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">👂 Ear Training</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Sing scale intervals</li>
                <li>• Identify minor pentatonic in songs</li>
                <li>• Practice note targeting</li>
                <li>• Listen to blues masters</li>
                <li>• Transcribe simple solos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises with VexTab */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Exercise 1: Basic Box Pattern</h3>
              <p className="text-purple-700 text-sm mb-3">Practice the A minor pentatonic box pattern:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :8 5/6 8/6 5/5 7/5 5/4 7/4 5/3 7/3 | :8 5/2 8/2 5/1 8/1 5/2 5/3 7/4 5/4 | :8 7/5 5/5 8/6 5/6
                `}
                className="scale-75"
              />
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Exercise 2: Classic Rock Lick</h3>
              <p className="text-indigo-700 text-sm mb-3">Essential rock guitar phrase:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :8 5/4 7/4 5/3 :q 7b8/3 :8 5/3 7/4 | :q 5/4 :8 8/5 5/5 :q 7b8/5 :8 5/5
                `}
                className="scale-75"
              />
            </div>
            
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Exercise 3: Blues Phrasing</h3>
              <p className="text-slate-700 text-sm mb-3">Expressive blues phrases with bends:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 8b10/6 :8 8/6 5/5 :q 7b8/5 :8 5/5 | :q 7b8/4 :8 5/4 7/3 :q 5/3 :8 8/2
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Relationship to Natural Minor</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Derived from Natural Minor</h4>
                  <p className="text-sm text-gray-600">Remove 2nd and 6th degrees from natural minor scale</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Why These Notes?</h4>
                  <p className="text-sm text-gray-600">2nd and 6th can clash with minor tonality</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Universal Power</h4>
                  <p className="text-sm text-gray-600">Works over major and minor progressions</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Related Scales</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Major Pentatonic</h4>
                  <p className="text-sm text-gray-600">Same notes, different tonal center (relative)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Blues Scale</h4>
                  <p className="text-sm text-gray-600">Minor pentatonic + ♭5 (blue note)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Natural Minor</h4>
                  <p className="text-sm text-gray-600">Add 2nd and 6th back for complete scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Different Keys */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Minor Pentatonic in Different Keys</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">E Minor Pentatonic - Open Position</h3>
              <p className="text-sm text-red-700 mb-3">Most natural key for guitar:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 0/6 3/6 0/5 2/5 0/4 | :q 2/4 0/3 2/3 0/2 3/2 | :q 0/1 3/1
                `}
                className="scale-75"
              />
              <p className="text-xs text-red-600 mt-2">Notes: E-G-A-B-D-E</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">G Minor Pentatonic - 3rd Position</h3>
              <p className="text-sm text-green-700 mb-3">Higher register option:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 3/6 6/6 3/5 5/5 3/4 | :q 5/4 3/3 5/3 3/2 6/2 | :q 3/1 6/1
                `}
                className="scale-75"
              />
              <p className="text-xs text-green-600 mt-2">Notes: G-B♭-C-D-F-G</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">D Minor Pentatonic - 5th Position</h3>
              <p className="text-sm text-blue-700 mb-3">Upper fretboard access:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 10/6 13/6 10/5 12/5 10/4 | :q 12/4 10/3 12/3 10/2 13/2 | :q 10/1 13/1
                `}
                className="scale-75"
              />
              <p className="text-xs text-blue-600 mt-2">Notes: D-F-G-A-C-D</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">C Minor Pentatonic - Alternative</h3>
              <p className="text-sm text-purple-700 mb-3">Different fingering approach:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 8/6 11/6 8/5 10/5 8/4 | :q 10/4 8/3 10/3 8/2 11/2 | :q 8/1 11/1
                `}
                className="scale-75"
              />
              <p className="text-xs text-purple-600 mt-2">Notes: C-E♭-F-G-B♭-C</p>
            </div>
          </div>
        </div>

        {/* Related Scales */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Scales & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="font-semibold text-orange-800 mb-2">Major Pentatonic</h3>
              <p className="text-sm text-orange-700 mb-2">Same notes, major center - brighter mood</p>
              <p className="text-xs text-orange-600">C major pent = A minor pent (relative scales)</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">Blues Scale</h3>
              <p className="text-sm text-red-700 mb-2">Add ♭5 for classic blues sound</p>
              <p className="text-xs text-red-600">The blue note adds tension and character</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-2">Natural Minor</h3>
              <p className="text-sm text-slate-700 mb-2">Add 2nd and 6th for complete scale</p>
              <p className="text-xs text-slate-600">More harmonic options but less safe</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Scale Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the minor pentatonic scale, explore its brighter counterpart and other essential scales.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/scales/major-pentatonic" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">☀️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major Pentatonic</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the bright, cheerful counterpart to minor pentatonic.
                </p>
                <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                  Get bright →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/scales/blues" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Blues Scale</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Add the blue note for that classic blues sound.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Learn the blues →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/scales/minor" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Natural Minor</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Add the 2nd and 6th back for the complete minor scale.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Complete the scale →
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
