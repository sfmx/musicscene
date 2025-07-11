"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

export default function OctavePage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Octave Interval"
        subtitle="The most consonant interval - 12 semitones that creates perfect unity while doubling the frequency, fundamental to all musical scales and harmony."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-xl p-8 mb-12 border border-indigo-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Octave Interval</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The octave is the most consonant and fundamental interval in music, spanning 12 semitones 
            and representing the completion of the chromatic cycle. When you play an octave, you're 
            playing the same note name but at exactly double (or half) the frequency, creating perfect 
            acoustic unity. The octave forms the foundation of all scales, defines the range of musical 
            instruments, and provides the framework for understanding pitch relationships. This interval 
            sounds so unified that many cultures consider octave notes to be the "same" note, making 
            it the cornerstone of musical organization worldwide.
          </p>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Interval Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Size:</strong> 12 semitones (6 whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Perfect</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Perfect unity, complete consonance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Function:</strong> Defines pitch classes and scale boundaries</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Physical Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Frequency ratio:</strong> 2:1 (upper note = 2× frequency)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Wavelength:</strong> Half the wavelength of lower note</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Harmonic series:</strong> Second harmonic of fundamental</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Perception:</strong> Sounds like the "same" note</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Visual Examples Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Visual Examples
          </h2>
          
          {/* Guitar Octave Patterns */}
          <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Guitar Octave Patterns</h3>
            <div className="space-y-6">
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="text-lg font-medium text-indigo-800 mb-3">Twelve-Fret Rule</h4>
                <p className="text-indigo-700 text-sm mb-2">
                  <strong>Same String:</strong> 12 frets apart creates an octave
                </p>
                <p className="text-indigo-700 text-sm mb-2">
                  <strong>Example:</strong> Open string to 12th fret = octave
                </p>
                <p className="text-indigo-700 text-sm">
                  <strong>Pattern:</strong> Works on any string, any position
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="text-lg font-medium text-blue-800 mb-3">Cross-String Octaves</h4>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>6th to 4th string:</strong> 2 frets up (due to tuning intervals)
                </p>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>5th to 3rd string:</strong> 2 frets up (same pattern)
                </p>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>4th to 2nd string:</strong> 3 frets up (compensates for G-B interval)
                </p>
                <p className="text-blue-700 text-sm">
                  <strong>3rd to 1st string:</strong> 3 frets up (same as above)
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="text-lg font-medium text-green-800 mb-3">Scale Octaves</h4>
                <p className="text-green-700 text-sm mb-2">
                  <strong>Scale completion:</strong> 8th note of major scale = octave of 1st
                </p>
                <p className="text-green-700 text-sm mb-2">
                  <strong>C major example:</strong> C-D-E-F-G-A-B-C (octave C)
                </p>
                <p className="text-green-700 text-sm">
                  <strong>All scales:</strong> Complete when reaching the octave
                </p>
              </div>
            </div>
          </div>

          {/* Musical Notation */}
          <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Musical Notation Examples</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Guitar Octave Patterns</h4>
                <MusicScore
                  title="Guitar Octave Intervals"
                  staves={[{
                    id: 'guitar-octaves',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h 0/6 12/6 | :h 3/6 15/6 | :h 0/5 12/5 | :h 2/5 14/5`,
                    width: 550,
                    scale: 1.0,
                    title: 'Same-string octaves: 12 frets apart'
                  }]}
                />
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Cross-String Octaves</h4>
                <MusicScore
                  title="Cross-String Octave Patterns"
                  staves={[{
                    id: 'cross-string-octaves',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h (3/6.5/4) (0/6.2/4) | :h (0/5.2/3) (3/5.5/3) | :h (2/4.5/2) (0/4.3/2) | :h (0/3.3/1) (2/3.5/1)`,
                    width: 550,
                    scale: 1.0,
                    title: 'Cross-string octave patterns'
                  }]}
                />
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Scale Octaves</h4>
                <MusicScore
                  title="Major Scale Octave Completion"
                  staves={[{
                    id: 'scale-octaves',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 3/5 5/5 6/5 8/5 | :q 10/5 12/5 13/5 15/5`,
                    width: 550,
                    scale: 1.0,
                    title: 'C Major Scale: C to C (octave)'
                  }]}
                />
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Harmonic Octaves</h4>
                <MusicScore
                  title="Harmonic Octave Intervals"
                  staves={[{
                    id: 'harmonic-octaves',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (0/6.12/6) | :w (3/6.15/6) | :w (0/5.12/5) | :w (2/5.14/5)`,
                    width: 550,
                    scale: 1.0,
                    title: 'Simultaneous octaves - perfect unity'
                  }]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Practical Applications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Practical Applications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-orange-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Melodic Applications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Scale construction:</strong> Defines the completion point of scales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Melodic leaps:</strong> Dramatic but stable melodic intervals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Range extension:</strong> Playing melodies in different octaves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Voice leading:</strong> Octave displacement in arrangements</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <MusicScore
                  title="Melodic Octave Leaps"
                  staves={[{
                    id: 'melodic-octaves',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 3/5 15/5 3/5 10/5 | :q 8/5 8/4 5/5 5/4`,
                    width: 400,
                    scale: 0.9,
                    title: 'Melodic patterns using octave leaps'
                  }]}
                />
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Harmonic Applications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Octave doubling:</strong> Reinforcing notes in different octaves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Bass and melody:</strong> Same note in different ranges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Orchestration:</strong> Distributing notes across instruments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Harmonic richness:</strong> Creating fullness without dissonance</span>
                </li>
              </ul>

              <div className="mt-6">
                <MusicScore
                  title="Octave Doubling"
                  staves={[{
                    id: 'octave-doubling',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (3/6.3/5.0/4.3/2) | :w (0/6.0/5.0/3.0/1)`,
                    width: 400,
                    scale: 0.9,
                    title: 'Chords with octave doubling'
                  }]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Guitar Techniques Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Guitar-Specific Techniques
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fingering Patterns</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>12th fret harmonics:</strong> Natural octave harmonics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Octave chords:</strong> Power chords with octave doubling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Scale patterns:</strong> Learning scales across octaves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Single-note melodies:</strong> Playing in different octaves</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Practice Applications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Tuning reference:</strong> 12th fret = octave of open string</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Interval training:</strong> Most recognizable interval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Fretboard mapping:</strong> Understanding note relationships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Scale practice:</strong> Playing scales in multiple octaves</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ear Training Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Ear Training & Recognition
          </h2>
          
          <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Recognition Tips</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-blue-800 mb-3">Sound Characteristics</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Perfect unity and consonance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Sounds like the "same" note</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>No beating or dissonance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Reinforces the original pitch</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-blue-800 mb-3">Practice Exercises</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Use 12th fret harmonics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Practice cross-string octave patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Sing scales focusing on octave completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Use piano to understand frequency doubling</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Memory Aid</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                The octave is the "Somewhere Over the Rainbow" interval - the first two notes create 
                that soaring, dreamlike leap. It's also easily recognized as the "same note, higher pitch" 
                - like a man and woman singing the same melody together naturally harmonize an octave apart. 
                On guitar, the 12th fret always produces the octave harmonic, making it a perfect reference 
                point for tuning and understanding this fundamental interval.
              </p>
            </div>
          </div>
        </section>

        {/* Famous Examples Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Famous Musical Examples
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Classical & Traditional</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>"Somewhere Over the Rainbow"</strong><br />
                  <span className="text-gray-600 text-sm">Opening octave leap creates soaring feeling</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Bach's Brandenburg Concertos</strong><br />
                  <span className="text-gray-600 text-sm">Frequent octave doublings in orchestration</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Chopin's Etudes</strong><br />
                  <span className="text-gray-600 text-sm">Octave passages for technical development</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Guitar & Popular Music</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>Rock guitar solos</strong><br />
                  <span className="text-gray-600 text-sm">Octave displacement for dramatic effect</span>
                </li>
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>Jazz guitar comping</strong><br />
                  <span className="text-gray-600 text-sm">Octave doublings in chord voicings</span>
                </li>
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>Folk and country melodies</strong><br />
                  <span className="text-gray-600 text-sm">Natural octave relationships in songs</span>
                </li>
              </ul>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 1: Same-String Octaves</h3>
              <p className="text-gray-700 mb-4">
                Practice the fundamental 12-fret octave pattern on each string.
              </p>
              <MusicScore
                title="Same-String Octave Practice"
                staves={[{
                  id: 'same-string-octaves',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (0/6.12/6) | :w (0/5.12/5) | :w (0/4.12/4) | :w (0/3.12/3)`,
                  width: 550,
                  scale: 1.0,
                  title: 'Open string to 12th fret octaves'
                }]}
              />
            </div>

            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 2: Cross-String Octave Patterns</h3>
              <p className="text-gray-700 mb-4">
                Learn the essential cross-string octave patterns for efficient fretboard navigation.
              </p>
              <MusicScore
                title="Cross-String Octave Patterns"
                staves={[{
                  id: 'cross-string-patterns',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h (3/6.5/4) (0/6.2/4) | :h (0/5.2/3) (3/5.5/3) | :h (2/4.5/2) (0/4.3/2) | :h (0/3.3/1) (2/3.5/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'Standard cross-string octave shapes'
                }]}
              />
            </div>

            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 3: Scale Octave Completion</h3>
              <p className="text-gray-700 mb-4">
                Practice major scales emphasizing the octave completion at the 8th degree.
              </p>
              <MusicScore
                title="Scale Octave Exercise"
                staves={[{
                  id: 'scale-octave-completion',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 3/5 5/5 6/5 8/5 | :q 10/5 12/5 13/5 15/5 | :q 15/5 13/5 12/5 10/5 | :q 8/5 6/5 5/5 3/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'C Major scale with octave completion'
                }]}
              />
            </div>

            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 4: Octave Harmonics</h3>
              <p className="text-gray-700 mb-4">
                Practice natural harmonics at the 12th fret to hear pure octave intervals.
              </p>
              <MusicScore
                title="12th Fret Harmonic Exercise"
                staves={[{
                  id: 'octave-harmonics',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w 12h/6 | :w 12h/5 | :w 12h/4 | :w 12h/3`,
                  width: 550,
                  scale: 1.0,
                  title: '12th fret harmonics (natural octaves)'
                }]}
              />
            </div>

            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 5: Melodic Octave Application</h3>
              <p className="text-gray-700 mb-4">
                Apply octave knowledge to create melodies that span different octave ranges.
              </p>
              <MusicScore
                title="Melodic Octave Exercise"
                staves={[{
                  id: 'melodic-octave-application',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 3/5 5/5 15/5 13/5 | :q 12/5 10/5 8/5 15/4 | :q 13/4 12/4 10/4 8/4 | :q 6/4 5/4 3/5 3/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'Melody using octave displacement techniques'
                }]}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
