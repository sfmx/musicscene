"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

export default function RhythmDrillsPage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Rhythm Drills"
        subtitle="Develop precise timing, groove, and rhythmic accuracy with essential strumming and timing exercises."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-xl p-8 mb-12 border border-rose-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Rhythm Drills for Guitarists</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Rhythm is the heartbeat of music. These exercises will help you develop solid timing, 
            consistent strumming patterns, and the ability to play with precision and groove. 
            Master these fundamentals to become a confident rhythm guitarist and ensemble player.
          </p>
        </div>

        {/* Practice Guidelines */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rhythm Practice Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Timing Fundamentals</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  Always practice with a metronome
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  Start slowly and gradually increase tempo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  Focus on consistent, even strumming motion
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  Count out loud or tap your foot
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Strumming Technique</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  Keep your strumming arm relaxed and fluid
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  Use wrist motion more than arm motion
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  Practice ghost strums for complex patterns
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  Emphasize strong beats (1 and 3)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Basic Rhythm Patterns Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Basic Rhythm Patterns
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 1: Quarter Note Strumming */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Quarter Note Strumming</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Fundamental</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Master the foundation of rhythm guitar with steady quarter note strumming. This exercise 
                  develops consistent timing and forms the basis for all other strumming patterns.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-blue-800 text-sm"><strong>Pattern:</strong> Down - Down - Down - Down (on beats 1, 2, 3, 4)</p>
                </div>
                
                <div className="flex justify-center mb-6 bg-gray-50 rounded-lg p-6">
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">C Major</div>
                    <SimpleFretboardDiagram chord="C_major" />
                  </div>
                </div>
              </div>
              
              <MusicScore
                title="Quarter Note Strumming Exercise"
                staves={[{
                  id: 'quarter-note-strumming',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :q (0/5.1/4.0/3.2/2.1/1) (0/5.1/4.0/3.2/2.1/1) (0/5.1/4.0/3.2/2.1/1) (0/5.1/4.0/3.2/2.1/1) |
notes :q (0/5.1/4.0/3.2/2.1/1) (0/5.1/4.0/3.2/2.1/1) (0/5.1/4.0/3.2/2.1/1) (0/5.1/4.0/3.2/2.1/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'C Major Chord - Quarter Note Strums'
                }]}
              />
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Practice Notes</h4>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  Use all downstrokes and focus on hitting the strings at exactly the same time as the metronome click.
                  Keep your strumming motion consistent and relaxed. Count "1, 2, 3, 4" out loud.
                </p>
                <div className="flex items-center justify-center bg-blue-100 rounded-md py-2 px-4">
                  <span className="text-blue-700 font-medium text-sm">🎵 Suggested starting tempo: 60 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 2: Basic Down-Up Strumming */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Basic Down-Up Strumming</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Essential</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Introduce eighth note patterns with alternating down and up strokes. This is the foundation 
                  of most popular music strumming patterns.
                </p>
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-green-800 text-sm"><strong>Pattern:</strong> Down-Up-Down-Up-Down-Up-Down-Up</p>
                </div>
                
                <div className="flex justify-center mb-6 bg-gray-50 rounded-lg p-6">
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">C Major</div>
                    <SimpleFretboardDiagram chord="C_major" />
                  </div>
                </div>
              </div>
              
              <MusicScore
                title="Basic Down-Up Strumming Exercise"
                staves={[{
                  id: 'down-up-strumming',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 (0/5.1/4.0/3.2/2.1/1) (0/5.1/4.0/3.2/2.1/1) (0/5.1/4.0/3.2/2.1/1) (0/5.1/4.0/3.2/2.1/1) (0/5.1/4.0/3.2/2.1/1) (0/5.1/4.0/3.2/2.1/1) (0/5.1/4.0/3.2/2.1/1) (0/5.1/4.0/3.2/2.1/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'C Major Chord - Eighth Note Down-Up Pattern'
                }]}
              />
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-900 mb-2">Practice Notes</h4>
                <p className="text-green-800 text-sm leading-relaxed mb-3">
                  Alternate between downstrokes and upstrokes. Keep your hand moving in steady eighth note motion
                  even when not hitting strings. Count "1-and-2-and-3-and-4-and".
                </p>
                <div className="flex items-center justify-center bg-green-100 rounded-md py-2 px-4">
                  <span className="text-green-700 font-medium text-sm">🎵 Suggested starting tempo: 50 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 3: Common Strumming Pattern */}
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Popular "Down-Down-Up-Up-Down-Up" Pattern</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Popular</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Learn one of the most common strumming patterns in popular music. This pattern appears 
                  in countless songs across multiple genres.
                </p>
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-purple-800 text-sm"><strong>Pattern:</strong> D-D-U-U-D-U (Down on 1, Down on 2, Up on 2+, Up on 3+, Down on 4, Up on 4+)</p>
                </div>
                
                <div className="flex justify-center mb-6 bg-gray-50 rounded-lg p-6">
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">G Major</div>
                    <SimpleFretboardDiagram chord="G_major" />
                  </div>
                </div>
              </div>
              
              <MusicScore
                title="Popular Strumming Pattern Exercise"
                staves={[{
                  id: 'popular-strumming-pattern',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=G
notes :q (3/6.0/5.0/4.0/3.2/2.3/1) (3/6.0/5.0/4.0/3.2/2.3/1) :8 (3/6.0/5.0/4.0/3.2/2.3/1) (3/6.0/5.0/4.0/3.2/2.3/1) :q (3/6.0/5.0/4.0/3.2/2.3/1) :8 (3/6.0/5.0/4.0/3.2/2.3/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'G Major Chord - D-D-U-U-D-U Pattern'
                }]}
              />
              
              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Practice Notes</h4>
                <p className="text-purple-800 text-sm leading-relaxed mb-3">
                  This pattern creates a great groove for folk, pop, and rock songs. Focus on the syncopated 
                  upstrokes and maintain steady hand motion throughout. Practice slowly before attempting full speed.
                </p>
                <div className="flex items-center justify-center bg-purple-100 rounded-md py-2 px-4">
                  <span className="text-purple-700 font-medium text-sm">🎵 Suggested starting tempo: 45 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Rhythm Patterns Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Advanced Rhythm Patterns
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 4: Syncopated Rhythm */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Syncopated Rhythm Pattern</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Intermediate</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Master syncopation with this off-beat emphasis pattern. Syncopation adds groove and 
                  sophistication to your rhythm playing.
                </p>
                <div className="bg-amber-50 rounded-lg p-3 mb-4">
                  <p className="text-amber-800 text-sm"><strong>Pattern:</strong> D-U-X-U-D-U-X-U (X = ghost strum/muted)</p>
                </div>
                
                <div className="flex justify-center mb-6 bg-gray-50 rounded-lg p-6">
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">E Minor</div>
                    <SimpleFretboardDiagram chord="E_minor" />
                  </div>
                </div>
              </div>
              
              <MusicScore
                title="Syncopated Rhythm Exercise"
                staves={[{
                  id: 'syncopated-rhythm',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=Em
notes :8 (0/6.2/5.2/4.0/3.0/2.0/1) (0/6.2/5.2/4.0/3.0/2.0/1) ## (0/6.2/5.2/4.0/3.0/2.0/1) (0/6.2/5.2/4.0/3.0/2.0/1) (0/6.2/5.2/4.0/3.0/2.0/1) ## (0/6.2/5.2/4.0/3.0/2.0/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'E Minor Chord - Syncopated Pattern with Muted Strums'
                }]}
              />
              
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Practice Notes</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  Practice ghost strums (muted upstrokes) on beats 2 and 4. Keep your hand moving continuously
                  but dampen the strings with your fretting hand during the ghost strums.
                </p>
                <div className="flex items-center justify-center bg-amber-100 rounded-md py-2 px-4">
                  <span className="text-amber-700 font-medium text-sm">🎵 Suggested starting tempo: 40 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 5: Reggae Skank Pattern */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Reggae Skank Pattern</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Style-Specific</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Learn the classic reggae "skank" rhythm with emphasis on the off-beats. This pattern 
                  is fundamental to reggae, ska, and related Caribbean styles.
                </p>
                <div className="bg-red-50 rounded-lg p-3 mb-4">
                  <p className="text-red-800 text-sm"><strong>Pattern:</strong> X-U-X-U-X-U-X-U (emphasizing the "and" beats)</p>
                </div>
                
                <div className="flex justify-center mb-6 bg-gray-50 rounded-lg p-6">
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">A Minor</div>
                    <SimpleFretboardDiagram chord="A_minor" />
                  </div>
                </div>
              </div>
              
              <MusicScore
                title="Reggae Skank Exercise"
                staves={[{
                  id: 'reggae-skank',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=Am
notes :8 ## (0/5.2/4.2/3.1/2.0/1) ## (0/5.2/4.2/3.1/2.0/1) ## (0/5.2/4.2/3.1/2.0/1) ## (0/5.2/4.2/3.1/2.0/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'A Minor Chord - Reggae Skank Pattern'
                }]}
              />
              
              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Practice Notes</h4>
                <p className="text-red-800 text-sm leading-relaxed mb-3">
                  Emphasize the upstrokes on the off-beats (the "and" counts). Use short, staccato chords
                  with palm muting for an authentic reggae sound. Keep the rhythm very steady.
                </p>
                <div className="flex items-center justify-center bg-red-100 rounded-md py-2 px-4">
                  <span className="text-red-700 font-medium text-sm">🎵 Suggested starting tempo: 65 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 6: Complex 16th Note Pattern */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Complex 16th Note Pattern</h3>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Challenge yourself with intricate 16th note patterns that combine downstrokes, upstrokes, 
                  and ghost strums for complex rhythmic textures.
                </p>
                <div className="bg-indigo-50 rounded-lg p-3 mb-4">
                  <p className="text-indigo-800 text-sm"><strong>Pattern:</strong> D-U-D-X-D-U-X-U-D-X-D-U-D-U-X-U</p>
                </div>
                
                <div className="flex justify-center mb-6 bg-gray-50 rounded-lg p-6">
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">D Major</div>
                    <SimpleFretboardDiagram chord="D_major" />
                  </div>
                </div>
              </div>
              
              <MusicScore
                title="Complex 16th Note Exercise"
                staves={[{
                  id: 'complex-16th-pattern',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=D
notes :16 (0/4.2/3.3/2.2/1) (0/4.2/3.3/2.2/1) (0/4.2/3.3/2.2/1) ## (0/4.2/3.3/2.2/1) (0/4.2/3.3/2.2/1) ## (0/4.2/3.3/2.2/1) (0/4.2/3.3/2.2/1) ## (0/4.2/3.3/2.2/1) (0/4.2/3.3/2.2/1) (0/4.2/3.3/2.2/1) (0/4.2/3.3/2.2/1) ## (0/4.2/3.3/2.2/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'D Major Chord - Complex 16th Note Pattern'
                }]}
              />
              
              <div className="mt-6 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">Practice Notes</h4>
                <p className="text-indigo-800 text-sm leading-relaxed mb-3">
                  This advanced pattern requires precise timing and coordination. Practice very slowly first,
                  counting 16th notes: "1-e-and-a-2-e-and-a-3-e-and-a-4-e-and-a". Build speed gradually.
                </p>
                <div className="flex items-center justify-center bg-indigo-100 rounded-md py-2 px-4">
                  <span className="text-indigo-700 font-medium text-sm">🎵 Suggested starting tempo: 30 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timing Exercises Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Timing & Coordination Drills
          </h2>
          
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center font-semibold text-sm">
                ⏱
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Metronome Training Exercises</h3>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Essential</span>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                Develop rock-solid timing with these metronome-based exercises that challenge your 
                internal clock and rhythmic precision.
              </p>
              
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 mb-3">Progressive Timing Drills:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-slate-800 text-sm">
                    <li><strong>Click on 1:</strong> Metronome only on beat 1, you provide beats 2, 3, 4</li>
                    <li><strong>Click on 1 & 3:</strong> Metronome on strong beats, you fill weak beats</li>
                    <li><strong>Click on 2 & 4:</strong> Metronome on backbeat only</li>
                  </ul>
                  <ul className="space-y-2 text-slate-800 text-sm">
                    <li><strong>Half-time click:</strong> Metronome at half speed, play double-time</li>
                    <li><strong>Off-beat click:</strong> Metronome on off-beats only</li>
                    <li><strong>Random drops:</strong> Metronome cuts out randomly, maintain tempo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Tips Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Essential Rhythm Tips
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-200">
              <h3 className="text-lg font-semibold text-rose-900 mb-4">Technique Focus</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 mt-1">•</span>
                  <span className="text-rose-800">Keep your strumming arm relaxed and use wrist motion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 mt-1">•</span>
                  <span className="text-rose-800">Maintain consistent hand motion even during rests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 mt-1">•</span>
                  <span className="text-rose-800">Count out loud to internalize complex patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 mt-1">•</span>
                  <span className="text-rose-800">Practice slowly with metronome before increasing tempo</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Why Rhythm Matters</h3>
              <p className="text-blue-800 leading-relaxed">
                Rhythm is the foundation that holds music together. Strong rhythmic skills make you a 
                valuable ensemble player and allow you to communicate musically with other musicians. 
                Whether you're playing solo or in a band, solid rhythm and timing create the groove 
                that makes people want to move and feel the music. These skills translate to all styles 
                and instruments.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
