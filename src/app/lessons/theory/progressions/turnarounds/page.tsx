import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import VexTabRenderer from '@/components/VexTabRenderer';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TurnaroundsProgressionPage() {
  return (
    <Layout>
      <Header
        title="Turnarounds"
        subtitle="Essential progressions that create smooth transitions and cyclical movement - the bridge between endings and new beginnings in harmonic motion."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/progressions" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Progressions Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Turnarounds</h1>
          <p className="text-xl opacity-90 mb-4">
            Musical phrases that create seamless transitions back to the beginning of a progression, 
            providing smooth harmonic flow and professional-sounding cyclical movement.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Transitional Harmony</span>
            <span className="bg-white/20 px-3 py-1 rounded">Cyclical Movement</span>
            <span className="bg-white/20 px-3 py-1 rounded">Professional Sound</span>
            <span className="bg-white/20 px-3 py-1 rounded">Jazz Essential</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What is a Turnaround?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• A short harmonic sequence (usually 1-2 bars)</li>
                <li>• Creates smooth transition back to the tonic</li>
                <li>• Maintains forward momentum in the music</li>
                <li>• Prevents abrupt harmonic stops</li>
                <li>• Essential in jazz, blues, and popular music</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Functions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <span className="font-medium">Bridge phrases:</span> Connect sections smoothly</li>
                <li>• <span className="font-medium">Ending variations:</span> Avoid static endings</li>
                <li>• <span className="font-medium">Loop creation:</span> Enable seamless repetition</li>
                <li>• <span className="font-medium">Harmonic interest:</span> Add sophistication</li>
                <li>• <span className="font-medium">Momentum maintenance:</span> Keep energy flowing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Turnarounds on Guitar</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">V7-IV-I Turnaround (Key of C)</h3>
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="text-green-800 font-medium mb-2">G7 - F - C</p>
                <p className="text-green-700 text-sm">
                  The most fundamental turnaround - creates strong motion back to tonic through dominant preparation.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <h4 className="font-medium mb-2 text-gray-700">G7</h4>
                  <SimpleFretboardDiagram chord="G7" />
                  <p className="text-sm text-gray-500 mt-2">Dominant setup</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2 text-gray-700">F</h4>
                  <SimpleFretboardDiagram chord="F" />
                  <p className="text-sm text-gray-500 mt-2">Subdominant bridge</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2 text-gray-700">C</h4>
                  <SimpleFretboardDiagram chord="C" />
                  <p className="text-sm text-gray-500 mt-2">Tonic resolution</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">vi-V7-I Turnaround (Key of C)</h3>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-blue-800 font-medium mb-2">Am - G7 - C</p>
                <p className="text-blue-700 text-sm">
                  Smooth relative minor approach that creates gentle harmonic flow with strong resolution.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <h4 className="font-medium mb-2 text-gray-700">Am</h4>
                  <SimpleFretboardDiagram chord="Am" />
                  <p className="text-sm text-gray-500 mt-2">Relative minor</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2 text-gray-700">G7</h4>
                  <SimpleFretboardDiagram chord="G7" />
                  <p className="text-sm text-gray-500 mt-2">Dominant</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2 text-gray-700">C</h4>
                  <SimpleFretboardDiagram chord="C" />
                  <p className="text-sm text-gray-500 mt-2">Tonic home</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-purple-800 mb-3">Jazz Turnarounds</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-purple-700">
                <li><span className="font-medium">I-vi-ii-V7:</span> Classic cycle progression (C-Am-Dm-G7)</li>
                <li><span className="font-medium">I-V7/vi-vi-V7:</span> Secondary dominant approach</li>
                <li><span className="font-medium">I-#I°-ii-V7:</span> Chromatic passing chord</li>
              </ul>
              <ul className="space-y-2 text-purple-700">
                <li><span className="font-medium">iii-VI7-ii-V7:</span> Extended cycle motion</li>
                <li><span className="font-medium">I-I7-IV-V7:</span> Blues-influenced turnaround</li>
                <li><span className="font-medium">vi-ii-V7-I:</span> Minor approach variant</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advanced Voicings */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Turnaround Voicings</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Jazz Seventh Chords</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <h4 className="font-medium mb-2 text-gray-700">Cmaj7</h4>
                  <SimpleFretboardDiagram chord="CMaj7" />
                  <p className="text-sm text-gray-500 mt-2">Sophisticated tonic</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2 text-gray-700">G7</h4>
                  <SimpleFretboardDiagram chord="G7" />
                  <p className="text-sm text-gray-500 mt-2">Strong dominant</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2 text-gray-700">Am7</h4>
                  <SimpleFretboardDiagram chord="Am7" />
                  <p className="text-sm text-gray-500 mt-2">Smooth minor</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2 text-gray-700">Dm7</h4>
                  <SimpleFretboardDiagram chord="Dm7" />
                  <p className="text-sm text-gray-500 mt-2">Subdominant color</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Extended Harmony</h3>
              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-medium text-indigo-800 mb-2">Add9 Chords</h4>
                  <p className="text-indigo-700 text-sm">
                    Use Cadd9, Fadd9, and Gadd9 for open, airy turnaround sounds in folk and contemporary styles.
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-800 mb-2">Sus Chords</h4>
                  <p className="text-red-700 text-sm">
                    Gsus4-G7 creates tension and release within the turnaround, adding rhythmic and harmonic interest.
                  </p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-800 mb-2">Slash Chords</h4>
                  <p className="text-yellow-700 text-sm">
                    F/G creates smooth bass movement and sophisticated harmonic color in turnarounds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Musical Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Examples</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-red-800 mb-4">Jazz Standards</h3>
              <ul className="space-y-2 text-red-700 text-sm">
                <li>• "All of Me" - turnarounds in every section</li>
                <li>• "Autumn Leaves" - classic ii-V7 turnarounds</li>
                <li>• "Blue Moon" - sophisticated cycle progressions</li>
                <li>• "Fly Me to the Moon" - extended turnarounds</li>
                <li>• "Satin Doll" - Duke Ellington mastery</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-800 mb-4">Blues & Rock</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• "Sweet Home Alabama" - classic rock turnaround</li>
                <li>• "Stormy Monday" - blues turnaround mastery</li>
                <li>• "Red House" - Hendrix blues turnarounds</li>
                <li>• "Crossroads" - Robert Johnson influence</li>
                <li>• "The Thrill Is Gone" - B.B. King sophistication</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-green-800 mb-4">Country & Folk</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• "Wildwood Flower" - Carter Family classic</li>
                <li>• "Will the Circle Be Unbroken" - traditional</li>
                <li>• "Nine Pound Hammer" - folk turnarounds</li>
                <li>• "Old Joe Clark" - fiddle tune cycles</li>
                <li>• "Blackbird" - Beatles folk influence</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-purple-800 mb-3">🎵 The Art of Seamless Flow</h3>
            <p className="text-purple-700">
              Great musicians use turnarounds to create the illusion of endless, flowing music. Listen to how jazz pianists 
              like Bill Evans or guitar masters like Joe Pass never seem to stop - turnarounds are their secret to perpetual motion.
            </p>
          </div>
        </div>

        {/* VexTab Notation Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Notation Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Basic V-IV-I Turnaround in C</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <VexTabRenderer 
                  vextab="
                  tabstave notation=true key=C time=4/4
                  notes :q (5/2.5/3.3/4.3/5.1/6) (1/2.1/3.2/4.2/5.0/6) (0/2.1/3.0/4.2/5.3/6) |
                  text :w, |G7, |F, |C
                  "
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                The most fundamental turnaround - G7 to F to C creates strong forward motion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Jazz Cycle: I-vi-ii-V7 in C</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <VexTabRenderer 
                  vextab="
                  tabstave notation=true key=C time=4/4
                  notes :q (0/2.1/3.0/4.2/5.3/6) (0/2.2/3.2/4.1/5.0/6) (1/2.0/3.2/4.3/5.1/6) (3/2.2/3.3/4.3/5.3/6) |
                  text :w, |C, |Am, |Dm, |G7
                  "
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                The classic jazz turnaround that cycles through all four harmonic functions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Blues Turnaround in E</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <VexTabRenderer 
                  vextab="
                  tabstave notation=true key=E time=4/4
                  notes :q (0/1.2/2.1/3.0/4.0/5.0/6) (2/1.4/2.2/3.1/4.0/5.0/6) (0/1.2/2.1/3.0/4.0/5.0/6) (0/1.2/2.1/3.2/4.0/5.0/6) |
                  text :w, |E, |B7, |E, |B7
                  "
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Classic blues turnaround alternating between tonic and dominant seventh.
              </p>
            </div>
          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Exercise 1: Basic Turnaround</h3>
              <div className="space-y-3">
                <p className="text-sm"><span className="font-medium">Progression:</span> C - Am - F - G7 - C</p>
                <p className="text-sm"><span className="font-medium">Timing:</span> 2 beats per chord</p>
                <p className="text-sm"><span className="font-medium">Pattern:</span> Simple downstrokes</p>
                <p className="text-sm"><span className="font-medium">Focus:</span> Smooth chord transitions</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Exercise 2: Jazz Cycle</h3>
              <div className="space-y-3">
                <p className="text-sm"><span className="font-medium">Progression:</span> Cmaj7 - Am7 - Dm7 - G7</p>
                <p className="text-sm"><span className="font-medium">Timing:</span> 1 bar each chord</p>
                <p className="text-sm"><span className="font-medium">Pattern:</span> Jazz swing feel</p>
                <p className="text-sm"><span className="font-medium">Focus:</span> Voice leading between sevenths</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Exercise 3: Blues Turnaround</h3>
              <div className="space-y-3">
                <p className="text-sm"><span className="font-medium">Progression:</span> E - E7 - A - B7 (repeat)</p>
                <p className="text-sm"><span className="font-medium">Timing:</span> 2 beats per chord</p>
                <p className="text-sm"><span className="font-medium">Pattern:</span> Shuffle rhythm</p>
                <p className="text-sm"><span className="font-medium">Focus:</span> Blues feel and groove</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Exercise 4: Extended Practice</h3>
              <div className="space-y-3">
                <p className="text-sm"><span className="font-medium">Challenge:</span> Play a 12-bar blues with different turnarounds</p>
                <p className="text-sm"><span className="font-medium">Variations:</span> Try different turnaround options each time</p>
                <p className="text-sm"><span className="font-medium">Goal:</span> Seamless integration into musical flow</p>
                <p className="text-sm"><span className="font-medium">Advanced:</span> Combine with improvisation</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-800 mb-3">💡 Practice Tips</h3>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>• Start with simple triads before moving to seventh chords</li>
              <li>• Focus on smooth voice leading between chords</li>
              <li>• Practice turnarounds in different keys and positions</li>
              <li>• Use a metronome to maintain steady timing</li>
              <li>• Record yourself to hear the overall flow</li>
              <li>• Apply turnarounds to songs you already know</li>
            </ul>
          </div>
        </div>

        {/* Harmonic Relationships */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Harmonic Relationships</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Circle of Fifths Movement</h3>
              <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                <p className="text-yellow-800 text-sm">
                  Many turnarounds follow circle of fifths motion: C → Am → Dm → G7 → C. 
                  Each chord's root moves down a fifth (or up a fourth), creating strong harmonic momentum.
                </p>
              </div>
              
              <h3 className="text-lg font-medium text-gray-800 mb-4 mt-6">Voice Leading Principles</h3>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-green-800 text-sm">
                  Good turnarounds feature smooth voice leading where individual notes move in stepwise motion. 
                  Notice how the top voices in C-Am-F-G7 create melodic lines.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Functional Harmony</h3>
              <div className="space-y-3">
                <div className="bg-red-50 rounded-lg p-3">
                  <h4 className="font-medium text-red-800 text-sm">Tonic Function (I, vi)</h4>
                  <p className="text-red-700 text-xs">Provides stability and rest</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-medium text-blue-800 text-sm">Subdominant Function (ii, IV)</h4>
                  <p className="text-blue-700 text-xs">Creates departure from tonic</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <h4 className="font-medium text-purple-800 text-sm">Dominant Function (V7, vii°)</h4>
                  <p className="text-purple-700 text-xs">Builds tension toward resolution</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mt-4">
                <h4 className="font-medium text-gray-800 mb-2">Perfect Turnaround Formula</h4>
                <p className="text-gray-700 text-sm">
                  Start stable (I) → depart (vi or IV) → build tension (V7) → resolve (I). 
                  This creates a complete harmonic journey in just a few chords.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Your Progressions Journey */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Continue Your Progressions Journey</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/progressions/circle-of-fifths" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Circle of Fifths</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Master the fundamental pattern that governs key relationships and harmonic motion.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Explore the circle →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/progressions/ii-v-i" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🎼</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ii-V-I Progression</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Discover the cornerstone of jazz harmony and sophisticated songwriting.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Learn jazz harmony →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/progressions/12-bar-blues" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <span className="text-2xl">🎸</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">12-Bar Blues</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn the foundational form that shaped modern music.
                </p>
                <span className="text-amber-600 font-medium text-sm group-hover:text-amber-700">
                  Master the blues →
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/lessons/theory/progressions/circle-of-fifths" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4 sm:mb-0"
          >
            <span className="mr-2">←</span>
            Previous: Circle of Fifths
          </Link>
          <Link 
            href="/lessons/theory/progressions" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            Back to Progressions Overview
            <span className="ml-2">→</span>
          </Link>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
