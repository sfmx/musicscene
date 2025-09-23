"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import Link from 'next/link';

export default function DorianModePage() {
  return (
    <Layout>
      <Header
        title="Dorian Mode"
        subtitle="The sophisticated minor mode - offering a modern, jazzy flavor that bridges the gap between minor and major tonalities."
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
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Dorian Mode</h1>
          <p className="text-xl opacity-90 mb-4">
            The dorian mode is the second mode of the major scale, creating a sophisticated minor sound 
            with a raised 6th that gives it a modern, jazzy character perfect for rock, jazz, and folk music.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">W-H-W-W-W-H-W</span>
            <span className="bg-white/20 px-3 py-1 rounded">7 Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">Minor with ♮6</span>
            <span className="bg-white/20 px-3 py-1 rounded">Modern & Jazzy</span>
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
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Formula:</strong> 1-2-♭3-4-5-6-♭7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Intervals:</strong> W-H-W-W-W-H-W</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Key difference:</strong> Natural 6th (vs ♭6 in natural minor)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Character:</strong> Sophisticated, modern minor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Function:</strong> Jazz, rock, folk, modal harmony</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">D Dorian Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Notes:</strong> D-E-F-G-A-B-C-D</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Parent scale:</strong> C major (starting on D)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Signature sound:</strong> Minor with bright 6th (B natural)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Perfect for:</strong> Modal jazz, Celtic music, progressive rock</span>
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
                <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                  <h4 className="font-semibold text-teal-800 mb-2">D Dorian - Open Position</h4>
                  <p className="text-sm text-teal-700 mb-3">Natural fingering in open position:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 0/4 2/4 3/4 0/3 2/3 | :q 0/2 1/2 3/2 0/1 2/1 | :q 3/1
                    `}
                    className="scale-75"
                  />
                  <div className="mt-3">
                    <p className="text-xs text-teal-600 font-medium mb-1">Pattern Notes:</p>
                    <ul className="text-xs text-teal-600 space-y-1">
                      <li>• Root on 4th string, open (D)</li>
                      <li>• Natural 6th on 2nd string (B natural)</li>
                      <li>• Easy transition from D minor</li>
                      <li>• Perfect for folk and Celtic styles</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                  <h4 className="font-semibold text-cyan-800 mb-2">A Dorian - 5th Position</h4>
                  <p className="text-sm text-cyan-700 mb-3">Popular rock position:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 5/6 7/6 8/6 5/5 7/5 | :q 5/4 7/4 5/3 7/3 5/2 | :q 7/2 8/2
                    `}
                    className="scale-75"
                  />
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-2">G Dorian - 3rd Position</h4>
                  <p className="text-sm text-slate-700 mb-3">Jazz-friendly position:</p>
                  <AlphaTexRenderer 
                    alphaTex={`
                      options space=20 font-size=14
                      tabstave alphaTex=true time=4/4
                      notes :q 3/6 5/6 6/6 3/5 5/5 | :q 3/4 5/4 3/3 5/3 3/2 | :q 5/2 6/2
                    `}
                    className="scale-75"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Musical Applications</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Jazz Applications</h4>
                  <p className="text-sm text-green-700 mb-2">Essential jazz guitar techniques:</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• Use over minor 7th chords</li>
                    <li>• Perfect for ii-V-I progressions</li>
                    <li>• Emphasize the natural 6th</li>
                    <li>• Great for chord melody playing</li>
                    <li>• Works over dominant 7th chords</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Rock & Folk</h4>
                  <p className="text-sm text-blue-700 mb-2">Modern and traditional applications:</p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• Celtic and Irish traditional music</li>
                    <li>• Progressive rock solos</li>
                    <li>• Folk fingerpicking patterns</li>
                    <li>• Alternative rock progressions</li>
                    <li>• Fusion and modern jazz rock</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Harmonic Context</h4>
                  <p className="text-sm text-purple-700 mb-2">Best chord progressions for dorian:</p>
                  <ul className="text-xs text-purple-600 space-y-1">
                    <li>• i-IV progressions (Dm-G)</li>
                    <li>• i-VII-IV-i (Am-G-F-Am)</li>
                    <li>• Modal vamps and ostinatos</li>
                    <li>• Minor 7th to major 7th movements</li>
                    <li>• Suspended chord resolutions</li>
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
                  <h4 className="font-semibold text-gray-800">"So What" - Miles Davis</h4>
                  <p className="text-sm text-gray-600 mb-2">Iconic jazz standard built on D dorian</p>
                  <p className="text-xs text-gray-500">Perfect example of modal jazz composition</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Scarborough Fair" - Traditional</h4>
                  <p className="text-sm text-gray-600 mb-2">Celtic folk song in dorian mode</p>
                  <p className="text-xs text-gray-500">Shows dorian's folk music heritage</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Another Brick in the Wall" - Pink Floyd</h4>
                  <p className="text-sm text-gray-600 mb-2">Rock classic using dorian harmonies</p>
                  <p className="text-xs text-gray-500">Modern rock application of modal harmony</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Applications</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Jazz Fusion</h4>
                  <p className="text-sm text-gray-600 mb-2">Chick Corea, Weather Report</p>
                  <p className="text-xs text-gray-500">Sophisticated harmonic movement</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Progressive Rock</h4>
                  <p className="text-sm text-gray-600 mb-2">Dream Theater, Tool</p>
                  <p className="text-xs text-gray-500">Complex modal progressions</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Celtic Music</h4>
                  <p className="text-sm text-gray-600 mb-2">Traditional Irish and Scottish</p>
                  <p className="text-xs text-gray-500">Natural modal character</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">👂 Ear Training</h3>
              <ul className="text-teal-700 text-sm space-y-2">
                <li>• Compare to natural minor</li>
                <li>• Focus on the natural 6th</li>
                <li>• Sing dorian scales</li>
                <li>• Identify in famous songs</li>
                <li>• Practice interval recognition</li>
              </ul>
            </div>
            <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
              <h3 className="text-lg font-semibold text-cyan-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-cyan-700 text-sm space-y-2">
                <li>• Learn all positions</li>
                <li>• Practice modal sequences</li>
                <li>• Work on smooth transitions</li>
                <li>• Connect to chord shapes</li>
                <li>• Practice in different keys</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Improvise over Dm-G vamps</li>
                <li>• Create modal progressions</li>
                <li>• Study jazz standards</li>
                <li>• Learn Celtic melodies</li>
                <li>• Practice with backing tracks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises with VexTab */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">Exercise 1: D Dorian Scale</h3>
              <p className="text-teal-700 text-sm mb-3">Practice the D dorian scale ascending and descending:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :8 0/4 2/4 3/4 0/3 2/3 0/2 1/2 3/2 | :8 3/2 1/2 0/2 2/3 0/3 3/4 2/4 0/4
                `}
                className="scale-75"
              />
            </div>
            
            <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
              <h3 className="text-lg font-semibold text-cyan-800 mb-3">Exercise 2: Modal Sequences</h3>
              <p className="text-cyan-700 text-sm mb-3">Practice dorian in thirds to hear the modal character:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :8 0/4 3/4 2/4 0/3 3/4 2/3 0/3 1/2 | :8 2/3 3/2 0/2 0/1 1/2 2/1 3/2 3/1
                `}
                className="scale-75"
              />
            </div>
            
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Exercise 3: Jazz Application</h3>
              <p className="text-slate-700 text-sm mb-3">Simple dorian phrase over Dm7:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 0/4 3/4 :h 2/3 :q 0/2 | :q 1/2 3/2 :h 0/1 | :q 3/2 0/2 :h 2/3 | :q 3/4 0/4 :w 0/4
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
                  <h4 className="font-semibold text-gray-800">Natural Minor vs Dorian</h4>
                  <p className="text-sm text-gray-600">Dorian has a natural 6th instead of flat 6th</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Major Scale Relationship</h4>
                  <p className="text-sm text-gray-600">Second mode of major scale</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Modal Character</h4>
                  <p className="text-sm text-gray-600">Bright minor sound, sophisticated harmony</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Related Modes</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Aeolian (Natural Minor)</h4>
                  <p className="text-sm text-gray-600">Darker counterpart with ♭6</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Mixolydian</h4>
                  <p className="text-sm text-gray-600">Dominant mode, major with ♭7</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Phrygian</h4>
                  <p className="text-sm text-gray-600">Spanish-flavored minor mode</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Different Keys */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Dorian Mode in Different Keys</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">E Dorian - Open Position</h3>
              <p className="text-sm text-green-700 mb-3">Natural guitar key:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 0/6 2/6 3/6 0/5 2/5 | :q 0/4 2/4 0/3 2/3 4/3 | :q 0/2 2/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-green-600 mt-2">Notes: E-F#-G-A-B-C#-D-E</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">A Dorian - 5th Position</h3>
              <p className="text-sm text-blue-700 mb-3">Popular rock key:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 5/6 7/6 8/6 5/5 7/5 | :q 5/4 7/4 5/3 7/3 9/3 | :q 5/2 7/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-blue-600 mt-2">Notes: A-B-C-D-E-F#-G-A</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">B Dorian - 7th Position</h3>
              <p className="text-sm text-purple-700 mb-3">Jazz-friendly key:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 7/6 9/6 10/6 7/5 9/5 | :q 7/4 9/4 7/3 9/3 11/3 | :q 7/2 9/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-purple-600 mt-2">Notes: B-C#-D-E-F#-G#-A-B</p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">F Dorian - 1st Position</h3>
              <p className="text-sm text-orange-700 mb-3">Alternative fingering:</p>
              <AlphaTexRenderer 
                alphaTex={`
                  options space=20 font-size=14
                  tabstave alphaTex=true time=4/4
                  notes :q 1/6 3/6 4/6 1/5 3/5 | :q 1/4 3/4 1/3 3/3 5/3 | :q 1/2 3/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-orange-600 mt-2">Notes: F-G-A♭-B♭-C-D-E♭-F</p>
            </div>
          </div>
        </div>

        {/* Related Scales */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Scales & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Natural Minor</h3>
              <p className="text-sm text-gray-700 mb-2">Same as dorian but with ♭6</p>
              <p className="text-xs text-gray-600">Darker, more traditional minor sound</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Major Scale</h3>
              <p className="text-sm text-gray-700 mb-2">Dorian is the 2nd mode of major</p>
              <p className="text-xs text-gray-600">Same notes, different tonal center</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Mixolydian</h3>
              <p className="text-sm text-gray-700 mb-2">Major dorian counterpart</p>
              <p className="text-xs text-gray-600">Dominant flavor, works over 7th chords</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Modal Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand dorian mode, explore other modes to expand your musical palette and discover new sounds.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/modes/aeolian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Aeolian Mode</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Compare with the traditional natural minor scale.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Natural minor →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/modes/mixolydian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mixolydian Mode</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the dominant major mode with ♭7.
                </p>
                <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                  Dominant mode →
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
