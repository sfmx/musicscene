"use client";

import React from 'react';
// @ts-ignore
declare global {
  interface Window {
    VexTabDiv?: { autoRender: () => void; };
  }
}
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import MusicScore from '@/components/MusicScore';
import { fingerExercises } from '@/data/exercises/fingerExercises';
import ClientExerciseRenderer from '@/components/ClientExerciseRenderer';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

export default function FingerExercisesClient() {
  return (
    <>
      <VexTabScriptLoader />
      <Layout>
        <Header
          title="Finger Exercises"
          subtitle="Build finger strength, independence, and dexterity with these fundamental exercises."
        />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 mb-12 border border-blue-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Finger Exercises for Guitarists</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            These exercises are designed to develop finger independence, strength, and coordination. 
            Start slowly and focus on clean execution rather than speed. Each exercise targets different 
            aspects of finger development essential for advanced guitar playing.
          </p>
        </div>

        {/* Practice Guidelines */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Practice Effectively</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Essential Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Start slowly with a metronome (60-70 BPM)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Focus on even timing and clean notes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Increase speed only when you can play cleanly
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Practice Schedule</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Practice for short bursts (5-10 minutes per exercise)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Pay attention to both left and right hand technique
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Keep fingers close to the fretboard for efficiency
                </li>
              </ul>
            </div>
          </div>
        </div>        {/* Core Exercises Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Core Finger Exercises
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 1: String Crossing Pattern */}
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">String Crossing Pattern</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Beginner</span>
              </div>
              
              <MusicScore
                title="String Crossing Pattern Exercise"
                staves={[{
                  id: 'string-crossing',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 3/5 5/4 2/5 5/4 2/5 5/4 3/5 5/4 | 3/4 5/3 2/4 5/3 2/4 5/3 3/4 5/3 |
notes :8 2/3 5/2 2/3 5/2 2/3 5/2 2/3 5/2`,
                  width: 550,
                  scale: 1.0,
                  title: 'String Crossing with Alternate Picking'
                }]}
              />
              
              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Practice Notes</h4>
                <p className="text-purple-800 text-sm leading-relaxed mb-3">
                  Practice this exercise using alternate picking (down-up) to develop string crossing technique.
                  Start at a comfortable tempo and gradually increase speed. Focus on efficient movements and clear tone.
                </p>
                <div className="flex items-center justify-center bg-purple-100 rounded-md py-2 px-4">
                  <span className="text-purple-700 font-medium text-sm">🎵 Suggested starting tempo: 80 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 2: Finger Independence Pattern */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Finger Independence Pattern</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Intermediate</span>
              </div>
              
              <MusicScore
                title="Finger Independence Pattern Exercise"
                staves={[{
                  id: 'finger-independence',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 1/6 3/6 1/5 3/5 1/4 3/4 1/3 3/3 | 1/2 3/2 1/1 3/1 1/1 3/1 1/2 3/2`,
                  width: 550,
                  scale: 1.0,
                  title: 'Finger 1 and 3 Independence'
                }]}
              />
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Practice Notes</h4>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  This exercise develops independence between fingers 1 and 3, which can be challenging for beginners.
                  Focus on keeping unused fingers relaxed and close to the fretboard.
                </p>
                <div className="flex items-center justify-center bg-blue-100 rounded-md py-2 px-4">
                  <span className="text-blue-700 font-medium text-sm">🎵 Suggested starting tempo: 70 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 3: 1-2-3-4 Finger Pattern */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Classic 1-2-3-4 Chromatic Pattern</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Essential</span>
              </div>
              
              <MusicScore
                title="1-2-3-4 Finger Pattern Exercise"
                staves={[{
                  id: 'finger-1234-pattern',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 1/6 2/6 3/6 4/6 1/5 2/5 3/5 4/5 | 1/4 2/4 3/4 4/4 1/3 2/3 3/3 4/3 |
notes :8 1/2 2/2 3/2 4/2 1/1 2/1 3/1 4/1`,
                  width: 550,
                  scale: 1.0,
                  title: 'Classic Chromatic 1-2-3-4 Pattern'
                }]}
              />
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-900 mb-2">Practice Notes</h4>
                <p className="text-green-800 text-sm leading-relaxed mb-3">
                  The foundational exercise for developing coordination between all four fretting fingers.
                  This chromatic pattern builds finger strength and helps with muscle memory development.
                </p>
                <div className="flex items-center justify-center bg-green-100 rounded-md py-2 px-4">
                  <span className="text-green-700 font-medium text-sm">🎵 Suggested starting tempo: 60 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Additional Exercise Patterns Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Additional Exercise Patterns
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 4: Finger Independence Variations */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Finger Independence Variations</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Intermediate</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed">
                  Play patterns that skip fingers, such as 1-3-2-4 or 1-4-2-3, to challenge your coordination.
                  Move the pattern across all strings to develop finger independence and strength.
                </p>
              </div>
              
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Practice Notes</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  These patterns are more challenging than sequential patterns. Focus on keeping unused fingers relaxed
                  and maintaining steady rhythm. Try variations like 1-3-2-4, 1-4-2-3, 2-4-1-3, etc.
                </p>
                <div className="flex items-center justify-center bg-amber-100 rounded-md py-2 px-4">
                  <span className="text-amber-700 font-medium text-sm">🎵 Suggested starting tempo: 65 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 5: Spider Exercise */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Spider Exercise</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed">
                  Place your fingers on different frets and strings in a "spider" pattern to develop finger stretching
                  and coordination across multiple strings simultaneously.
                </p>
              </div>
              
              <MusicScore
                title="Spider Exercise Pattern"
                staves={[{
                  id: 'spider-pattern',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 1/6 4/5 2/4 5/3 | 3/2 6/1 4/2 1/3 | 2/4 5/5 3/6 6/1`,
                  width: 550,
                  scale: 1.0,
                  title: 'Spider Pattern Exercise'
                }]}
              />
              
              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Practice Notes</h4>
                <p className="text-red-800 text-sm leading-relaxed mb-3">
                  This advanced exercise challenges finger stretching and coordination. Start with smaller stretches
                  and gradually increase the fret distances. Focus on maintaining clean notes without buzzing.
                </p>
                <div className="flex items-center justify-center bg-red-100 rounded-md py-2 px-4">
                  <span className="text-red-700 font-medium text-sm">🎵 Suggested starting tempo: 50 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 6: Major Scale Exercise */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Major Scale Pattern</h3>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Educational</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed">
                  Practice the major scale in different positions to improve your knowledge of the fretboard.
                  This C major scale uses open position fingering for beginners.
                </p>
              </div>
              
              <MusicScore
                title="Major Scale Pattern"
                staves={[{
                  id: 'major-scale',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :q 3/5 0/4 2/4 3/4 | 0/3 2/3 4/3 5/3 | 5/3 4/3 2/3 0/3 | 3/4 2/4 0/4 3/5`,
                  width: 650,
                  scale: 1.0,
                  title: 'C Major Scale - Open Position (Ascending & Descending)'
                }]}
              />
              
              <div className="mt-6 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">Practice Notes</h4>
                <p className="text-indigo-800 text-sm leading-relaxed mb-3">
                  Practice scales both ascending and descending. Focus on proper fingering and smooth transitions
                  between notes. This builds muscle memory for common musical patterns.
                </p>
                <div className="flex items-center justify-center bg-indigo-100 rounded-md py-2 px-4">
                  <span className="text-indigo-700 font-medium text-sm">🎵 Suggested starting tempo: 75 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Example Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Advanced Example
          </h2>
          
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center font-semibold text-sm">
                ★
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Advanced Legato Exercise</h3>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Advanced</span>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-700 leading-relaxed">
                This advanced exercise combines finger independence with legato techniques (hammer-ons and pull-offs).
                It challenges both fretting hand coordination and smooth note transitions without picking every note.
              </p>
            </div>
            
            <MusicScore
              title="Advanced Legato Pattern"
              staves={[{
                id: 'legato-exercise',
                notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 5/6 8h10/6 8p5/6 7/6 | 5/5 8h10/5 8p5/5 7/5 | 5/4 8h10/4 8p5/4 7/4 | 5/3 8h10/3 8p5/3 7/3`,
                width: 650,
                scale: 1.0,
                title: 'Advanced Legato Finger Exercise'
              }]}
            />
            
            <div className="mt-6 bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h4 className="font-medium text-slate-900 mb-2">Practice Notes</h4>
              <p className="text-slate-800 text-sm leading-relaxed mb-3">
                <strong>Advanced Technique:</strong> This exercise develops smooth legato playing. Use finger 1 on the 5th fret,
                finger 2 on the 7th fret, finger 3 on the 8th fret, and finger 4 on the 10th fret. The "h" indicates 
                hammer-ons (strike the first note and hammer the second without picking), and "p" indicates pull-offs 
                (pull the finger off to sound the lower note). Focus on making the legato notes as clear as picked notes.
              </p>
              <div className="flex items-center justify-center bg-slate-100 rounded-md py-2 px-4">
                <span className="text-slate-700 font-medium text-sm">🎵 Suggested starting tempo: 40 BPM</span>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-slate-900 mb-2">About This Exercise</h4>
                <p className="text-slate-800 text-sm leading-relaxed">
                  This advanced legato pattern requires the finger independence and strength developed 
                  through regular practice of the exercises above. The hammer-on and pull-off techniques add expression 
                  while challenging your finger coordination and control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Tips Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Essential Practice Tips
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">Technical Focus</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Use a metronome and start slow, focusing on clean notes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Keep your fingers close to the fretboard for efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Practice with alternate picking for both hands</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Gradually increase speed as you gain control</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Why This Matters</h3>
              <p className="text-blue-800 leading-relaxed">
                Regular finger exercises help prevent injury, improve your playing accuracy, and make learning 
                new songs and techniques easier. The muscle memory and coordination developed through these 
                exercises forms the foundation for all advanced guitar techniques.
              </p>
            </div>
          </div>
        </section>
        </main>
        <Footer />
      </Layout>
    </>
  );
}
