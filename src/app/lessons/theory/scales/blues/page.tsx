'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function BluesScalePage() {
  return (
    <Layout>
      <Header
        title="Blues Scale Theory"
        subtitle="The soulful six-note scale that defines blues, rock, and countless guitar solos"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">The Blues Scale</h1>
          <p className="text-xl opacity-90 mb-4">
            The blues scale adds one crucial note to the minor pentatonic - the "blue note" that gives blues its characteristic sound.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Six Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">Blue Note (♭5)</span>
            <span className="bg-white/20 px-3 py-1 rounded">Soulful Expression</span>
            <span className="bg-white/20 px-3 py-1 rounded">Blues Foundation</span>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Blues Scale Theory</h2>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">The "Blue Note"</h3>
            <p className="mb-2">The blues scale is a minor pentatonic scale with an added ♭5 (flat fifth), known as the "blue note" or "devil's interval."</p>
            <p className="text-sm text-gray-600">This note creates the characteristic dissonance and tension that makes blues so expressive.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">A Blues Scale Notes</h3>
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
                  <span className="font-medium">♭5th (Blue Note):</span>
                  <span className="text-blue-600 font-bold">D# / E♭</span>
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
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Scale Formula</h3>
              <div className="bg-white rounded p-3 mb-3">
                <p className="text-center font-mono text-lg">1 - ♭3 - 4 - ♭5 - 5 - ♭7</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Minor Pentatonic:</strong> 1, ♭3, 4, 5, ♭7</p>
                <p><strong>Blues Scale:</strong> 1, ♭3, 4, <span className="text-blue-600 font-bold">♭5</span>, 5, ♭7</p>
                <p className="text-gray-600">The ♭5 is what makes it "blues"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fretboard Patterns */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Blues Scale Patterns</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎸 Building on Pentatonic</h3>
            <p>If you know the minor pentatonic patterns, learning blues is easy - just add one note per pattern!</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Position 1 - A Blues (5th Fret)</h3>
              <div className="mb-4">
                <MusicScore
                  title="Blues Scale Position 1"
                  staves={[{
                    id: 'blues-position-1',
                    notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 5/6 8/6 5/5 6/5 | :q 7/5 5/4 7/4 5/3 | :q 6/3 7/3 5/2 8/2`,
                    width: 550,
                    scale: 1.0,
                    title: 'The classic blues pattern with the blue note'
                  }]}
                />
              </div>
              <div className="bg-blue-50 rounded p-3">
                <p className="text-sm"><strong>Blue Note Location:</strong> 6th fret on the 5th string (between D and E)</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Position 2 - A Blues (8th Fret)</h3>
              <div className="mb-4">
                <MusicScore
                  title="Blues Scale Position 2"
                  staves={[{
                    id: 'blues-position-2',
                    notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 8/6 10/6 7/5 9/5 | :q 10/5 7/4 9/4 7/3 | :q 9/3 10/3 8/2 10/2`,
                    width: 550,
                    scale: 1.0,
                    title: 'Second position with blue note'
                  }]}
                />
              </div>
              <div className="bg-blue-50 rounded p-3">
                <p className="text-sm"><strong>Blue Note Location:</strong> 9th fret on the 5th, 4th, and 3rd strings</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Position 3 - A Blues (12th Fret)</h3>
              <div className="mb-4">
                <MusicScore
                  title="Blues Scale Position 3"
                  staves={[{
                    id: 'blues-position-3',
                    notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 12/6 15/6 12/5 14/5 | :q 15/5 12/4 14/4 12/3 | :q 14/3 15/3 12/2 15/2`,
                    width: 550,
                    scale: 1.0,
                    title: 'Higher position - octave of position 1'
                  }]}
                />
              </div>
              <div className="bg-blue-50 rounded p-3">
                <p className="text-sm"><strong>Blue Note Location:</strong> 14th fret on multiple strings</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Blue Note in Action */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">The Blue Note in Action</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎵 How to Use the Blue Note</h3>
            <p className="mb-2">The ♭5 (blue note) creates tension that wants to resolve. Use it as a passing tone or bend it for maximum expression.</p>
            <p className="text-sm text-gray-600">Don't land on it for too long - let it slide or bend into the 4th or 5th.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Blue Note Techniques</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Technique 1: Blue Note Bend</h4>
                  <MusicScore
                    title="Bending the Blue Note"
                    staves={[{
                      id: 'blue-note-bend',
                      notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 5/6 8/6 6b7/5 5/4`,
                      width: 400,
                      scale: 1.0,
                      title: 'Bend the blue note up a half step'
                    }]}
                  />
                  <p className="text-sm text-gray-600 mt-2">Bend the 6th fret (blue note) up to the 7th fret pitch.</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Technique 2: Blue Note Slide</h4>
                  <MusicScore
                    title="Sliding Through the Blue Note"
                    staves={[{
                      id: 'blue-note-slide',
                      notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 5/6 8/6 5s6s7/5 5/4`,
                      width: 400,
                      scale: 1.0,
                      title: 'Slide through the tension'
                    }]}
                  />
                  <p className="text-sm text-gray-600 mt-2">Slide through the blue note to create smooth, expressive lines.</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Technique 3: Blue Note Approach</h4>
                  <MusicScore
                    title="Approaching Target Notes"
                    staves={[{
                      id: 'blue-note-approach',
                      notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 8/6 6/5 7/5 8/6`,
                      width: 400,
                      scale: 1.0,
                      title: 'Use as chromatic approach'
                    }]}
                  />
                  <p className="text-sm text-gray-600 mt-2">Use the blue note to approach target notes chromatically.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Applications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Musical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Genre Applications</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Blues:</strong> Essential for authentic blues sound</li>
                <li>• <strong>Rock:</strong> Classic rock solos and riffs</li>
                <li>• <strong>Jazz:</strong> Blues progressions and solos</li>
                <li>• <strong>Country:</strong> Adding grit to clean tones</li>
                <li>• <strong>Metal:</strong> Dark, aggressive tonality</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Emotional Character</h3>
              <ul className="space-y-2 text-sm">
                <li>• Pain and suffering</li>
                <li>• Raw emotion and authenticity</li>
                <li>• Tension and release</li>
                <li>• Gritty, earthy feel</li>
                <li>• Soulful expression</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-4">Classic Blues Progressions</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded p-4">
                <h4 className="font-medium mb-2">12-Bar Blues in A</h4>
                <div className="text-sm space-y-1">
                  <p>A7 - A7 - A7 - A7</p>
                  <p>D7 - D7 - A7 - A7</p>
                  <p>E7 - D7 - A7 - E7</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">Use A blues scale over the entire progression</p>
              </div>

              <div className="bg-white rounded p-4">
                <h4 className="font-medium mb-2">Minor Blues in Am</h4>
                <div className="text-sm space-y-1">
                  <p>Am - Am - Am - Am</p>
                  <p>Dm - Dm - Am - Am</p>
                  <p>Em - Dm - Am - Em</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">Perfect for A blues scale improvisation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Famous Blues Scale Solos</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Blues Masters</h3>
              <ul className="space-y-2 text-sm">
                <li>• "The Thrill Is Gone" - B.B. King</li>
                <li>• "Pride and Joy" - Stevie Ray Vaughan</li>
                <li>• "Born Under a Bad Sign" - Albert King</li>
                <li>• "Sweet Home Chicago" - Robert Johnson</li>
                <li>• "Crossroads" - Robert Johnson/Eric Clapton</li>
              </ul>
            </div>

            <div className="bg-purple-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Rock & Metal</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Black Dog" - Jimmy Page</li>
                <li>• "Paranoid" - Tony Iommi</li>
                <li>• "Purple Haze" - Jimi Hendrix</li>
                <li>• "La Grange" - Billy Gibbons (ZZ Top)</li>
                <li>• "Peace of Mind" - Tom Scholz (Boston)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Practice Exercises</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Practice Strategy</h3>
            <p>Focus on the blue note! Practice these exercises to master the most important aspect of blues playing.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 1: Blue Note Focus</h3>
              <MusicScore
                title="Emphasizing the Blue Note"
                staves={[{
                  id: 'blues-exercise-1',
                  notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 5/6 8/6 6/5 7/5 | :q 6/5 7/5 6/5 5/4`,
                  width: 450,
                  scale: 1.0,
                  title: 'Target the blue note with intention'
                }]}
              />
              <p className="text-sm text-gray-600 mt-2">Practice landing on and resolving the blue note (6th fret, 5th string).</p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 2: Blues Licks</h3>
              <MusicScore
                title="Classic Blues Lick"
                staves={[{
                  id: 'blues-exercise-2',
                  notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 8/6 6b7/5 5/5 8/6`,
                  width: 400,
                  scale: 1.0,
                  title: 'Essential blues vocabulary'
                }]}
              />
              <p className="text-sm text-gray-600 mt-2">This lick features the classic blue note bend - practice it in all positions.</p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 3: Call and Response</h3>
              <MusicScore
                title="Blues Call and Response"
                staves={[{
                  id: 'blues-exercise-3',
                  notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 5/6 8/6 6/5 5/4 | :h 7/4 :q 5/4`,
                  width: 400,
                  scale: 1.0,
                  title: 'Question and answer phrasing'
                }]}
              />
              <p className="text-sm text-gray-600 mt-2">Practice playing short phrases with spaces - this is essential for blues phrasing.</p>
            </div>
          </div>
        </section>

        {/* Advanced Concepts */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Advanced Concepts</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Mixing Scales</h3>
              <ul className="space-y-2 text-sm">
                <li>• Combine blues with minor pentatonic</li>
                <li>• Add major pentatonic notes</li>
                <li>• Use chromatic approach tones</li>
                <li>• Mix with Dorian mode</li>
                <li>• Target chord tones</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Expression Techniques</h3>
              <ul className="space-y-2 text-sm">
                <li>• String bending (especially blue note)</li>
                <li>• Vibrato for sustained notes</li>
                <li>• Hammer-ons and pull-offs</li>
                <li>• Slides and glissandos</li>
                <li>• Muted and staccato notes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Tips */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Practice Tips & Guidelines</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Essential Practice Points</h3>
            <ol className="space-y-2 text-sm">
              <li>1. <strong>Master the blue note:</strong> Practice finding and playing it in all positions</li>
              <li>2. <strong>Use backing tracks:</strong> Practice over 12-bar blues progressions</li>
              <li>3. <strong>Focus on phrasing:</strong> Leave space between phrases</li>
              <li>4. <strong>Learn classic licks:</strong> Study the masters' vocabulary</li>
              <li>5. <strong>Develop bending:</strong> The blue note sounds best when bent</li>
            </ol>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Beginner</h4>
              <p className="text-sm">Learn position 1, practice with simple backing tracks, focus on clean blue note execution.</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Intermediate</h4>
              <p className="text-sm">Add positions 2-3, develop bending technique, learn classic blues licks and phrases.</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Advanced</h4>
              <p className="text-sm">Master all positions, combine with other scales, develop personal style and phrasing.</p>
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
                  <li>• Minor Pentatonic Scale</li>
                  <li>• Major Pentatonic Scale</li>
                  <li>• Mixolydian Mode</li>
                  <li>• Dorian Mode</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Practical Application</h4>
                <ul className="text-sm space-y-1">
                  <li>• Blues Guitar Techniques</li>
                  <li>• String Bending</li>
                  <li>• 12-Bar Blues Progressions</li>
                  <li>• Improvisation Fundamentals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <a 
            href="/lessons/theory/scales/pentatonic" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Previous: Pentatonic Scale
          </a>
          <a 
            href="/lessons/theory/scales/modes" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Next: Modes →
          </a>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
