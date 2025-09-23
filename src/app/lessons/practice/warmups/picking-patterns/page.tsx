"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';

export default function PickingPatternsPage() {
  return (
    <Layout>
      <Header
        title="Picking Patterns"
        subtitle="Master alternate picking, economy picking, and hybrid techniques for clean and expressive playing."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-8 mb-12 border border-orange-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Picking Patterns for Guitarists</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Develop precision, speed, and control with your picking hand through these essential exercises. 
            Each pattern focuses on different aspects of picking technique, from strict alternate picking 
            to advanced hybrid and economy picking methods.
          </p>
        </div>

        {/* Practice Guidelines */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Picking Practice Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Technique Focus</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  Start with slow, deliberate movements
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  Keep picking motion small and efficient
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  Focus on clean attack and consistent timing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  Maintain relaxed grip and wrist position
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Practice Strategy</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Use a metronome for consistent tempo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Practice each pattern slowly before increasing speed
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Focus on accuracy over speed initially
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Record yourself to identify inconsistencies
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Picking Exercises Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Essential Picking Patterns
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 1: Alternate Picking Foundation */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Alternate Picking Foundation</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Essential</span>
              </div>
              
              <MusicScore
                title="Alternate Picking Foundation Exercise"
                staves={[{
                  id: 'alternate-picking-foundation',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 0/1 1/1 2/1 3/1 4/1 3/1 2/1 1/1 | 0/1 1/1 2/1 3/1 4/1 5/1 4/1 3/1`,
                  width: 550,
                  scale: 1.0,
                  title: 'Strict Down-Up Alternate Picking on Single String'
                }]}
              />
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Practice Notes</h4>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  Practice strict down-up picking on a single string. Every note should alternate between 
                  downstroke and upstroke. Keep the picking motion small and close to the strings.
                  Focus on evenness and clean articulation of each note.
                </p>
                <div className="flex items-center justify-center bg-blue-100 rounded-md py-2 px-4">
                  <span className="text-blue-700 font-medium text-sm">🎵 Suggested starting tempo: 70 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 2: String Crossing with Alternate Picking */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">String Crossing Alternate Picking</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Intermediate</span>
              </div>
              
              <MusicScore
                title="String Crossing Alternate Picking Exercise"
                staves={[{
                  id: 'string-crossing-alternate',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 0/1 0/2 0/3 0/4 0/5 0/6 0/5 0/4 | 0/3 0/2 0/1 1/1 1/2 1/3 1/4 1/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'Alternate Picking Across All Strings'
                }]}
              />
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-900 mb-2">Practice Notes</h4>
                <p className="text-green-800 text-sm leading-relaxed mb-3">
                  Maintain strict alternate picking while crossing strings. This is crucial for developing 
                  coordination between both hands. Keep the picking pattern consistent regardless of string changes.
                </p>
                <div className="flex items-center justify-center bg-green-100 rounded-md py-2 px-4">
                  <span className="text-green-700 font-medium text-sm">🎵 Suggested starting tempo: 60 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 3: Economy Picking Pattern */}
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Economy Picking Pattern</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <MusicScore
                title="Economy Picking Pattern Exercise"
                staves={[{
                  id: 'economy-picking',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 1/6 2/6 1/5 2/5 1/4 2/4 1/3 2/3 | 1/2 2/2 1/1 2/1 3/1 4/1 3/2 2/2`,
                  width: 550,
                  scale: 1.0,
                  title: 'Economy Picking - Sweep Motion on String Changes'
                }]}
              />
              
              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Practice Notes</h4>
                <p className="text-purple-800 text-sm leading-relaxed mb-3">
                  Use downstrokes when moving to lower (thicker) strings and upstrokes when moving to higher 
                  (thinner) strings. This "sweeping" motion is more efficient for certain passages and scales.
                </p>
                <div className="flex items-center justify-center bg-purple-100 rounded-md py-2 px-4">
                  <span className="text-purple-700 font-medium text-sm">🎵 Suggested starting tempo: 55 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Picking Techniques Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Advanced Picking Techniques
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 4: Hybrid Picking Pattern */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Hybrid Picking Pattern</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <MusicScore
                title="Hybrid Picking Pattern Exercise"
                staves={[{
                  id: 'hybrid-picking',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 0/6 2/4 0/6 2/3 0/6 2/2 0/6 2/1 | 3/6 0/4 3/6 0/3 3/6 0/2 3/6 0/1`,
                  width: 550,
                  scale: 1.0,
                  title: 'Pick + Fingers Combination'
                }]}
              />
              
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Practice Notes</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  Use the pick for bass notes (low E string) and your middle or ring finger for higher strings.
                  This technique allows for rapid arpeggios and complex chord-melody playing.
                </p>
                <div className="flex items-center justify-center bg-amber-100 rounded-md py-2 px-4">
                  <span className="text-amber-700 font-medium text-sm">🎵 Suggested starting tempo: 50 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 5: Tremolo Picking */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Tremolo Picking Exercise</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <MusicScore
                title="Tremolo Picking Exercise"
                staves={[{
                  id: 'tremolo-picking',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :32 0/1 0/1 0/1 0/1 0/1 0/1 0/1 0/1 0/1 0/1 0/1 0/1 0/1 0/1 0/1 0/1`,
                  width: 550,
                  scale: 1.0,
                  title: 'Rapid Alternate Picking on Single Note'
                }]}
              />
              
              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Practice Notes</h4>
                <p className="text-red-800 text-sm leading-relaxed mb-3">
                  Practice rapid alternate picking on a single note. Start slowly and gradually increase speed
                  while maintaining evenness. This technique is essential for metal and classical guitar styles.
                </p>
                <div className="flex items-center justify-center bg-red-100 rounded-md py-2 px-4">
                  <span className="text-red-700 font-medium text-sm">🎵 Suggested starting tempo: 80 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 6: Chromatic Picking Coordination */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Chromatic Picking Coordination</h3>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Technical</span>
              </div>
              
              <MusicScore
                title="Chromatic Picking Coordination Exercise"
                staves={[{
                  id: 'chromatic-picking',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :16 1/6 2/6 3/6 4/6 1/5 2/5 3/5 4/5 1/4 2/4 3/4 4/4 1/3 2/3 3/3 4/3`,
                  width: 550,
                  scale: 1.0,
                  title: 'Chromatic Pattern with Strict Alternate Picking'
                }]}
              />
              
              <div className="mt-6 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">Practice Notes</h4>
                <p className="text-indigo-800 text-sm leading-relaxed mb-3">
                  Combine chromatic fretting patterns with strict alternate picking. This exercise develops
                  coordination between both hands and is excellent for building speed and accuracy.
                </p>
                <div className="flex items-center justify-center bg-indigo-100 rounded-md py-2 px-4">
                  <span className="text-indigo-700 font-medium text-sm">🎵 Suggested starting tempo: 65 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Tips Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Essential Picking Tips
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-4">Technical Focus</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-orange-800">Keep picking motion small and efficient</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-orange-800">Maintain relaxed grip on the pick</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-orange-800">Focus on consistent attack and tone</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-orange-800">Practice with a metronome for steady timing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Why Picking Matters</h3>
              <p className="text-blue-800 leading-relaxed">
                Consistent picking technique is the foundation for clean, fast, and expressive playing. 
                Whether you're playing rhythm guitar, lead lines, or fingerstyle arrangements, 
                proper picking technique will improve your tone, speed, and musical expression. 
                Regular practice builds the muscle memory essential for advanced techniques.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
