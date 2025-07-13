import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import MusicScore from '@/components/MusicScore';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const viIVIVProgression = `
tabstave notation=true key=C time=4/4
notes :w (0/5.2/4.2/3.1/2.0/1) | :w (1/6.3/5.3/4.2/3.1/2.1/1) | :w (3/5.3/4.2/3.1/2.0/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1)
text ++,.1,vi (Am),:++,.2,IV (F),:++,.3,I (C),:++,.4,V (G)
`;

const withSevenths = `
tabstave notation=true key=C time=4/4
notes :w (x/6.0/5.1/4.0/3.0/2.x/1) | :w (1/6.x/5.2/4.1/3.1/2.x/1) | :w (x/6.3/5.2/4.4/3.5/2.x/1) | :w (3/6.x/5.4/4.3/3.4/2.x/1)
text ++,.1,Am7,:++,.2,Fmaj7,:++,.3,Cmaj7,:++,.4,G7
`;

const alternateVoicings = `
tabstave notation=true key=C time=4/4
notes :w (5/5.5/4.5/3.5/2.5/1) | :w (1/6.1/5.2/4.3/3.3/2.1/1) | :w (8/6.8/5.9/4.10/3.10/2.8/1) | :w (3/6.3/5.4/4.5/3.5/2.3/1)
text ++,.1,Am (5th fret),:++,.2,F (1st fret),:++,.3,C (8th fret),:++,.4,G (3rd fret)
`;

const keyOfGProgression = `
tabstave notation=true key=G time=4/4
notes :w (2/5.0/4.0/3.2/2.0/1) | :w (3/5.3/4.2/3.1/2.0/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1) | :w (2/5.1/4.0/3.0/2.0/1)
text ++,.1,vi (Em),:++,.2,IV (C),:++,.3,I (G),:++,.4,V (D)
`;

export default function ViIVIVProgressionPage() {
  return (
    <Layout>
      <Header
        title="vi-IV-I-V Progression"
        subtitle="The emotional journey of modern pop and alternative rock"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-rose-100 to-orange-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              vi-IV-I-V: The Modern Pop Formula
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover the progression that creates emotional depth and has become a staple of contemporary music.
            </p>
            <div className="bg-rose-50 rounded-lg p-4">
              <h3 className="font-semibold text-rose-800 mb-2">What You&apos;ll Learn:</h3>
              <ul className="text-rose-700 space-y-1">
                <li>• Why this progression feels so emotionally powerful</li>
                <li>• How it differs from I-V-vi-IV</li>
                <li>• Voice leading and smooth transitions</li>
                <li>• Modern applications in pop and rock</li>
                <li>• Creative variations and substitutions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding vi-IV-I-V</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Emotional Journey</h3>
              <p className="text-blue-700 mb-4">
                Starting on the vi chord creates an immediate sense of longing and melancholy. 
                The progression then journeys through comfort (IV), resolution (I), and anticipation (V).
              </p>
              <div className="space-y-2 text-blue-700">
                <div>• <strong>vi:</strong> Melancholy, introspection</div>
                <div>• <strong>IV:</strong> Comfort, familiarity</div>
                <div>• <strong>I:</strong> Home, resolution</div>
                <div>• <strong>V:</strong> Tension, anticipation</div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Difference from I-V-vi-IV</h3>
              <p className="text-green-700 mb-4">
                While I-V-vi-IV starts confidently and moves to melancholy, vi-IV-I-V starts with emotion and resolves optimistically.
              </p>
              <div className="bg-white rounded p-4">
                <div className="text-sm">
                  <div className="font-semibold">I-V-vi-IV:</div>
                  <div className="text-gray-600">Confident → Tension → Melancholy → Comfort</div>
                  <div className="font-semibold mt-2">vi-IV-I-V:</div>
                  <div className="text-gray-600">Melancholy → Comfort → Home → Anticipation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Basic Progression */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Basic vi-IV-I-V Progression (Key of C)</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Standard Voicings</h3>
            <MusicScore 
              staves={[{
                id: 'vi-iv-i-v-basic',
                notation: viIVIVProgression,
                title: 'vi-IV-I-V in C Major'
              }]}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <h4 className="font-semibold mb-2">vi - A Minor</h4>
              <SimpleFretboardDiagram chord="A_minor" />
              <p className="text-sm text-gray-600 mt-2">Melancholy starting point</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">IV - F Major</h4>
              <SimpleFretboardDiagram chord="F_major" />
              <p className="text-sm text-gray-600 mt-2">Comforting support</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">I - C Major</h4>
              <SimpleFretboardDiagram chord="C_major" />
              <p className="text-sm text-gray-600 mt-2">Home and resolution</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">V - G Major</h4>
              <SimpleFretboardDiagram chord="G_major" />
              <p className="text-sm text-gray-600 mt-2">Building anticipation</p>
            </div>
          </div>
        </section>

        {/* Extended Harmony */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Extended Harmony</h2>
          
          <div className="bg-purple-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-800">Adding Seventh Chords</h3>
            <p className="text-purple-700 mb-4">
              Adding 7th extensions creates a more sophisticated, modern sound that&apos;s perfect for indie and alternative styles.
            </p>
            <MusicScore 
              staves={[{
                id: 'vi-iv-i-v-sevenths',
                notation: withSevenths,
                title: 'vi-IV-I-V with 7th Chords'
              }]}
            />
          </div>
        </section>

        {/* Voice Leading and Alternate Voicings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Voice Leading & Alternate Voicings</h2>
          
          <div className="bg-yellow-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-yellow-800">Smooth Transitions</h3>
            <p className="text-yellow-700 mb-4">
              Using different chord voicings up the neck creates smoother voice leading and a more professional sound.
            </p>
            <MusicScore 
              staves={[{
                id: 'vi-iv-i-v-voicings',
                notation: alternateVoicings,
                title: 'Alternate Voicings for Smooth Voice Leading'
              }]}
            />
            <div className="mt-4 text-sm text-yellow-700">
              <strong>Tip:</strong> Notice how the top voices move smoothly between chords with minimal jumps.
            </div>
          </div>
        </section>

        {/* Different Keys */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">vi-IV-I-V in Different Keys</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800">Key of G Major</h3>
              <MusicScore 
                staves={[{
                  id: 'vi-iv-i-v-g-major',
                  notation: keyOfGProgression,
                  title: 'vi-IV-I-V in G Major'
                }]}
              />
              <div className="mt-4 text-sm text-green-700">
                Em - C - G - D
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-800">Common Keys Table</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Key</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">vi</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">IV</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">I</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">V</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-2 font-medium">C</td>
                      <td className="px-3 py-2">Am</td>
                      <td className="px-3 py-2">F</td>
                      <td className="px-3 py-2">C</td>
                      <td className="px-3 py-2">G</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-2 font-medium">G</td>
                      <td className="px-3 py-2">Em</td>
                      <td className="px-3 py-2">C</td>
                      <td className="px-3 py-2">G</td>
                      <td className="px-3 py-2">D</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">D</td>
                      <td className="px-3 py-2">Bm</td>
                      <td className="px-3 py-2">G</td>
                      <td className="px-3 py-2">D</td>
                      <td className="px-3 py-2">A</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-2 font-medium">A</td>
                      <td className="px-3 py-2">F#m</td>
                      <td className="px-3 py-2">D</td>
                      <td className="px-3 py-2">A</td>
                      <td className="px-3 py-2">E</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Musical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-800">Famous Songs</h3>
              <ul className="space-y-2 text-indigo-700">
                <li>• "Somebody That I Used to Know" - Gotye</li>
                <li>• "Grenade" - Bruno Mars</li>
                <li>• "Let Her Go" - Passenger</li>
                <li>• "Torn" - Natalie Imbruglia</li>
                <li>• "Zombie" - The Cranberries</li>
                <li>• "What&apos;s Up?" - 4 Non Blondes</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-teal-800">Genre Applications</h3>
              <ul className="space-y-2 text-teal-700">
                <li>• <strong>Pop:</strong> Emotional ballads and mid-tempo songs</li>
                <li>• <strong>Alternative Rock:</strong> Introspective and atmospheric</li>
                <li>• <strong>Indie Folk:</strong> Storytelling and emotional depth</li>
                <li>• <strong>Contemporary Christian:</strong> Worship and reflection</li>
                <li>• <strong>Singer-Songwriter:</strong> Personal and intimate</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Songwriting Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Songwriting with vi-IV-I-V</h2>
          
          <div className="bg-orange-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-orange-800">Creative Variations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-orange-700">Rhythm Variations</h4>
                <ul className="space-y-1 text-orange-700 text-sm">
                  <li>• Change chord duration (2 bars each vs 1 bar each)</li>
                  <li>• Add syncopation and off-beat changes</li>
                  <li>• Use different strumming patterns</li>
                  <li>• Incorporate fingerpicking patterns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-orange-700">Harmonic Variations</h4>
                <ul className="space-y-1 text-orange-700 text-sm">
                  <li>• Add passing chords between main chords</li>
                  <li>• Use slash chords for bass movement</li>
                  <li>• Substitute with related chords (iii for I, etc.)</li>
                  <li>• Add 7ths, 9ths, and other extensions</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-pink-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-pink-800">Melodic Considerations</h3>
            <p className="text-pink-700 mb-4">
              The vi-IV-I-V progression works particularly well with melodies that:
            </p>
            <ul className="space-y-2 text-pink-700">
              <li>• Start on scale degrees 6, 1, or 3 (chord tones of vi)</li>
              <li>• Use stepwise motion to connect chord changes</li>
              <li>• Emphasize the emotional journey from minor to major</li>
              <li>• Leave space for the harmony to breathe</li>
            </ul>
          </div>
        </section>

        {/* Practice Strategies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Strategies</h2>
          
          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-3 text-green-800">🎯 Progressive Practice Plan</h3>
            <ol className="space-y-3 text-green-700">
              <li><strong>1. Basic Changes:</strong> Master clean transitions between open chords</li>
              <li><strong>2. Rhythm Patterns:</strong> Start with simple down-strums, add complexity</li>
              <li><strong>3. Different Keys:</strong> Learn in G, D, and A major</li>
              <li><strong>4. Voice Leading:</strong> Practice alternate voicings for smoother changes</li>
              <li><strong>5. Song Application:</strong> Play along with famous songs using this progression</li>
              <li><strong>6. Creative Variations:</strong> Experiment with extensions and substitutions</li>
            </ol>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-yellow-800">💡 Practice Tips</h3>
            <ul className="space-y-2 text-yellow-700">
              <li>• Focus on the emotional character of each chord</li>
              <li>• Practice with a metronome to develop steady timing</li>
              <li>• Record yourself to hear the progression objectively</li>
              <li>• Try different tempos from ballad to uptempo</li>
              <li>• Experiment with dynamics (loud/soft) for emotional effect</li>
              <li>• Learn to loop the progression smoothly</li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <section className="mb-12">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Continue Learning</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/lessons/theory/progressions/12-bar-blues" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">← 12 Bar Blues</h4>
                <p className="text-sm text-gray-600">Master the backbone of blues and rock</p>
              </Link>
              <Link 
                href="/lessons/theory/progressions/circle-of-fifths" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">Circle of Fifths →</h4>
                <p className="text-sm text-gray-600">Explore advanced harmonic movement</p>
              </Link>
            </div>
            <div className="mt-4">
              <Link 
                href="/lessons/theory/progressions" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Back to All Progressions
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
