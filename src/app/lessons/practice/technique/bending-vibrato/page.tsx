"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

export default function BendingVibratoPage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Bending & Vibrato Technique"
        subtitle="Master the expressive techniques that bring emotion and personality to your playing through controlled pitch manipulation and musical vibrato."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-xl p-8 mb-12 border border-rose-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Bending & Vibrato Mastery</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Bending and vibrato are the most expressive techniques in guitar playing, allowing you to 
            add emotion, personality, and vocal-like qualities to your music. These techniques transform 
            static notes into living, breathing musical expressions that can convey everything from subtle 
            sophistication to raw emotional power. Mastering these skills is essential for blues, rock, 
            jazz, and virtually every guitar style.
          </p>
        </div>

        {/* Technique Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Fundamental Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Bending Technique</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  Use multiple fingers for strength and control
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  Push or pull strings perpendicular to fretboard
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  Maintain consistent finger pressure
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  Develop accurate pitch targeting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  Practice smooth bend and release motions
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Vibrato Control</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  Control speed and width of oscillation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  Use wrist and finger motion coordination
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  Match vibrato style to musical context
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  Develop consistent rhythmic pulsing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  Practice delayed vibrato entry
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Basic Bending Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Basic Bending Techniques
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 1: Half-Step Bends */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Half-Step Bends</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Foundation</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Start with subtle half-step (semitone) bends to develop control and pitch accuracy. 
                  These small bends are essential for blues, jazz, and expressive playing.
                </p>
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-green-800 text-sm"><strong>Target:</strong> Bend up exactly one fret's worth of pitch</p>
                </div>
              </div>
              
              <MusicScore
                title="Half-Step Bending Exercise"
                staves={[{
                  id: 'half-step-bends',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 7/3 7b8/3 7/3 ## | :q 9/2 9b10/2 9/2 ## |
notes :q 10/1 10b11/1 10/1 ## | :q ## ## ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'Half-Step Bends: 3rd, 2nd, and 1st Strings'
                }]}
              />
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-900 mb-2">Practice Notes</h4>
                <p className="text-green-800 text-sm leading-relaxed mb-3">
                  Use your ring finger supported by middle and index fingers. Bend slowly and listen 
                  carefully to match the target pitch. Practice on different strings to feel the varying resistance.
                </p>
                <div className="flex items-center justify-center bg-green-100 rounded-md py-2 px-4">
                  <span className="text-green-700 font-medium text-sm">🎵 Practice with reference notes first</span>
                </div>
              </div>
            </div>

            {/* Exercise 2: Whole-Step Bends */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Whole-Step Bends</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Essential</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Master the classic whole-step (whole tone) bend - the most common and recognizable 
                  bend in blues and rock guitar. This is the foundation of expressive lead playing.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-blue-800 text-sm"><strong>Target:</strong> Bend up exactly two frets' worth of pitch</p>
                </div>
              </div>
              
              <MusicScore
                title="Whole-Step Bending Exercise"
                staves={[{
                  id: 'whole-step-bends',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=G
notes :q 7/3 7b9/3 7/3 ## | :q 8/2 8b10/2 8/2 ## |
notes :q 8/1 8b10/1 8/1 ## | :q ## ## ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'Whole-Step Bends: Major Scale Context'
                }]}
              />
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Practice Notes</h4>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  Use all three fingers behind the bending finger for maximum strength. This bend should 
                  sound exactly like the note two frets higher. Practice bending up and releasing slowly.
                </p>
                <div className="flex items-center justify-center bg-blue-100 rounded-md py-2 px-4">
                  <span className="text-blue-700 font-medium text-sm">🎵 The most important bend to master</span>
                </div>
              </div>
            </div>

            {/* Exercise 3: Pre-Bends and Releases */}
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Pre-Bends and Releases</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Intermediate</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Learn to bend strings before picking (pre-bend) and then release them for a 
                  descending pitch effect. This creates unique tonal colors and emotional expression.
                </p>
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-purple-800 text-sm"><strong>Technique:</strong> Silent bend up, pick, then release down</p>
                </div>
              </div>
              
              <MusicScore
                title="Pre-Bend and Release Exercise"
                staves={[{
                  id: 'prebend-release',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 7b9r7/3 ## 8b10r8/2 ## | :q 8b10r8/1 ## ## ## |
notes :q 7b9r7/3 8b10r8/2 7/3 ## | :q ## ## ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'Pre-Bends with Releases: Descending Pitch Effects'
                }]}
              />
              
              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Practice Notes</h4>
                <p className="text-purple-800 text-sm leading-relaxed mb-3">
                  Bend the string silently to target pitch first, then pick and slowly release. 
                  The goal is a smooth descending pitch without any attack on the bent note.
                </p>
                <div className="flex items-center justify-center bg-purple-100 rounded-md py-2 px-4">
                  <span className="text-purple-700 font-medium text-sm">🎵 Creates unique "reverse" bend sound</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Bending Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Advanced Bending Techniques
          </h2>
          <div className="space-y-8">

            {/* Exercise 4: Multiple String Bends */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Multiple String Bends</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Bend multiple strings simultaneously or in sequence to create harmonized bends 
                  and complex pitch relationships that add richness to your melodic lines.
                </p>
                <div className="bg-amber-50 rounded-lg p-3 mb-4">
                  <p className="text-amber-800 text-sm"><strong>Challenge:</strong> Controlling multiple strings with different bend amounts</p>
                </div>
              </div>
              
              <MusicScore
                title="Multiple String Bending"
                staves={[{
                  id: 'multiple-string-bends',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q (7/3.7/2) (7b9/3.7b9/2) (7/3.7/2) ## | :q (8/2.8/1) (8b10/2.8b10/1) (8/2.8/1) ## |
notes :q 7/3 7b9/3 8/2 8b10/2 | :q 7/3 ## ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'Unison and Octave Double Bends'
                }]}
              />
              
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Practice Notes</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  Use one finger per string and coordinate the bending motion. Start with unison bends 
                  (same pitch on different strings) before attempting harmony bends.
                </p>
                <div className="flex items-center justify-center bg-amber-100 rounded-md py-2 px-4">
                  <span className="text-amber-700 font-medium text-sm">🎵 Creates thick, harmonized lead lines</span>
                </div>
              </div>
            </div>

            {/* Exercise 5: Bend and Hold with Vibrato */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Bend and Hold with Vibrato</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Expressive</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Combine bending with vibrato to create the most expressive technique in guitar playing. 
                  This is essential for blues, rock solos, and emotional musical expression.
                </p>
                <div className="bg-red-50 rounded-lg p-3 mb-4">
                  <p className="text-red-800 text-sm"><strong>Technique:</strong> Bend to pitch, hold, then apply vibrato</p>
                </div>
              </div>
              
              <MusicScore
                title="Bend and Hold with Vibrato"
                staves={[{
                  id: 'bend-vibrato',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h 7b9v/3 ## | :h 8b10v/2 ## |
notes :h 10b12v/1 ## | :h ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'Sustained Bends with Vibrato Application'
                }]}
              />
              
              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Practice Notes</h4>
                <p className="text-red-800 text-sm leading-relaxed mb-3">
                  Bend to the target pitch and hold it steady, then apply gentle vibrato. The vibrato 
                  should be controlled and musical, not wild or erratic.
                </p>
                <div className="flex items-center justify-center bg-red-100 rounded-md py-2 px-4">
                  <span className="text-red-700 font-medium text-sm">🎵 The signature sound of expressive guitar</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vibrato Techniques Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Vibrato Techniques
          </h2>
          <div className="space-y-8">

            {/* Exercise 6: Basic Vibrato */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Basic Vibrato Control</h3>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Essential</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Develop consistent, controlled vibrato that adds life and emotion to sustained notes. 
                  Master different speeds and widths to match various musical contexts.
                </p>
                <div className="bg-indigo-50 rounded-lg p-3 mb-4">
                  <p className="text-indigo-800 text-sm"><strong>Focus:</strong> Consistent oscillation speed and pitch width</p>
                </div>
              </div>
              
              <MusicScore
                title="Basic Vibrato Exercise"
                staves={[{
                  id: 'basic-vibrato',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w 7v/3 | :w 10v/2 |
notes :w 12v/1 | :w 15v/1`,
                  width: 550,
                  scale: 1.0,
                  title: 'Sustained Notes with Vibrato on Different Strings'
                }]}
              />
              
              <div className="mt-6 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">Practice Notes</h4>
                <p className="text-indigo-800 text-sm leading-relaxed mb-3">
                  Start the vibrato motion after the note is clearly established. Use wrist motion 
                  primarily, with finger support. Practice both fast and slow vibrato speeds.
                </p>
                <div className="flex items-center justify-center bg-indigo-100 rounded-md py-2 px-4">
                  <span className="text-indigo-700 font-medium text-sm">🎵 Speed: 4-8 oscillations per second</span>
                </div>
              </div>
            </div>

            {/* Exercise 7: Delayed Vibrato */}
            <div className="bg-white rounded-xl border border-cyan-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  7
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Delayed Vibrato Entry</h3>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full">Sophisticated</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Master the sophisticated technique of delayed vibrato - letting the note ring 
                  clearly before gradually introducing vibrato for maximum emotional impact.
                </p>
                <div className="bg-cyan-50 rounded-lg p-3 mb-4">
                  <p className="text-cyan-800 text-sm"><strong>Timing:</strong> Note → Silence → Gradual vibrato introduction</p>
                </div>
              </div>
              
              <MusicScore
                title="Delayed Vibrato Exercise"
                staves={[{
                  id: 'delayed-vibrato',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 12/1 :q 12v/1 :h 15/1 | :q 15v/1 :h. 12v/1 |
notes :q 10/2 :q 10v/2 :h 12/2 | :q 12v/2 :h. ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'Progressive Vibrato Introduction'
                }]}
              />
              
              <div className="mt-6 bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                <h4 className="font-medium text-cyan-900 mb-2">Practice Notes</h4>
                <p className="text-cyan-800 text-sm leading-relaxed mb-3">
                  Let the initial note ring cleanly, then gradually introduce vibrato. This creates 
                  dramatic tension and is very effective for climactic moments in solos.
                </p>
                <div className="flex items-center justify-center bg-cyan-100 rounded-md py-2 px-4">
                  <span className="text-cyan-700 font-medium text-sm">🎵 Creates maximum emotional impact</span>
                </div>
              </div>
            </div>

            {/* Exercise 8: Wide vs. Narrow Vibrato */}
            <div className="bg-white rounded-xl border border-orange-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  8
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Vibrato Width Control</h3>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">Stylistic</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Learn to control the width (pitch deviation) of your vibrato to match different 
                  musical styles - from subtle jazz vibrato to wide blues/rock expression.
                </p>
                <div className="bg-orange-50 rounded-lg p-3 mb-4">
                  <p className="text-orange-800 text-sm"><strong>Range:</strong> Narrow (quarter-tone) to wide (half-step) vibrato</p>
                </div>
              </div>
              
              <MusicScore
                title="Vibrato Width Variations"
                staves={[{
                  id: 'vibrato-width',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h 12v/1 :h 12v/1 | :h 10v/2 :h 10v/2 |
notes :h 7v/3 :h 7v/3 | :h ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'Narrow vs. Wide Vibrato Comparison'
                }]}
              />
              
              <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h4 className="font-medium text-orange-900 mb-2">Practice Notes</h4>
                <p className="text-orange-800 text-sm leading-relaxed mb-3">
                  Practice the same note with different vibrato widths. Narrow vibrato for jazz/classical, 
                  medium for rock, wide for blues. Match the style to the musical context.
                </p>
                <div className="flex items-center justify-center bg-orange-100 rounded-md py-2 px-4">
                  <span className="text-orange-700 font-medium text-sm">🎵 Style-appropriate vibrato selection</span>
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
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-200">
              <h3 className="text-lg font-semibold text-rose-900 mb-4">Technical Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 mt-1">•</span>
                  <span className="text-rose-800">Start with reference notes to train pitch accuracy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 mt-1">•</span>
                  <span className="text-rose-800">Practice bends on all strings to feel resistance differences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 mt-1">•</span>
                  <span className="text-rose-800">Use multiple fingers for strength and control</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 mt-1">•</span>
                  <span className="text-rose-800">Record yourself to evaluate pitch accuracy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 mt-1">•</span>
                  <span className="text-rose-800">Practice slow, controlled vibrato before attempting fast</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Common Challenges</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Inaccurate Pitch</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Practice with a tuner or backing track to verify target pitches. 
                    Play the target note first, then bend to match it.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Inconsistent Vibrato</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Focus on regular, controlled motion. Practice with a metronome 
                    to develop consistent timing and rhythm.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Weak Finger Strength</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Build up gradually with easier bends. Use multiple fingers 
                    for support and practice finger strengthening exercises.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Stylistic Applications</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Blues & Rock</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Wide, emotional bends</li>
                  <li>• Aggressive vibrato</li>
                  <li>• Pre-bend releases</li>
                  <li>• Multiple string bends</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Jazz & Fusion</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Subtle, controlled vibrato</li>
                  <li>• Precise quarter-tone bends</li>
                  <li>• Delayed vibrato entry</li>
                  <li>• Sophisticated pitch manipulation</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Classical & Contemporary</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Minimal, musical vibrato</li>
                  <li>• Precise intonation</li>
                  <li>• Tasteful expression</li>
                  <li>• Context-appropriate technique</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-4 border border-rose-200">
              <h4 className="font-medium text-rose-900 mb-2">Performance Context</h4>
              <p className="text-rose-800 text-sm leading-relaxed">
                Bending and vibrato are the most personal aspects of guitar technique - they're your 
                musical signature. Different players have distinctly recognizable vibrato styles. 
                The key is developing control so you can consciously choose the appropriate technique 
                for each musical moment. Great bending and vibrato serve the music, not the ego. 
                Practice these techniques not just for technical mastery, but for emotional expression 
                and musical communication.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
