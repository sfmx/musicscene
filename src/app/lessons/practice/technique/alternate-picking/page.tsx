"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

export default function AlternatePickingPage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Alternate Picking Technique"
        subtitle="Master the fundamental picking technique that forms the foundation of lead guitar playing and speed development."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 mb-12 border border-blue-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Alternate Picking Mastery</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Alternate picking is the cornerstone technique for achieving speed, accuracy, and fluidity in guitar playing. 
            By strictly alternating between downstrokes and upstrokes, you'll develop the muscle memory and coordination 
            needed for advanced lead guitar techniques, lightning-fast scales, and complex melodic passages.
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
                  <span className="text-blue-500 mt-1">•</span>
                  Use primarily wrist motion, not arm
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Keep consistent pick angle (45-90 degrees)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Minimize pick depth into strings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Maintain relaxed grip pressure
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Timing & Rhythm</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  Always practice with a metronome
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  Start slow and gradually increase tempo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  Focus on evenness before speed
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  Practice both legato and staccato articulations
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Basic Exercises Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Foundation Exercises
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 1: Single String Alternate Picking */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Single String Patterns</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Foundation</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Start with simple single-string exercises to establish proper alternate picking motion. 
                  Focus on consistency and evenness rather than speed.
                </p>
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-green-800 text-sm"><strong>Pattern:</strong> Down-Up-Down-Up on each fret (strict alternation)</p>
                </div>
              </div>
              
              <MusicScore
                title="Single String Alternate Picking"
                staves={[{
                  id: 'single-string-alternate',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :16 5/6 5/6 5/6 5/6 6/6 6/6 6/6 6/6 7/6 7/6 7/6 7/6 8/6 8/6 8/6 8/6 |
notes :16 7/6 7/6 7/6 7/6 6/6 6/6 6/6 6/6 5/6 5/6 5/6 5/6 4/6 4/6 4/6 4/6`,
                  width: 550,
                  scale: 1.0,
                  title: '6th String: Frets 5-8 Ascending and Descending'
                }]}
              />
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-900 mb-2">Practice Notes</h4>
                <p className="text-green-800 text-sm leading-relaxed mb-3">
                  Use a metronome and start at 60 BPM. Focus on clean, even notes with consistent pick attack. 
                  Practice on all strings, then try the pattern starting on different frets.
                </p>
                <div className="flex items-center justify-center bg-green-100 rounded-md py-2 px-4">
                  <span className="text-green-700 font-medium text-sm">🎵 Suggested starting tempo: 60 BPM (16th notes)</span>
                </div>
              </div>
            </div>

            {/* Exercise 2: Chromatic Scale Exercise */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Chromatic Scale Patterns</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Essential</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  The chromatic scale is the ultimate test of alternate picking consistency. Every note is 
                  picked alternately, making it perfect for developing evenness and speed.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-blue-800 text-sm"><strong>Pattern:</strong> Four frets per string, strict alternate picking throughout</p>
                </div>
              </div>
              
              <MusicScore
                title="Chromatic Scale Exercise"
                staves={[{
                  id: 'chromatic-scale',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :16 5/6 6/6 7/6 8/6 5/5 6/5 7/5 8/5 5/4 6/4 7/4 8/4 5/3 6/3 7/3 8/3 |
notes :16 5/2 6/2 7/2 8/2 5/1 6/1 7/1 8/1 7/1 6/1 5/1 4/1 8/2 7/2 6/2 5/2`,
                  width: 550,
                  scale: 1.0,
                  title: 'Chromatic Scale: Position 5 Ascending and Descending'
                }]}
              />
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Practice Notes</h4>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  This exercise challenges your coordination between both hands. Keep the alternate picking 
                  strict - never use two consecutive downstrokes or upstrokes. Practice in different positions.
                </p>
                <div className="flex items-center justify-center bg-blue-100 rounded-md py-2 px-4">
                  <span className="text-blue-700 font-medium text-sm">🎵 Suggested starting tempo: 50 BPM (16th notes)</span>
                </div>
              </div>
            </div>

            {/* Exercise 3: Scale Patterns */}
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Scale-Based Patterns</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Musical</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Apply alternate picking to musical scales. This bridges the gap between technical exercises 
                  and real musical application while maintaining strict picking discipline.
                </p>
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-purple-800 text-sm"><strong>Pattern:</strong> G Major scale, two octaves with alternate picking</p>
                </div>
              </div>
              
              <MusicScore
                title="G Major Scale Exercise"
                staves={[{
                  id: 'g-major-scale',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=G
notes :8 3/6 5/6 2/5 3/5 5/5 2/4 4/4 5/4 2/3 4/3 5/3 2/2 4/2 5/2 3/1 5/1 |
notes :8 5/1 3/1 5/2 4/2 2/2 5/3 4/3 2/3 5/4 4/4 2/4 5/5 3/5 2/5 5/6 3/6`,
                  width: 550,
                  scale: 1.0,
                  title: 'G Major Scale: Two Octaves Ascending and Descending'
                }]}
              />
              
              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Practice Notes</h4>
                <p className="text-purple-800 text-sm leading-relaxed mb-3">
                  Focus on smooth position shifts while maintaining alternate picking. Practice this pattern 
                  in all major scales and their relative minors. Listen for musical phrasing.
                </p>
                <div className="flex items-center justify-center bg-purple-100 rounded-md py-2 px-4">
                  <span className="text-purple-700 font-medium text-sm">🎵 Suggested starting tempo: 70 BPM (8th notes)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Techniques Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Advanced Applications
          </h2>
          <div className="space-y-8">

            {/* Exercise 4: String Skipping */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">String Skipping Patterns</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Challenging</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  String skipping with alternate picking develops precision and control. This technique 
                  is essential for arpeggios, wide interval melodies, and advanced lead passages.
                </p>
                <div className="bg-amber-50 rounded-lg p-3 mb-4">
                  <p className="text-amber-800 text-sm"><strong>Pattern:</strong> Skip one string between each note, maintain alternate picking</p>
                </div>
              </div>
              
              <MusicScore
                title="String Skipping Exercise"
                staves={[{
                  id: 'string-skipping',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 5/6 5/4 7/6 7/4 5/6 5/4 7/6 7/4 5/5 5/3 7/5 7/3 5/5 5/3 7/5 7/3 |
notes :8 5/4 5/2 7/4 7/2 5/4 5/2 7/4 7/2 5/3 5/1 7/3 7/1 5/3 5/1 7/3 7/1`,
                  width: 550,
                  scale: 1.0,
                  title: 'String Skipping: 6th-4th, 5th-3rd, 4th-2nd, 3rd-1st Strings'
                }]}
              />
              
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Practice Notes</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  Start very slowly to ensure clean string skips. The pick must clear the middle string 
                  without touching it. This builds precision for complex arpeggio passages.
                </p>
                <div className="flex items-center justify-center bg-amber-100 rounded-md py-2 px-4">
                  <span className="text-amber-700 font-medium text-sm">🎵 Suggested starting tempo: 40 BPM (8th notes)</span>
                </div>
              </div>
            </div>

            {/* Exercise 5: Triplet Patterns */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Triplet Alternate Picking</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Rhythmic</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Triplets present unique challenges for alternate picking because the pattern shifts 
                  which beat gets the downstroke. This develops rhythmic independence and flexibility.
                </p>
                <div className="bg-red-50 rounded-lg p-3 mb-4">
                  <p className="text-red-800 text-sm"><strong>Pattern:</strong> Three-note groups with strict alternate picking</p>
                </div>
              </div>
              
              <MusicScore
                title="Triplet Alternate Picking"
                staves={[{
                  id: 'triplet-picking',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8t 5/6 6/6 7/6 6/6 7/6 8/6 7/6 8/6 9/6 8/6 7/6 6/6 |
notes :8t 5/5 6/5 7/5 6/5 7/5 8/5 7/5 8/5 9/5 8/5 7/5 6/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'Three-Note Ascending and Descending Triplet Patterns'
                }]}
              />
              
              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Practice Notes</h4>
                <p className="text-red-800 text-sm leading-relaxed mb-3">
                  Pay attention to which beat gets the downstroke - it changes with each triplet group. 
                  This is crucial for developing rhythmic accuracy in complex time signatures.
                </p>
                <div className="flex items-center justify-center bg-red-100 rounded-md py-2 px-4">
                  <span className="text-red-700 font-medium text-sm">🎵 Suggested starting tempo: 60 BPM (triplets)</span>
                </div>
              </div>
            </div>

            {/* Exercise 6: Speed Building */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Speed Development Drill</h3>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  This exercise combines all previous elements into a comprehensive speed-building routine. 
                  Focus on gradual tempo increases while maintaining perfect technique.
                </p>
                <div className="bg-indigo-50 rounded-lg p-3 mb-4">
                  <p className="text-indigo-800 text-sm"><strong>Pattern:</strong> Four-note sequences across multiple strings</p>
                </div>
              </div>
              
              <MusicScore
                title="Speed Building Exercise"
                staves={[{
                  id: 'speed-building',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :16 5/6 6/6 7/6 8/6 5/5 6/5 7/5 8/5 5/4 6/4 7/4 8/4 5/3 6/3 7/3 8/3 |
notes :16 9/3 8/3 7/3 6/3 9/4 8/4 7/4 6/4 9/5 8/5 7/5 6/5 9/6 8/6 7/6 6/6`,
                  width: 550,
                  scale: 1.0,
                  title: 'Four-Note Patterns for Speed Development'
                }]}
              />
              
              <div className="mt-6 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">Practice Notes</h4>
                <p className="text-indigo-800 text-sm leading-relaxed mb-3">
                  Use a progressive tempo approach: play 4 times at 60 BPM, then 4 times at 65 BPM, 
                  continue increasing by 5 BPM until you reach your maximum clean tempo.
                </p>
                <div className="flex items-center justify-center bg-indigo-100 rounded-md py-2 px-4">
                  <span className="text-indigo-700 font-medium text-sm">🎵 Progressive tempo: 60-140+ BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Strategy Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Practice Strategy & Tips
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Technical Focus</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-green-800">Always use a metronome for consistent timing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-green-800">Start every practice session slowly and gradually increase tempo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-green-800">Never sacrifice accuracy for speed - clean technique comes first</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-green-800">Practice with different pick materials and thicknesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-green-800">Record yourself to identify timing and consistency issues</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Common Challenges</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Tension Issues</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    If you feel tension in your wrist or forearm, slow down and focus on relaxation. 
                    Practice short bursts with rest periods between.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Timing Problems</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Uneven timing often comes from rushing or inconsistent pick attack. Use a metronome 
                    and focus on matching each click perfectly.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">String Noise</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Unwanted string noise can be reduced by proper muting technique with both hands 
                    and controlling pick depth and angle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Applications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Musical Applications
          </h2>
          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Where to Use Alternate Picking</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Lead Guitar</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Fast scale runs</li>
                  <li>• Melodic solos</li>
                  <li>• Arpeggiated passages</li>
                  <li>• Tremolo picking</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Rhythm Playing</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Fast strumming patterns</li>
                  <li>• Single-note riffs</li>
                  <li>• Galloping rhythms</li>
                  <li>• Syncopated patterns</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Genres</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Metal and hard rock</li>
                  <li>• Bluegrass and country</li>
                  <li>• Progressive rock</li>
                  <li>• Fusion and jazz</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
