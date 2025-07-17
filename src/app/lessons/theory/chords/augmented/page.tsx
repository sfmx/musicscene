'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import VexTabRenderer from '@/components/VexTabRenderer';
import Link from 'next/link';

export default function AugmentedChordsPage() {
  return (
    <Layout>
      <Header
        title="Augmented Chord Theory"
        subtitle="Master the mysterious and colorful world of augmented harmony - the unsettling, dramatic chords that create tension and anticipation."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/chords" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Chord Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Augmented Chords</h1>
          <p className="text-xl opacity-90 mb-4">
            Augmented chords create an unsettling, mysterious quality through their symmetrical structure and raised fifth. 
            They're essential for dramatic effect, film scoring, and sophisticated harmonic movement.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Mysterious Sound</span>
            <span className="bg-white/20 px-3 py-1 rounded">Symmetrical Structure</span>
            <span className="bg-white/20 px-3 py-1 rounded">Dramatic Effect</span>
            <span className="bg-white/20 px-3 py-1 rounded">Film Scoring</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What Are Augmented Chords?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Definition:</strong> Three-note chords with raised (augmented) fifth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Formula:</strong> Root + Major 3rd + Augmented 5th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Interval Pattern:</strong> 4 + 4 semitones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Sound Quality:</strong> Unsettling, mysterious, unstable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Function:</strong> Transition chord, dramatic effect</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Classical:</strong> Romantic era, modulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Jazz:</strong> Chromatic movement, substitutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Film Music:</strong> Suspense, drama, mystery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Rock/Metal:</strong> Dissonant color, tension</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Understanding Augmented Chord Construction */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Understanding Augmented Chord Construction</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">C+ Example</h3>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• <strong>Root:</strong> C (1st degree)</li>
                <li>• <strong>Major 3rd:</strong> E (3rd degree)</li>
                <li>• <strong>Aug 5th:</strong> G# (raised 5th)</li>
                <li>• <strong>Semitones:</strong> C→E (4), E→G# (4)</li>
                <li>• <strong>Result:</strong> Unstable, mysterious triad</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Symmetrical Structure</h3>
              <ul className="text-indigo-700 text-sm space-y-2">
                <li>• <strong>Equal Intervals:</strong> Two major thirds</li>
                <li>• <strong>Symmetry:</strong> Divides octave equally</li>
                <li>• <strong>Inversions:</strong> Sound identical</li>
                <li>• <strong>Enharmonic:</strong> Multiple names possible</li>
                <li>• <strong>Ambiguity:</strong> No clear tonal center</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">Harmonic Function</h3>
              <ul className="text-pink-700 text-sm space-y-2">
                <li>• <strong>Purpose:</strong> Creates instability</li>
                <li>• <strong>Resolution:</strong> Usually moves to stable chord</li>
                <li>• <strong>Voice leading:</strong> Smooth chromatic motion</li>
                <li>• <strong>Usage:</strong> Passing chord, modulation</li>
                <li>• <strong>Effect:</strong> Dramatic, unsettling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Essential Augmented Chord Shapes */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Augmented Chord Shapes</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">🎸 Start Here</h3>
            <p className="text-purple-700">These augmented shapes will add mysterious drama to your playing.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">C+</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="C+" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> C-E-G#</p>
                <p><strong>Fingering:</strong> Compact shape</p>
                <p><strong>Use:</strong> Classical, film music</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">F+</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="F+" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> F-A-C#</p>
                <p><strong>Fingering:</strong> Barre variation</p>
                <p><strong>Use:</strong> Jazz, passing chord</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">A+</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="A+" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> A-C#-E#(F)</p>
                <p><strong>Fingering:</strong> Moveable shape</p>
                <p><strong>Use:</strong> Dramatic transitions</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">D+</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="D+" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> D-F#-A#</p>
                <p><strong>Fingering:</strong> Upper fret access</p>
                <p><strong>Use:</strong> Chromatic sequences</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">G+</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="G+" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> G-B-D#</p>
                <p><strong>Fingering:</strong> Open string variant</p>
                <p><strong>Use:</strong> Rock, metal accents</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">E+</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="E+" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> E-G#-B#(C)</p>
                <p><strong>Fingering:</strong> Modified E major</p>
                <p><strong>Use:</strong> Suspense, mystery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Progressions */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Augmented Progressions</h2>
          
          <div className="grid gap-8 mb-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              
              {/* Chromatic Ascent Progression */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-purple-700">Chromatic Ascent</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="C" />
                        <p className="text-sm font-medium mt-1">C</p>
                        <p className="text-xs text-gray-600">I</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="C+" />
                        <p className="text-sm font-medium mt-1">C+</p>
                        <p className="text-xs text-gray-600">I+</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="F" />
                        <p className="text-sm font-medium mt-1">F</p>
                        <p className="text-xs text-gray-600">IV</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="F+" />
                        <p className="text-sm font-medium mt-1">F+</p>
                        <p className="text-xs text-gray-600">IV+</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♩ ♩ ♩ ♩</p>
                      <p className="text-xs text-gray-600 text-center">D - D - D - D</p>
                      <p className="text-xs text-gray-600 text-center">Dramatic, building tension</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 80-100 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Steady, building</p>
                      <p><strong>Genre:</strong> Classical, Film Score, Progressive</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=C
notes :w (3/5.2/4.0/3.1/2.0/1) | :w (X/6.3/5.2/4.1/3.1/2.0/1) | :w (1/6.3/5.3/4.2/3.1/2.1/1) | :w (1/6.0/5.3/4.2/3.2/2.1/1)
text :w,C,:w,C+,:w,F,:w,F+
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  Classic chromatic bass line movement - creates dramatic tension through systematic pitch raising
                </p>
              </div>

              {/* Jazz Substitution Progression */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-indigo-700">Jazz Substitution</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="C" />
                        <p className="text-sm font-medium mt-1">C</p>
                        <p className="text-xs text-gray-600">I</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="A+" />
                        <p className="text-sm font-medium mt-1">A+</p>
                        <p className="text-xs text-gray-600">VI+</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Dm" />
                        <p className="text-sm font-medium mt-1">Dm</p>
                        <p className="text-xs text-gray-600">ii</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="G7" />
                        <p className="text-sm font-medium mt-1">G7</p>
                        <p className="text-xs text-gray-600">V7</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♪♪ ♩ ♪♪ ♩</p>
                      <p className="text-xs text-gray-600 text-center">UU - D - UU - D</p>
                      <p className="text-xs text-gray-600 text-center">Syncopated jazz swing</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 120-160 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Swing 8ths</p>
                      <p><strong>Genre:</strong> Jazz, Bebop, Standards</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=C
notes :w (3/5.2/4.0/3.1/2.0/1) | :w (X/6.0/5.3/4.2/3.2/2.1/1) | :w (X/6.X/5.0/4.2/3.3/2.1/1) | :w (3/6.2/5.0/4.0/3.0/2.1/1)
text :w,C,:w,A+,:w,Dm,:w,G7
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  Sophisticated jazz substitution - the A+ creates chromatic approach to Dm in classic ii-V progression
                </p>
              </div>

              {/* Symmetrical Augmented Cycle */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-red-700">Symmetrical Augmented Cycle</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="flex justify-center space-x-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="C+" />
                        <p className="text-sm font-medium mt-1">C+</p>
                        <p className="text-xs text-gray-600">I+</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="E+" />
                        <p className="text-sm font-medium mt-1">E+</p>
                        <p className="text-xs text-gray-600">III+</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="G+" />
                        <p className="text-sm font-medium mt-1">G+</p>
                        <p className="text-xs text-gray-600">V+</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♩. ♪ ♩. ♪</p>
                      <p className="text-xs text-gray-600 text-center">D. U - D. U</p>
                      <p className="text-xs text-gray-600 text-center">Floating, mysterious</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 60-90 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Ethereal, floating</p>
                      <p><strong>Genre:</strong> Ambient, Film Score, Experimental</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=C
notes :w (X/6.3/5.2/4.1/3.1/2.0/1) | :w (0/6.3/5.2/4.1/3.1/2.0/1) | :w (3/6.2/5.1/4.0/3.0/2.3/1) | :w (X/6.3/5.2/4.1/3.1/2.0/1)
text :w,C+,:w,E+,:w,G+,:w,C+
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  Exploiting augmented chord symmetry - each chord is a major third apart, creating endless harmonic circles
                </p>
              </div>

              {/* Practice Tips */}
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200 mt-6">
                <h4 className="text-lg font-semibold text-purple-800 mb-4">🎯 Practice Tips for Augmented Progressions</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-purple-700 mb-2">Technique Focus</h5>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Practice smooth voice leading between chords</li>
                      <li>• Listen for the #5 creating tension</li>
                      <li>• Use light touch - let chords breathe</li>
                      <li>• Experiment with different voicings</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-purple-700 mb-2">Musical Application</h5>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Use for creating dramatic moments</li>
                      <li>• Perfect for modulation between keys</li>
                      <li>• Great for chromatic bass lines</li>
                      <li>• Try resolving to stable major/minor chords</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          
          <div className="grid gap-8 mb-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              
              {/* Exercise 1: Symmetrical Cycle */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-purple-700">Exercise 1: Symmetrical Cycle</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="C+" />
                        <p className="text-sm font-medium mt-1">C+</p>
                        <p className="text-xs text-gray-600">Root</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="E+" />
                        <p className="text-sm font-medium mt-1">E+</p>
                        <p className="text-xs text-gray-600">Maj 3rd</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="G#+" />
                        <p className="text-sm font-medium mt-1">G#+</p>
                        <p className="text-xs text-gray-600">Aug 5th</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="C+" />
                        <p className="text-sm font-medium mt-1">C+</p>
                        <p className="text-xs text-gray-600">Return</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Practice Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♩ ♩ ♩ ♩</p>
                      <p className="text-xs text-gray-600 text-center">Slow, even strums</p>
                      <p className="text-xs text-gray-600 text-center">Focus on listening to symmetry</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 60-80 BPM</p>
                      <p className="mb-2"><strong>Goal:</strong> Hear the symmetry</p>
                      <p><strong>Focus:</strong> Each chord identical, different root</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=C
notes :w (X/6.3/5.2/4.1/3.1/2.0/1) | :w (0/6.3/5.2/4.1/3.1/2.0/1) | :w (4/6.3/5.2/4.1/3.1/2.4/1) | :w (X/6.3/5.2/4.1/3.1/2.0/1)
text :w,C+,:w,E+,:w,G#+,:w,C+
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-800 mb-2"><strong>🎯 Learning Objective:</strong></p>
                  <p className="text-sm text-blue-700">Notice how each augmented chord is a major third apart. This creates an endless cycle - you can keep going C+ → E+ → G#+ → C+ infinitely. This symmetry is unique to augmented and diminished chords.</p>
                </div>
              </div>

              {/* Exercise 2: Chromatic Movement */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-indigo-700">Exercise 2: Chromatic Movement</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="C" />
                        <p className="text-sm font-medium mt-1">C</p>
                        <p className="text-xs text-gray-600">Stable</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="C+" />
                        <p className="text-sm font-medium mt-1">C+</p>
                        <p className="text-xs text-gray-600">Tension</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="F" />
                        <p className="text-sm font-medium mt-1">F</p>
                        <p className="text-xs text-gray-600">Stable</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="F+" />
                        <p className="text-sm font-medium mt-1">F+</p>
                        <p className="text-xs text-gray-600">Tension</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Bb" />
                        <p className="text-sm font-medium mt-1">Bb</p>
                        <p className="text-xs text-gray-600">Resolution</p>
                      </div>
                      <div className="text-center text-xs text-gray-400 flex items-center justify-center">
                        +
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Practice Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♪♪ ♩ ♪♪ ♩</p>
                      <p className="text-xs text-gray-600 text-center">UU - D - UU - D</p>
                      <p className="text-xs text-gray-600 text-center">Emphasize voice leading</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 80-100 BPM</p>
                      <p className="mb-2"><strong>Goal:</strong> Smooth transitions</p>
                      <p><strong>Focus:</strong> Chromatic bass movement</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=C
notes :w (3/5.2/4.0/3.1/2.0/1) | :w (X/6.3/5.2/4.1/3.1/2.0/1) | :w (1/6.3/5.3/4.2/3.1/2.1/1) | :w (1/6.0/5.3/4.2/3.2/2.1/1) | :w (X/6.1/5.3/4.3/3.3/2.1/1)
text :w,C,:w,C+,:w,F,:w,F+,:w,Bb
                  `}
                  width={900}
                  className="mb-4"
                />
                
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-800 mb-2"><strong>🎯 Learning Objective:</strong></p>
                  <p className="text-sm text-green-700">Practice the classic chromatic ascent pattern. Listen how the augmented chords create tension that wants to resolve upward. The bass line moves chromatically: C → C# → F → F# → Bb, creating smooth voice leading.</p>
                </div>
              </div>

              {/* Exercise 3: Augmented to Minor Resolution */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-green-700">Exercise 3: Augmented to Minor Resolution</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="C+" />
                        <p className="text-sm font-medium mt-1">C+</p>
                        <p className="text-xs text-gray-600">Tension</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Dm" />
                        <p className="text-sm font-medium mt-1">Dm</p>
                        <p className="text-xs text-gray-600">Resolution</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="A+" />
                        <p className="text-sm font-medium mt-1">A+</p>
                        <p className="text-xs text-gray-600">Tension</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Dm" />
                        <p className="text-sm font-medium mt-1">Dm</p>
                        <p className="text-xs text-gray-600">Home</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Practice Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♩. ♪ ♩ ♩</p>
                      <p className="text-xs text-gray-600 text-center">D. U - D - D</p>
                      <p className="text-xs text-gray-600 text-center">Feel the tension-release</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 70-90 BPM</p>
                      <p className="mb-2"><strong>Goal:</strong> Feel resolution</p>
                      <p><strong>Focus:</strong> Tension → Release pattern</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=C
notes :w (X/6.3/5.2/4.1/3.1/2.0/1) | :w (X/6.X/5.0/4.2/3.3/2.1/1) | :w (X/6.0/5.3/4.2/3.2/2.1/1) | :w (X/6.X/5.0/4.2/3.3/2.1/1)
text :w,C+,:w,Dm,:w,A+,:w,Dm
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-sm text-orange-800 mb-2"><strong>🎯 Learning Objective:</strong></p>
                  <p className="text-sm text-orange-700">Practice feeling how augmented chords naturally want to resolve to minor chords a semitone higher. This is because the #5 in the augmented chord wants to move up to the root of the next chord.</p>
                </div>
              </div>

              {/* Practice Schedule */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mt-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">📅 Weekly Practice Schedule</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-blue-700 mb-2">Days 1-2: Foundation</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Master Exercise 1 slowly</li>
                      <li>• Focus on clean chord changes</li>
                      <li>• Listen for symmetrical quality</li>
                      <li>• Practice with metronome</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-700 mb-2">Days 3-4: Movement</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Add Exercise 2 chromatic movement</li>
                      <li>• Practice smooth voice leading</li>
                      <li>• Work on strumming patterns</li>
                      <li>• Connect exercises together</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-700 mb-2">Days 5-7: Resolution</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Master Exercise 3 resolutions</li>
                      <li>• Feel tension and release</li>
                      <li>• Experiment with own progressions</li>
                      <li>• Apply to songs you know</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Your Chord Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Chord Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand augmented chords, explore how they connect to other chord types and harmonic concepts.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/chords/diminished" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <span className="text-2xl">⚫</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Diminished Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore maximum tension and dramatic effect.
                </p>
                <span className="text-red-600 font-medium text-sm group-hover:text-red-700">
                  Add drama →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/chords/extended" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">🎼</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Extended Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Master complex jazz harmony with 9ths, 11ths, and 13ths.
                </p>
                <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                  Expand harmony →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/chords/major" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">☀️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Return to the bright, stable foundation of harmony.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Back to basics →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
