'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function ModesPage() {
  return (
    <Layout>
      <Header
        title="Modal Scales Theory"
        subtitle="Explore the seven modes of the major scale and unlock new colors and emotions in your playing"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Modal Scales</h1>
          <p className="text-xl opacity-90 mb-4">
            Modes are different starting points of the same scale, each with its own unique character and emotional quality.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Seven Modes</span>
            <span className="bg-white/20 px-3 py-1 rounded">Unique Characters</span>
            <span className="bg-white/20 px-3 py-1 rounded">Jazz & Rock</span>
            <span className="bg-white/20 px-3 py-1 rounded">Color & Emotion</span>
          </div>
        </div>

        {/* Introduction to Modes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">What Are Modes?</h2>
          
          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">Understanding Modes</h3>
            <p className="mb-2">Modes are simply different starting points of the major scale. Each mode emphasizes different intervals and creates a unique sound.</p>
            <p className="text-sm text-gray-600">Think of it like looking at the same landscape from seven different viewpoints - same notes, different perspective.</p>
          </div>

          <div className="bg-white rounded-lg border p-6 mb-6">
            <h3 className="font-bold text-lg mb-4">The Seven Modes of C Major</h3>
            <div className="grid gap-3 text-sm">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">C Ionian (Major)</span>
                <span className="text-gray-600">C-D-E-F-G-A-B</span>
                <span className="text-blue-600">Happy, bright</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">D Dorian</span>
                <span className="text-gray-600">D-E-F-G-A-B-C</span>
                <span className="text-green-600">Cool, jazzy</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">E Phrygian</span>
                <span className="text-gray-600">E-F-G-A-B-C-D</span>
                <span className="text-purple-600">Dark, Spanish</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">F Lydian</span>
                <span className="text-gray-600">F-G-A-B-C-D-E</span>
                <span className="text-yellow-600">Dreamy, floating</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">G Mixolydian</span>
                <span className="text-gray-600">G-A-B-C-D-E-F</span>
                <span className="text-orange-600">Blues, rock</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">A Aeolian (Natural Minor)</span>
                <span className="text-gray-600">A-B-C-D-E-F-G</span>
                <span className="text-red-600">Sad, melancholic</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">B Locrian</span>
                <span className="text-gray-600">B-C-D-E-F-G-A</span>
                <span className="text-gray-600">Unstable, rare</span>
              </div>
            </div>
          </div>
        </section>

        {/* Most Important Modes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Essential Modes for Guitar</h2>
          
          <div className="bg-violet-50 border-l-4 border-violet-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Start with These Three</h3>
            <p>While there are seven modes, three are essential for most guitarists: Dorian, Mixolydian, and Lydian.</p>
          </div>

          {/* Dorian Mode */}
          <div className="bg-white rounded-lg border p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Dorian Mode</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Character & Uses</h4>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• Cool, sophisticated sound</li>
                  <li>• Jazz, fusion, progressive rock</li>
                  <li>• Minor with a bright 6th</li>
                  <li>• Less sad than natural minor</li>
                </ul>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm"><strong>Formula:</strong> 1-2-♭3-4-5-6-♭7</p>
                  <p className="text-sm"><strong>Key difference:</strong> Natural 6th (vs. ♭6 in minor)</p>
                </div>
              </div>
              <div>
                <MusicScore
                  title="A Dorian Mode"
                  staves={[{
                    id: 'a-dorian',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 5/6 7/6 8/6 5/5 | :q 7/5 9/5 5/4 7/4 | :q 8/4 7/4 5/4 9/5 | :q 7/5 5/5 8/6 7/6 5/6`,
                    width: 450,
                    scale: 1.0,
                    title: 'A-B-C-D-E-F#-G'
                  }]}
                />
                <p className="text-sm text-gray-600 mt-2">Notice the F# (natural 6th) - this brightens the minor tonality.</p>
              </div>
            </div>
          </div>

          {/* Mixolydian Mode */}
          <div className="bg-white rounded-lg border p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mixolydian Mode</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Character & Uses</h4>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• Bluesy, rock sound</li>
                  <li>• Dominant 7th chords</li>
                  <li>• Classic rock, blues, country</li>
                  <li>• Major with a flat 7th</li>
                </ul>
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-sm"><strong>Formula:</strong> 1-2-3-4-5-6-♭7</p>
                  <p className="text-sm"><strong>Key difference:</strong> Flat 7th (vs. natural 7 in major)</p>
                </div>
              </div>
              <div>
                <MusicScore
                  title="G Mixolydian Mode"
                  staves={[{
                    id: 'g-mixolydian',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 3/6 5/6 7/6 3/5 | :q 5/5 7/5 3/4 5/4 | :q 7/4 5/4 3/4 7/5 | :q 5/5 3/5 7/6 5/6 3/6`,
                    width: 450,
                    scale: 1.0,
                    title: 'G-A-B-C-D-E-F'
                  }]}
                />
                <p className="text-sm text-gray-600 mt-2">The F natural (♭7) gives it that bluesy, rock flavor.</p>
              </div>
            </div>
          </div>

          {/* Lydian Mode */}
          <div className="bg-white rounded-lg border p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Lydian Mode</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Character & Uses</h4>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• Dreamy, ethereal sound</li>
                  <li>• Film scores, prog rock</li>
                  <li>• Jazz ballads</li>
                  <li>• Major with a sharp 4th</li>
                </ul>
                <div className="bg-yellow-50 rounded p-3">
                  <p className="text-sm"><strong>Formula:</strong> 1-2-3-#4-5-6-7</p>
                  <p className="text-sm"><strong>Key difference:</strong> Sharp 4th (tritone from root)</p>
                </div>
              </div>
              <div>
                <MusicScore
                  title="C Lydian Mode"
                  staves={[{
                    id: 'c-lydian',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :q 8/6 10/6 12/6 9/5 | :q 10/5 12/5 9/4 10/4 | :q 12/4 10/4 9/4 12/5 | :q 10/5 9/5 12/6 10/6 8/6`,
                    width: 450,
                    scale: 1.0,
                    title: 'C-D-E-F#-G-A-B'
                  }]}
                />
                <p className="text-sm text-gray-600 mt-2">The F# (#4) creates that magical, floating quality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Modal Practice */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Practicing Modes</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎸 The Right Approach</h3>
            <p className="mb-2">Don't just play modes as scales - understand their unique character and use them in musical contexts.</p>
            <p className="text-sm text-gray-600">Each mode has a "characteristic note" that defines its sound - emphasize these notes!</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Mode Practice Exercise 1: Characteristic Notes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Dorian - Emphasize the 6th</h4>
                  <MusicScore
                    title="Dorian Characteristic Note Exercise"
                    staves={[{
                      id: 'dorian-exercise',
                      notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :q 5/6 8/6 9/5 8/6 | :q 5/6 9/5 8/6 5/6`,
                      width: 400,
                      scale: 1.0,
                      title: 'Target the natural 6th (F#)'
                    }]}
                  />
                  <p className="text-sm text-gray-600 mt-2">The F# (9th fret, 5th string) is what makes it Dorian.</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Mixolydian - Emphasize the ♭7th</h4>
                  <MusicScore
                    title="Mixolydian Characteristic Note Exercise"
                    staves={[{
                      id: 'mixolydian-exercise',
                      notation: `options space=20 font-size=14
tabstave notation=true key=G time=4/4
notes :q 3/6 7/6 8/5 7/6 | :q 3/6 8/5 7/6 3/6`,
                      width: 400,
                      scale: 1.0,
                      title: 'Target the flat 7th (F natural)'
                    }]}
                  />
                  <p className="text-sm text-gray-600 mt-2">The F natural (8th fret, 5th string) gives the bluesy sound.</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Lydian - Emphasize the #4th</h4>
                  <MusicScore
                    title="Lydian Characteristic Note Exercise"
                    staves={[{
                      id: 'lydian-exercise',
                      notation: `options space=20 font-size=14
tabstave notation=true key=C time=4/4
notes :q 8/6 12/6 11/5 12/6 | :q 8/6 11/5 12/6 8/6`,
                      width: 400,
                      scale: 1.0,
                      title: 'Target the sharp 4th (F#)'
                    }]}
                  />
                  <p className="text-sm text-gray-600 mt-2">The F# (11th fret, 5th string) creates the dreamy quality.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal Chord Progressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Modal Chord Progressions</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎵 Creating Modal Contexts</h3>
            <p>To truly hear a mode, you need chord progressions that establish its unique character.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Dorian Progressions</h3>
              <div className="space-y-3">
                <div className="bg-green-50 rounded p-3">
                  <p className="font-medium">Am - F - G - Am</p>
                  <p className="text-sm text-gray-600">The F major chord emphasizes the natural 6th</p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="font-medium">Dm - C - Dm - C</p>
                  <p className="text-sm text-gray-600">Simple two-chord vamp in D Dorian</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Mixolydian Progressions</h3>
              <div className="space-y-3">
                <div className="bg-orange-50 rounded p-3">
                  <p className="font-medium">G - F - C - G</p>
                  <p className="text-sm text-gray-600">The F chord emphasizes the ♭7</p>
                </div>
                <div className="bg-orange-50 rounded p-3">
                  <p className="font-medium">A7 - D - A7 - D</p>
                  <p className="text-sm text-gray-600">Dominant 7th creates Mixolydian feel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Modal Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Famous Modal Songs</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Dorian Mode</h3>
              <ul className="space-y-2 text-sm">
                <li>• "So What" - Miles Davis</li>
                <li>• "Eleanor Rigby" - The Beatles</li>
                <li>• "Scarred" - Papa Roach</li>
                <li>• "Another Brick in the Wall" - Pink Floyd</li>
              </ul>
            </div>

            <div className="bg-orange-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Mixolydian Mode</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Sweet Child O' Mine" - Guns N' Roses</li>
                <li>• "Fire on the Mountain" - Grateful Dead</li>
                <li>• "Norwegian Wood" - The Beatles</li>
                <li>• "Tequila Sunrise" - Eagles</li>
              </ul>
            </div>

            <div className="bg-yellow-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">⭐ Lydian Mode</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Flying in a Blue Dream" - Joe Satriani</li>
                <li>• "The Simpsons Theme" - Danny Elfman</li>
                <li>• "Dreams" - Fleetwood Mac</li>
                <li>• "Man on the Box" - Burn Halo</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Complete Modal System */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">The Complete Modal System</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 All Seven Modes</h3>
            <p>Once you master the essential three, explore all seven modes for complete musical freedom.</p>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <h3 className="font-bold text-lg mb-4">Modal Formulas & Characters</h3>
            <div className="grid gap-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                <span className="font-medium">Ionian (Major)</span>
                <span className="font-mono">1-2-3-4-5-6-7</span>
                <span className="text-blue-600">Happy, resolved</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                <span className="font-medium">Dorian</span>
                <span className="font-mono">1-2-♭3-4-5-6-♭7</span>
                <span className="text-green-600">Cool, sophisticated</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                <span className="font-medium">Phrygian</span>
                <span className="font-mono">1-♭2-♭3-4-5-♭6-♭7</span>
                <span className="text-purple-600">Dark, Spanish</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                <span className="font-medium">Lydian</span>
                <span className="font-mono">1-2-3-#4-5-6-7</span>
                <span className="text-yellow-600">Dreamy, floating</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                <span className="font-medium">Mixolydian</span>
                <span className="font-mono">1-2-3-4-5-6-♭7</span>
                <span className="text-orange-600">Bluesy, rock</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                <span className="font-medium">Aeolian (Minor)</span>
                <span className="font-mono">1-2-♭3-4-5-♭6-♭7</span>
                <span className="text-red-600">Sad, melancholic</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="font-medium">Locrian</span>
                <span className="font-mono">1-♭2-♭3-4-♭5-♭6-♭7</span>
                <span className="text-gray-600">Unstable, diminished</span>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Strategy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Learning Strategy</h2>
          
          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Progressive Approach</h3>
            <ol className="space-y-2 text-sm">
              <li>1. <strong>Master major and minor scales first</strong></li>
              <li>2. <strong>Learn Dorian, Mixolydian, and Lydian</strong></li>
              <li>3. <strong>Practice with appropriate chord progressions</strong></li>
              <li>4. <strong>Emphasize characteristic notes</strong></li>
              <li>5. <strong>Apply in real musical situations</strong></li>
              <li>6. <strong>Explore remaining modes when ready</strong></li>
            </ol>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Month 1-2</h4>
              <p className="text-sm">Focus on one mode at a time. Start with Dorian - it's the most accessible.</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Month 3-4</h4>
              <p className="text-sm">Add Mixolydian and Lydian. Practice with backing tracks and chord progressions.</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Month 5+</h4>
              <p className="text-sm">Explore remaining modes and develop personal modal vocabulary and style.</p>
            </div>
          </div>
        </section>

        {/* Practice Tips */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Essential Practice Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Musical Practice</h3>
              <ul className="space-y-2 text-sm">
                <li>• Always practice modes with chord progressions</li>
                <li>• Emphasize characteristic notes</li>
                <li>• Use backing tracks in modal keys</li>
                <li>• Create melodies, don't just run scales</li>
                <li>• Study modal songs and solos</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Technical Practice</h3>
              <ul className="space-y-2 text-sm">
                <li>• Learn modal patterns in all positions</li>
                <li>• Practice mode-to-mode transitions</li>
                <li>• Use the same fingering patterns as major/minor</li>
                <li>• Start slowly, focus on clean articulation</li>
                <li>• Practice with a metronome</li>
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
                <h4 className="font-medium mb-2">Advanced Theory</h4>
                <ul className="text-sm space-y-1">
                  <li>• Chord-Scale Relationships</li>
                  <li>• Modal Interchange</li>
                  <li>• Harmonic Minor Modes</li>
                  <li>• Melodic Minor Modes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Practical Application</h4>
                <ul className="text-sm space-y-1">
                  <li>• Jazz Improvisation</li>
                  <li>• Progressive Rock</li>
                  <li>• Fusion Guitar</li>
                  <li>• Contemporary Songwriting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <a 
            href="/lessons/theory/scales/blues" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Previous: Blues Scale
          </a>
          <a 
            href="/lessons/theory/scales" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Back to Scales Overview →
          </a>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
