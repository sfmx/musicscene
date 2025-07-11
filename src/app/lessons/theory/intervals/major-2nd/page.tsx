"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

export default function Major2ndPage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Major 2nd Interval"
        subtitle="The fundamental melodic step - 2 semitones that form the backbone of scales and create smooth, natural melodic movement."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 mb-12 border border-blue-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Major 2nd Interval</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The major 2nd is one of the most fundamental intervals in music, spanning 2 semitones (whole step). 
            This interval forms the building block of major and minor scales, creating natural melodic movement 
            that sounds smooth and musical to the ear. Unlike the tense minor 2nd, the major 2nd is consonant 
            and stable, making it essential for creating flowing melodies and understanding scalar relationships. 
            It's the interval that gives us the characteristic "do-re" sound at the beginning of the major scale.
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
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Size:</strong> 2 semitones (whole step)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Major</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Consonant, stable, melodic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Function:</strong> Fundamental scalar step</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>C to D (do-re)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>F to G</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>G to A</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>A to B</span>
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
          <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Fretboard Locations</h3>
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="text-lg font-medium text-blue-800 mb-3">Two-Fret Rule</h4>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Universal Rule:</strong> Skip one fret to create a major 2nd
                </p>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Examples:</strong> 0th to 2nd fret, 3rd to 5th fret, 7th to 9th fret
                </p>
                <p className="text-blue-700 text-sm">
                  This pattern works on any string, anywhere on the neck!
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="text-lg font-medium text-green-800 mb-3">Scale Context</h4>
                <p className="text-green-700 text-sm mb-2">
                  <strong>Major Scale Pattern:</strong> W-W-H-W-W-W-H (W = major 2nd, H = minor 2nd)
                </p>
                <p className="text-green-700 text-sm mb-2">
                  <strong>First major 2nd:</strong> Root to 2nd degree (C to D in C major)
                </p>
                <p className="text-green-700 text-sm">
                  Most steps in major scales are major 2nds!
                </p>
              </div>
            </div>
          </div>

          {/* Musical Notation */}
          <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Musical Notation Examples</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Ascending Major 2nds</h4>
                <MusicScore
                  title="Ascending Major 2nd Intervals"
                  staves={[{
                    id: 'ascending-major-2nd',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h 3/6 5/6 | :h 0/5 2/5 | :h 3/5 5/5 | :h 0/4 2/4`,
                    width: 550,
                    scale: 1.0,
                    title: 'G→A, A→B, C→D, D→E'
                  }]}
                />
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Harmonic Major 2nds</h4>
                <MusicScore
                  title="Harmonic Major 2nd Intervals"
                  staves={[{
                    id: 'harmonic-major-2nd',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (3/6.5/6) | :w (0/5.2/5) | :w (3/5.5/5) | :w (0/4.2/4)`,
                    width: 550,
                    scale: 1.0,
                    title: 'Harmonic major 2nds - consonant and stable'
                  }]}
                />
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Major Scale Context</h4>
                <MusicScore
                  title="Major 2nds in C Major Scale"
                  staves={[{
                    id: 'major-scale-context',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 3/5 5/5 6/5 8/5 | :q 10/5 12/5 14/5 15/5`,
                    width: 550,
                    scale: 1.0,
                    title: 'C Major Scale highlighting major 2nd steps'
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
                  <span><strong>Scale construction:</strong> Primary interval in major and minor scales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Melodic movement:</strong> Natural, flowing melodic steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Vocal music:</strong> Easy to sing and natural to the ear</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Arpeggios:</strong> Connecting chord tones smoothly</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <MusicScore
                  title="Melodic Major 2nds"
                  staves={[{
                    id: 'melodic-major-2nd',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 3/5 5/5 6/5 8/5 | :q 10/5 8/5 6/5 5/5`,
                    width: 400,
                    scale: 0.9,
                    title: 'Smooth melodic movement using major 2nds'
                  }]}
                />
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Harmonic Uses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Sus2 chords:</strong> Adding the 2nd degree to triads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Add9 chords:</strong> Color tones in jazz and pop</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Voice leading:</strong> Smooth harmonic progressions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Polyphonic music:</strong> Independent melodic lines</span>
                </li>
              </ul>

              <div className="mt-6">
                <MusicScore
                  title="Sus2 Chord Example"
                  staves={[{
                    id: 'sus2-chord',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (3/6.3/5.0/4.3/3) | :w (3/6.5/5.0/4.3/3)`,
                    width: 400,
                    scale: 0.9,
                    title: 'C major to Csus2 - adding the major 2nd'
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
                    <span>Pleasant and consonant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Natural melodic movement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Stable, doesn't need resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Familiar "do-re" sound</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-blue-800 mb-3">Practice Exercises</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Play major scales focusing on 2nd steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Compare with minor 2nd (1 semitone)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Practice "do-re-mi" patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Use two-fret spacing on guitar</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Memory Aid</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Think of the major 2nd as the "do-re" from "Do-Re-Mi" (Sound of Music). It's the first 
                step up the major scale and sounds natural and pleasant. Unlike the tense minor 2nd, 
                the major 2nd feels stable and doesn't create any urge to resolve. On guitar, it's 
                always two frets apart on the same string, making it easy to find and practice.
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
                  <strong>"Do-Re-Mi" (Sound of Music)</strong><br />
                  <span className="text-gray-600 text-sm">Perfect example of major 2nd movement</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Bach's inventions</strong><br />
                  <span className="text-gray-600 text-sm">Scalar passages with major 2nd steps</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Mozart's Piano Sonatas</strong><br />
                  <span className="text-gray-600 text-sm">Elegant melodic lines using stepwise motion</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Music</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>"Twinkle, Twinkle, Little Star"</strong><br />
                  <span className="text-gray-600 text-sm">Opening notes demonstrate major 2nd</span>
                </li>
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>"Happy Birthday"</strong><br />
                  <span className="text-gray-600 text-sm">First two notes are a major 2nd</span>
                </li>
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>Folk songs and children's songs</strong><br />
                  <span className="text-gray-600 text-sm">Natural melodic movement patterns</span>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 1: Major Scale Steps</h3>
              <p className="text-gray-700 mb-4">
                Practice major scales focusing on the major 2nd intervals within them.
              </p>
              <MusicScore
                title="Major Scale Major 2nds"
                staves={[{
                  id: 'major-scale-steps',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 3/5 5/5 6/5 8/5 | :q 10/5 12/5 13/5 15/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'C Major Scale - notice the major 2nd steps'
                }]}
              />
            </div>

            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 2: Interval Recognition</h3>
              <p className="text-gray-700 mb-4">
                Practice playing and recognizing major 2nds both melodically and harmonically.
              </p>
              <MusicScore
                title="Major 2nd Recognition Exercise"
                staves={[{
                  id: 'major-2nd-recognition',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h (3/6.5/6) (0/5.2/5) | :h (3/5.5/5) (0/4.2/4)`,
                  width: 550,
                  scale: 1.0,
                  title: 'Play these harmonic major 2nds and listen to their consonant sound'
                }]}
              />
            </div>

            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 3: Melodic Patterns</h3>
              <p className="text-gray-700 mb-4">
                Create flowing melodies using major 2nd intervals as the primary melodic movement.
              </p>
              <MusicScore
                title="Melodic Pattern Exercise"
                staves={[{
                  id: 'melodic-patterns',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :8 3/5 5/5 3/5 5/5 6/5 8/5 6/5 8/5 | :8 10/5 8/5 6/5 5/5 3/5 5/5 6/5 8/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'Melodic patterns emphasizing major 2nd movement'
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
