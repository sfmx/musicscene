"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

export default function Perfect4thPage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Perfect 4th Interval"
        subtitle="A stable, consonant interval of 5 semitones that forms the foundation of harmonic relationships and is essential to guitar tuning."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-8 mb-12 border border-purple-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Perfect 4th Interval</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The perfect 4th is a fundamental interval spanning 5 semitones that creates a stable, 
            consonant sound with a slightly hollow or open quality. This interval is crucial to 
            guitar playing as it forms the basis of standard guitar tuning (most strings are tuned 
            a perfect 4th apart). The perfect 4th has a strong, stable character that doesn't 
            demand resolution, making it valuable for creating harmonic foundations, sus4 chords, 
            and melodic phrases that sound grounded and authoritative.
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
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Size:</strong> 5 semitones (2½ whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Perfect</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Stable, open, slightly hollow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Function:</strong> Structural foundation interval</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>C to F</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>G to C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>D to G</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Guitar string intervals (E-A, A-D, D-G)</span>
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
          
          {/* Guitar Tuning Connection */}
          <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Guitar Tuning Connection</h3>
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="text-lg font-medium text-purple-800 mb-3">Standard Tuning Perfect 4ths</h4>
                <p className="text-purple-700 text-sm mb-2">
                  <strong>6th to 5th string:</strong> E to A (perfect 4th)
                </p>
                <p className="text-purple-700 text-sm mb-2">
                  <strong>5th to 4th string:</strong> A to D (perfect 4th)
                </p>
                <p className="text-purple-700 text-sm mb-2">
                  <strong>4th to 3rd string:</strong> D to G (perfect 4th)
                </p>
                <p className="text-purple-700 text-sm mb-2">
                  <strong>Exception:</strong> 3rd to 2nd string is a major 3rd (G to B)
                </p>
                <p className="text-purple-700 text-sm">
                  <strong>2nd to 1st string:</strong> B to E (perfect 4th)
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="text-lg font-medium text-blue-800 mb-3">Five-Fret Pattern</h4>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Same String:</strong> 5 frets apart creates a perfect 4th
                </p>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Cross-String:</strong> Open string to 5th fret of next lower string
                </p>
                <p className="text-blue-700 text-sm">
                  <strong>Example:</strong> 3rd fret 6th string (G) to open 3rd string (G) = octave
                </p>
              </div>
            </div>
          </div>

          {/* Musical Notation */}
          <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Musical Notation Examples</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Ascending Perfect 4ths</h4>
                <MusicScore
                  title="Ascending Perfect 4th Intervals"
                  staves={[{
                    id: 'ascending-perfect-4th',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h 0/6 0/4 | :h 0/5 0/3 | :h 0/4 0/2 | :h 3/6 3/4`,
                    width: 550,
                    scale: 1.0,
                    title: 'E→A, A→D, D→G, G→C'
                  }]}
                />
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Harmonic Perfect 4ths</h4>
                <MusicScore
                  title="Harmonic Perfect 4th Intervals"
                  staves={[{
                    id: 'harmonic-perfect-4th',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (0/6.0/4) | :w (0/5.0/3) | :w (3/6.3/4) | :w (5/6.5/4)`,
                    width: 550,
                    scale: 1.0,
                    title: 'Simultaneous perfect 4ths - stable and consonant'
                  }]}
                />
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Perfect 4th Chord Voicings</h4>
                <MusicScore
                  title="Quartal Harmony (4ths-based chords)"
                  staves={[{
                    id: 'quartal-harmony',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (0/6.0/4.0/2) | :w (2/6.2/4.2/2) | :w (3/6.3/4.3/2) | :w (5/6.5/4.5/2)`,
                    width: 550,
                    scale: 1.0,
                    title: 'Quartal chord voicings built from stacked 4ths'
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
                  <span><strong>Folk melodies:</strong> Strong, simple melodic leaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Hymns and spiritual music:</strong> Authoritative, grounded sound</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Classical themes:</strong> Structural melodic intervals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Modal music:</strong> Characteristic interval in certain modes</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <MusicScore
                  title="Melodic Perfect 4th"
                  staves={[{
                    id: 'melodic-perfect-4th',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 3/6 3/4 3/6 3/4 | :q 0/5 0/3 0/5 0/3`,
                    width: 400,
                    scale: 0.9,
                    title: 'Melodic perfect 4th leaps'
                  }]}
                />
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Harmonic Uses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Sus4 chords:</strong> Suspending the 3rd with the 4th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Quartal harmony:</strong> Chords built from stacked 4ths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Jazz voicings:</strong> Modern harmonic color</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Contemporary classical:</strong> Alternative to tertian harmony</span>
                </li>
              </ul>

              <div className="mt-6">
                <MusicScore
                  title="Sus4 Chord Progression"
                  staves={[{
                    id: 'sus4-progression',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (3/6.3/5.3/4.3/3) | :w (3/6.3/5.3/4.1/3)`,
                    width: 400,
                    scale: 0.9,
                    title: 'Csus4 to C major - perfect 4th resolving to major 3rd'
                  }]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Guitar-Specific Applications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Guitar-Specific Applications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Open String Relationships</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Tuning reference:</strong> Most adjacent strings form perfect 4ths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Chord shapes:</strong> Many open chords use 4th relationships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Scale patterns:</strong> Cross-string movement using 4ths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Power chord variations:</strong> Adding 4ths to root-5th shapes</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fingering Patterns</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Five-fret rule:</strong> Same string, 5 frets apart</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Cross-string method:</strong> Open to 5th fret next string</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Octave patterns:</strong> 4th + 5th = octave</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Chord inversions:</strong> Voice leading using 4ths</span>
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
                    <span>Stable and consonant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Slightly hollow or open quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Strong, authoritative sound</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Doesn't create tension</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-blue-800 mb-3">Practice Exercises</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Use guitar string relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Practice 5-fret patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Compare with tritone (augmented 4th)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Listen to sus4 chord resolutions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Memory Aid</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Think of the perfect 4th as the "Here Comes the Bride" interval - the first two 
                notes of the wedding march. It sounds stable and authoritative, unlike the tense 
                tritone. On guitar, it's simply the interval between most adjacent open strings, 
                making it fundamental to guitar playing. The "Amazing Grace" opening also features 
                a perfect 4th leap that sounds strong and grounded.
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
                  <strong>"Here Comes the Bride" (Wagner)</strong><br />
                  <span className="text-gray-600 text-sm">Opening perfect 4th leap</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>"Amazing Grace"</strong><br />
                  <span className="text-gray-600 text-sm">First interval demonstrates the 4th</span>
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <strong>Bach's chorales</strong><br />
                  <span className="text-gray-600 text-sm">Frequent use in voice leading</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Music</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>Folk songs</strong><br />
                  <span className="text-gray-600 text-sm">Common melodic interval in traditional music</span>
                </li>
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>Rock power chords with sus4</strong><br />
                  <span className="text-gray-600 text-sm">Adding 4th to root-5th combinations</span>
                </li>
                <li className="border-l-4 border-red-400 pl-3">
                  <strong>Jazz quartal voicings</strong><br />
                  <span className="text-gray-600 text-sm">Modern harmony based on 4ths</span>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 1: String Relationship Practice</h3>
              <p className="text-gray-700 mb-4">
                Practice the perfect 4th relationships between guitar strings.
              </p>
              <MusicScore
                title="Guitar String Perfect 4ths"
                staves={[{
                  id: 'string-relationship',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (0/6.0/5) | :w (0/5.0/4) | :w (0/4.0/3) | :w (0/2.0/1)`,
                  width: 550,
                  scale: 1.0,
                  title: 'Open string perfect 4ths'
                }]}
              />
            </div>

            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 2: Five-Fret Pattern</h3>
              <p className="text-gray-700 mb-4">
                Practice finding perfect 4ths using the five-fret rule on single strings.
              </p>
              <MusicScore
                title="Five-Fret Perfect 4th Pattern"
                staves={[{
                  id: 'five-fret-pattern',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h 0/6 5/6 | :h 3/6 8/6 | :h 0/5 5/5 | :h 2/5 7/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'Perfect 4ths five frets apart'
                }]}
              />
            </div>

            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise 3: Sus4 Chord Practice</h3>
              <p className="text-gray-700 mb-4">
                Practice sus4 chords to hear perfect 4ths in harmonic context.
              </p>
              <MusicScore
                title="Sus4 Chord Progressions"
                staves={[{
                  id: 'sus4-practice',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (3/6.3/5.3/4.3/3) | :w (3/6.3/5.2/4.3/3) | :w (0/5.0/4.3/3.3/2) | :w (0/5.0/4.2/3.3/2)`,
                  width: 550,
                  scale: 1.0,
                  title: 'Csus4-C and Asus4-A progressions'
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
