"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

export default function PalmMutingPage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Palm Muting Technique"
        subtitle="Master the essential rhythm guitar technique that creates percussive, controlled tones and is fundamental to rock, metal, and many contemporary guitar styles."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl p-8 mb-12 border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Palm Muting Mastery</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Palm muting is a fundamental guitar technique that uses the picking hand to partially dampen 
            the strings, creating a controlled, percussive tone that's essential for rhythm guitar playing. 
            This technique provides the rhythmic backbone for rock, metal, punk, and many other styles, 
            allowing guitarists to create everything from subtle texture variations to aggressive, chunky 
            riffs. Mastering palm muting is crucial for developing tight, professional-sounding rhythm 
            guitar parts and dynamic musical expression.
          </p>
        </div>

        {/* Technique Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Fundamental Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Hand Position</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  Rest palm edge lightly on strings near bridge
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  Maintain contact with side of palm, not fingers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  Allow pick to move freely while palm stays stable
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  Adjust pressure for different muting intensities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  Keep wrist relaxed and natural
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Tone Control</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  Light pressure for subtle dampening
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  Heavier pressure for percussive "chunk"
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  Move palm position to change tone color
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  Coordinate with picking dynamics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  Practice smooth on/off transitions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Basic Palm Muting Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Basic Palm Muting Techniques
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 1: Basic Palm Muting */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Basic Palm Muting Control</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Foundation</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Learn the fundamental palm muting position and pressure control. Start with simple 
                  downstrokes to establish the basic hand position and muting technique.
                </p>
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-green-800 text-sm"><strong>Focus:</strong> Consistent palm pressure and clean downstrokes</p>
                </div>
              </div>
              
              <MusicScore
                title="Basic Palm Muting Exercise"
                staves={[{
                  id: 'basic-palm-muting',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 0/6 0/6 0/6 0/6 | :q 3/6 3/6 3/6 3/6 |
notes :q 0/5 0/5 0/5 0/5 | :q 2/5 2/5 2/5 2/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'Basic Palm Muted Quarter Notes: Low E and A Strings'
                }]}
              />
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-900 mb-2">Practice Notes</h4>
                <p className="text-green-800 text-sm leading-relaxed mb-3">
                  Rest the edge of your palm lightly on the strings near the bridge. Use consistent 
                  downstrokes and listen for the characteristic "thunky" palm muted tone.
                </p>
                <div className="flex items-center justify-center bg-green-100 rounded-md py-2 px-4">
                  <span className="text-green-700 font-medium text-sm">🎵 Suggested starting tempo: 80 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 2: Palm Muting with Alternate Picking */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Palm Muting with Alternate Picking</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Essential</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Combine palm muting with alternate picking to create faster rhythmic patterns while 
                  maintaining consistent muting pressure and tone control.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-blue-800 text-sm"><strong>Challenge:</strong> Maintaining consistent muting during up and down strokes</p>
                </div>
              </div>
              
              <MusicScore
                title="Palm Muting with Alternate Picking"
                staves={[{
                  id: 'palm-muting-alternate',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 0/6 0/6 0/6 0/6 0/6 0/6 0/6 0/6 |
notes :8 3/6 3/6 5/6 5/6 3/6 3/6 0/6 0/6`,
                  width: 550,
                  scale: 1.0,
                  title: 'Eighth Note Palm Muting with Movement'
                }]}
              />
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Practice Notes</h4>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  Use strict alternate picking (down-up-down-up). The palm should stay in contact 
                  with the strings throughout both down and up strokes for consistent tone.
                </p>
                <div className="flex items-center justify-center bg-blue-100 rounded-md py-2 px-4">
                  <span className="text-blue-700 font-medium text-sm">🎵 Suggested starting tempo: 100 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 3: Palm Muting On/Off Control */}
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Palm Muting On/Off Transitions</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Dynamic</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Master smooth transitions between palm muted and open (non-muted) notes to create 
                  dynamic contrast and musical interest in your rhythm playing.
                </p>
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-purple-800 text-sm"><strong>Technique:</strong> Quick palm lift/contact without affecting picking rhythm</p>
                </div>
              </div>
              
              <MusicScore
                title="Palm Muting On/Off Exercise"
                staves={[{
                  id: 'palm-muting-transitions',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 0/6 3/6 0/6 3/6 | :8 0/6 0/6 3/6 3/6 0/6 0/6 3/6 3/6 |
notes :q 0/5 2/5 0/5 2/5 | :8 0/5 0/5 2/5 2/5 0/5 0/5 2/5 2/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'Alternating Palm Muted (PM) and Open Notes'
                }]}
              />
              
              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Practice Notes</h4>
                <p className="text-purple-800 text-sm leading-relaxed mb-3">
                  Practice lifting the palm quickly for open notes, then reapplying for muted notes. 
                  The transition should be smooth without affecting the picking rhythm.
                </p>
                <div className="flex items-center justify-center bg-purple-100 rounded-md py-2 px-4">
                  <span className="text-purple-700 font-medium text-sm">🎵 Focus on smooth palm movements</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rhythm Applications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Rhythm Applications
          </h2>
          <div className="space-y-8">

            {/* Exercise 4: Power Chord Palm Muting */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Power Chord Palm Muting</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Rock Essential</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Apply palm muting to power chords to create the tight, chunky rhythm sound that's 
                  essential for rock, metal, and punk music. This is a cornerstone technique for rhythm guitar.
                </p>
                <div className="bg-amber-50 rounded-lg p-3 mb-4">
                  <p className="text-amber-800 text-sm"><strong>Application:</strong> Classic rock and metal rhythm foundation</p>
                </div>
              </div>
              
              <MusicScore
                title="Power Chord Palm Muting"
                staves={[{
                  id: 'power-chord-muting',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q (0/6.0/5) (3/6.3/5) (0/6.0/5) (3/6.3/5) |
notes :8 (0/6.0/5) (0/6.0/5) (3/6.3/5) (3/6.3/5) (0/6.0/5) (0/6.0/5) (3/6.3/5) (3/6.3/5)`,
                  width: 550,
                  scale: 1.0,
                  title: 'Palm Muted Power Chords: E5 and G5'
                }]}
              />
              
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Practice Notes</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  Palm mute both strings of the power chord simultaneously. This creates the tight, 
                  controlled sound essential for heavy rhythm guitar playing.
                </p>
                <div className="flex items-center justify-center bg-amber-100 rounded-md py-2 px-4">
                  <span className="text-amber-700 font-medium text-sm">🎵 Suggested starting tempo: 120 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 5: Syncopated Palm Muting */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Syncopated Palm Muting</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Rhythmic</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Create complex rhythmic patterns using palm muting with syncopated rhythms, 
                  off-beat accents, and varied note durations for more sophisticated groove playing.
                </p>
                <div className="bg-red-50 rounded-lg p-3 mb-4">
                  <p className="text-red-800 text-sm"><strong>Style:</strong> Funk, alternative rock, and modern metal rhythms</p>
                </div>
              </div>
              
              <MusicScore
                title="Syncopated Palm Muting"
                staves={[{
                  id: 'syncopated-muting',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 0/6 ## 0/6 ## :q 0/6 :8 0/6 0/6 |
notes :16 0/6 0/6 ## 0/6 :8 0/6 ## :16 0/6 0/6 ## 0/6 :8 0/6`,
                  width: 550,
                  scale: 1.0,
                  title: 'Syncopated Palm Muted Rhythm Patterns'
                }]}
              />
              
              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Practice Notes</h4>
                <p className="text-red-800 text-sm leading-relaxed mb-3">
                  Practice with a metronome to nail the syncopated timing. The palm muted notes should 
                  be tight and controlled, creating clear rhythmic definition.
                </p>
                <div className="flex items-center justify-center bg-red-100 rounded-md py-2 px-4">
                  <span className="text-red-700 font-medium text-sm">🎵 Suggested starting tempo: 90 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 6: Gallop Rhythm Palm Muting */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Gallop Rhythm Palm Muting</h3>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Metal</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Master the classic metal "gallop" rhythm using palm muting to create the driving, 
                  aggressive sound characteristic of heavy metal and thrash music.
                </p>
                <div className="bg-indigo-50 rounded-lg p-3 mb-4">
                  <p className="text-indigo-800 text-sm"><strong>Pattern:</strong> Long-short-short triplet feel (galloping horse rhythm)</p>
                </div>
              </div>
              
              <MusicScore
                title="Gallop Rhythm Palm Muting"
                staves={[{
                  id: 'gallop-muting',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8t 0/6 0/6 0/6 :8t 0/6 0/6 0/6 :8t 0/6 0/6 0/6 :8t 0/6 0/6 0/6 |
notes :8t (0/6.0/5) (0/6.0/5) (0/6.0/5) :8t (0/6.0/5) (0/6.0/5) (0/6.0/5) :8t (0/6.0/5) (0/6.0/5) (0/6.0/5) :8t (0/6.0/5) (0/6.0/5) (0/6.0/5)`,
                  width: 550,
                  scale: 1.0,
                  title: 'Classic Metal Gallop Rhythm with Palm Muting'
                }]}
              />
              
              <div className="mt-6 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">Practice Notes</h4>
                <p className="text-indigo-800 text-sm leading-relaxed mb-3">
                  Use consistent palm muting throughout the gallop pattern. The triplet feel should be 
                  tight and aggressive. Practice slowly first to establish the rhythm clearly.
                </p>
                <div className="flex items-center justify-center bg-indigo-100 rounded-md py-2 px-4">
                  <span className="text-indigo-700 font-medium text-sm">🎵 Suggested starting tempo: 110 BPM (triplets)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Applications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Advanced Applications
          </h2>
          <div className="space-y-8">

            {/* Exercise 7: Variable Palm Muting Pressure */}
            <div className="bg-white rounded-xl border border-cyan-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  7
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Variable Muting Pressure</h3>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full">Expressive</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Learn to vary palm muting pressure during playing to create gradual tonal changes 
                  and expressive effects, from subtle dampening to complete percussive muting.
                </p>
                <div className="bg-cyan-50 rounded-lg p-3 mb-4">
                  <p className="text-cyan-800 text-sm"><strong>Effect:</strong> Dynamic tonal control within single phrases</p>
                </div>
              </div>
              
              <MusicScore
                title="Variable Muting Pressure"
                staves={[{
                  id: 'variable-muting',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h 0/6 :h 0/6 | :h 0/6 :h 0/6 |
notes :q 0/6 0/6 0/6 0/6 | :q 0/6 0/6 0/6 0/6`,
                  width: 550,
                  scale: 1.0,
                  title: 'Gradual Pressure Changes: Light → Medium → Heavy → Off'
                }]}
              />
              
              <div className="mt-6 bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                <h4 className="font-medium text-cyan-900 mb-2">Practice Notes</h4>
                <p className="text-cyan-800 text-sm leading-relaxed mb-3">
                  Start with light palm contact, gradually increase pressure to heavy muting, then release 
                  completely. Listen to the tonal changes and practice smooth transitions.
                </p>
                <div className="flex items-center justify-center bg-cyan-100 rounded-md py-2 px-4">
                  <span className="text-cyan-700 font-medium text-sm">🎵 Focus on gradual pressure changes</span>
                </div>
              </div>
            </div>

            {/* Exercise 8: Complex Rhythm Combinations */}
            <div className="bg-white rounded-xl border border-orange-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  8
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Complex Rhythm Integration</h3>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">Professional</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Combine palm muting with complex rhythmic patterns, chord changes, and dynamic 
                  variations to create professional-level rhythm guitar parts for any musical style.
                </p>
                <div className="bg-orange-50 rounded-lg p-3 mb-4">
                  <p className="text-orange-800 text-sm"><strong>Integration:</strong> Palm muting with chord progressions and complex rhythms</p>
                </div>
              </div>
              
              <MusicScore
                title="Complex Rhythm Integration"
                staves={[{
                  id: 'complex-rhythm',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :16 (0/6.0/5) (0/6.0/5) ## (0/6.0/5) :8 (3/6.3/5) :16 (3/6.3/5) (3/6.3/5) ## (3/6.3/5) :8 (5/6.5/5) |
notes :8 (7/6.7/5) ## (7/6.7/5) (5/6.5/5) :16 (5/6.5/5) (5/6.5/5) :8 (3/6.3/5) (0/6.0/5)`,
                  width: 550,
                  scale: 1.0,
                  title: 'Advanced Rhythm Pattern: E5-G5-A5-B5 Progression'
                }]}
              />
              
              <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h4 className="font-medium text-orange-900 mb-2">Practice Notes</h4>
                <p className="text-orange-800 text-sm leading-relaxed mb-3">
                  This combines chord changes, complex rhythms, and palm muting variations. Master each 
                  element separately before putting them together for professional rhythm guitar playing.
                </p>
                <div className="flex items-center justify-center bg-orange-100 rounded-md py-2 px-4">
                  <span className="text-orange-700 font-medium text-sm">🎵 Suggested starting tempo: 100 BPM</span>
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
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">•</span>
                  <span className="text-gray-800">Start with simple downstrokes before adding complexity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">•</span>
                  <span className="text-gray-800">Practice consistent palm pressure and position</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">•</span>
                  <span className="text-gray-800">Use a metronome for solid rhythmic foundation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">•</span>
                  <span className="text-gray-800">Record yourself to evaluate tone consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">•</span>
                  <span className="text-gray-800">Practice smooth transitions between muted and open</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Common Challenges</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Inconsistent Tone</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Practice maintaining consistent palm pressure and position. 
                    The muting should sound even across all repetitions.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Over-Muting</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Use lighter pressure - palm muting should dampen but not completely 
                    kill the string vibration. Find the sweet spot.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Picking Interference</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Keep the palm stable while allowing the pick to move freely. 
                    Don't let palm position affect picking motion.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Where to Use Palm Muting</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Rock & Metal</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Power chord chugging</li>
                  <li>• Gallop rhythms</li>
                  <li>• Aggressive riff sections</li>
                  <li>• Tight rhythm playing</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Funk & Alternative</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Syncopated groove patterns</li>
                  <li>• Percussive rhythm effects</li>
                  <li>• Dynamic contrast playing</li>
                  <li>• Textural variations</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Country & Pop</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Subtle rhythm dampening</li>
                  <li>• Clean tone control</li>
                  <li>• Acoustic-style playing</li>
                  <li>• Gentle rhythmic texture</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">Performance Context</h4>
              <p className="text-gray-800 text-sm leading-relaxed">
                Palm muting is one of the most versatile and essential rhythm guitar techniques. It provides 
                control over string sustain and tone, allowing guitarists to create everything from subtle 
                textural variations to aggressive percussive effects. The key is learning when and how much 
                to apply - from light dampening for gentle control to heavy muting for chunky metal riffs. 
                Great rhythm guitarists use palm muting as a dynamic tool, varying pressure and application 
                to serve the music's emotional and rhythmic needs. Practice integrating palm muting smoothly 
                into your playing so it becomes a natural extension of your musical expression.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
