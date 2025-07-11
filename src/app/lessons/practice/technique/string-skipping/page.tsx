"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

export default function StringSkippingPage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="String Skipping Technique"
        subtitle="Master the advanced picking technique that creates wide interval jumps and unique melodic patterns through strategic string selection."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl p-8 mb-12 border border-emerald-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">String Skipping Mastery</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            String skipping is an advanced guitar technique that involves deliberately skipping over strings 
            while picking, creating wide intervallic leaps and unique melodic patterns impossible to achieve 
            through traditional scale playing. This technique adds sophistication to solos, creates unexpected 
            harmonic jumps, and is essential for modern jazz, fusion, and progressive rock playing styles.
          </p>
        </div>

        {/* Technique Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Fundamental Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Pick Control</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Maintain precise pick trajectory across strings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Use controlled alternate picking motion
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Keep consistent pick depth and angle
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Practice clean string navigation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Develop muscle memory for skip patterns
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Fretting Hand Accuracy</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Precise finger placement for wide intervals
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Efficient hand position changes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  String muting for skipped strings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Maintain finger independence
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Practice interval recognition by ear
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
            
            {/* Exercise 1: Basic String Skipping */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Basic One-String Skips</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Foundation</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Start with simple one-string skips to develop the basic motion and accuracy. 
                  Focus on clean picking and avoiding contact with the skipped string.
                </p>
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-green-800 text-sm"><strong>Pattern:</strong> Skip the middle string while playing outer strings</p>
                </div>
              </div>
              
              <MusicScore
                title="Basic String Skipping Exercise"
                staves={[{
                  id: 'basic-string-skips',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 5/6 5/4 5/6 5/4 5/6 5/4 5/6 5/4 |
notes :8 7/5 7/3 7/5 7/3 7/5 7/3 7/5 7/3`,
                  width: 550,
                  scale: 1.0,
                  title: 'One-String Skip: 6th to 4th String, 5th to 3rd String'
                }]}
              />
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-900 mb-2">Practice Notes</h4>
                <p className="text-green-800 text-sm leading-relaxed mb-3">
                  Use strict alternate picking (down-up-down-up). The pick should arc over the skipped 
                  string without touching it. Start very slowly to develop clean technique.
                </p>
                <div className="flex items-center justify-center bg-green-100 rounded-md py-2 px-4">
                  <span className="text-green-700 font-medium text-sm">🎵 Suggested starting tempo: 60 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 2: Two-String Skips */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Two-String Skip Patterns</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Intermediate</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Advance to skipping two strings, creating even wider intervals. This pattern is commonly 
                  used in jazz and fusion for creating sophisticated melodic lines.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-blue-800 text-sm"><strong>Interval:</strong> Creates perfect 5th and octave intervals</p>
                </div>
              </div>
              
              <MusicScore
                title="Two-String Skip Exercise"
                staves={[{
                  id: 'two-string-skips',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 5/6 5/3 7/6 7/3 5/6 5/3 7/6 7/3 |
notes :8 8/5 8/2 10/5 10/2 8/5 8/2 10/5 10/2`,
                  width: 550,
                  scale: 1.0,
                  title: 'Two-String Skip: 6th to 3rd String, 5th to 2nd String'
                }]}
              />
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Practice Notes</h4>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  The larger skip requires more precise pick control. Practice the motion slowly, 
                  ensuring the pick clears both skipped strings cleanly.
                </p>
                <div className="flex items-center justify-center bg-blue-100 rounded-md py-2 px-4">
                  <span className="text-blue-700 font-medium text-sm">🎵 Suggested starting tempo: 50 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 3: Mixed Skip Patterns */}
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Mixed Skip Combinations</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Combine different skip patterns within the same phrase to create complex melodic 
                  lines with varied intervallic content and rhythmic interest.
                </p>
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-purple-800 text-sm"><strong>Challenge:</strong> Varying skip distances within one pattern</p>
                </div>
              </div>
              
              <MusicScore
                title="Mixed Skip Pattern Exercise"
                staves={[{
                  id: 'mixed-skip-patterns',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :16 5/6 7/4 5/6 8/3 7/5 10/2 7/5 5/6 8/4 5/6 7/3 10/5 7/3 8/2 5/6 7/4 |
notes :16 8/2 7/3 10/5 7/3 5/6 8/4 5/6 7/5 10/2 7/5 8/3 5/6 7/4 5/6 ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'Mixed Skip Patterns: Combining One and Two-String Skips'
                }]}
              />
              
              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Practice Notes</h4>
                <p className="text-purple-800 text-sm leading-relaxed mb-3">
                  This exercise challenges both hands with constantly changing skip distances. 
                  Focus on maintaining even timing and clean articulation throughout.
                </p>
                <div className="flex items-center justify-center bg-purple-100 rounded-md py-2 px-4">
                  <span className="text-purple-700 font-medium text-sm">🎵 Suggested starting tempo: 40 BPM (16th notes)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scale Applications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Scale Applications
          </h2>
          <div className="space-y-8">

            {/* Exercise 4: Pentatonic String Skipping */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Pentatonic String Skipping</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Musical</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Apply string skipping to pentatonic scales to create wide intervallic melodic lines 
                  that sound sophisticated while remaining harmonically accessible.
                </p>
                <div className="bg-amber-50 rounded-lg p-3 mb-4">
                  <p className="text-amber-800 text-sm"><strong>Scale:</strong> A minor pentatonic with strategic string skips</p>
                </div>
              </div>
              
              <MusicScore
                title="Pentatonic String Skipping"
                staves={[{
                  id: 'pentatonic-skipping',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=Am
notes :8 5/6 8/4 5/6 7/3 8/5 10/2 8/5 5/6 |
notes :8 10/2 8/5 7/3 5/6 8/4 5/6 ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'A Minor Pentatonic with String Skipping'
                }]}
              />
              
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Practice Notes</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  This creates beautiful wide interval melodies from familiar pentatonic shapes. 
                  Practice ascending and descending, focusing on musical phrasing.
                </p>
                <div className="flex items-center justify-center bg-amber-100 rounded-md py-2 px-4">
                  <span className="text-amber-700 font-medium text-sm">🎵 Suggested starting tempo: 70 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 5: Diatonic String Skipping */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Diatonic Scale Skipping</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Apply string skipping to major and minor scales, creating melodic sequences 
                  that highlight specific intervals and add harmonic sophistication to scale runs.
                </p>
                <div className="bg-red-50 rounded-lg p-3 mb-4">
                  <p className="text-red-800 text-sm"><strong>Pattern:</strong> G major scale with thirds and fifths emphasized</p>
                </div>
              </div>
              
              <MusicScore
                title="Diatonic Scale Skipping"
                staves={[{
                  id: 'diatonic-skipping',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=G
notes :16 3/6 5/4 5/6 7/4 7/6 9/4 9/6 10/4 10/6 12/4 12/6 14/4 14/6 15/4 15/6 17/4 |
notes :16 17/4 15/6 15/4 14/6 14/4 12/6 12/4 10/6 10/4 9/6 9/4 7/6 7/4 5/6 5/4 3/6`,
                  width: 550,
                  scale: 1.0,
                  title: 'G Major Scale with String Skipping Patterns'
                }]}
              />
              
              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Practice Notes</h4>
                <p className="text-red-800 text-sm leading-relaxed mb-3">
                  This advanced pattern covers two octaves with consistent string skipping. 
                  Focus on maintaining smooth hand position shifts and even note clarity.
                </p>
                <div className="flex items-center justify-center bg-red-100 rounded-md py-2 px-4">
                  <span className="text-red-700 font-medium text-sm">🎵 Suggested starting tempo: 45 BPM (16th notes)</span>
                </div>
              </div>
            </div>

            {/* Exercise 6: Arpeggiated String Skipping */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Arpeggiated String Skipping</h3>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Jazz</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Combine arpeggios with string skipping to create wide, harmonically rich melodic 
                  lines that outline chord progressions with sophisticated voice leading.
                </p>
                <div className="bg-indigo-50 rounded-lg p-3 mb-4">
                  <p className="text-indigo-800 text-sm"><strong>Harmony:</strong> Am7 - Dm7 - G7 - CM7 chord progression</p>
                </div>
              </div>
              
              <MusicScore
                title="Arpeggiated String Skipping"
                staves={[{
                  id: 'arpeggio-skipping',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 5/6 8/4 7/5 10/3 10/6 13/4 12/5 15/3 |
notes :8 15/6 17/4 17/5 20/3 20/6 ## ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'Jazz Chord Progression with Arpeggiated String Skipping'
                }]}
              />
              
              <div className="mt-6 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">Practice Notes</h4>
                <p className="text-indigo-800 text-sm leading-relaxed mb-3">
                  Each measure outlines a different chord using string skipping to create wide intervals. 
                  This is essential technique for modern jazz guitar improvisation.
                </p>
                <div className="flex items-center justify-center bg-indigo-100 rounded-md py-2 px-4">
                  <span className="text-indigo-700 font-medium text-sm">🎵 Suggested starting tempo: 60 BPM</span>
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

            {/* Exercise 7: Chromatic String Skipping */}
            <div className="bg-white rounded-xl border border-cyan-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  7
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Chromatic String Skipping</h3>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full">Technical</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Use chromatic passages with string skipping to create tension and release in solos, 
                  adding sophisticated harmonic movement and technical challenge.
                </p>
                <div className="bg-cyan-50 rounded-lg p-3 mb-4">
                  <p className="text-cyan-800 text-sm"><strong>Technique:</strong> Chromatic movement across non-adjacent strings</p>
                </div>
              </div>
              
              <MusicScore
                title="Chromatic String Skipping"
                staves={[{
                  id: 'chromatic-skipping',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :16 5/6 6/4 7/6 8/4 9/6 10/4 11/6 12/4 13/6 14/4 15/6 16/4 17/6 18/4 19/6 20/4 |
notes :16 20/4 19/6 18/4 17/6 16/4 15/6 14/4 13/6 12/4 11/6 10/4 9/6 8/4 7/6 6/4 5/6`,
                  width: 550,
                  scale: 1.0,
                  title: 'Chromatic Ascending and Descending with String Skipping'
                }]}
              />
              
              <div className="mt-6 bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                <h4 className="font-medium text-cyan-900 mb-2">Practice Notes</h4>
                <p className="text-cyan-800 text-sm leading-relaxed mb-3">
                  This creates dramatic tension through chromatic movement while maintaining wide intervals. 
                  Essential for modern fusion and progressive styles.
                </p>
                <div className="flex items-center justify-center bg-cyan-100 rounded-md py-2 px-4">
                  <span className="text-cyan-700 font-medium text-sm">🎵 Suggested starting tempo: 40 BPM (16th notes)</span>
                </div>
              </div>
            </div>

            {/* Exercise 8: Speed Development */}
            <div className="bg-white rounded-xl border border-orange-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  8
                </div>
                <h3 className="text-xl font-semibold text-gray-900">High-Speed String Skipping</h3>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">Virtuosic</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Develop the ability to execute string skipping at high speeds while maintaining 
                  perfect accuracy and clarity. This is the hallmark of advanced string skipping mastery.
                </p>
                <div className="bg-orange-50 rounded-lg p-3 mb-4">
                  <p className="text-orange-800 text-sm"><strong>Goal:</strong> Clean execution at performance tempos</p>
                </div>
              </div>
              
              <MusicScore
                title="High-Speed String Skipping"
                staves={[{
                  id: 'speed-skipping',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :16 12/6 12/4 12/6 12/4 15/6 15/4 15/6 15/4 17/6 17/4 17/6 17/4 19/6 19/4 19/6 19/4 |
notes :16 19/4 19/6 17/4 17/6 15/4 15/6 12/4 12/6 ## ## ## ## ## ## ## ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'High-Speed Repetitive String Skipping Pattern'
                }]}
              />
              
              <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h4 className="font-medium text-orange-900 mb-2">Practice Notes</h4>
                <p className="text-orange-800 text-sm leading-relaxed mb-3">
                  Use progressive tempo training: start at 60 BPM, increase by 10 BPM when comfortable. 
                  Focus on maintaining perfect clarity at all speeds.
                </p>
                <div className="flex items-center justify-center bg-orange-100 rounded-md py-2 px-4">
                  <span className="text-orange-700 font-medium text-sm">🎵 Progressive tempo: 60-160+ BPM</span>
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
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">Technical Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Start with single string skips before advancing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Practice pick trajectory without fretting first</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Use a metronome for consistent timing development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Record yourself to identify inconsistencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Practice both ascending and descending patterns</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Common Challenges</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Pick Catching Strings</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Practice slower with exaggerated pick motion to clear skipped strings. 
                    Focus on curved pick trajectory.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Uneven Timing</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Use a metronome and practice each skip distance separately before 
                    combining them in sequences.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Poor Intonation</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Focus on precise finger placement and practice intervals slowly 
                    to develop muscle memory for accurate fretting.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Where to Use String Skipping</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Jazz & Fusion</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Wide interval melody lines</li>
                  <li>• Chord tone outlining</li>
                  <li>• Sophisticated improvisation</li>
                  <li>• Modern jazz vocabulary</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Progressive Rock/Metal</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Technical showcase passages</li>
                  <li>• Unusual melodic intervals</li>
                  <li>• Complex instrumental sections</li>
                  <li>• Modern virtuoso playing</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Contemporary Styles</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Post-rock atmospheric parts</li>
                  <li>• Math rock complexity</li>
                  <li>• Neo-soul sophistication</li>
                  <li>• Modern fingerstyle integration</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-200">
              <h4 className="font-medium text-emerald-900 mb-2">Performance Context</h4>
              <p className="text-emerald-800 text-sm leading-relaxed">
                String skipping is most effective when used to create specific musical effects rather than as 
                constant technique. Use it to highlight important melodic moments, create tension and release, 
                or add sophistication to scale passages. The wide intervals created by string skipping can 
                dramatically change the character of familiar scales and arpeggios, making them sound fresh 
                and modern. Practice integrating string skipped passages smoothly with conventional playing 
                for maximum musical impact.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
