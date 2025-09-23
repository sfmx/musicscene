"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

export default function TappingPage() {
  return (
    <Layout>
      <Header
        title="Tapping Technique"
        subtitle="Master the advanced two-handed technique that extends your fretboard range and creates lightning-fast legato passages with unique tonal characteristics."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 mb-12 border border-blue-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tapping Mastery</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Tapping is an advanced guitar technique that uses both hands on the fretboard to create 
            rapid legato passages, extended range arpeggios, and unique musical textures impossible 
            to achieve through conventional picking. By using the right hand to "tap" notes on the 
            fretboard while the left hand continues to fret normally, guitarists can play complex 
            polyphonic passages, wide interval jumps, and create the signature sound of virtuoso 
            rock, metal, and progressive music.
          </p>
        </div>

        {/* Technique Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Fundamental Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Tapping Hand Technique</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Use index or middle finger for tapping
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Strike strings with firm, quick motion
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Pull off cleanly to sound lower notes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Maintain consistent finger angle and pressure
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Practice muting unused strings
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Fretting Hand Coordination</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  Coordinate hammer-ons and pull-offs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  Maintain finger independence
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  Use proper finger placement and pressure
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  Practice smooth position changes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  Develop two-hand independence
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Basic Tapping Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Basic Tapping Techniques
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 1: Simple One-Handed Tapping */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Basic One-Handed Tapping</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Foundation</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Start with simple three-note patterns using one tapped note and two fretted notes. 
                  This establishes the basic tap-pull-hammer motion that forms the foundation of all tapping.
                </p>
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-green-800 text-sm"><strong>Pattern:</strong> Tap high note → Pull-off → Hammer-on</p>
                </div>
              </div>
              
              <MusicScore
                title="Basic One-Handed Tapping"
                staves={[{
                  id: 'basic-tapping',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 t12/1 5/1 8/1 t12/1 5/1 8/1 t12/1 5/1 |
notes :8 t15/2 7/2 10/2 t15/2 7/2 10/2 t15/2 7/2`,
                  width: 550,
                  scale: 1.0,
                  title: 'Three-Note Tapping Pattern: 1st and 2nd Strings'
                }]}
              />
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-900 mb-2">Practice Notes</h4>
                <p className="text-green-800 text-sm leading-relaxed mb-3">
                  Use your right hand index finger to tap the 12th fret firmly, then pull off to sound 
                  the 5th fret note, then hammer on to the 8th fret. Keep the motion fluid and even.
                </p>
                <div className="flex items-center justify-center bg-green-100 rounded-md py-2 px-4">
                  <span className="text-green-700 font-medium text-sm">🎵 Suggested starting tempo: 60 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 2: Ascending Tapping Sequences */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Ascending Tapping Sequences</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Development</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Extend the basic pattern into ascending sequences that cover more range and 
                  create melodic lines that would be impossible with conventional picking techniques.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-blue-800 text-sm"><strong>Focus:</strong> Smooth position changes and consistent tapping pressure</p>
                </div>
              </div>
              
              <MusicScore
                title="Ascending Tapping Sequences"
                staves={[{
                  id: 'ascending-tapping',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8t t12/1 5/1 8/1 t15/1 8/1 12/1 t17/1 12/1 15/1 |
notes :8t t19/1 15/1 17/1 t22/1 17/1 19/1 ## ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'Ascending Three-Note Groups with Position Changes'
                }]}
              />
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Practice Notes</h4>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  Practice each three-note group slowly before linking them together. Focus on 
                  smooth hand position changes and maintaining even volume across all notes.
                </p>
                <div className="flex items-center justify-center bg-blue-100 rounded-md py-2 px-4">
                  <span className="text-blue-700 font-medium text-sm">🎵 Suggested starting tempo: 80 BPM (triplets)</span>
                </div>
              </div>
            </div>

            {/* Exercise 3: Cross-String Tapping */}
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Cross-String Tapping</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Intermediate</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Apply tapping across multiple strings to create wider interval patterns and 
                  more complex melodic lines that span the guitar's range effectively.
                </p>
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-purple-800 text-sm"><strong>Challenge:</strong> Coordinating tapping across different string tensions</p>
                </div>
              </div>
              
              <MusicScore
                title="Cross-String Tapping Exercise"
                staves={[{
                  id: 'cross-string-tapping',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 t12/1 5/1 7/2 t12/2 5/2 7/3 t12/3 5/3 |
notes :8 7/4 t12/4 5/4 7/5 t12/5 5/5 7/6 t12/6`,
                  width: 550,
                  scale: 1.0,
                  title: 'Tapping Pattern Across All Six Strings'
                }]}
              />
              
              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Practice Notes</h4>
                <p className="text-purple-800 text-sm leading-relaxed mb-3">
                  Adjust tapping pressure for different string tensions - lighter strings need less 
                  force. Practice muting adjacent strings to avoid unwanted noise.
                </p>
                <div className="flex items-center justify-center bg-purple-100 rounded-md py-2 px-4">
                  <span className="text-purple-700 font-medium text-sm">🎵 Suggested starting tempo: 70 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Tapping Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Advanced Tapping Techniques
          </h2>
          <div className="space-y-8">

            {/* Exercise 4: Two-Handed Tapping */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Two-Handed Tapping</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Use both hands to tap notes on the fretboard simultaneously, creating polyphonic 
                  textures and rapid note sequences that showcase the full potential of tapping technique.
                </p>
                <div className="bg-amber-50 rounded-lg p-3 mb-4">
                  <p className="text-amber-800 text-sm"><strong>Technique:</strong> Independent tapping with both hands</p>
                </div>
              </div>
              
              <MusicScore
                title="Two-Handed Tapping Exercise"
                staves={[{
                  id: 'two-handed-tapping',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :16 t12/1 t5/2 t15/1 t7/2 t17/1 t9/2 t19/1 t10/2 t12/1 t5/2 t15/1 t7/2 t17/1 t9/2 t19/1 t10/2 |
notes :16 t19/1 t10/2 t17/1 t9/2 t15/1 t7/2 t12/1 t5/2 t19/1 t10/2 t17/1 t9/2 t15/1 t7/2 t12/1 t5/2`,
                  width: 550,
                  scale: 1.0,
                  title: 'Alternating Two-Handed Tapping Pattern'
                }]}
              />
              
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Practice Notes</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  Start with simple alternating patterns between hands. Each hand should work 
                  independently with consistent timing. This creates unique polyphonic textures.
                </p>
                <div className="flex items-center justify-center bg-amber-100 rounded-md py-2 px-4">
                  <span className="text-amber-700 font-medium text-sm">🎵 Suggested starting tempo: 50 BPM (16th notes)</span>
                </div>
              </div>
            </div>

            {/* Exercise 5: Tapped Arpeggios */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Tapped Arpeggios</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Musical</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Apply tapping to arpeggio patterns to create flowing, extended range chord outlines 
                  that cover multiple octaves with smooth legato articulation.
                </p>
                <div className="bg-red-50 rounded-lg p-3 mb-4">
                  <p className="text-red-800 text-sm"><strong>Harmony:</strong> Am - F - C - G arpeggio progression</p>
                </div>
              </div>
              
              <MusicScore
                title="Tapped Arpeggio Exercise"
                staves={[{
                  id: 'tapped-arpeggios',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=Am
notes :8t t12/1 5/2 8/3 t15/1 8/2 10/3 t17/1 10/2 12/3 |
notes :8t t19/1 12/2 15/3 t17/1 10/2 12/3 t15/1 8/2 10/3`,
                  width: 550,
                  scale: 1.0,
                  title: 'Extended Range Arpeggios with Tapping'
                }]}
              />
              
              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Practice Notes</h4>
                <p className="text-red-800 text-sm leading-relaxed mb-3">
                  Each measure outlines a different chord using tapped high notes and fretted bass notes. 
                  This creates beautiful flowing arpeggios with extended range.
                </p>
                <div className="flex items-center justify-center bg-red-100 rounded-md py-2 px-4">
                  <span className="text-red-700 font-medium text-sm">🎵 Suggested starting tempo: 90 BPM (triplets)</span>
                </div>
              </div>
            </div>

            {/* Exercise 6: Tapped Scales */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Tapped Scale Patterns</h3>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Technical</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Incorporate tapping into scale patterns to create rapid legato runs that extend 
                  beyond normal fretboard positions and add unique tonal character to scale passages.
                </p>
                <div className="bg-indigo-50 rounded-lg p-3 mb-4">
                  <p className="text-indigo-800 text-sm"><strong>Scale:</strong> A natural minor with tapped extensions</p>
                </div>
              </div>
              
              <MusicScore
                title="Tapped Scale Exercise"
                staves={[{
                  id: 'tapped-scales',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=Am
notes :16 5/6 7/6 5/5 7/5 5/4 7/4 t12/4 7/4 5/3 7/3 5/2 8/2 t12/2 8/2 5/1 8/1 |
notes :16 t12/1 8/1 5/1 8/2 t12/2 8/2 5/2 7/3 5/3 7/4 t12/4 7/4 5/4 7/5 5/5 7/6`,
                  width: 550,
                  scale: 1.0,
                  title: 'A Natural Minor Scale with Tapped Extensions'
                }]}
              />
              
              <div className="mt-6 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">Practice Notes</h4>
                <p className="text-indigo-800 text-sm leading-relaxed mb-3">
                  The tapped notes extend the normal scale pattern to higher registers. Practice ascending 
                  and descending, maintaining smooth legato throughout the entire passage.
                </p>
                <div className="flex items-center justify-center bg-indigo-100 rounded-md py-2 px-4">
                  <span className="text-indigo-700 font-medium text-sm">🎵 Suggested starting tempo: 60 BPM (16th notes)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtuosic Applications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Virtuosic Applications
          </h2>
          <div className="space-y-8">

            {/* Exercise 7: Tapped Chromatic Runs */}
            <div className="bg-white rounded-xl border border-cyan-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  7
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Chromatic Tapping Runs</h3>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full">Virtuosic</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Create dramatic chromatic passages using tapping to achieve speeds and smoothness 
                  impossible with conventional picking techniques. Essential for showcase passages.
                </p>
                <div className="bg-cyan-50 rounded-lg p-3 mb-4">
                  <p className="text-cyan-800 text-sm"><strong>Challenge:</strong> Maintaining evenness at high speed</p>
                </div>
              </div>
              
              <MusicScore
                title="Chromatic Tapping Runs"
                staves={[{
                  id: 'chromatic-tapping',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :16 t12/1 5/1 6/1 7/1 8/1 t13/1 6/1 7/1 8/1 9/1 t14/1 7/1 8/1 9/1 10/1 t15/1 |
notes :16 t15/1 10/1 9/1 8/1 7/1 t14/1 9/1 8/1 7/1 6/1 t13/1 8/1 7/1 6/1 5/1 t12/1`,
                  width: 550,
                  scale: 1.0,
                  title: 'Ascending and Descending Chromatic Tapping'
                }]}
              />
              
              <div className="mt-6 bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                <h4 className="font-medium text-cyan-900 mb-2">Practice Notes</h4>
                <p className="text-cyan-800 text-sm leading-relaxed mb-3">
                  This creates dramatic tension through chromatic movement. Use progressive tempo 
                  training and focus on maintaining perfect note clarity and evenness.
                </p>
                <div className="flex items-center justify-center bg-cyan-100 rounded-md py-2 px-4">
                  <span className="text-cyan-700 font-medium text-sm">🎵 Progressive tempo: 60-140+ BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 8: Multi-String Tapping Combinations */}
            <div className="bg-white rounded-xl border border-orange-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  8
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Multi-String Combinations</h3>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">Master Level</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Combine multiple advanced tapping techniques across different strings to create 
                  complex polyphonic passages that showcase complete mastery of the technique.
                </p>
                <div className="bg-orange-50 rounded-lg p-3 mb-4">
                  <p className="text-orange-800 text-sm"><strong>Goal:</strong> Independence between multiple tapping voices</p>
                </div>
              </div>
              
              <MusicScore
                title="Multi-String Tapping Combinations"
                staves={[{
                  id: 'multi-string-combinations',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 t12/1 t7/2 5/1 7/2 t15/1 t10/2 8/1 10/2 |
notes :8 t17/1 t12/2 12/1 12/2 t19/1 t14/2 15/1 14/2`,
                  width: 550,
                  scale: 1.0,
                  title: 'Independent Two-String Tapping Voices'
                }]}
              />
              
              <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h4 className="font-medium text-orange-900 mb-2">Practice Notes</h4>
                <p className="text-orange-800 text-sm leading-relaxed mb-3">
                  Practice each voice separately first, then combine them. This represents the pinnacle 
                  of tapping technique - creating independent melodic lines simultaneously.
                </p>
                <div className="flex items-center justify-center bg-orange-100 rounded-md py-2 px-4">
                  <span className="text-orange-700 font-medium text-sm">🎵 Ultimate tapping challenge</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Strategy Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Practice Strategy & Development
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Technical Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-blue-800">Start with basic three-note patterns before advancing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-blue-800">Focus on consistent tapping pressure and timing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-blue-800">Practice muting techniques to avoid unwanted noise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-blue-800">Use a metronome for consistent tempo development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-blue-800">Record yourself to identify timing inconsistencies</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Common Challenges</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-purple-800 mb-2">Inconsistent Volume</h4>
                  <p className="text-purple-700 text-sm leading-relaxed">
                    Practice controlling tapping force to match fretted note volumes. 
                    Tapped notes often sound louder initially.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-purple-800 mb-2">String Noise</h4>
                  <p className="text-purple-700 text-sm leading-relaxed">
                    Use proper muting techniques with both hands. Practice 
                    touching only the intended strings cleanly.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-purple-800 mb-2">Hand Independence</h4>
                  <p className="text-purple-700 text-sm leading-relaxed">
                    Develop each hand separately before combining. Practice 
                    simple patterns to build coordination gradually.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Applications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Musical Applications & Styles
          </h2>
          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Where to Use Tapping</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Rock & Metal</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Showcase solo sections</li>
                  <li>• High-speed technical passages</li>
                  <li>• Extended range arpeggios</li>
                  <li>• Virtuoso demonstrations</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Progressive & Fusion</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Complex polyphonic textures</li>
                  <li>• Extended harmonic passages</li>
                  <li>• Two-handed independence</li>
                  <li>• Modern instrumental music</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Contemporary Styles</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Ambient textural playing</li>
                  <li>• Extended technique integration</li>
                  <li>• Experimental soundscapes</li>
                  <li>• Modern composition</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Performance Context</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Tapping is most effective when used strategically for specific musical effects rather than 
                as constant technique. It excels at creating rapid legato passages, extended range arpeggios, 
                and unique textural effects impossible with conventional picking. The key is musical integration - 
                use tapping to serve the composition, creating memorable moments that enhance the overall musical 
                experience. Practice incorporating tapped passages smoothly into conventional playing for maximum 
                impact and musical flow.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
