"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import Link from 'next/link';

export default function LydianModePage() {
  return (
    <Layout>
      <Header
        title="Lydian Mode"
        subtitle="The dreamy and ethereal mode - creating floating, magical atmospheres with its distinctive raised 4th degree."
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
        <div className="bg-gradient-to-r from-purple-600 to-violet-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Lydian Mode</h1>
          <p className="text-xl opacity-90 mb-4">
            The lydian mode is the fourth mode of the major scale, creating a bright, ethereal sound with its 
            characteristic raised 4th degree. This creates a dreamy, floating quality perfect for film scores and atmospheric music.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">W-W-W-H-W-W-H</span>
            <span className="bg-white/20 px-3 py-1 rounded">7 Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">#4 (Raised 4th)</span>
            <span className="bg-white/20 px-3 py-1 rounded">Dreamy & Floating</span>
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
                  <span><strong>Formula:</strong> 1-2-3-#4-5-6-7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Intervals:</strong> W-W-W-H-W-W-H</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Key characteristic:</strong> #4 creates tritone with root</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Character:</strong> Bright, dreamy, ethereal, floating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Function:</strong> Film scoring, atmospheric, progressive</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">F Lydian Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Notes:</strong> F-G-A-B-C-D-E-F</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Parent scale:</strong> C major (starting on F)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Signature sound:</strong> B natural (#4) creates dreamy quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Perfect for:</strong> Film scores, ambient, progressive rock</span>
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
                  <h4 className="font-semibold text-purple-800 mb-2">F Lydian - 1st Position</h4>
                  <p className="text-sm text-purple-700 mb-3">Natural fingering emphasizing #4:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 1/6 3/6 5/6 1/5 3/5 | :q 0/4 2/4 0/3 2/3 0/2 | :q 1/2
                    `}
                    className="scale-75"
                  />
                  <div className="mt-3">
                    <p className="text-xs text-purple-600 font-medium mb-1">Pattern Notes:</p>
                    <ul className="text-xs text-purple-600 space-y-1">
                      <li>• Root on 6th string, 1st fret (F)</li>
                      <li>• #4 interval (B natural) on 4th string, 2nd fret</li>
                      <li>• Creates tritone relationship with root</li>
                      <li>• Bright, floating character</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
                  <h4 className="font-semibold text-violet-800 mb-2">C Lydian - 8th Position</h4>
                  <p className="text-sm text-violet-700 mb-3">Higher register pattern:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 8/6 10/6 12/6 8/5 10/5 | :q 7/4 9/4 7/3 9/3 7/2 | :q 8/2
                    `}
                    className="scale-75"
                  />
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">G Lydian - 3rd Position</h4>
                  <p className="text-sm text-indigo-700 mb-3">Alternative fingering pattern:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 3/6 5/6 7/6 3/5 5/5 | :q 2/4 4/4 2/3 4/3 2/2 | :q 3/2
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
                  <h4 className="font-semibold text-blue-800 mb-2">Film Scoring & Ambient</h4>
                  <p className="text-sm text-blue-700 mb-2">Creating atmosphere and emotion:</p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• Dreamlike sequences and flashbacks</li>
                    <li>• Sci-fi and fantasy soundtracks</li>
                    <li>• Ambient and new age music</li>
                    <li>• Emotional crescendos and climaxes</li>
                    <li>• Ethereal guitar textures</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Progressive & Fusion</h4>
                  <p className="text-sm text-green-700 mb-2">Advanced harmonic applications:</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• Progressive rock compositions</li>
                    <li>• Jazz fusion improvisation</li>
                    <li>• Complex chord progressions</li>
                    <li>• Modern classical guitar</li>
                    <li>• Experimental and avant-garde</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Harmonic Context</h4>
                  <p className="text-sm text-yellow-700 mb-2">Best chord progressions for lydian:</p>
                  <ul className="text-xs text-yellow-600 space-y-1">
                    <li>• I-II progressions (FMaj7-GMaj7)</li>
                    <li>• IMaj7-#IVMaj7 movements</li>
                    <li>• Modal vamps and sustained chords</li>
                    <li>• Lydian dominant applications</li>
                    <li>• Quartal harmony and open voicings</li>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Film & TV Examples</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"The Simpsons" Theme - Danny Elfman</h4>
                  <p className="text-sm text-gray-600 mb-2">Famous lydian melody line</p>
                  <p className="text-xs text-gray-500">Perfect example of lydian's whimsical character</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"E.T." Theme - John Williams</h4>
                  <p className="text-sm text-gray-600 mb-2">Ethereal flying scenes</p>
                  <p className="text-xs text-gray-500">Lydian creates sense of wonder and flight</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Star Wars" - Binary Sunset</h4>
                  <p className="text-sm text-gray-600 mb-2">John Williams' lydian passages</p>
                  <p className="text-xs text-gray-500">Creates epic, hopeful atmosphere</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Rock & Progressive</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Flying in a Blue Dream" - Joe Satriani</h4>
                  <p className="text-sm text-gray-600 mb-2">Instrumental rock with lydian passages</p>
                  <p className="text-xs text-gray-500">Guitar-driven lydian applications</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Dream Theater - Progressive Sections</h4>
                  <p className="text-sm text-gray-600 mb-2">Complex lydian harmonies</p>
                  <p className="text-xs text-gray-500">Technical metal with modal sophistication</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Pink Floyd - Atmospheric Passages</h4>
                  <p className="text-sm text-gray-600 mb-2">Ambient lydian textures</p>
                  <p className="text-xs text-gray-500">Creates psychedelic, floating sounds</p>
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
                <li>• Compare to major scale</li>
                <li>• Focus on the #4 interval</li>
                <li>• Identify the dreamy character</li>
                <li>• Practice lydian vs ionian</li>
                <li>• Listen to film score examples</li>
              </ul>
            </div>
            <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
              <h3 className="text-lg font-semibold text-violet-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-violet-700 text-sm space-y-2">
                <li>• Master all positions</li>
                <li>• Emphasize the #4 degree</li>
                <li>• Practice smooth legato playing</li>
                <li>• Work on sustained tones</li>
                <li>• Connect to lydian chords</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-indigo-700 text-sm space-y-2">
                <li>• Create atmospheric pieces</li>
                <li>• Practice over Maj7#11 chords</li>
                <li>• Study film score techniques</li>
                <li>• Experiment with ambient textures</li>
                <li>• Practice modal chord progressions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises with VexTab */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Exercise 1: F Lydian Scale</h3>
              <p className="text-purple-700 text-sm mb-3">Practice the F lydian scale - feel the #4 interval:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :8 1/6 3/6 5/6 1/5 3/5 0/4 2/4 0/3 | :8 0/3 2/4 0/4 3/5 1/5 5/6 3/6 1/6
                `}
                className="scale-75"
              />
            </div>
            
            <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
              <h3 className="text-lg font-semibold text-violet-800 mb-3">Exercise 2: Lydian Sequences</h3>
              <p className="text-violet-700 text-sm mb-3">Practice lydian in thirds to hear the floating character:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :8 1/6 5/6 3/6 1/5 5/6 3/5 1/5 0/4 | :8 3/5 2/4 0/4 0/3 2/4 2/3 0/3 0/2
                `}
                className="scale-75"
              />
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Exercise 3: Dreamy Melody</h3>
              <p className="text-indigo-700 text-sm mb-3">Simple ethereal phrase emphasizing #4:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 1/6 5/6 :h 2/4 :q 0/3 | :q 2/3 0/2 :h 1/2 | :q 2/4 0/3 :h 3/5 | :q 1/6 :w 1/6
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
                  <h4 className="font-semibold text-gray-800">Major Scale vs Lydian</h4>
                  <p className="text-sm text-gray-600">Lydian has #4 creating brighter, more ethereal sound</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Major Scale Relationship</h4>
                  <p className="text-sm text-gray-600">Fourth mode of major scale</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Modal Character</h4>
                  <p className="text-sm text-gray-600">Bright major sound with floating quality</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Related Modes</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Ionian (Major)</h4>
                  <p className="text-sm text-gray-600">More grounded major sound with natural 4th</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Mixolydian</h4>
                  <p className="text-sm text-gray-600">Dominant major mode with ♭7</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Lydian Dominant</h4>
                  <p className="text-sm text-gray-600">Lydian with ♭7, jazz fusion favorite</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Different Keys */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Lydian Mode in Different Keys</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">C Lydian - 8th Position</h3>
              <p className="text-sm text-green-700 mb-3">Higher register pattern:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 8/6 10/6 12/6 8/5 10/5 | :q 7/4 9/4 7/3 9/3 7/2 | :q 8/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-green-600 mt-2">Notes: C-D-E-F#-G-A-B-C</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">G Lydian - 3rd Position</h3>
              <p className="text-sm text-blue-700 mb-3">Common rock key:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 3/6 5/6 7/6 3/5 5/5 | :q 2/4 4/4 2/3 4/3 2/2 | :q 3/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-blue-600 mt-2">Notes: G-A-B-C#-D-E-F#-G</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">D Lydian - 10th Position</h3>
              <p className="text-sm text-purple-700 mb-3">Alternative fingering:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 10/6 12/6 14/6 10/5 12/5 | :q 9/4 11/4 9/3 11/3 9/2 | :q 10/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-purple-600 mt-2">Notes: D-E-F#-G#-A-B-C#-D</p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">A Lydian - 5th Position</h3>
              <p className="text-sm text-orange-700 mb-3">Alternative pattern:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 5/6 7/6 9/6 5/5 7/5 | :q 4/4 6/4 4/3 6/3 4/2 | :q 5/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-orange-600 mt-2">Notes: A-B-C#-D#-E-F#-G#-A</p>
            </div>
          </div>
        </div>

        {/* Related Scales */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Scales & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Ionian (Major)</h3>
              <p className="text-sm text-gray-700 mb-2">Same as lydian but with natural 4th</p>
              <p className="text-xs text-gray-600">More grounded, less floating sound</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Lydian Dominant</h3>
              <p className="text-sm text-gray-700 mb-2">Lydian with ♭7 added</p>
              <p className="text-xs text-gray-600">Jazz fusion and modern harmony</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Acoustic Scale</h3>
              <p className="text-sm text-gray-700 mb-2">Lydian with ♭7 and ♭6</p>
              <p className="text-xs text-gray-600">More complex harmonic structure</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Modal Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the dreamy lydian mode, explore other modes to expand your harmonic palette and create different musical atmospheres.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/modes/ionian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                  <span className="text-2xl">☀️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ionian (Major)</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Compare with the grounded major scale and its stable character.
                </p>
                <span className="text-yellow-600 font-medium text-sm group-hover:text-yellow-700">
                  Stable foundation →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/modes/mixolydian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">🎸</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mixolydian Mode</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the dominant mode with its bluesy ♭7 character.
                </p>
                <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                  Bluesy dominant →
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
