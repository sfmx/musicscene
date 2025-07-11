"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

export default function ChordChangesPage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Chord Changes"
        subtitle="Master smooth and musical transitions between chords with precision and timing."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl p-8 mb-12 border border-emerald-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Chord Change Exercises</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Developing smooth chord transitions is fundamental to rhythm guitar and song accompaniment. 
            These exercises will help you build muscle memory, improve timing, and create seamless 
            chord progressions that sound musical and professional.
          </p>
        </div>

        {/* Practice Guidelines */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Chord Change Practice Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Movement Efficiency</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Keep fingers close to the fretboard
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Minimize unnecessary finger movement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Look for common finger positions between chords
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Practice the physical motion without strumming first
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Timing & Rhythm</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Use a metronome for consistent timing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Start slowly and gradually increase tempo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Maintain steady strumming patterns
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Focus on clean chord changes on the beat
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Basic Chord Changes Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Essential Chord Changes
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 1: Two-Chord Changes */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Two-Chord Changes (G ↔ C)</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Beginner</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Start with the fundamental G to C chord change. This is one of the most common progressions
                  and helps develop basic chord transition skills.
                </p>
                
                <div className="flex flex-wrap gap-8 items-center justify-center mb-6 bg-gray-50 rounded-lg p-6">
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">G Major</div>
                    <SimpleFretboardDiagram chord="G_major" />
                  </div>
                  <div className="text-4xl text-gray-400">↔</div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">C Major</div>
                    <SimpleFretboardDiagram chord="C_major" />
                  </div>
                </div>
              </div>
              
              <MusicScore
                title="G to C Chord Change Exercise"
                staves={[{
                  id: 'g-to-c-changes',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :w (3/6.2/5.0/4.0/3.3/2.3/1) | (3/5.2/4.0/3.1/2.0/1) | (3/6.2/5.0/4.0/3.3/2.3/1) | (3/5.2/4.0/3.1/2.0/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'G - C - G - C Progression'
                }]}
              />
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Practice Notes</h4>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  Focus on keeping your 3rd finger planted on the 3rd fret of the high E string - it stays there for both chords!
                  This common finger serves as an anchor point and makes the transition smoother.
                </p>
                <div className="flex items-center justify-center bg-blue-100 rounded-md py-2 px-4">
                  <span className="text-blue-700 font-medium text-sm">🎵 Suggested starting tempo: 60 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 2: Three-Chord Progression */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Three-Chord Progression (G - D - C)</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Intermediate</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Add the D major chord to create a classic three-chord progression. This progression appears
                  in countless songs and is essential for rhythm guitar.
                </p>
                
                <div className="flex flex-wrap gap-6 items-center justify-center mb-6 bg-gray-50 rounded-lg p-6">
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">G Major</div>
                    <SimpleFretboardDiagram chord="G_major" />
                  </div>
                  <div className="text-2xl text-gray-400">→</div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">D Major</div>
                    <SimpleFretboardDiagram chord="D_major" />
                  </div>
                  <div className="text-2xl text-gray-400">→</div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">C Major</div>
                    <SimpleFretboardDiagram chord="C_major" />
                  </div>
                </div>
              </div>
              
              <MusicScore
                title="G-D-C Chord Progression Exercise"
                staves={[{
                  id: 'g-d-c-progression',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=G
notes :w (3/6.2/5.0/4.0/3.3/2.3/1) | (2/4.3/3.2/2.2/1) | (3/5.2/4.0/3.1/2.0/1) | (3/6.2/5.0/4.0/3.3/2.3/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'G - D - C - G Progression'
                }]}
              />
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-900 mb-2">Practice Notes</h4>
                <p className="text-green-800 text-sm leading-relaxed mb-3">
                  Practice moving smoothly between all three chords. Notice that your 1st finger stays on the 
                  1st fret B string when moving from G to D, and that your 3rd finger can guide transitions.
                </p>
                <div className="flex items-center justify-center bg-green-100 rounded-md py-2 px-4">
                  <span className="text-green-700 font-medium text-sm">🎵 Suggested starting tempo: 55 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 3: Classic I-V-vi-IV Progression */}
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Popular I-V-vi-IV Progression (G-D-Em-C)</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Essential</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Master the most popular chord progression in modern music! This I-V-vi-IV progression
                  appears in thousands of songs across all genres.
                </p>
                
                <div className="flex flex-wrap gap-4 items-center justify-center mb-6 bg-gray-50 rounded-lg p-6">
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">G (I)</div>
                    <SimpleFretboardDiagram chord="G_major" />
                  </div>
                  <div className="text-xl text-gray-400">→</div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">D (V)</div>
                    <SimpleFretboardDiagram chord="D_major" />
                  </div>
                  <div className="text-xl text-gray-400">→</div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">Em (vi)</div>
                    <SimpleFretboardDiagram chord="E_minor" />
                  </div>
                  <div className="text-xl text-gray-400">→</div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">C (IV)</div>
                    <SimpleFretboardDiagram chord="C_major" />
                  </div>
                </div>
              </div>
              
              <MusicScore
                title="I-V-vi-IV Chord Progression Exercise"
                staves={[{
                  id: 'i-v-vi-iv-progression',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=G
notes :w (3/6.2/5.0/4.0/3.3/2.3/1) | (2/4.3/3.2/2.2/1) | (0/6.2/5.2/4.0/3.0/2.0/1) | (3/5.2/4.0/3.1/2.0/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'G - D - Em - C Progression'
                }]}
              />
              
              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Practice Notes</h4>
                <p className="text-purple-800 text-sm leading-relaxed mb-3">
                  This progression is the backbone of countless songs. Focus on smooth transitions and try 
                  different strumming patterns once you're comfortable with the chord changes.
                </p>
                <div className="flex items-center justify-center bg-purple-100 rounded-md py-2 px-4">
                  <span className="text-purple-700 font-medium text-sm">🎵 Suggested starting tempo: 50 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Chord Changes Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Advanced Chord Changes
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 4: Barre Chord Transitions */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Barre Chord Transitions (F - Am - Dm - G)</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Practice moving between barre chords and open chords. This exercise challenges your 
                  finger strength and coordination while building practical chord vocabulary.
                </p>
                
                <div className="flex flex-wrap gap-4 items-center justify-center mb-6 bg-gray-50 rounded-lg p-6">
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">F Major</div>
                    <SimpleFretboardDiagram chord="F_major" />
                  </div>
                  <div className="text-xl text-gray-400">→</div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">Am</div>
                    <SimpleFretboardDiagram chord="A_minor" />
                  </div>
                  <div className="text-xl text-gray-400">→</div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">Dm</div>
                    <SimpleFretboardDiagram chord="D_minor" />
                  </div>
                  <div className="text-xl text-gray-400">→</div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 mb-2">G Major</div>
                    <SimpleFretboardDiagram chord="G_major" />
                  </div>
                </div>
              </div>
              
              <MusicScore
                title="Barre Chord Transition Exercise"
                staves={[{
                  id: 'barre-chord-transitions',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=F
notes :w (1/6.1/5.3/4.3/3.2/2.1/1) | (0/5.2/4.2/3.1/2.0/1) | (0/4.2/3.3/2.1/1) | (3/6.2/5.0/4.0/3.3/2.3/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'F - Am - Dm - G Progression'
                }]}
              />
              
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Practice Notes</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  Take your time with the F barre chord - it's challenging for beginners. Focus on clean 
                  chord tones and smooth transitions. Rest your hand between repetitions if needed.
                </p>
                <div className="flex items-center justify-center bg-amber-100 rounded-md py-2 px-4">
                  <span className="text-amber-700 font-medium text-sm">🎵 Suggested starting tempo: 45 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 5: Jazz-Style Chord Movement */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Jazz-Style Chord Movement</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Practice moving between seventh chords and extended harmonies. This exercise introduces
                  jazz-style chord voicings and smooth voice leading.
                </p>
              </div>
              
              <MusicScore
                title="Jazz-Style Chord Movement Exercise"
                staves={[{
                  id: 'jazz-chord-movement',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :w (3/6.2/5.0/4.0/3.1/2.0/1) | (2/6.0/5.2/4.1/3.2/2.0/1) | (0/6.2/5.0/4.2/3.1/2.3/1) | (3/6.2/5.0/4.0/3.1/2.0/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'CMaj7 - Am7 - Dm7 - G7 Progression'
                }]}
              />
              
              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Practice Notes</h4>
                <p className="text-red-800 text-sm leading-relaxed mb-3">
                  Focus on minimal finger movement between chords. Notice how some fingers can stay in place
                  or move to adjacent strings. This creates smooth voice leading typical of jazz harmony.
                </p>
                <div className="flex items-center justify-center bg-red-100 rounded-md py-2 px-4">
                  <span className="text-red-700 font-medium text-sm">🎵 Suggested starting tempo: 40 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 6: Rapid Chord Changes */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Rapid Chord Changes Challenge</h3>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Expert</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Challenge yourself with rapid chord changes that require quick thinking and precise
                  muscle memory. This exercise simulates demanding song situations.
                </p>
              </div>
              
              <MusicScore
                title="Rapid Chord Changes Exercise"
                staves={[{
                  id: 'rapid-chord-changes',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :h (3/6.2/5.0/4.0/3.3/2.3/1) (3/5.2/4.0/3.1/2.0/1) | :h (2/4.3/3.2/2.2/1) (0/6.2/5.2/4.0/3.0/2.0/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'G-C-D-Em Changes at Double Speed'
                }]}
              />
              
              <div className="mt-6 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">Practice Notes</h4>
                <p className="text-indigo-800 text-sm leading-relaxed mb-3">
                  Start very slowly and only increase tempo when changes are completely clean. This exercise
                  builds the quick reflexes needed for complex songs and live performance situations.
                </p>
                <div className="flex items-center justify-center bg-indigo-100 rounded-md py-2 px-4">
                  <span className="text-indigo-700 font-medium text-sm">🎵 Suggested starting tempo: 50 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Tips Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Essential Chord Change Tips
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">Physical Technique</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Keep fingers close to the strings and minimize movement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Practice the physical motion without strumming first</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Use a metronome to maintain consistent timing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Visualize the next chord shape before switching</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Why Chord Changes Matter</h3>
              <p className="text-blue-800 leading-relaxed">
                Smooth chord changes are the foundation of rhythm guitar and song accompaniment. Whether you're 
                strumming around a campfire or performing on stage, clean and timely chord transitions make 
                the difference between sounding amateur and professional. Consistent practice builds the 
                muscle memory essential for confident, musical playing.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
