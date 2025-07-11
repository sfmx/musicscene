"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

export default function SweepPickingPage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Sweep Picking Technique"
        subtitle="Master the advanced arpeggio technique that creates fluid, cascading runs through coordinated picking and fretting motions."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-xl p-8 mb-12 border border-violet-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Sweep Picking Mastery</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Sweep picking is an advanced guitar technique that creates flowing arpeggio passages through 
            coordinated pick strokes across multiple strings. By "sweeping" the pick in one continuous 
            motion while precisely timing the fretting hand, guitarists can achieve lightning-fast arpeggios 
            with incredible fluidity and a distinctive cascading sound that's essential for neo-classical, 
            metal, and fusion styles.
          </p>
        </div>

        {/* Technique Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Fundamental Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Pick Motion</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-1">•</span>
                  Use smooth, continuous picking motion
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-1">•</span>
                  Maintain consistent pick angle and depth
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-1">•</span>
                  Keep pick strokes flowing in one direction
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-1">•</span>
                  Use economy of motion - no wasted movement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-1">•</span>
                  Practice both ascending and descending sweeps
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Fretting Hand Coordination</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  Time finger placement precisely with pick
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  Release previous notes to avoid muddiness
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  Use rolling finger motions for bar chords
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  Practice string muting between notes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  Maintain light but secure finger pressure
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Foundation Exercises Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Foundation Exercises
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 1: Two-String Sweeps */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Two-String Sweep Exercises</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Foundation</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Start with simple two-string sweeps to develop the basic motion and coordination. 
                  Focus on smooth pick movement and precise timing between hands.
                </p>
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-green-800 text-sm"><strong>Motion:</strong> Down-down for ascending, up-up for descending</p>
                </div>
              </div>
              
              <MusicScore
                title="Two-String Sweep Exercise"
                staves={[{
                  id: 'two-string-sweeps',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 5/5 7/4 | 5/5 7/4 | 5/5 7/4 | 5/5 7/4 |
notes :8 7/4 5/5 | 7/4 5/5 | 7/4 5/5 | 7/4 5/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'Simple Two-String Sweeps: 5th and 4th Strings'
                }]}
              />
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-900 mb-2">Practice Notes</h4>
                <p className="text-green-800 text-sm leading-relaxed mb-3">
                  Use continuous downstrokes for ascending patterns and continuous upstrokes for descending. 
                  The pick should flow smoothly across strings without stopping. Start very slowly.
                </p>
                <div className="flex items-center justify-center bg-green-100 rounded-md py-2 px-4">
                  <span className="text-green-700 font-medium text-sm">🎵 Suggested starting tempo: 40 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 2: Three-String Arpeggios */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Three-String Arpeggio Sweeps</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Essential</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Extend to three-string arpeggios using basic triad shapes. This is where sweep picking 
                  really starts to sound musical and distinctive.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-blue-800 text-sm"><strong>Pattern:</strong> A minor triad arpeggio across three strings</p>
                </div>
              </div>
              
              <MusicScore
                title="Three-String Arpeggio Exercise"
                staves={[{
                  id: 'three-string-arpeggios',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=Am
notes :8t 5/4 7/3 5/2 | 7/3 5/4 ## | 5/4 7/3 5/2 | 7/3 5/4 ## |
notes :8t 5/2 7/3 5/4 | 7/3 5/2 ## | 5/2 7/3 5/4 | 7/3 5/2 ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'A Minor Triad: Three-String Sweep Arpeggios'
                }]}
              />
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Practice Notes</h4>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  Focus on clean note separation - each note should ring clearly without bleeding into 
                  the next. Practice the fretting hand motion separately before adding the pick sweep.
                </p>
                <div className="flex items-center justify-center bg-blue-100 rounded-md py-2 px-4">
                  <span className="text-blue-700 font-medium text-sm">🎵 Suggested starting tempo: 50 BPM (triplets)</span>
                </div>
              </div>
            </div>

            {/* Exercise 3: Basic Five-String Sweeps */}
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Five-String Arpeggio Sweeps</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Intermediate</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Master the classic five-string sweep pattern that forms the foundation of most 
                  sweep picking applications. This creates the full, flowing arpeggio sound.
                </p>
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-purple-800 text-sm"><strong>Pattern:</strong> A minor arpeggio across five strings (6th to 2nd)</p>
                </div>
              </div>
              
              <MusicScore
                title="Five-String Arpeggio Exercise"
                staves={[{
                  id: 'five-string-arpeggios',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=Am
notes :16 5/6 7/5 5/4 7/3 5/2 | 7/3 5/4 7/5 5/6 ## ## ## ## |
notes :16 5/2 7/3 5/4 7/5 5/6 | 7/5 5/4 7/3 5/2 ## ## ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'A Minor Five-String Sweep: Ascending and Descending'
                }]}
              />
              
              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Practice Notes</h4>
                <p className="text-purple-800 text-sm leading-relaxed mb-3">
                  This is the classic sweep picking pattern. Practice the ascending sweep with continuous 
                  downstrokes, then the descending with continuous upstrokes. Keep the motion fluid.
                </p>
                <div className="flex items-center justify-center bg-purple-100 rounded-md py-2 px-4">
                  <span className="text-purple-700 font-medium text-sm">🎵 Suggested starting tempo: 60 BPM (16th notes)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Techniques Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Advanced Sweep Techniques
          </h2>
          <div className="space-y-8">

            {/* Exercise 4: Six-String Sweeps */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Six-String Full Sweeps</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Extend sweep picking across all six strings for maximum dramatic effect. This technique 
                  is commonly used in neo-classical and metal genres for impressive arpeggio runs.
                </p>
                <div className="bg-amber-50 rounded-lg p-3 mb-4">
                  <p className="text-amber-800 text-sm"><strong>Challenge:</strong> Maintain fluidity across all six strings</p>
                </div>
              </div>
              
              <MusicScore
                title="Six-String Sweep Exercise"
                staves={[{
                  id: 'six-string-sweeps',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=Am
notes :16 5/6 7/5 5/4 7/3 5/2 8/1 | 5/2 7/3 5/4 7/5 5/6 ## ## ## |
notes :16 8/1 5/2 7/3 5/4 7/5 5/6 | 7/5 5/4 7/3 5/2 8/1 ## ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'A Minor Six-String Sweep: Full Range Arpeggio'
                }]}
              />
              
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Practice Notes</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  This is the most challenging sweep pattern. Break it down into smaller sections first, 
                  then connect them. Pay special attention to the turnaround on the high E string.
                </p>
                <div className="flex items-center justify-center bg-amber-100 rounded-md py-2 px-4">
                  <span className="text-amber-700 font-medium text-sm">🎵 Suggested starting tempo: 40 BPM (16th notes)</span>
                </div>
              </div>
            </div>

            {/* Exercise 5: Swept Arpeggios with Tapping */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Sweep + Tap Combinations</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Virtuosic</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Combine sweep picking with tapping techniques to create extended arpeggios that span 
                  multiple octaves. This advanced technique creates spectacular musical effects.
                </p>
                <div className="bg-red-50 rounded-lg p-3 mb-4">
                  <p className="text-red-800 text-sm"><strong>Technique:</strong> Sweep followed by two-handed tapping extension</p>
                </div>
              </div>
              
              <MusicScore
                title="Sweep + Tap Exercise"
                staves={[{
                  id: 'sweep-tap-combo',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=Am
notes :16 5/6 7/5 5/4 7/3 5/2 8/1 t12/1 t15/1 | :16 8/1 5/2 7/3 5/4 7/5 5/6 ## ## |
notes :16 5/6 7/5 5/4 7/3 5/2 8/1 t15/1 t12/1 | :16 8/1 5/2 7/3 5/4 7/5 5/6 ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'Swept Arpeggio Extended with Tapping'
                }]}
              />
              
              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Practice Notes</h4>
                <p className="text-red-800 text-sm leading-relaxed mb-3">
                  Master the basic sweep first, then add the tapping extension. The transition between 
                  swept notes and tapped notes should be seamless and musical.
                </p>
                <div className="flex items-center justify-center bg-red-100 rounded-md py-2 px-4">
                  <span className="text-red-700 font-medium text-sm">🎵 Focus on smooth transitions</span>
                </div>
              </div>
            </div>

            {/* Exercise 6: Different Chord Types */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Various Chord Types</h3>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Musical</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Apply sweep picking to different chord qualities - major, minor, diminished, and augmented. 
                  This expands your harmonic vocabulary and musical applications.
                </p>
                <div className="bg-indigo-50 rounded-lg p-3 mb-4">
                  <p className="text-indigo-800 text-sm"><strong>Progression:</strong> Am - C - F - G sweep arpeggios</p>
                </div>
              </div>
              
              <MusicScore
                title="Different Chord Types Exercise"
                staves={[{
                  id: 'chord-type-sweeps',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8t 5/6 7/5 5/4 | 8/5 5/4 7/3 | 8/4 5/3 10/4 | 8/5 10/4 12/3 |
notes :8t 10/4 8/5 10/4 | 8/3 10/4 7/3 | 8/4 5/3 7/4 | 5/5 7/4 5/6`,
                  width: 550,
                  scale: 1.0,
                  title: 'Chord Progression: Am - C - F - G Swept Arpeggios'
                }]}
              />
              
              <div className="mt-6 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">Practice Notes</h4>
                <p className="text-indigo-800 text-sm leading-relaxed mb-3">
                  Practice each chord type separately first, then work on smooth transitions between 
                  different arpeggio shapes. This creates musical chord progressions with sweep picking.
                </p>
                <div className="flex items-center justify-center bg-indigo-100 rounded-md py-2 px-4">
                  <span className="text-indigo-700 font-medium text-sm">🎵 Suggested starting tempo: 70 BPM (triplets)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Applications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Advanced Applications
          </h2>
          <div className="space-y-8">

            {/* Exercise 7: Diminished Sweeps */}
            <div className="bg-white rounded-xl border border-cyan-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  7
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Diminished Arpeggio Sweeps</h3>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full">Neo-Classical</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Diminished arpeggios are staples of neo-classical guitar and create dramatic, 
                  exotic-sounding passages. Their symmetrical nature makes them perfect for sweep picking.
                </p>
                <div className="bg-cyan-50 rounded-lg p-3 mb-4">
                  <p className="text-cyan-800 text-sm"><strong>Theory:</strong> Diminished 7th arpeggio with three-fret intervals</p>
                </div>
              </div>
              
              <MusicScore
                title="Diminished Arpeggio Sweeps"
                staves={[{
                  id: 'diminished-sweeps',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :16 6/6 9/5 6/4 9/3 6/2 9/1 | 6/2 9/3 6/4 9/5 6/6 ## ## ## |
notes :16 9/1 6/2 9/3 6/4 9/5 6/6 | 9/5 6/4 9/3 6/2 9/1 ## ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'F# Diminished 7th Arpeggio Sweeps'
                }]}
              />
              
              <div className="mt-6 bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                <h4 className="font-medium text-cyan-900 mb-2">Practice Notes</h4>
                <p className="text-cyan-800 text-sm leading-relaxed mb-3">
                  Diminished arpeggios repeat every three frets, so you can play this same pattern 
                  starting from frets 6, 9, 12, etc. Great for creating tension in solos.
                </p>
                <div className="flex items-center justify-center bg-cyan-100 rounded-md py-2 px-4">
                  <span className="text-cyan-700 font-medium text-sm">🎵 Suggested starting tempo: 55 BPM (16th notes)</span>
                </div>
              </div>
            </div>

            {/* Exercise 8: Speed Development */}
            <div className="bg-white rounded-xl border border-orange-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  8
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Speed Development Drill</h3>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">Performance</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Progressive speed building exercise combining multiple sweep patterns for developing 
                  the lightning-fast arpeggios heard in professional neo-classical and metal playing.
                </p>
                <div className="bg-orange-50 rounded-lg p-3 mb-4">
                  <p className="text-orange-800 text-sm"><strong>Goal:</strong> Continuous sweep patterns at high speed with perfect clarity</p>
                </div>
              </div>
              
              <MusicScore
                title="Speed Development Exercise"
                staves={[{
                  id: 'speed-development',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=Am
notes :16 5/6 7/5 5/4 7/3 5/2 8/1 5/2 7/3 | 12/4 14/3 12/2 15/1 12/2 14/3 12/4 14/5 |
notes :16 15/1 12/2 14/3 12/4 14/5 12/6 14/5 12/4 | 14/3 12/2 15/1 ## ## ## ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'Connected Sweep Patterns for Speed Building'
                }]}
              />
              
              <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h4 className="font-medium text-orange-900 mb-2">Practice Notes</h4>
                <p className="text-orange-800 text-sm leading-relaxed mb-3">
                  Use progressive tempo training: start at 60 BPM, increase by 5 BPM every successful 
                  repetition. Focus on maintaining perfect note clarity at all speeds.
                </p>
                <div className="flex items-center justify-center bg-orange-100 rounded-md py-2 px-4">
                  <span className="text-orange-700 font-medium text-sm">🎵 Progressive tempo: 60-140+ BPM</span>
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
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200">
              <h3 className="text-lg font-semibold text-violet-900 mb-4">Technical Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-violet-500 mt-1">•</span>
                  <span className="text-violet-800">Always start with two-string sweeps before advancing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-500 mt-1">•</span>
                  <span className="text-violet-800">Practice fretting hand motion separately from picking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-500 mt-1">•</span>
                  <span className="text-violet-800">Focus on note clarity before attempting speed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-500 mt-1">•</span>
                  <span className="text-violet-800">Record yourself to identify timing and coordination issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-500 mt-1">•</span>
                  <span className="text-violet-800">Practice with different pick materials and techniques</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Common Challenges</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Muddy Sound</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Usually caused by poor muting technique. Practice lifting previous fingers 
                    to stop unwanted ringing between notes.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Uneven Timing</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Focus on coordinating both hands precisely. Practice with a metronome and 
                    isolate difficult transitions.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Pick Getting Stuck</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Use lighter pick attack and ensure smooth motion. Practice the picking 
                    motion on muted strings first.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Where to Use Sweep Picking</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Neo-Classical Metal</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Baroque-inspired passages</li>
                  <li>• Classical arpeggio sequences</li>
                  <li>• Dramatic solo sections</li>
                  <li>• Yngwie Malmsteen style</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Progressive Metal</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Complex harmonic progressions</li>
                  <li>• Extended range applications</li>
                  <li>• Fusion with tapping techniques</li>
                  <li>• Modern virtuoso playing</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Jazz Fusion</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Fast chord progressions</li>
                  <li>• Extended harmony arpeggios</li>
                  <li>• Fluid melodic lines</li>
                  <li>• Contemporary techniques</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-4 border border-violet-200">
              <h4 className="font-medium text-violet-900 mb-2">Performance Context</h4>
              <p className="text-violet-800 text-sm leading-relaxed">
                Sweep picking is most effective when used strategically for dramatic effect rather than constantly. 
                It works best for arpeggio-based passages, creating contrast with other techniques like alternate 
                picking or legato. The key is musical application - use sweeps to serve the song, not just to 
                display technical prowess. Practice integrating sweep passages into actual musical contexts.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
