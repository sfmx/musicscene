import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import VexTabRenderer from '@/components/VexTabRenderer';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function IIVVProgressionPage() {
  return (
    <Layout>
      <Header
        title="I-IV-V Progression"
        subtitle="The most fundamental chord progression in Western music - a three-chord pattern that forms the backbone of countless songs across all genres."
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
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">I-IV-V Progression</h1>
          <p className="text-xl opacity-90 mb-4">
            The I-IV-V progression is the most important harmonic sequence in Western music, 
            creating strong functional harmony that drives countless songs across all genres.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Tonic-Subdominant-Dominant</span>
            <span className="bg-white/20 px-3 py-1 rounded">3 Chords</span>
            <span className="bg-white/20 px-3 py-1 rounded">Strong Resolution</span>
            <span className="bg-white/20 px-3 py-1 rounded">Universal Pattern</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Harmonic Functions</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>I (Tonic):</strong> Home base, stability, resolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>IV (Subdominant):</strong> Movement away from home, preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>V (Dominant):</strong> Tension that demands resolution to I</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Pattern:</strong> Stability → Movement → Tension → Resolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Voice Leading:</strong> Strong bass movement by fourths and fifths</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">C Major Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>I:</strong> C Major (C-E-G)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>IV:</strong> F Major (F-A-C)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>V:</strong> G Major (G-B-D)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Chord Progression:</strong> C - F - G - C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Roman Numerals:</strong> I - IV - V - I</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Basic Chord Positions</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">I-IV-V in C Major</h4>
                  <p className="text-sm text-blue-700 mb-3">Open position chords:</p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <h5 className="font-medium text-sm mb-2">I - C Major</h5>
                      <SimpleFretboardDiagram chord="C_major" />
                      <p className="text-xs text-blue-600 mt-1">Tonic - Home</p>
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-sm mb-2">IV - F Major</h5>
                      <SimpleFretboardDiagram chord="F_major" />
                      <p className="text-xs text-blue-600 mt-1">Subdominant - Movement</p>
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-sm mb-2">V - G Major</h5>
                      <SimpleFretboardDiagram chord="G_major" />
                      <p className="text-xs text-blue-600 mt-1">Dominant - Tension</p>
                    </div>
                  </div>
                  <VexTabRenderer 
                    vextab="tabstave notation=true key=C time=4/4
                      notes :w C/5 F/4 G/5 C/5" 
                    width={450} 
                    scale={0.8}
                  />
                  <div className="mt-3">
                    <p className="text-xs text-blue-600 font-medium mb-1">Practice Notes:</p>
                    <ul className="text-xs text-blue-600 space-y-1">
                      <li>• Focus on smooth chord transitions</li>
                      <li>• F major barre chord can be challenging</li>
                      <li>• Practice with steady strumming rhythm</li>
                      <li>• Listen for the resolution from G back to C</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">I-IV-V in G Major</h4>
                  <p className="text-sm text-green-700 mb-3">Alternative key with easier fingerings:</p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <h5 className="font-medium text-sm mb-2">I - G Major</h5>
                      <SimpleFretboardDiagram chord="G_major" />
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-sm mb-2">IV - C Major</h5>
                      <SimpleFretboardDiagram chord="C_major" />
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-sm mb-2">V - D Major</h5>
                      <SimpleFretboardDiagram chord="D_major" />
                    </div>
                  </div>
                  <VexTabRenderer 
                    vextab="tabstave notation=true key=G time=4/4
                      notes :w G/6 C/5 D/4 G/6" 
                    width={450} 
                    scale={0.8}
                  />
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Common Strumming Pattern</h4>
                  <p className="text-sm text-purple-700 mb-3">Down-Up pattern for I-IV-V:</p>
                  <VexTabRenderer 
                    vextab="tabstave notation=true key=C time=4/4
                      notes :8d (3/5.3/4.2/3.1/2.0/1) :8u ## :8d ## :8u :8d ## :8u :8d ## :8u" 
                    width={450} 
                    scale={0.8}
                  />
                  <p className="text-xs text-purple-600 mt-2">D-D-U-D-U-D-U-D-U pattern</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Advanced Applications</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Common Variations</h4>
                  <p className="text-sm text-yellow-700 mb-2">Popular I-IV-V variations:</p>
                  <ul className="text-xs text-yellow-600 space-y-1">
                    <li>• I-IV-I-V (return to tonic before dominant)</li>
                    <li>• I-IV-V-V (extended dominant tension)</li>
                    <li>• I-I-IV-V (extended tonic opening)</li>
                    <li>• I-IV-V-IV (plagal cadence ending)</li>
                    <li>• I-IV-vi-V (deceptive resolution)</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Chord Extensions</h4>
                  <p className="text-sm text-orange-700 mb-2">Add sophistication with extensions:</p>
                  <ul className="text-xs text-orange-600 space-y-1">
                    <li>• V7: Add seventh to dominant (G7 instead of G)</li>
                    <li>• Vsus4: Suspended fourth creates tension</li>
                    <li>• I6: Add sixth for color (C6 instead of C)</li>
                    <li>• IVmaj7: Major seventh on subdominant</li>
                    <li>• V/V: Secondary dominant (D7 to G)</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Key Transposition</h4>
                  <p className="text-sm text-red-700 mb-2">I-IV-V in common guitar keys:</p>
                  <ul className="text-xs text-red-600 space-y-1">
                    <li>• <strong>A Major:</strong> A - D - E</li>
                    <li>• <strong>D Major:</strong> D - G - A</li>
                    <li>• <strong>E Major:</strong> E - A - B</li>
                    <li>• <strong>F Major:</strong> F - Bb - C</li>
                    <li>• <strong>Bb Major:</strong> Bb - Eb - F</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Musical Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Examples & Famous Uses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Classic Rock & Blues</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Wild Thing" - The Troggs</h4>
                  <p className="text-sm text-gray-600 mb-2">Simple I-IV-V-V pattern in A major</p>
                  <p className="text-xs text-gray-500">A - D - E - E progression repeated</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Louie Louie" - The Kingsmen</h4>
                  <p className="text-sm text-gray-600 mb-2">I-IV-V-I in A major with rhythm emphasis</p>
                  <p className="text-xs text-gray-500">A - D - E - A with iconic strum pattern</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Twist and Shout" - The Beatles</h4>
                  <p className="text-sm text-gray-600 mb-2">Energetic I-IV-V in D major</p>
                  <p className="text-xs text-gray-500">D - G - A with powerful vocal melody</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Country & Folk Applications</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Country Standards</h4>
                  <p className="text-sm text-gray-600 mb-2">Hank Williams, Johnny Cash classics</p>
                  <p className="text-xs text-gray-500">Foundation of traditional country music</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Folk Songs</h4>
                  <p className="text-sm text-gray-600 mb-2">Bob Dylan, Neil Young compositions</p>
                  <p className="text-xs text-gray-500">Simple but effective harmonic foundation</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Blues Structure</h4>
                  <p className="text-sm text-gray-600 mb-2">Foundation of 12-bar blues progression</p>
                  <p className="text-xs text-gray-500">I-I-I-I-IV-IV-I-I-V-IV-I-I pattern</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎸 Chord Changes</h3>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• Practice I-IV-V-I slowly</li>
                <li>• Focus on clean transitions</li>
                <li>• Use metronome at 60 BPM</li>
                <li>• Gradually increase tempo</li>
                <li>• Work on finger positioning</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🎵 Rhythm Practice</h3>
              <ul className="text-green-700 text-sm space-y-2">
                <li>• Practice different strum patterns</li>
                <li>• Try fingerpicking arpeggios</li>
                <li>• Work on dynamics (loud/soft)</li>
                <li>• Practice with backing tracks</li>
                <li>• Experiment with timing</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">🎭 Musical Application</h3>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• Learn complete songs</li>
                <li>• Practice in different keys</li>
                <li>• Try chord substitutions</li>
                <li>• Create original melodies</li>
                <li>• Jam with other musicians</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises with Notation */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Exercise 1: Basic I-IV-V-I</h3>
              <p className="text-blue-700 text-sm mb-3">Practice the fundamental progression in C major:</p>
              <VexTabRenderer 
                vextab="tabstave notation=true key=C time=4/4
                  notes :w C/5 F/4 G/5 C/5" 
                width={550} 
                scale={0.9}
              />
              <div className="mt-3">
                <p className="text-xs text-blue-600 font-medium mb-1">Practice Tips:</p>
                <ul className="text-xs text-blue-600 space-y-1">
                  <li>• Hold each chord for 4 beats</li>
                  <li>• Focus on clean chord changes</li>
                  <li>• Listen for the harmonic resolution</li>
                  <li>• Practice with a metronome</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Exercise 2: Rhythmic Variation</h3>
              <p className="text-green-700 text-sm mb-3">Practice with quarter note rhythmic patterns:</p>
              <VexTabRenderer 
                vextab="tabstave notation=true key=C time=4/4
                  notes :q C/5 C/5 C/5 C/5 | :q F/4 F/4 F/4 F/4 | :q G/5 G/5 G/5 G/5 | :q C/5 C/5 C/5 C/5" 
                width={550} 
                scale={0.9}
              />
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Exercise 3: Key of G Major</h3>
              <p className="text-purple-700 text-sm mb-3">Practice I-IV-V-I in G major:</p>
              <VexTabRenderer 
                vextab="tabstave notation=true key=G time=4/4
                  notes :w G/6 C/5 D/4 G/6" 
                width={550} 
                scale={0.9}
              />
            </div>
          </div>
        </div>

        {/* Scale Relationships */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Scale Relationships & Theory</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Diatonic Relationships</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Scale Degrees in C Major</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>I (C):</strong> 1st degree - Tonic</li>
                  <li>• <strong>IV (F):</strong> 4th degree - Subdominant</li>
                  <li>• <strong>V (G):</strong> 5th degree - Dominant</li>
                  <li>• Strong pull from V back to I</li>
                  <li>• Perfect 5th intervals in bass line</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Circle of Fifths Movement</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bass moves: C → F (up 4th)</li>
                  <li>• Bass moves: F → G (up 2nd)</li>
                  <li>• Bass moves: G → C (up 4th)</li>
                  <li>• Creates strong harmonic momentum</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Voice Leading</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Common Tones</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• C major (C-E-G) to F major (F-A-C)</li>
                  <li>• <strong>C</strong> is common tone</li>
                  <li>• F major (F-A-C) to G major (G-B-D)</li>
                  <li>• No common tones - all voices move</li>
                  <li>• G major (G-B-D) to C major (C-E-G)</li>
                  <li>• <strong>G</strong> resolves to C (leading tone)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Smooth Voice Leading</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Keep common tones when possible</li>
                  <li>• Move other voices by step</li>
                  <li>• B (leading tone) resolves up to C</li>
                  <li>• Creates smooth harmonic flow</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Your Progressions Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Progressions Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the I-IV-V progression, explore more sophisticated harmonic sequences and advanced progressions.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/progressions/ii-v-i" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🎷</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ii-V-I Progression</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Master the cornerstone of jazz harmony with smooth voice leading.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Learn jazz harmony →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/progressions/i-v-vi-iv" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">I-V-vi-IV Progression</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Discover the "axis progression" that powers countless pop hits.
                </p>
                <span className="text-pink-600 font-medium text-sm group-hover:text-pink-700">
                  Explore pop harmony →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/progressions/12-bar-blues" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🎸</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">12-Bar Blues</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn the foundational form that shaped modern music.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Master the blues →
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <section className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link 
              href="/lessons/theory/progressions" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Back to Progressions Overview
            </Link>
            <Link 
              href="/lessons/theory/progressions/ii-v-i" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Next: ii-V-I Progression
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
