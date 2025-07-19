import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import VexTabRenderer from '@/components/VexTabRenderer';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function IVviIVProgressionPage() {
  return (
    <Layout>
      <Header
        title="I-V-vi-IV Progression"
        subtitle="The axis progression that powers countless pop hits - a four-chord pattern that creates the perfect balance of stability, tension, emotion, and resolution."
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
        <div className="bg-gradient-to-r from-pink-500 to-orange-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">I-V-vi-IV Progression</h1>
          <p className="text-xl opacity-90 mb-4">
            The "axis progression" that has been the foundation of countless pop hits across all genres, 
            creating the perfect emotional journey from stability through tension to resolution.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Tonic-Dominant-Relative Minor-Subdominant</span>
            <span className="bg-white/20 px-3 py-1 rounded">4 Chords</span>
            <span className="bg-white/20 px-3 py-1 rounded">Emotional Journey</span>
            <span className="bg-white/20 px-3 py-1 rounded">Pop Foundation</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Harmonic Functions</h3>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-medium">I (Tonic):</span> Home base, stability and rest</li>
                <li><span className="font-medium">V (Dominant):</span> Strong forward motion, creates tension</li>
                <li><span className="font-medium">vi (Relative Minor):</span> Emotional shift, adds darkness</li>
                <li><span className="font-medium">IV (Subdominant):</span> Gentle pull back to tonic</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Why It Works</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Creates perfect emotional arc</li>
                <li>Balances major and minor sounds</li>
                <li>Strong root motion by fourths/fifths</li>
                <li>Satisfying circular resolution</li>
                <li>Familiar yet versatile harmonic journey</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Basic Voicings in C Major</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-medium mb-2 text-gray-700">I - C Major</h4>
                <SimpleFretboardDiagram chord="C_major" />
                <p className="text-sm text-gray-500 mt-2">Stable home chord</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-2 text-gray-700">V - G Major</h4>
                <SimpleFretboardDiagram chord="G_major" />
                <p className="text-sm text-gray-500 mt-2">Dominant tension</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-2 text-gray-700">vi - A Minor</h4>
                <SimpleFretboardDiagram chord="A_minor" />
                <p className="text-sm text-gray-500 mt-2">Emotional contrast</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-2 text-gray-700">IV - F Major</h4>
                <SimpleFretboardDiagram chord="F_major" />
                <p className="text-sm text-gray-500 mt-2">Subdominant resolve</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Guitar-Friendly Keys</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-white rounded">
                  <span className="font-medium">Key of G:</span>
                  <span>G - D - Em - C</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded">
                  <span className="font-medium">Key of D:</span>
                  <span>D - A - Bm - G</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded">
                  <span className="font-medium">Key of A:</span>
                  <span>A - E - F#m - D</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded">
                  <span className="font-medium">Key of E:</span>
                  <span>E - B - C#m - A</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Capo Positions</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-white rounded">
                  <span className="font-medium">Capo 1 (Key of F):</span>
                  <span>Play C shapes</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded">
                  <span className="font-medium">Capo 3 (Key of Bb):</span>
                  <span>Play G shapes</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded">
                  <span className="font-medium">Capo 5 (Key of C):</span>
                  <span>Play G shapes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Voicings */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Voicings</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">With Seventh Chords</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-medium mb-2 text-gray-700">Cmaj7</h4>
                <SimpleFretboardDiagram chord="CMaj7" />
                <p className="text-sm text-gray-500 mt-2">Sophisticated tonic</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-2 text-gray-700">G7</h4>
                <SimpleFretboardDiagram chord="G7" />
                <p className="text-sm text-gray-500 mt-2">Stronger dominant</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-2 text-gray-700">Am7</h4>
                <SimpleFretboardDiagram chord="Am7" />
                <p className="text-sm text-gray-500 mt-2">Smooth minor color</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-2 text-gray-700">Fmaj7</h4>
                <SimpleFretboardDiagram chord="FMaj7" />
                <p className="text-sm text-gray-500 mt-2">Open subdominant</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-800 mb-3">Common Variations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-blue-700">
                <li><span className="font-medium">vi-IV-I-V:</span> Emotional opening (Am-F-C-G)</li>
                <li><span className="font-medium">I-vi-IV-V:</span> Classic doo-wop progression</li>
                <li><span className="font-medium">I-V-IV-vi:</span> Deceptive resolution ending</li>
              </ul>
              <ul className="space-y-2 text-blue-700">
                <li><span className="font-medium">I-V-vi-iii-IV:</span> Extended with iii chord</li>
                <li><span className="font-medium">I-V-vi-IV-V:</span> Extra V for turnaround</li>
                <li><span className="font-medium">vi-V-IV-I:</span> Descending bass movement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Musical Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Examples</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-red-800 mb-4">Classic Rock</h3>
              <ul className="space-y-2 text-red-700 text-sm">
                <li>• "Don't Stop Believin'" - Journey</li>
                <li>• "Let It Be" - The Beatles</li>
                <li>• "No Woman No Cry" - Bob Marley</li>
                <li>• "With or Without You" - U2</li>
                <li>• "Behind Blue Eyes" - The Who</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-800 mb-4">Modern Pop</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• "Someone Like You" - Adele</li>
                <li>• "Counting Stars" - OneRepublic</li>
                <li>• "Let Her Go" - Passenger</li>
                <li>• "Demons" - Imagine Dragons</li>
                <li>• "Roar" - Katy Perry</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-green-800 mb-4">Country & Folk</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• "Wagon Wheel" - Old Crow Medicine Show</li>
                <li>• "The Night We Met" - Lord Huron</li>
                <li>• "Fast Car" - Tracy Chapman</li>
                <li>• "Torn" - Natalie Imbruglia</li>
                <li>• "Hey Soul Sister" - Train</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-purple-800 mb-3">🎵 The "Four Chords" Phenomenon</h3>
            <p className="text-purple-700">
              The Axis of Awesome's comedy song "Four Chords" demonstrates how this progression appears in dozens of hit songs. 
              It's become so ubiquitous in popular music that it's often called the "pop progression" or "axis progression."
            </p>
          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Exercise 1: Basic Progression</h3>
              <div className="space-y-3">
                <p className="text-sm"><span className="font-medium">Progression:</span> C - G - Am - F (repeat)</p>
                <p className="text-sm"><span className="font-medium">Timing:</span> 4 strums per chord</p>
                <p className="text-sm"><span className="font-medium">Pattern:</span> Down, Down, Up, Up-Down-Up</p>
                <p className="text-sm"><span className="font-medium">Tempo:</span> Start at 60 BPM, work up to 100 BPM</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Exercise 2: Quick Changes</h3>
              <div className="space-y-3">
                <p className="text-sm"><span className="font-medium">Progression:</span> C G | Am F | C G | Am F</p>
                <p className="text-sm"><span className="font-medium">Focus:</span> Smooth, quick transitions</p>
                <p className="text-sm"><span className="font-medium">Challenge:</span> Keep strumming steady</p>
                <p className="text-sm"><span className="font-medium">Goal:</span> No gaps between chord changes</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-yellow-800 mb-4">Progressive Learning Plan</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium text-yellow-800 mb-2">Week 1: Foundation</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Master the four chord shapes</li>
                  <li>• Practice smooth transitions</li>
                  <li>• Work on basic strumming</li>
                  <li>• Focus on key of C</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-yellow-800 mb-2">Week 2: Expansion</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Add keys of G and D</li>
                  <li>• Try different starting points</li>
                  <li>• Practice with metronome</li>
                  <li>• Learn a simple song</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-yellow-800 mb-2">Week 3+: Mastery</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Learn multiple songs</li>
                  <li>• Try different arrangements</li>
                  <li>• Experiment with substitutions</li>
                  <li>• Write your own progressions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* VexTab Notation */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Notation</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Basic I-V-vi-IV Progression in C Major</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <VexTabRenderer
                  vextab={`
                    tabstave notation=true key=C time=4/4
                    notes :w (3/5.3/4.2/3.1/2.0/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1) | :w (0/5.2/4.2/3.1/2.0/1) | :w (1/6.3/5.3/4.2/3.1/2.1/1)
                    text ++,.1,I (C),:++,.2,V (G),:++,.3,vi (Am),:++,.4,IV (F)
                  `}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">vi-IV-I-V Variation (Emotional Start)</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <VexTabRenderer
                  vextab={`
                    tabstave notation=true key=C time=4/4
                    notes :w (0/5.2/4.2/3.1/2.0/1) | :w (1/6.3/5.3/4.2/3.1/2.1/1) | :w (3/5.3/4.2/3.1/2.0/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1)
                    text ++,.1,vi (Am),:++,.2,IV (F),:++,.3,I (C),:++,.4,V (G)
                  `}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">With Seventh Chords</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <VexTabRenderer
                  vextab={`
                    tabstave notation=true key=C time=4/4
                    notes :w (x/6.3/5.2/4.0/3.0/2.x/1) | :w (3/6.x/5.0/4.0/3.0/2.1/1) | :w (x/6.0/5.2/4.0/3.1/2.x/1) | :w (1/6.x/5.2/4.1/3.0/2.x/1)
                    text ++,.1,Cmaj7,:++,.2,G7,:++,.3,Am7,:++,.4,Fmaj7
                  `}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Relationships */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Harmonic Relationships</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-800 mb-4">Related Progressions</h3>
              <ul className="space-y-2 text-blue-700">
                <li><span className="font-medium">I-IV-V:</span> Three-chord foundation</li>
                <li><span className="font-medium">ii-V-I:</span> Jazz harmonic movement</li>
                <li><span className="font-medium">vi-ii-V-I:</span> Extended jazz sequence</li>
                <li><span className="font-medium">I-vi-ii-V:</span> Circle of fifths movement</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-green-800 mb-4">Songwriting Applications</h3>
              <ul className="space-y-2 text-green-700">
                <li><span className="font-medium">Verse:</span> Often starts on vi for emotion</li>
                <li><span className="font-medium">Chorus:</span> I-V-vi-IV for energy and familiarity</li>
                <li><span className="font-medium">Bridge:</span> Try different starting points</li>
                <li><span className="font-medium">Outro:</span> Repeat for fade or resolve to I</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Continue Your Progressions Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-pink-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Progressions Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the I-V-vi-IV progression, explore other essential harmonic sequences that form the backbone of modern music.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/progressions/i-iv-v" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">I-IV-V Progression</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Master the most fundamental progression in Western music.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Learn the foundation →
                </span>
              </div>
            </Link>
            
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
            href="/lessons/theory/progressions/ii-v-i" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4 sm:mb-0"
          >
            <span className="mr-2">←</span>
            Previous: ii-V-I Progression
          </Link>
          <Link 
            href="/lessons/theory/progressions/12-bar-blues" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            Next: 12 Bar Blues
            <span className="ml-2">→</span>
          </Link>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
