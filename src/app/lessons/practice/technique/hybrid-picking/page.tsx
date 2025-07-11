"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

export default function HybridPickingPage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Hybrid Picking Technique"
        subtitle="Master the versatile combination of pick and fingers that unlocks fluid arpeggios, complex patterns, and expressive playing across all musical styles."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl p-8 mb-12 border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Hybrid Picking Mastery</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Hybrid picking combines the precision of a pick with the flexibility of fingerpicking, 
            creating a powerful technique that allows guitarists to play complex patterns, fluid arpeggios, 
            and expressive phrases that would be difficult or impossible with pick alone. This technique 
            is essential for country, jazz, rock, and fusion styles, offering unprecedented control over 
            note articulation, dynamics, and string independence. Mastering hybrid picking opens up new 
            musical possibilities and dramatically expands your technical vocabulary.
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
                  Hold pick normally between thumb and index finger
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  Keep middle and ring fingers available for plucking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  Maintain relaxed hand position with slight arch
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  Angle wrist slightly for optimal finger access
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Finger Assignment</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  Pick (P): Usually handles bass strings and downbeats
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  Middle finger (M): Typically plucks G and B strings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  Ring finger (A): Often handles high E string
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  Pinky: Sometimes used for advanced patterns
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Key Benefits</h4>
            <p className="text-gray-800 text-sm leading-relaxed">
              Hybrid picking allows simultaneous playing of non-adjacent strings, smoother arpeggios, 
              better string independence, enhanced dynamics through finger vs. pick articulation, 
              and access to complex patterns that would be awkward with pick alone. It's particularly 
              valuable for country chicken picking, jazz comping, rock arpeggios, and fusion techniques.
            </p>
          </div>
        </div>

        {/* Basic Exercises Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Foundation Exercises
          </h2>
          <div className="space-y-8">

            {/* Exercise 1: Basic Pick and Finger Coordination */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Basic Pick and Finger Coordination</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Foundation</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Establish the fundamental coordination between pick and fingers with simple alternating 
                  patterns. Focus on clean, even tone production from both pick and fingers.
                </p>
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-green-800 text-sm"><strong>Focus:</strong> Even volume and tone between pick and finger attacks</p>
                </div>
              </div>
              
              <MusicScore
                title="Basic Pick and Finger Coordination"
                staves={[{
                  id: 'basic-hybrid-coordination',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 0/6 0/3 0/6 0/3 | :q 0/5 0/2 0/5 0/2 |
notes :8 0/6 0/3 0/6 0/3 0/6 0/3 0/6 0/3 | :8 0/5 0/2 0/5 0/2 0/5 0/2 0/5 0/2`,
                  width: 550,
                  scale: 1.0,
                  title: 'Pick (P) on bass strings, Middle finger (M) on treble strings'
                }]}
              />
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-900 mb-2">Practice Notes</h4>
                <p className="text-green-800 text-sm leading-relaxed mb-3">
                  Use pick for bass strings (6th and 5th) and middle finger for treble strings (3rd and 2nd). 
                  Focus on consistent volume and timing between both techniques.
                </p>
                <div className="flex items-center justify-center bg-green-100 rounded-md py-2 px-4">
                  <span className="text-green-700 font-medium text-sm">🎵 Suggested starting tempo: 60 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 2: Three-String Arpeggios */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Three-String Arpeggios</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Essential</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Practice basic triadic arpeggios using pick for the bass note and fingers for the 
                  upper two notes. This is the foundation for hybrid picking arpeggio technique.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-blue-800 text-sm"><strong>Pattern:</strong> Pick (bass) → Middle finger → Ring finger</p>
                </div>
              </div>
              
              <MusicScore
                title="Three-String Arpeggios"
                staves={[{
                  id: 'three-string-arpeggios',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 0/6 0/3 0/1 0/3 0/6 0/3 0/1 0/3 |
notes :8 3/6 0/3 1/1 0/3 3/6 0/3 1/1 0/3 |
notes :8 2/5 0/2 1/1 0/2 2/5 0/2 1/1 0/2`,
                  width: 550,
                  scale: 1.0,
                  title: 'C Major, G Major, and D Major Arpeggios'
                }]}
              />
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Practice Notes</h4>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  Use pick for bass notes, middle finger for middle string, ring finger for high string. 
                  Practice both ascending and descending patterns with smooth, flowing motion.
                </p>
                <div className="flex items-center justify-center bg-blue-100 rounded-md py-2 px-4">
                  <span className="text-blue-700 font-medium text-sm">🎵 Suggested starting tempo: 80 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 3: String Skipping Patterns */}
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">String Skipping Patterns</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Coordination</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Develop independence between pick and fingers by playing patterns that skip strings, 
                  allowing simultaneous attacks on non-adjacent strings for complex harmonic textures.
                </p>
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-purple-800 text-sm"><strong>Advantage:</strong> Simultaneous notes on non-adjacent strings</p>
                </div>
              </div>
              
              <MusicScore
                title="String Skipping Patterns"
                staves={[{
                  id: 'string-skipping-hybrid',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q (0/6.0/3) (2/6.2/3) (3/6.0/3) (0/6.2/3) |
notes :8 (0/6.0/2) (2/6.1/2) (3/6.0/2) (0/6.1/2) (0/6.0/2) (2/6.1/2) (3/6.0/2) (0/6.1/2) |
notes :q (0/5.0/1) (2/5.1/1) (3/5.0/1) (0/5.1/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'Simultaneous Bass and Treble String Attacks'
                }]}
              />
              
              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Practice Notes</h4>
                <p className="text-purple-800 text-sm leading-relaxed mb-3">
                  Play bass and treble strings simultaneously using pick and finger. This creates 
                  harmonic intervals and demonstrates hybrid picking's unique capabilities.
                </p>
                <div className="flex items-center justify-center bg-purple-100 rounded-md py-2 px-4">
                  <span className="text-purple-700 font-medium text-sm">🎵 Focus on simultaneous attacks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intermediate Applications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Intermediate Applications
          </h2>
          <div className="space-y-8">

            {/* Exercise 4: Country Chicken Picking */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Country Chicken Picking</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Style</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Master the classic country "chicken picking" style that combines aggressive finger 
                  snaps with pick attacks to create the percussive, dynamic sound essential to country guitar.
                </p>
                <div className="bg-amber-50 rounded-lg p-3 mb-4">
                  <p className="text-amber-800 text-sm"><strong>Technique:</strong> Sharp finger snaps for percussive accent notes</p>
                </div>
              </div>
              
              <MusicScore
                title="Country Chicken Picking"
                staves={[{
                  id: 'chicken-picking',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :16 0/4 0/3 0/2 0/3 0/4 0/3 0/2 0/3 0/4 0/3 0/2 0/3 0/4 0/3 0/2 0/3 |
notes :8 2/4 ## 2/3 ## 2/2 2/3 2/2 ## |
notes :16 0/4 2/3 0/2 2/3 0/4 2/3 0/2 2/3 0/4 2/3 0/2 2/3 0/4 2/3 0/2 2/3`,
                  width: 550,
                  scale: 1.0,
                  title: 'Classic Country Chicken Picking Pattern'
                }]}
              />
              
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Practice Notes</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  Use aggressive finger snaps for accent notes, creating a sharp, percussive sound. 
                  Combine with pick for bass notes to create the classic country texture.
                </p>
                <div className="flex items-center justify-center bg-amber-100 rounded-md py-2 px-4">
                  <span className="text-amber-700 font-medium text-sm">🎵 Suggested starting tempo: 120 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 5: Jazz Chord Comping */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Jazz Chord Comping</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Jazz</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Apply hybrid picking to jazz comping patterns, allowing for bass note independence 
                  while playing chord voicings, creating fuller harmonic textures and walking bass lines.
                </p>
                <div className="bg-red-50 rounded-lg p-3 mb-4">
                  <p className="text-red-800 text-sm"><strong>Application:</strong> Independent bass lines with chord comping</p>
                </div>
              </div>
              
              <MusicScore
                title="Jazz Chord Comping"
                staves={[{
                  id: 'jazz-comping',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q (3/6.3/4.4/3.3/2) ## (3/6.3/4.4/3.3/2) ## |
notes :8 3/6 (3/4.4/3.3/2) 5/6 (3/4.4/3.3/2) 3/6 (3/4.4/3.3/2) 2/6 (3/4.4/3.3/2) |
notes :q (0/6.2/4.1/3.0/2) ## (0/6.2/4.1/3.0/2) ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'Jazz Comping: Bass Note + Chord Voicings'
                }]}
              />
              
              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Practice Notes</h4>
                <p className="text-red-800 text-sm leading-relaxed mb-3">
                  Use pick for bass notes and fingers for chord voicings. Practice maintaining 
                  steady comp rhythm while incorporating walking bass movement.
                </p>
                <div className="flex items-center justify-center bg-red-100 rounded-md py-2 px-4">
                  <span className="text-red-700 font-medium text-sm">🎵 Suggested starting tempo: 100 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 6: Rock Arpeggio Patterns */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Rock Arpeggio Patterns</h3>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Rock</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Use hybrid picking for fluid rock arpeggios that span multiple octaves and string sets, 
                  creating smooth, flowing passages that would be awkward with pick alone.
                </p>
                <div className="bg-indigo-50 rounded-lg p-3 mb-4">
                  <p className="text-indigo-800 text-sm"><strong>Benefit:</strong> Smoother wide-interval arpeggios and cascading patterns</p>
                </div>
              </div>
              
              <MusicScore
                title="Rock Arpeggio Patterns"
                staves={[{
                  id: 'rock-arpeggios',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 0/6 3/4 0/3 3/1 0/3 3/4 0/6 3/4 |
notes :16 0/6 3/4 0/3 3/1 5/1 3/1 0/3 3/4 0/6 3/4 0/3 3/1 5/1 3/1 0/3 3/4 |
notes :8 2/5 0/4 2/3 0/2 2/3 0/4 2/5 0/4`,
                  width: 550,
                  scale: 1.0,
                  title: 'Flowing Rock Arpeggios Across String Sets'
                }]}
              />
              
              <div className="mt-6 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">Practice Notes</h4>
                <p className="text-indigo-800 text-sm leading-relaxed mb-3">
                  Use pick for bass strings and fingers for treble strings to create smooth, 
                  cascading arpeggio patterns. Focus on even timing and fluid motion.
                </p>
                <div className="flex items-center justify-center bg-indigo-100 rounded-md py-2 px-4">
                  <span className="text-indigo-700 font-medium text-sm">🎵 Suggested starting tempo: 90 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Techniques Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Advanced Techniques
          </h2>
          <div className="space-y-8">

            {/* Exercise 7: Four-Finger Independence */}
            <div className="bg-white rounded-xl border border-cyan-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  7
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Four-Finger Independence</h3>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Develop full four-finger independence using pick, middle, ring, and pinky fingers 
                  for complex polyphonic passages and advanced fingerstyle-like textures.
                </p>
                <div className="bg-cyan-50 rounded-lg p-3 mb-4">
                  <p className="text-cyan-800 text-sm"><strong>Goal:</strong> Complete finger independence for complex polyphonic playing</p>
                </div>
              </div>
              
              <MusicScore
                title="Four-Finger Independence"
                staves={[{
                  id: 'four-finger-independence',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :16 0/6 0/4 0/3 0/1 0/6 0/4 0/3 0/1 0/6 0/4 0/3 0/1 0/6 0/4 0/3 0/1 |
notes :8 (0/6.0/4.0/3.0/1) ## (0/6.0/4.0/3.0/1) ## (0/6.0/4.0/3.0/1) ## (0/6.0/4.0/3.0/1) ## |
notes :16 3/6 0/4 2/3 0/1 3/6 0/4 2/3 0/1 3/6 0/4 2/3 0/1 3/6 0/4 2/3 0/1`,
                  width: 550,
                  scale: 1.0,
                  title: 'Pick (P), Middle (M), Ring (A), Pinky (C) Patterns'
                }]}
              />
              
              <div className="mt-6 bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                <h4 className="font-medium text-cyan-900 mb-2">Practice Notes</h4>
                <p className="text-cyan-800 text-sm leading-relaxed mb-3">
                  Practice each finger independently, then combine for simultaneous attacks. 
                  This opens up advanced polyphonic possibilities.
                </p>
                <div className="flex items-center justify-center bg-cyan-100 rounded-md py-2 px-4">
                  <span className="text-cyan-700 font-medium text-sm">🎵 Start very slowly for accuracy</span>
                </div>
              </div>
            </div>

            {/* Exercise 8: Complex Musical Integration */}
            <div className="bg-white rounded-xl border border-orange-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  8
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Complex Musical Integration</h3>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">Masterful</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Integrate hybrid picking into complex musical contexts combining melody, harmony, 
                  and rhythm simultaneously for complete musical expression and professional performance.
                </p>
                <div className="bg-orange-50 rounded-lg p-3 mb-4">
                  <p className="text-orange-800 text-sm"><strong>Integration:</strong> Melody, harmony, and rhythm simultaneously</p>
                </div>
              </div>
              
              <MusicScore
                title="Complex Musical Integration"
                staves={[{
                  id: 'complex-integration',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 3/6 (0/4.2/3) :16 5/6 3/1 :8 (0/4.2/3) :16 3/6 0/1 :8 (0/4.2/3) |
notes :16 0/6 2/4 0/3 3/1 2/6 0/4 2/3 0/1 0/6 2/4 0/3 3/1 2/6 0/4 2/3 0/1 |
notes :8 (3/6.0/4.2/3.0/1) ## (2/6.2/4.0/3.1/1) ## (0/6.0/4.2/3.0/1) ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'Complete Musical Integration: Bass, Chords, and Melody'
                }]}
              />
              
              <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h4 className="font-medium text-orange-900 mb-2">Practice Notes</h4>
                <p className="text-orange-800 text-sm leading-relaxed mb-3">
                  This exercise combines all hybrid picking elements: bass lines, chord voicings, 
                  and melodic passages. Master each element separately before combining.
                </p>
                <div className="flex items-center justify-center bg-orange-100 rounded-md py-2 px-4">
                  <span className="text-orange-700 font-medium text-sm">🎵 Suggested starting tempo: 80 BPM</span>
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
                  <span className="text-gray-800">Start with simple pick-finger alternations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">•</span>
                  <span className="text-gray-800">Practice consistent volume between pick and fingers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">•</span>
                  <span className="text-gray-800">Work on finger independence with slow practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">•</span>
                  <span className="text-gray-800">Use metronome for precise timing coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">•</span>
                  <span className="text-gray-800">Practice with different dynamics and articulations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Common Challenges</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Volume Inconsistency</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Work on matching the volume and tone quality between pick attacks 
                    and finger plucks. Practice with consistent dynamics.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Finger Independence</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Practice each finger separately before combining. Avoid sympathetic 
                    movement in unused fingers during exercises.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Timing Coordination</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Use slow practice with metronome to develop precise timing between 
                    pick and finger attacks, especially for simultaneous notes.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Where to Use Hybrid Picking</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Country & Bluegrass</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Chicken picking techniques</li>
                  <li>• Banjo-style roll patterns</li>
                  <li>• Fast arpeggio passages</li>
                  <li>• Percussive accent notes</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Jazz & Fusion</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Chord comping with bass lines</li>
                  <li>• Complex arpeggio passages</li>
                  <li>• Polyphonic chord voicings</li>
                  <li>• Walking bass with chords</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Rock & Progressive</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Wide-interval arpeggios</li>
                  <li>• Complex rhythmic patterns</li>
                  <li>• String skipping passages</li>
                  <li>• Fingerstyle-rock hybrid</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">Performance Context</h4>
              <p className="text-gray-800 text-sm leading-relaxed">
                Hybrid picking is one of the most versatile techniques in guitar playing, bridging the 
                gap between flatpicking and fingerstyle approaches. It allows guitarists to access 
                complex textures, simultaneous melodic and harmonic lines, and expressive dynamics 
                that would be impossible with pick alone. The key to mastering hybrid picking is 
                developing finger independence, consistent volume control, and musical sensitivity. 
                Great hybrid picking sounds effortless and musical, never mechanical or forced. 
                Practice integrating the technique gradually into your playing, starting with simple 
                applications and building to complex musical expressions that serve the song.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
