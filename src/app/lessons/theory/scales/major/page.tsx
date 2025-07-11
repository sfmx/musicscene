"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function MajorScalePage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Major Scale"
        subtitle="The foundation of Western music - a bright, happy-sounding scale that serves as the cornerstone for understanding all other scales and harmony."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl p-8 mb-12 border border-yellow-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Major Scale</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The major scale is the most fundamental scale in Western music, creating a bright, happy, 
            and uplifting sound that forms the foundation for countless songs across all genres. 
            Built from a specific pattern of whole and half steps (W-W-H-W-W-W-H), the major scale 
            provides the framework for understanding harmony, chord progressions, and melodic construction. 
            Learning the major scale thoroughly is essential for any guitarist, as it serves as the 
            reference point for all other scales, modes, and musical concepts.
          </p>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Scale Formula</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Pattern:</strong> W-W-H-W-W-W-H</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Intervals:</strong> 1-2-3-4-5-6-7-8</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Semitones:</strong> 2-2-1-2-2-2-1</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Character:</strong> Bright, happy, resolved</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">C Major Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Notes:</strong> C-D-E-F-G-A-B-C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>No sharps/flats:</strong> All white keys</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Half steps:</strong> E-F and B-C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Function:</strong> Reference for all other keys</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fretboard Patterns Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Fretboard Patterns
          </h2>
          
          <div className="space-y-8">
            {/* Pattern 1 */}
            <div className="bg-white rounded-xl border border-yellow-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Position 1 - Open Position</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4">C Major Scale - Open Position</h4>
                  <MusicScore
                    title="C Major Scale - Open Position"
                    staves={[{
                      id: 'c-major-open',
                      notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 3/5 0/4 2/4 3/4 | :q 0/3 2/3 0/2 1/2 | :q 3/2 1/2 0/2 2/3 | :q 0/3 3/4 2/4 0/4 3/5`,
                      width: 550,
                      scale: 1.0,
                      title: 'C-D-E-F-G-A-B-C and back down'
                    }]}
                  />
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="text-lg font-medium text-yellow-800 mb-3">Fingering Notes</h4>
                  <ul className="space-y-2 text-yellow-700 text-sm">
                    <li>• Start with C on 5th string, 3rd fret</li>
                    <li>• Use open strings for D and G</li>
                    <li>• E-F is the natural half step</li>
                    <li>• B-C is the other natural half step</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pattern 2 */}
            <div className="bg-white rounded-xl border border-yellow-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Position 2 - 2nd Position</h3>
              <MusicScore
                title="C Major Scale - 2nd Position"
                staves={[{
                  id: 'c-major-2nd-position',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 3/5 5/5 2/4 3/4 | :q 5/4 2/3 4/3 1/2 | :q 3/2 4/3 2/3 5/4 | :q 3/4 2/4 5/5 3/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'Alternative fingering pattern for C Major'
                }]}
              />
            </div>

            {/* Pattern 3 */}
            <div className="bg-white rounded-xl border border-yellow-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Position 3 - 5th Position</h3>
              <MusicScore
                title="C Major Scale - 5th Position"
                staves={[{
                  id: 'c-major-5th-position',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 8/6 5/5 7/5 8/5 | :q 5/4 7/4 5/3 6/3 | :q 8/3 6/3 5/3 7/4 | :q 5/4 8/5 7/5 5/5 8/6`,
                  width: 550,
                  scale: 1.0,
                  title: 'Higher position major scale pattern'
                }]}
              />
            </div>

            {/* All Positions Overview */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Complete Fretboard Pattern</h3>
              <MusicScore
                title="Major Scale Across the Fretboard"
                staves={[{
                  id: 'major-scale-complete',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 3/5 5/5 2/4 3/4 5/4 2/3 4/3 1/2 | :8 3/2 5/2 7/2 8/2 10/2 7/1 8/1 10/1`,
                  width: 550,
                  scale: 1.0,
                  title: 'Two-octave major scale pattern'
                }]}
              />
            </div>
          </div>
        </section>

        {/* Key Signatures Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Key Signatures & Applications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Major Keys</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-2">Sharp Keys</h4>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• <strong>G Major:</strong> 1 sharp (F#)</li>
                    <li>• <strong>D Major:</strong> 2 sharps (F#, C#)</li>
                    <li>• <strong>A Major:</strong> 3 sharps (F#, C#, G#)</li>
                    <li>• <strong>E Major:</strong> 4 sharps (F#, C#, G#, D#)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Flat Keys</h4>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• <strong>F Major:</strong> 1 flat (Bb)</li>
                    <li>• <strong>Bb Major:</strong> 2 flats (Bb, Eb)</li>
                    <li>• <strong>Eb Major:</strong> 3 flats (Bb, Eb, Ab)</li>
                    <li>• <strong>Ab Major:</strong> 4 flats (Bb, Eb, Ab, Db)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scale Degree Functions</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>1st (Tonic):</strong> Home base, resolution point</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>2nd (Supertonic):</strong> Tension, leads to 3rd</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>3rd (Mediant):</strong> Defines major quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>4th (Subdominant):</strong> Departure from tonic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>5th (Dominant):</strong> Strong pull to tonic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>6th (Submediant):</strong> Relative minor center</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>7th (Leading tone):</strong> Strong pull to octave</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Harmony & Chords Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Harmony & Chord Relationships
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Diatonic Triads</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">C Major Scale Chords</h4>
                  <MusicScore
                    title="Diatonic Triads in C Major"
                    staves={[{
                      id: 'diatonic-triads',
                      notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (3/5.0/4.1/3) | :w (0/5.2/4.3/3) | :w (2/5.0/4.0/3) | :w (3/5.2/4.1/3)`,
                      width: 550,
                      scale: 1.0,
                      title: 'C-Dm-Em-F progression'
                    }]}
                  />
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="text-lg font-medium text-blue-800 mb-3">Roman Numeral Analysis</h4>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>• <strong>I:</strong> C major (tonic)</li>
                    <li>• <strong>ii:</strong> D minor</li>
                    <li>• <strong>iii:</strong> E minor</li>
                    <li>• <strong>IV:</strong> F major (subdominant)</li>
                    <li>• <strong>V:</strong> G major (dominant)</li>
                    <li>• <strong>vi:</strong> A minor (relative minor)</li>
                    <li>• <strong>vii°:</strong> B diminished</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Common Progressions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">I-V-vi-IV (Pop Progression)</h4>
                  <MusicScore
                    title="Pop Progression in C Major"
                    staves={[{
                      id: 'pop-progression',
                      notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (3/5.0/4.1/3) | :w (3/6.0/4.0/3) | :w (-1/6.0/5.2/4) | :w (-1/6.3/5.3/4)`,
                      width: 550,
                      scale: 1.0,
                      title: 'C-G-Am-F progression'
                    }]}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">ii-V-I (Jazz Progression)</h4>
                  <MusicScore
                    title="Jazz ii-V-I in C Major"
                    staves={[{
                      id: 'jazz-progression',
                      notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (0/5.2/4.3/3) | :w (3/6.0/4.0/3) | :w (3/5.0/4.1/3)`,
                      width: 450,
                      scale: 1.0,
                      title: 'Dm-G-C progression'
                    }]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Practice Exercises
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 1: Scale Patterns</h3>
              <p className="text-gray-700 mb-4">
                Practice the major scale in different positions and keys to build familiarity.
              </p>
              <MusicScore
                title="Major Scale Exercise"
                staves={[{
                  id: 'scale-exercise',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 3/5 5/5 2/4 3/4 5/4 2/3 4/3 1/2 | :8 3/2 1/2 4/3 2/3 5/4 3/4 2/4 5/5 3/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'C Major scale up and down'
                }]}
              />
            </div>

            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 2: Interval Practice</h3>
              <p className="text-gray-700 mb-4">
                Practice intervals within the major scale to develop ear training and fretboard knowledge.
              </p>
              <MusicScore
                title="Major Scale Intervals"
                staves={[{
                  id: 'interval-exercise',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 3/5 2/4 3/5 5/4 | :q 3/5 2/3 3/5 1/2 | :q 3/5 4/3 3/5 3/2`,
                  width: 550,
                  scale: 1.0,
                  title: '3rds, 5ths, and 7ths from C'
                }]}
              />
            </div>

            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 3: Sequence Patterns</h3>
              <p className="text-gray-700 mb-4">
                Practice scalar sequences to improve technique and musical phrasing.
              </p>
              <MusicScore
                title="Major Scale Sequences"
                staves={[{
                  id: 'sequence-exercise',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 3/5 5/5 2/4 5/5 2/4 3/4 5/4 3/4 | :8 5/4 2/3 4/3 2/3 4/3 1/2 3/2 1/2`,
                  width: 550,
                  scale: 1.0,
                  title: 'Scalar sequences in thirds'
                }]}
              />
            </div>
          </div>
        </section>

        {/* Musical Applications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Musical Applications & Styles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Genre Applications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Pop Music</strong><br />
                  <span className="text-gray-600 text-sm">Foundation for most pop songs and progressions</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Country Music</strong><br />
                  <span className="text-gray-600 text-sm">Major scales create that bright, optimistic sound</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Jazz Standards</strong><br />
                  <span className="text-gray-600 text-sm">Starting point for jazz improvisation and harmony</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Classical Music</strong><br />
                  <span className="text-gray-600 text-sm">Foundation of Western classical tradition</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Finger dexterity:</strong> Develops clean fretting technique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Fretboard knowledge:</strong> Maps out note relationships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Ear training:</strong> Develops interval recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Music theory:</strong> Foundation for all other concepts</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-6 border border-yellow-200">
            <h4 className="font-medium text-yellow-900 mb-2">Practice Strategy</h4>
            <p className="text-yellow-800 text-sm leading-relaxed">
              Start with the C major scale in open position, then learn it in different positions up the neck. 
              Practice slowly with a metronome, focusing on clean notes and smooth transitions. Once comfortable, 
              practice other major keys starting with G, D, and F. Use the scale for improvisation over major 
              key chord progressions, and practice identifying the scale degrees by ear. The major scale is 
              your musical foundation - invest time in truly mastering it before moving to other scales.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
