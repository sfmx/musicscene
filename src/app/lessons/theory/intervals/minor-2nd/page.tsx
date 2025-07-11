"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function Minor2ndPage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Minor 2nd Interval"
        subtitle="The smallest interval in Western music - 1 semitone that creates tension and dissonance in melodies and harmonies."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-xl p-8 mb-12 border border-red-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Minor 2nd Interval</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The minor 2nd is the smallest interval in Western music, spanning just 1 semitone (half step). 
            This interval creates significant tension and dissonance, making it one of the most emotionally 
            powerful intervals in music. Found in chromatic passages, blues scales, and dramatic classical 
            compositions, the minor 2nd demands resolution and creates a sense of urgency or unease. 
            Understanding this interval is crucial for creating tension in melodies and recognizing its 
            distinctive sound in various musical contexts.
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
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Size:</strong> 1 semitone (half step)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Minor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Highly dissonant, tense</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Function:</strong> Creates tension, needs resolution</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>C to D♭ (or C#)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>E to F (natural semitone)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>B to C (natural semitone)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Any note to its chromatic neighbor</span>
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
          
          {/* Fretboard Examples */}
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Fretboard Locations</h3>
            <div className="space-y-6">
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="text-lg font-medium text-red-800 mb-3">Natural Semitones on Guitar</h4>
                <p className="text-red-700 text-sm mb-2">
                  <strong>E to F:</strong> Open 1st string (high E) to 1st fret = minor 2nd
                </p>
                <p className="text-red-700 text-sm mb-2">
                  <strong>B to C:</strong> Open 2nd string (B) to 1st fret = minor 2nd
                </p>
                <p className="text-red-700 text-sm">
                  These are the only natural minor 2nds (no sharps/flats needed)
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="text-lg font-medium text-blue-800 mb-3">Adjacent Frets Rule</h4>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Universal Rule:</strong> Any two adjacent frets on the same string form a minor 2nd
                </p>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Examples:</strong> 3rd fret to 4th fret, 7th fret to 8th fret, etc.
                </p>
                <p className="text-blue-700 text-sm">
                  This makes minor 2nds the easiest interval to find on guitar!
                </p>
              </div>
            </div>
          </div>

          {/* Musical Notation */}
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Musical Notation Examples</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Ascending Minor 2nds</h4>
                <MusicScore
                  title="Ascending Minor 2nd Intervals"
                  staves={[{
                    id: 'ascending-minor-2nd',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h 0/6 1/6 | :h 4/6 5/6 | :h 0/5 1/5 | :h 0/1 1/1`,
                    width: 550,
                    scale: 1.0,
                    title: 'E→F, G#→A, A→A#, E→F (octave higher)'
                  }]}
                />
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Harmonic Minor 2nds</h4>
                <MusicScore
                  title="Harmonic Minor 2nd Intervals"
                  staves={[{
                    id: 'harmonic-minor-2nd',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (0/6.1/6) | :w (0/5.1/5) | :w (4/4.5/4) | :w (0/1.1/1)`,
                    width: 550,
                    scale: 1.0,
                    title: 'Simultaneous minor 2nds - notice the dissonance'
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Melodic Uses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Chromatic passing tones:</strong> Smooth voice leading between chord tones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Blues and jazz:</strong> Characteristic bend and chromatic approach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Classical music:</strong> Leading tones resolving to tonic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Horror film scores:</strong> Creates unease and tension</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <MusicScore
                  title="Chromatic Passing Tone"
                  staves={[{
                    id: 'chromatic-passing',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 3/5 4/5 5/5 6/5 | :q 7/5 8/5 9/5 10/5`,
                    width: 400,
                    scale: 0.9,
                    title: 'Chromatic passing tones in melody'
                  }]}
                />
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Harmonic Uses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Cluster chords:</strong> Dense, dissonant harmonies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Suspended resolutions:</strong> Creating and releasing tension</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Jazz voicings:</strong> Adding color and sophistication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Modern classical:</strong> 20th-century harmonic language</span>
                </li>
              </ul>

              <div className="mt-6">
                <MusicScore
                  title="Minor 2nd in Harmony"
                  staves={[{
                    id: 'minor-2nd-harmony',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (3/6.3/5.4/4.3/3) | :w (3/6.3/5.3/4.3/3)`,
                    width: 400,
                    scale: 0.9,
                    title: 'Cluster chord with minor 2nd tension'
                  }]}
                />
              </div>
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
                    <span>Very harsh and dissonant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Creates strong urge to resolve</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Sounds "crunchy" or "gritty"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Almost like two notes fighting</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-blue-800 mb-3">Practice Exercises</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Play white keys E→F and B→C</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Compare with major 2nd (2 semitones)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Practice on adjacent frets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Sing along to internalize the sound</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Memory Aid</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Think of the minor 2nd as the sound of suspense in a horror movie - it's the musical 
                equivalent of tension that demands resolution. The theme from "Jaws" features prominent 
                minor 2nds that create that sense of impending danger. In classical music, it's often 
                called a "semitone" and is fundamental to chromatic harmony and voice leading.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Classical Music</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Bach's Chromatic Fantasy</strong><br />
                  <span className="text-gray-600 text-sm">Extensive use of chromatic minor 2nds</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Chopin's Nocturnes</strong><br />
                  <span className="text-gray-600 text-sm">Chromatic voice leading with minor 2nds</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Wagner's Tristan und Isolde</strong><br />
                  <span className="text-gray-600 text-sm">Revolutionary use of chromatic harmony</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Music</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>"Jaws" Theme (John Williams)</strong><br />
                  <span className="text-gray-600 text-sm">Alternating minor 2nds create suspense</span>
                </li>
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>Blues and Jazz Standards</strong><br />
                  <span className="text-gray-600 text-sm">Chromatic passing tones and approach notes</span>
                </li>
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>Rock Guitar Solos</strong><br />
                  <span className="text-gray-600 text-sm">Chromatic runs and bending effects</span>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 1: Chromatic Scale</h3>
              <p className="text-gray-700 mb-4">
                Practice playing chromatic scales to familiarize yourself with consecutive minor 2nd intervals.
              </p>
              <MusicScore
                title="Chromatic Scale Exercise"
                staves={[{
                  id: 'chromatic-scale',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 0/6 1/6 2/6 3/6 4/6 5/6 6/6 7/6 | :8 8/6 9/6 10/6 11/6 12/6 11/6 10/6 9/6`,
                  width: 550,
                  scale: 1.0,
                  title: 'Chromatic scale on low E string'
                }]}
              />
            </div>

            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 2: Interval Recognition</h3>
              <p className="text-gray-700 mb-4">
                Practice identifying minor 2nds by ear. Play these examples and listen to the characteristic dissonance.
              </p>
              <MusicScore
                title="Minor 2nd Recognition"
                staves={[{
                  id: 'minor-2nd-recognition',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h (0/6.1/6) (4/5.5/5) | :h (0/4.1/4) (0/1.1/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'Practice playing these harmonic minor 2nds'
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
