'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function PentatonicScalePage() {
  return (
    <Layout>
      <Header
        title="Pentatonic Scale Theory"
        subtitle="Master the most versatile and essential scale for guitar solos, blues, and rock music"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">The Pentatonic Scale</h1>
          <p className="text-xl opacity-90 mb-4">
            The pentatonic scale is the guitarist's best friend - a five-note scale that sounds great in almost any musical context.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Five Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">Universal Appeal</span>
            <span className="bg-white/20 px-3 py-1 rounded">Solo Essential</span>
            <span className="bg-white/20 px-3 py-1 rounded">Blues Foundation</span>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Pentatonic Scale Theory</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">What Makes It Special</h3>
            <p className="mb-2">The pentatonic scale contains only five notes (penta = five, tonic = tones), removing the 4th and 7th degrees from the major scale.</p>
            <p className="text-sm text-gray-600">This eliminates potential dissonance, making every note sound "safe" and melodic.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Major Pentatonic (A Major)</h3>
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
                  <span className="font-medium">3rd:</span>
                  <span>C#</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">5th:</span>
                  <span>E</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">6th:</span>
                  <span>F#</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Bright, happy sound. Great for country, folk, and uplifting solos.</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Minor Pentatonic (A Minor)</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">1st (Root):</span>
                  <span>A</span>
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
                  <span className="font-medium">♭7th:</span>
                  <span>G</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Emotional, expressive sound. Essential for blues, rock, and metal solos.</p>
            </div>
          </div>
        </section>

        {/* Fretboard Patterns */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Minor Pentatonic Patterns</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎸 The Five Boxes</h3>
            <p>The minor pentatonic scale has five interconnected patterns that cover the entire fretboard. Master these and you'll never run out of places to solo!</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Box 1 - A Minor Pentatonic (5th Fret)</h3>
              <div className="mb-4">
                <MusicScore
                  title="Minor Pentatonic Box 1"
                  staves={[{
                    id: 'minor-pent-box1',
                    notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 5/6 8/6 5/5 7/5 | :q 5/4 7/4 5/3 7/3 | :q 5/2 8/2 5/1 8/1`,
                    width: 550,
                    scale: 1.0,
                    title: 'The most important pentatonic pattern'
                  }]}
                />
              </div>
              <p className="text-sm text-gray-600">This is THE pattern every guitarist must know. Root note on 6th string, 5th fret.</p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Box 2 - A Minor Pentatonic (8th Fret)</h3>
              <div className="mb-4">
                <MusicScore
                  title="Minor Pentatonic Box 2"
                  staves={[{
                    id: 'minor-pent-box2',
                    notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 8/6 10/6 7/5 10/5 | :q 7/4 9/4 7/3 10/3 | :q 8/2 10/2 8/1 10/1`,
                    width: 550,
                    scale: 1.0,
                    title: 'Second essential pattern'
                  }]}
                />
              </div>
              <p className="text-sm text-gray-600">Connects with Box 1. Great for higher register playing.</p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Box 3 - A Minor Pentatonic (10th Fret)</h3>
              <div className="mb-4">
                <MusicScore
                  title="Minor Pentatonic Box 3"
                  staves={[{
                    id: 'minor-pent-box3',
                    notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 10/6 12/6 10/5 12/5 | :q 9/4 12/4 10/3 12/3 | :q 10/2 13/2 10/1 13/1`,
                    width: 550,
                    scale: 1.0,
                    title: 'Higher position pattern'
                  }]}
                />
              </div>
              <p className="text-sm text-gray-600">Higher position with sweet, singing tone quality.</p>
            </div>
          </div>
        </section>

        {/* Musical Applications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Musical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Genre Applications</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Blues:</strong> Foundation of all blues solos</li>
                <li>• <strong>Rock:</strong> Classic rock and metal leads</li>
                <li>• <strong>Country:</strong> Chicken pickin' and bends</li>
                <li>• <strong>Jazz:</strong> Combined with other scales</li>
                <li>• <strong>Folk:</strong> Simple, memorable melodies</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Playing Techniques</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Bending:</strong> Especially on the 3rd</li>
                <li>• <strong>Vibrato:</strong> Add emotion to sustained notes</li>
                <li>• <strong>Hammer-ons/Pull-offs:</strong> Smooth legato lines</li>
                <li>• <strong>Double stops:</strong> Two notes together</li>
                <li>• <strong>Sliding:</strong> Connect positions</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-4">Essential Pentatonic Exercises</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Exercise 1: Box 1 Pattern</h4>
                <MusicScore
                  title="Box 1 Up and Down"
                  staves={[{
                    id: 'pent-exercise-1',
                    notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 5/6 8/6 5/5 7/5 | :q 5/4 7/4 5/3 7/3 | :q 7/3 5/3 7/4 5/4 | :q 7/5 5/5 8/6 5/6`,
                    width: 550,
                    scale: 1.0,
                    title: 'Master this pattern first'
                  }]}
                />
                <p className="text-sm text-gray-600 mt-2">Start slowly and focus on clean articulation. This is your foundation.</p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Exercise 2: Box Connecting</h4>
                <MusicScore
                  title="Connecting Box 1 to Box 2"
                  staves={[{
                    id: 'pent-exercise-2',
                    notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 5/6 8/6 7/5 10/5 | :q 7/4 9/4 7/3 10/3`,
                    width: 450,
                    scale: 1.0,
                    title: 'Smooth position changes'
                  }]}
                />
                <p className="text-sm text-gray-600 mt-2">Practice connecting patterns for unlimited fretboard access.</p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Exercise 3: Pentatonic Sequences</h4>
                <MusicScore
                  title="Four-Note Sequences"
                  staves={[{
                    id: 'pent-exercise-3',
                    notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 5/6 8/6 5/5 7/5 | :q 8/6 5/5 7/5 5/4`,
                    width: 450,
                    scale: 1.0,
                    title: 'Develop speed and fluidity'
                  }]}
                />
                <p className="text-sm text-gray-600 mt-2">Sequences create musical phrases and develop technical facility.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Famous Pentatonic Solos</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Classic Rock</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Stairway to Heaven" solo - Jimmy Page</li>
                <li>• "Sweet Child O' Mine" - Slash</li>
                <li>• "Comfortably Numb" - David Gilmour</li>
                <li>• "Back in Black" - Angus Young</li>
                <li>• "Layla" (unplugged) - Eric Clapton</li>
              </ul>
            </div>

            <div className="bg-purple-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Blues & Blues Rock</h3>
              <ul className="space-y-2 text-sm">
                <li>• "The Thrill Is Gone" - B.B. King</li>
                <li>• "Pride and Joy" - Stevie Ray Vaughan</li>
                <li>• "Crossroads" - Eric Clapton</li>
                <li>• "Red House" - Jimi Hendrix</li>
                <li>• "Born Under a Bad Sign" - Albert King</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Major vs Minor Pentatonic */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Major vs Minor Pentatonic</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Important Relationship</h3>
            <p className="mb-2">A major pentatonic and F# minor pentatonic contain the exact same notes!</p>
            <p className="text-sm text-gray-600">The difference is which note feels like "home" (the root). This is called relative scales.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">A Major Pentatonic</h3>
              <MusicScore
                title="A Major Pentatonic Pattern"
                staves={[{
                  id: 'major-pent-pattern',
                  notation: `options space=20 font-size=14
tabstave notation=true key=A time=4/4
notes :q 5/6 7/6 4/5 6/5 | :q 4/4 6/4 4/3 6/3 | :q 5/2 7/2 5/1 7/1`,
                  width: 450,
                  scale: 1.0,
                  title: 'Bright, happy sound'
                }]}
              />
              <p className="text-sm text-gray-600 mt-2">Great over major chords and happy progressions.</p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">F# Minor Pentatonic</h3>
              <MusicScore
                title="F# Minor Pentatonic (Same Notes!)"
                staves={[{
                  id: 'fsharp-minor-pent',
                  notation: `options space=20 font-size=14
tabstave notation=true key=F#m time=4/4
notes :q 7/6 5/6 6/5 4/5 | :q 6/4 4/4 6/3 4/3 | :q 7/2 5/2 7/1 5/1`,
                  width: 450,
                  scale: 1.0,
                  title: 'Same notes, different root'
                }]}
              />
              <p className="text-sm text-gray-600 mt-2">Same pattern, but F# feels like home instead of A.</p>
            </div>
          </div>
        </section>

        {/* Practice Strategy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Practice Strategy</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Progressive Learning Path</h3>
            <ol className="space-y-2 text-sm">
              <li>1. <strong>Master Box 1:</strong> Learn the most important pattern thoroughly</li>
              <li>2. <strong>Practice with backing tracks:</strong> Apply it musically from day one</li>
              <li>3. <strong>Add techniques:</strong> Bending, vibrato, hammer-ons</li>
              <li>4. <strong>Learn all five boxes:</strong> Complete fretboard coverage</li>
              <li>5. <strong>Connect patterns:</strong> Smooth transitions between boxes</li>
              <li>6. <strong>Explore both forms:</strong> Major and minor pentatonic</li>
            </ol>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Week 1-2</h4>
              <p className="text-sm">Focus entirely on Box 1. Play it slow, clean, and memorize it completely.</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Week 3-4</h4>
              <p className="text-sm">Add Box 2 and practice connecting to Box 1. Start simple improvisation.</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Week 5+</h4>
              <p className="text-sm">Learn remaining boxes, add techniques, and develop your own style.</p>
            </div>
          </div>
        </section>

        {/* Practice Tips */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Pro Practice Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Musical Practice</h3>
              <ul className="space-y-2 text-sm">
                <li>• Use backing tracks from day one</li>
                <li>• Focus on rhythm, not just notes</li>
                <li>• Practice call and response</li>
                <li>• Record yourself playing</li>
                <li>• Learn famous solos note-for-note</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Technical Practice</h3>
              <ul className="space-y-2 text-sm">
                <li>• Start slow, build speed gradually</li>
                <li>• Practice with a metronome</li>
                <li>• Work on clean articulation</li>
                <li>• Practice both ascending and descending</li>
                <li>• Focus on smooth position changes</li>
              </ul>
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
                <h4 className="font-medium mb-2">Advanced Scales</h4>
                <ul className="text-sm space-y-1">
                  <li>• Blues Scale (add the ♭5)</li>
                  <li>• Major Scale</li>
                  <li>• Dorian Mode</li>
                  <li>• Mixolydian Mode</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Practical Application</h4>
                <ul className="text-sm space-y-1">
                  <li>• Lead Guitar Techniques</li>
                  <li>• Improvisation Fundamentals</li>
                  <li>• Solo Construction</li>
                  <li>• Backing Track Practice</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <a 
            href="/lessons/theory/scales/minor" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Previous: Minor Scale
          </a>
          <a 
            href="/lessons/theory/scales/blues" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Next: Blues Scale →
          </a>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
