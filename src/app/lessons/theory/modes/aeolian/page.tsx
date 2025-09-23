"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import Link from 'next/link';

export default function AeolianModePage() {
  return (
    <Layout>
      <Header
        title="Aeolian Mode (Natural Minor)"
        subtitle="The emotional foundation - the natural minor scale that forms the heart of melancholy and expressive music."
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
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Aeolian Mode (Natural Minor)</h1>
          <p className="text-xl opacity-90 mb-4">
            The aeolian mode is the sixth mode of the major scale, creating the natural minor scale that serves 
            as the emotional foundation of music. Its dark, introspective character makes it essential for expressing sadness, longing, and depth.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">W-H-W-W-H-W-W</span>
            <span className="bg-white/20 px-3 py-1 rounded">7 Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">♭3, ♭6, ♭7</span>
            <span className="bg-white/20 px-3 py-1 rounded">Emotional & Dark</span>
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
                  <span><strong>Formula:</strong> 1-2-♭3-4-5-♭6-♭7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Intervals:</strong> W-H-W-W-H-W-W</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Key characteristics:</strong> ♭3, ♭6, ♭7 create minor tonality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Character:</strong> Sad, emotional, introspective</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Function:</strong> Minor key center, emotional expression</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">A Aeolian Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Notes:</strong> A-B-C-D-E-F-G-A</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Parent scale:</strong> C major (starting on A)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Signature sound:</strong> Natural minor with ♭3, ♭6, ♭7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Perfect for:</strong> Ballads, emotional solos, minor key music</span>
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
                  <h4 className="font-semibold text-indigo-800 mb-2">A Aeolian - Open Position</h4>
                  <p className="text-sm text-indigo-700 mb-3">Natural fingering with open strings:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 0/5 2/5 3/5 0/4 2/4 | :q 0/3 1/3 3/3 0/2 1/2 | :q 3/2
                    `}
                    className="scale-75"
                  />
                  <div className="mt-3">
                    <p className="text-xs text-indigo-600 font-medium mb-1">Pattern Notes:</p>
                    <ul className="text-xs text-indigo-600 space-y-1">
                      <li>• Root on 5th string, open (A)</li>
                      <li>• ♭3 interval (C) gives minor character</li>
                      <li>• ♭6 and ♭7 create dark, emotional sound</li>
                      <li>• Most common minor scale pattern</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">E Aeolian - Open Position</h4>
                  <p className="text-sm text-blue-700 mb-3">Alternative natural fingering:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 0/6 2/6 3/6 0/5 2/5 | :q 0/4 2/4 0/3 2/3 0/2 | :q 1/2 3/2
                    `}
                    className="scale-75"
                  />
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-2">D Aeolian - 5th Position</h4>
                  <p className="text-sm text-slate-700 mb-3">Barre chord position pattern:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 5/5 7/5 8/5 5/4 7/4 | :q 5/3 6/3 8/3 5/2 6/2 | :q 8/2
                    `}
                    className="scale-75"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Musical Applications</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Rock & Metal Applications</h4>
                  <p className="text-sm text-purple-700 mb-2">Essential for dark and heavy music:</p>
                  <ul className="text-xs text-purple-600 space-y-1">
                    <li>• Power ballads and emotional solos</li>
                    <li>• Heavy metal and doom metal</li>
                    <li>• Progressive rock compositions</li>
                    <li>• Alternative and grunge styles</li>
                    <li>• Gothic and dark ambient music</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Folk & Traditional</h4>
                  <p className="text-sm text-green-700 mb-2">Classical and folk applications:</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• Celtic and Irish traditional music</li>
                    <li>• Classical minor key compositions</li>
                    <li>• Folk ballads and storytelling</li>
                    <li>• Eastern European folk traditions</li>
                    <li>• Medieval and renaissance music</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Harmonic Context</h4>
                  <p className="text-sm text-orange-700 mb-2">Best chord progressions for aeolian:</p>
                  <ul className="text-xs text-orange-600 space-y-1">
                    <li>• i-♭VII-♭VI progressions (Am-G-F)</li>
                    <li>• i-♭VI-♭VII-i (Am-F-G-Am)</li>
                    <li>• Natural minor chord sequences</li>
                    <li>• Modal interchange with relative major</li>
                    <li>• Plagal cadences and subdominant emphasis</li>
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
                  <h4 className="font-semibold text-gray-800">"Stairway to Heaven" - Led Zeppelin</h4>
                  <p className="text-sm text-gray-600 mb-2">Famous A minor section and solo</p>
                  <p className="text-xs text-gray-500">Perfect example of emotional aeolian usage</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"While My Guitar Gently Weeps" - Beatles</h4>
                  <p className="text-sm text-gray-600 mb-2">Beautiful A minor composition</p>
                  <p className="text-xs text-gray-500">Showcases aeolian's melancholic character</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Black" - Pearl Jam</h4>
                  <p className="text-sm text-gray-600 mb-2">Grunge ballad in natural minor</p>
                  <p className="text-xs text-gray-500">Modern rock application of aeolian mode</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Classical & Folk</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Bach - "Invention No. 4"</h4>
                  <p className="text-sm text-gray-600 mb-2">D minor baroque composition</p>
                  <p className="text-xs text-gray-500">Classical aeolian harmonic structure</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Greensleeves" - Traditional</h4>
                  <p className="text-sm text-gray-600 mb-2">English ballad in A minor</p>
                  <p className="text-xs text-gray-500">Traditional folk use of natural minor</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Chopin - "Minute Waltz"</h4>
                  <p className="text-sm text-gray-600 mb-2">Romantic era minor key composition</p>
                  <p className="text-xs text-gray-500">Classical piano in aeolian mode</p>
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
                <li>• Compare to major scale</li>
                <li>• Focus on ♭3, ♭6, ♭7 intervals</li>
                <li>• Identify emotional character</li>
                <li>• Practice relative major/minor</li>
                <li>• Listen to famous minor songs</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• Master all positions</li>
                <li>• Practice smooth connections</li>
                <li>• Work on emotional expression</li>
                <li>• Connect to minor chord shapes</li>
                <li>• Practice in multiple keys</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• Improvise over minor progressions</li>
                <li>• Create emotional melodies</li>
                <li>• Study minor key signatures</li>
                <li>• Learn famous minor songs</li>
                <li>• Practice with minor backing tracks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises with VexTab */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Exercise 1: A Aeolian Scale</h3>
              <p className="text-indigo-700 text-sm mb-3">Practice the A aeolian scale - feel the emotional character:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :8 0/5 2/5 3/5 0/4 2/4 0/3 1/3 3/3 | :8 3/3 1/3 0/3 2/4 0/4 3/5 2/5 0/5
                `}
                className="scale-75"
              />
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Exercise 2: Minor Scale Sequences</h3>
              <p className="text-blue-700 text-sm mb-3">Practice aeolian in thirds to hear the minor character:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :8 0/5 3/5 2/5 0/4 3/5 2/4 0/4 1/3 | :8 2/4 3/3 0/3 0/2 1/3 1/2 3/3 3/2
                `}
                className="scale-75"
              />
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Exercise 3: Emotional Melody</h3>
              <p className="text-purple-700 text-sm mb-3">Simple emotional phrase in A minor:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 0/5 3/5 :h 1/3 :q 0/3 | :q 3/3 0/2 :h 1/2 | :q 3/3 1/3 :h 0/4 | :q 2/5 0/5 :w 0/5
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
                  <h4 className="font-semibold text-gray-800">Major Scale vs Aeolian</h4>
                  <p className="text-sm text-gray-600">Aeolian has ♭3, ♭6, ♭7 creating minor tonality</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Relative Major Relationship</h4>
                  <p className="text-sm text-gray-600">Sixth mode of major scale, shares same notes</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Modal Character</h4>
                  <p className="text-sm text-gray-600">Stable minor sound, emotional foundation</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Related Modes</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Dorian</h4>
                  <p className="text-sm text-gray-600">Brighter minor with natural 6th</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Phrygian</h4>
                  <p className="text-sm text-gray-600">Darker minor with flat 2nd</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Ionian (Major)</h4>
                  <p className="text-sm text-gray-600">Relative major counterpart</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Different Keys */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Aeolian Mode in Different Keys</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">E Aeolian - Open Position</h3>
              <p className="text-sm text-green-700 mb-3">Natural guitar key:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 0/6 2/6 3/6 0/5 2/5 | :q 0/4 2/4 0/3 2/3 0/2 | :q 1/2 3/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-green-600 mt-2">Notes: E-F#-G-A-B-C-D-E</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">D Aeolian - 5th Position</h3>
              <p className="text-sm text-blue-700 mb-3">Common rock key:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 5/5 7/5 8/5 5/4 7/4 | :q 5/3 6/3 8/3 5/2 6/2 | :q 8/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-blue-600 mt-2">Notes: D-E-F-G-A-B♭-C-D</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">F# Aeolian - 2nd Position</h3>
              <p className="text-sm text-purple-700 mb-3">Alternative fingering:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 2/6 4/6 5/6 2/5 4/5 | :q 2/4 3/4 5/4 2/3 3/3 | :q 5/3
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-purple-600 mt-2">Notes: F#-G#-A-B-C#-D-E-F#</p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">B Aeolian - 7th Position</h3>
              <p className="text-sm text-orange-700 mb-3">Higher register pattern:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 7/6 9/6 10/6 7/5 9/5 | :q 7/4 8/4 10/4 7/3 8/3 | :q 10/3
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-orange-600 mt-2">Notes: B-C#-D-E-F#-G-A-B</p>
            </div>
          </div>
        </div>

        {/* Related Scales */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Scales & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Dorian Mode</h3>
              <p className="text-sm text-gray-700 mb-2">Same as aeolian but with natural 6th</p>
              <p className="text-xs text-gray-600">Brighter, more sophisticated minor sound</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Major Scale</h3>
              <p className="text-sm text-gray-700 mb-2">Relative major shares same notes</p>
              <p className="text-xs text-gray-600">Bright counterpart to aeolian's darkness</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Harmonic Minor</h3>
              <p className="text-sm text-gray-700 mb-2">Aeolian with raised 7th degree</p>
              <p className="text-xs text-gray-600">More exotic, classical minor variation</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Modal Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the emotional foundation of aeolian mode, explore other modes to expand your expressive palette.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/modes/dorian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <span className="text-2xl">🎷</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dorian Mode</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the brighter, jazzier cousin of aeolian with natural 6th.
                </p>
                <span className="text-teal-600 font-medium text-sm group-hover:text-teal-700">
                  Jazz sophistication →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/modes/ionian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                  <span className="text-2xl">☀️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ionian (Major)</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Discover the bright, happy relative major counterpart.
                </p>
                <span className="text-yellow-600 font-medium text-sm group-hover:text-yellow-700">
                  Bright foundation →
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
