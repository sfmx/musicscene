import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import VexTabRenderer from '@/components/VexTabRenderer';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ViIVIVProgressionPage() {
  return (
    <Layout>
      <Header
        title="vi-IV-I-V Progression"
        subtitle="The emotional powerhouse of modern pop - starting with melancholy and ending with anticipation, this progression creates a compelling emotional arc."
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
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">vi-IV-I-V Progression</h1>
          <p className="text-xl opacity-90 mb-4">
            The vi-IV-I-V progression starts with emotional depth and creates a powerful journey from 
            melancholy through comfort to resolution and anticipation.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Emotional Journey</span>
            <span className="bg-white/20 px-3 py-1 rounded">4 Chords</span>
            <span className="bg-white/20 px-3 py-1 rounded">Modern Pop Staple</span>
            <span className="bg-white/20 px-3 py-1 rounded">Minor Start</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Emotional Journey</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>vi:</strong> Melancholy, introspection, emotional depth</li>
                <li><strong>IV:</strong> Comfort, familiarity, warmth</li>
                <li><strong>I:</strong> Home, resolution, stability</li>
                <li><strong>V:</strong> Tension, anticipation, forward motion</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Key of C Major</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-4 gap-2 text-center text-sm">
                  <div className="font-medium">vi</div>
                  <div className="font-medium">IV</div>
                  <div className="font-medium">I</div>
                  <div className="font-medium">V</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="text-lg font-bold text-purple-600">Am</div>
                  <div className="text-lg font-bold text-blue-600">F</div>
                  <div className="text-lg font-bold text-green-600">C</div>
                  <div className="text-lg font-bold text-orange-600">G</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-800 mb-2">vi - A Minor</h3>
              <SimpleFretboardDiagram chord="A_minor" />
              <p className="text-sm text-gray-600 mt-2">Melancholy starting point</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-800 mb-2">IV - F Major</h3>
              <SimpleFretboardDiagram chord="F_major" />
              <p className="text-sm text-gray-600 mt-2">Comforting support</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-800 mb-2">I - C Major</h3>
              <SimpleFretboardDiagram chord="C_major" />
              <p className="text-sm text-gray-600 mt-2">Home and resolution</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-800 mb-2">V - G Major</h3>
              <SimpleFretboardDiagram chord="G_major" />
              <p className="text-sm text-gray-600 mt-2">Building anticipation</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-medium text-blue-800 mb-2">Playing Tips</h3>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Start with clean chord changes before adding rhythm</li>
              <li>• Focus on the emotional transition from minor to major</li>
              <li>• Practice smooth voice leading between chords</li>
              <li>• Experiment with different strumming patterns to enhance the mood</li>
            </ul>
          </div>
        </div>

        {/* Advanced Voicings */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Voicings</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Seventh Chord Extensions</h3>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-sm font-medium mb-1">Am7</div>
                  <SimpleFretboardDiagram chord="A_minor_7" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium mb-1">Fmaj7</div>
                  <SimpleFretboardDiagram chord="F_major_7" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium mb-1">Cmaj7</div>
                  <SimpleFretboardDiagram chord="C_major_7" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium mb-1">G7</div>
                  <SimpleFretboardDiagram chord="G_7" />
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Seventh chords add sophistication and are perfect for indie and alternative styles.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Upper Fret Voicings</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm space-y-2">
                  <div><strong>Am (5th fret):</strong> Barre chord voicing for smoother transitions</div>
                  <div><strong>F (1st fret):</strong> Standard barre position</div>
                  <div><strong>C (8th fret):</strong> Higher voicing with rich harmonics</div>
                  <div><strong>G (3rd fret):</strong> Compact barre chord form</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Musical Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Examples</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Famous Songs</h3>
              <div className="bg-green-50 rounded-lg p-4">
                <ul className="space-y-2 text-green-800">
                  <li>• "Somebody That I Used to Know" - Gotye</li>
                  <li>• "Grenade" - Bruno Mars</li>
                  <li>• "Let Her Go" - Passenger</li>
                  <li>• "Torn" - Natalie Imbruglia</li>
                  <li>• "Zombie" - The Cranberries</li>
                  <li>• "What's Up?" - 4 Non Blondes</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Genre Applications</h3>
              <div className="bg-purple-50 rounded-lg p-4">
                <ul className="space-y-2 text-purple-800">
                  <li>• <strong>Pop:</strong> Emotional ballads and mid-tempo songs</li>
                  <li>• <strong>Alternative Rock:</strong> Introspective and atmospheric</li>
                  <li>• <strong>Indie Folk:</strong> Storytelling and emotional depth</li>
                  <li>• <strong>Contemporary Christian:</strong> Worship and reflection</li>
                  <li>• <strong>Singer-Songwriter:</strong> Personal and intimate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="font-medium text-yellow-800 mb-3">🎯 Progressive Practice Plan</h3>
              <ol className="space-y-2 text-yellow-700 text-sm">
                <li><strong>1. Basic Changes:</strong> Master clean transitions between open chords</li>
                <li><strong>2. Rhythm Patterns:</strong> Start with simple down-strums, add complexity</li>
                <li><strong>3. Different Keys:</strong> Learn in G, D, and A major</li>
                <li><strong>4. Voice Leading:</strong> Practice alternate voicings for smoother changes</li>
                <li><strong>5. Song Application:</strong> Play along with famous songs using this progression</li>
                <li><strong>6. Creative Variations:</strong> Experiment with extensions and substitutions</li>
              </ol>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-medium text-orange-800 mb-3">💡 Practice Tips</h3>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li>• Focus on the emotional character of each chord</li>
                <li>• Practice with a metronome to develop steady timing</li>
                <li>• Record yourself to hear the progression objectively</li>
                <li>• Try different tempos from ballad to uptempo</li>
                <li>• Experiment with dynamics (loud/soft) for emotional effect</li>
                <li>• Learn to loop the progression smoothly</li>
              </ul>
            </div>
          </div>
        </div>

        {/* VexTab Notation Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Notation Examples</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Basic vi-IV-I-V Progression (Key of C)</h3>
              <VexTabRenderer 
                vextab="tabstave notation=true key=C time=4/4
notes :w (0/5.2/4.2/3.1/2.0/1) | :w (1/6.3/5.3/4.2/3.1/2.1/1) | :w (3/5.3/4.2/3.1/2.0/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1)
text ++,.1,vi (Am),:++,.2,IV (F),:++,.3,I (C),:++,.4,V (G)"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">With Seventh Chords</h3>
              <VexTabRenderer 
                vextab="tabstave notation=true key=C time=4/4
notes :w (x/6.0/5.1/4.0/3.0/2.x/1) | :w (1/6.x/5.2/4.1/3.1/2.x/1) | :w (x/6.3/5.2/4.4/3.5/2.x/1) | :w (3/6.x/5.4/4.3/3.4/2.x/1)
text ++,.1,Am7,:++,.2,Fmaj7,:++,.3,Cmaj7,:++,.4,G7"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">In Key of G Major</h3>
              <VexTabRenderer 
                vextab="tabstave notation=true key=G time=4/4
notes :w (2/5.0/4.0/3.2/2.0/1) | :w (3/5.3/4.2/3.1/2.0/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1) | :w (2/5.1/4.0/3.0/2.0/1)
text ++,.1,vi (Em),:++,.2,IV (C),:++,.3,I (G),:++,.4,V (D)"
              />
            </div>
          </div>
        </div>

        {/* Harmonic Relationships */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Harmonic Relationships</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Comparison with I-V-vi-IV</h3>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="text-blue-800 text-sm space-y-2">
                  <div><strong>I-V-vi-IV:</strong> Confident → Tension → Melancholy → Comfort</div>
                  <div><strong>vi-IV-I-V:</strong> Melancholy → Comfort → Home → Anticipation</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                While I-V-vi-IV starts confidently and moves to melancholy, vi-IV-I-V starts 
                with emotion and resolves optimistically.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Keys</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-5 gap-2 text-xs">
                  <div className="font-medium">Key</div>
                  <div className="font-medium">vi</div>
                  <div className="font-medium">IV</div>
                  <div className="font-medium">I</div>
                  <div className="font-medium">V</div>
                  
                  <div>C</div><div>Am</div><div>F</div><div>C</div><div>G</div>
                  <div>G</div><div>Em</div><div>C</div><div>G</div><div>D</div>
                  <div>D</div><div>Bm</div><div>G</div><div>D</div><div>A</div>
                  <div>A</div><div>F#m</div><div>D</div><div>A</div><div>E</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Your Progressions Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Progressions Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the vi-IV-I-V progression, explore other essential progressions that build on these harmonic foundations.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/progressions/i-v-vi-iv" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">I-V-vi-IV Progression</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the confident cousin with stronger resolution.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Learn the assertive version →
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
                  Learn the backbone of blues and rock music.
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
            href="/lessons/theory/progressions/i-v-vi-iv" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4 sm:mb-0"
          >
            <span className="mr-2">←</span>
            Previous: I-V-vi-IV Progression
          </Link>
          <Link 
            href="/lessons/theory/progressions" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            All Progressions
            <span className="ml-2">→</span>
          </Link>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
