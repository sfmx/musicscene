'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function MinorScalePage() {
  return (
    <Layout>
      <Header
        title="Minor Scale Theory"
        subtitle="Understanding the natural minor scale and its emotional character in guitar playing"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">The Natural Minor Scale</h1>
          <p className="text-xl opacity-90 mb-4">
            Master the emotional depth and versatility of the minor scale - the foundation of countless songs across all genres.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Melancholic Character</span>
            <span className="bg-white/20 px-3 py-1 rounded">Relative to Major</span>
            <span className="bg-white/20 px-3 py-1 rounded">Universal Appeal</span>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Minor Scale Theory</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">Scale Formula</h3>
            <p className="mb-2">The natural minor scale follows the pattern: <strong>W-H-W-W-H-W-W</strong></p>
            <p className="text-sm text-gray-600">Where W = Whole step (2 frets) and H = Half step (1 fret)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">A Minor Scale Notes</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">1st (Root):</span>
                  <span>A</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">2nd:</span>
                  <span>B</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">♭3rd:</span>
                  <span>C</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">4th:</span>
                  <span>D</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">5th:</span>
                  <span>E</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">♭6th:</span>
                  <span>F</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">♭7th:</span>
                  <span>G</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Relative Major</h3>
              <p className="mb-3">
                Every minor scale has a relative major scale that contains the exact same notes but starts from a different root.
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong>A Minor</strong> is relative to <strong>C Major</strong><br/>
                  Both contain: A, B, C, D, E, F, G
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fretboard Patterns */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Fretboard Patterns</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">💡 Practice Tip</h3>
            <p>Learn these five positions to play the minor scale anywhere on the fretboard. Start with Position 1 (5th fret) for A minor.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Position 1 - A Minor (5th Fret)</h3>
              <div className="mb-4">
                <MusicScore
                  title="A Minor Scale - Position 1"
                  staves={[{
                    id: 'a-minor-position-1',
                    notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 5/6 7/6 8/6 5/5 | :q 7/5 8/5 5/4 7/4 | :q 8/4 7/4 5/4 8/5 | :q 7/5 5/5 8/6 7/6 5/6`,
                    width: 550,
                    scale: 1.0,
                    title: 'Root on 6th string, 5th fret'
                  }]}
                />
              </div>
              <p className="text-sm text-gray-600">Root note on 6th string, 5th fret. This is the most common minor scale position.</p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Position 2 - A Minor (7th Fret)</h3>
              <div className="mb-4">
                <MusicScore
                  title="A Minor Scale - Position 2"
                  staves={[{
                    id: 'a-minor-position-2',
                    notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 7/6 9/6 10/6 7/5 | :q 9/5 10/5 7/4 9/4 | :q 10/4 9/4 7/4 10/5 | :q 9/5 7/5 10/6 9/6 7/6`,
                    width: 550,
                    scale: 1.0,
                    title: 'Second position pattern'
                  }]}
                />
              </div>
              <p className="text-sm text-gray-600">Root note on 5th string, 12th fret when extended up.</p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Position 3 - A Minor (10th Fret)</h3>
              <div className="mb-4">
                <MusicScore
                  title="A Minor Scale - Position 3"
                  staves={[{
                    id: 'a-minor-position-3',
                    notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 10/6 12/6 13/6 10/5 | :q 12/5 13/5 10/4 12/4 | :q 13/4 12/4 10/4 13/5 | :q 12/5 10/5 13/6 12/6 10/6`,
                    width: 550,
                    scale: 1.0,
                    title: 'Third position pattern'
                  }]}
                />
              </div>
              <p className="text-sm text-gray-600">Root note on 4th string, 7th fret when playing lower.</p>
            </div>
          </div>
        </section>

        {/* Musical Applications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Musical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎭 Emotional Character</h3>
              <ul className="space-y-2 text-sm">
                <li>• Melancholic and introspective</li>
                <li>• Serious and dramatic</li>
                <li>• Mysterious and dark</li>
                <li>• Contemplative and soulful</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Genre Applications</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Rock:</strong> Power ballads, metal</li>
                <li>• <strong>Folk:</strong> Traditional melodies</li>
                <li>• <strong>Classical:</strong> Baroque and romantic</li>
                <li>• <strong>Pop:</strong> Emotional choruses</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-4">Common Minor Scale Exercises</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Exercise 1: Ascending Scale</h4>
                <MusicScore
                  title="Ascending A Minor Scale"
                  staves={[{
                    id: 'a-minor-ascending',
                    notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 5/6 7/6 8/6 5/5 | :q 7/5 8/5 5/4 7/4`,
                    width: 400,
                    scale: 1.0,
                    title: 'Exercise 1: Basic ascending pattern'
                  }]}
                />
                <p className="text-sm text-gray-600 mt-2">Play slowly and focus on clean fret-hand positioning.</p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Exercise 2: Scale in Thirds</h4>
                <MusicScore
                  title="A Minor Scale in Thirds"
                  staves={[{
                    id: 'a-minor-thirds',
                    notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 5/6 8/6 7/6 5/5 | :q 8/6 7/5 5/5 8/5`,
                    width: 400,
                    scale: 1.0,
                    title: 'Exercise 2: Interval training'
                  }]}
                />
                <p className="text-sm text-gray-600 mt-2">Playing in intervals helps develop ear training and finger independence.</p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Exercise 3: Minor Scale Sequence</h4>
                <MusicScore
                  title="A Minor Scale Sequence"
                  staves={[{
                    id: 'a-minor-sequence',
                    notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 5/6 7/6 5/5 7/5 | :q 7/6 8/6 7/5 8/5`,
                    width: 400,
                    scale: 1.0,
                    title: 'Exercise 3: Musical sequences'
                  }]}
                />
                <p className="text-sm text-gray-600 mt-2">Sequences help develop fluidity and musical phrasing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Songs */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Famous Songs Using Minor Scales</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Rock & Metal</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Stairway to Heaven" - Led Zeppelin (A minor)</li>
                <li>• "Smoke on the Water" - Deep Purple (G minor)</li>
                <li>• "Master of Puppets" - Metallica (E minor)</li>
                <li>• "Paranoid" - Black Sabbath (E minor)</li>
              </ul>
            </div>

            <div className="bg-blue-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Pop & Alternative</h3>
              <ul className="space-y-2 text-sm">
                <li>• "All Along the Watchtower" - Jimi Hendrix (C# minor)</li>
                <li>• "Mad World" - Gary Jules (F minor)</li>
                <li>• "Losing My Religion" - R.E.M. (A minor)</li>
                <li>• "Hurt" - Johnny Cash (A minor)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Strategy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Practice Strategy</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Progressive Learning Path</h3>
            <ol className="space-y-2 text-sm">
              <li>1. <strong>Learn the notes:</strong> Memorize the A minor scale pattern</li>
              <li>2. <strong>Practice slowly:</strong> Focus on clean articulation</li>
              <li>3. <strong>Multiple positions:</strong> Learn all five scale positions</li>
              <li>4. <strong>Apply musically:</strong> Create melodies and solos</li>
              <li>5. <strong>Transpose:</strong> Play in different keys</li>
            </ol>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Week 1-2</h4>
              <p className="text-sm">Master Position 1 in A minor. Practice daily scales and simple melodies.</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Week 3-4</h4>
              <p className="text-sm">Add Positions 2 and 3. Practice connecting positions smoothly.</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Week 5+</h4>
              <p className="text-sm">Learn all positions, transpose to other keys, and improvise melodies.</p>
            </div>
          </div>
        </section>

        {/* Related Topics */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Related Topics</h2>
          
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Continue Your Learning Journey</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Scale Theory</h4>
                <ul className="text-sm space-y-1">
                  <li>• Major Scales</li>
                  <li>• Harmonic Minor Scale</li>
                  <li>• Melodic Minor Scale</li>
                  <li>• Natural Minor Modes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Practical Application</h4>
                <ul className="text-sm space-y-1">
                  <li>• Minor Pentatonic Scale</li>
                  <li>• Minor Scale Harmony</li>
                  <li>• Modal Interchange</li>
                  <li>• Improvisation Techniques</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <a 
            href="/lessons/theory/scales" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Scales
          </a>
          <a 
            href="/lessons/theory/scales/pentatonic" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Next: Pentatonic Scale →
          </a>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
