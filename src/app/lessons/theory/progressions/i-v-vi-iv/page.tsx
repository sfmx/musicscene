import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import MusicScore from '@/components/MusicScore';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const axisProgression = `
tabstave notation=true key=C time=4/4
notes :w (3/5.3/4.2/3.1/2.0/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1) | :w (0/5.2/4.2/3.1/2.0/1) | :w (1/6.3/5.3/4.2/3.1/2.1/1)
text ++,.1,I (C),:++,.2,V (G),:++,.3,vi (Am),:++,.4,IV (F)
`;

const viIVIV = `
tabstave notation=true key=C time=4/4
notes :w (0/5.2/4.2/3.1/2.0/1) | :w (1/6.3/5.3/4.2/3.1/2.1/1) | :w (3/5.3/4.2/3.1/2.0/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1)
text ++,.1,vi (Am),:++,.2,IV (F),:++,.3,I (C),:++,.4,V (G)
`;

const withSevenths = `
tabstave notation=true key=C time=4/4
notes :w (x/6.3/5.2/4.4/3.5/2.x/1) | :w (3/6.x/5.4/4.3/3.4/2.x/1) | :w (x/6.0/5.1/4.0/3.0/2.x/1) | :w (1/6.x/5.2/4.1/3.1/2.x/1)
text ++,.1,Cmaj7,:++,.2,G7,:++,.3,Am7,:++,.4,Fmaj7
`;

export default function IVviIVProgressionPage() {
  return (
    <Layout>
      <Header
        title="I-V-vi-IV Progression"
        subtitle="The axis progression that powers countless pop hits"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-pink-100 to-blue-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              I-V-vi-IV: The Pop Progression
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover the &quot;axis progression&quot; that has been the foundation of popular music for decades.
            </p>
            <div className="bg-pink-50 rounded-lg p-4">
              <h3 className="font-semibold text-pink-800 mb-2">What You&apos;ll Learn:</h3>
              <ul className="text-pink-700 space-y-1">
                <li>• Why this progression is so emotionally powerful</li>
                <li>• How to play it in multiple keys</li>
                <li>• Common variations and substitutions</li>
                <li>• Hundreds of songs using this progression</li>
                <li>• Writing your own songs with I-V-vi-IV</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding I-V-vi-IV</h2>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">The Axis Progression</h3>
            <p className="mb-4 text-blue-700">
              I-V-vi-IV is called the &quot;axis progression&quot; because it cycles through opposite points of the harmonic circle:
            </p>
            <ul className="space-y-2 text-blue-700">
              <li>• <strong>I (Tonic):</strong> Stability and home</li>
              <li>• <strong>V (Dominant):</strong> Strong pull forward</li>
              <li>• <strong>vi (Relative minor):</strong> Emotional shift to minor</li>
              <li>• <strong>IV (Subdominant):</strong> Gentle pull back to I</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-green-800">In the Key of C Major</h3>
            <div className="mb-4">
              <p className="text-green-700 mb-4">The basic I-V-vi-IV in C major:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">I - C Major</h4>
                  <SimpleFretboardDiagram chord="C_major" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">V - G Major</h4>
                  <SimpleFretboardDiagram chord="G_major" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">vi - A Minor</h4>
                  <SimpleFretboardDiagram chord="A_minor" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">IV - F Major</h4>
                  <SimpleFretboardDiagram chord="F_major" />
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Basic I-V-vi-IV Progression</h3>
            <MusicScore 
              staves={[{
                id: 'axis-progression',
                notation: axisProgression,
                title: 'I-V-vi-IV in C Major'
              }]}
            />
          </div>
        </section>

        {/* Common Variations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Variations</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">vi-IV-I-V (Starting on vi)</h3>
              <p className="mb-4 text-sm">Many songs start with the relative minor for a more emotional opening:</p>
              <MusicScore 
                staves={[{
                  id: 'vi-iv-i-v',
                  notation: viIVIV,
                  title: 'vi-IV-I-V Variation'
                }]}
              />
              <p className="text-sm text-gray-600 mt-2">Same chords, different starting point</p>
            </div>
            
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">With Seventh Chords</h3>
              <p className="mb-4 text-sm">Adding 7ths creates sophistication:</p>
              <MusicScore 
                staves={[{
                  id: 'with-sevenths',
                  notation: withSevenths,
                  title: 'Cmaj7-G7-Am7-Fmaj7'
                }]}
              />
              <p className="text-sm text-gray-600 mt-2">Smoother voice leading with extensions</p>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">Other Common Variations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-yellow-700">
                <li>• <strong>I-V-IV-vi:</strong> Different ending</li>
                <li>• <strong>I-vi-IV-V:</strong> Classic &quot;doo-wop&quot; progression</li>
                <li>• <strong>vi-V-IV-I:</strong> Descending feeling</li>
              </ul>
              <ul className="space-y-2 text-yellow-700">
                <li>• <strong>I-V-vi-iii-IV:</strong> Extended with iii</li>
                <li>• <strong>I-V-vi-IV-V:</strong> Extra V for turnaround</li>
                <li>• <strong>I-V-vi-ii-IV:</strong> Substitute ii for IV</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Famous Songs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Famous Songs Using I-V-vi-IV</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-800">Classic Rock</h3>
              <ul className="space-y-2 text-red-700">
                <li>• &quot;Don&apos;t Stop Believin&apos;&quot; - Journey</li>
                <li>• &quot;Let It Be&quot; - The Beatles</li>
                <li>• &quot;No Woman No Cry&quot; - Bob Marley</li>
                <li>• &quot;With or Without You&quot; - U2</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Modern Pop</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• &quot;Someone Like You&quot; - Adele</li>
                <li>• &quot;Counting Stars&quot; - OneRepublic</li>
                <li>• &quot;Let Her Go&quot; - Passenger</li>
                <li>• &quot;Demons&quot; - Imagine Dragons</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Country & Folk</h3>
              <ul className="space-y-2 text-green-700">
                <li>• &quot;Wagon Wheel&quot; - Old Crow Medicine Show</li>
                <li>• &quot;The Night We Met&quot; - Lord Huron</li>
                <li>• &quot;Fast Car&quot; - Tracy Chapman</li>
                <li>• &quot;Torn&quot; - Natalie Imbruglia</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-purple-800">🎵 The &quot;Four Chords Song&quot;</h3>
            <p className="text-purple-700 mb-2">
              The Axis of Awesome famously demonstrated how many hit songs use this exact progression in their comedy song &quot;Four Chords.&quot; 
              It includes snippets from dozens of popular songs, all using I-V-vi-IV or its variations.
            </p>
          </div>
        </section>

        {/* Different Keys */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">I-V-vi-IV in Different Keys</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Guitar-Friendly Keys</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">Key of G:</span>
                  <span>G - D - Em - C</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">Key of D:</span>
                  <span>D - A - Bm - G</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">Key of A:</span>
                  <span>A - E - F#m - D</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">Key of E:</span>
                  <span>E - B - C#m - A</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Capo-Friendly Keys</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">Key of F (Capo 1):</span>
                  <span>F - C - Dm - Bb</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">Key of Bb (Capo 3):</span>
                  <span>Bb - F - Gm - Eb</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">Key of Ab (Capo 4):</span>
                  <span>Ab - Eb - Fm - Db</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3">Use capo and play in C shapes</p>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Exercises</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Exercise 1: Basic Progression</h3>
              <p className="mb-4">Master the basic chord changes in C major:</p>
              <div className="mb-4 space-y-2">
                <p><strong>Progression:</strong> C - G - Am - F (repeat)</p>
                <p><strong>Timing:</strong> 4 strums per chord</p>
                <p><strong>Pattern:</strong> Down, Down, Up, Up-Down-Up</p>
                <p><strong>Tempo:</strong> Start at 60 BPM, work up to 100 BPM</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Exercise 2: Quick Changes</h3>
              <p className="mb-4">Practice faster chord changes (2 beats per chord):</p>
              <div className="mb-4 space-y-2">
                <p><strong>Progression:</strong> C G | Am F | C G | Am F</p>
                <p><strong>Focus:</strong> Smooth, quick transitions</p>
                <p><strong>Challenge:</strong> Try to keep strumming steady</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Exercise 3: Different Starting Points</h3>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Practice these variations:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>I-V-vi-IV:</strong> C - G - Am - F</li>
                  <li>• <strong>V-vi-IV-I:</strong> G - Am - F - C</li>
                  <li>• <strong>vi-IV-I-V:</strong> Am - F - C - G</li>
                  <li>• <strong>IV-I-V-vi:</strong> F - C - G - Am</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Songwriting Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Songwriting with I-V-vi-IV</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-800">Melody Writing Tips</h3>
              <ul className="space-y-2 text-indigo-700">
                <li>• Start melodies on chord tones (1, 3, 5)</li>
                <li>• Use stepwise motion between chords</li>
                <li>• Try starting phrases on different beats</li>
                <li>• Emphasize the vi chord for emotional impact</li>
                <li>• Use the IV chord for uplifting moments</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Arrangement Ideas</h3>
              <ul className="space-y-2 text-teal-700">
                <li>• Start verses on vi for emotional hook</li>
                <li>• Use I-V-vi-IV for chorus energy</li>
                <li>• Try different rhythmic patterns</li>
                <li>• Add passing chords between main chords</li>
                <li>• Experiment with different voicings</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold mb-3 text-orange-800">💡 Creative Variations</h3>
            <ul className="space-y-2 text-orange-700">
              <li>• Use different strumming patterns for different sections</li>
              <li>• Try fingerpicking instead of strumming</li>
              <li>• Add bass runs between chords</li>
              <li>• Use slash chords for more interesting bass movement</li>
              <li>• Substitute some chords with their relative minors/majors</li>
            </ul>
          </div>
        </section>

        {/* Practice Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Strategy</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Week 1: Foundation</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Master the four chord shapes</li>
                <li>• Practice smooth transitions</li>
                <li>• Work on basic strumming</li>
                <li>• Focus on key of C</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Week 2: Expansion</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Add keys of G and D</li>
                <li>• Try different starting points</li>
                <li>• Practice with metronome</li>
                <li>• Learn a simple song</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Week 3+: Mastery</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• Learn multiple songs</li>
                <li>• Try different arrangements</li>
                <li>• Experiment with substitutions</li>
                <li>• Write your own progressions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link 
              href="/lessons/theory/progressions/ii-v-i" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Previous: ii-V-I Progression
            </Link>
            <Link 
              href="/lessons/theory/progressions/12-bar-blues" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Next: 12 Bar Blues
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
