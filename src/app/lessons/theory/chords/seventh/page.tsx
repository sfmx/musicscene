'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function SeventhChordsPage() {
  return (
    <Layout>
      <Header
        title="Seventh Chord Theory"
        subtitle="Add color, sophistication, and tension to your harmony with seventh chords"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Seventh Chords</h1>
          <p className="text-xl opacity-90 mb-4">
            Seventh chords add the fourth note to triads, creating richer harmony and sophisticated musical colors essential in jazz, blues, and modern music.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Four-Note Chords</span>
            <span className="bg-white/20 px-3 py-1 rounded">Added Color</span>
            <span className="bg-white/20 px-3 py-1 rounded">Jazz Essential</span>
            <span className="bg-white/20 px-3 py-1 rounded">Blues Foundation</span>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Seventh Chord Theory</h2>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">What Are Seventh Chords?</h3>
            <p className="mb-2">Seventh chords are four-note chords formed by adding the seventh degree of the scale to a basic triad.</p>
            <p className="text-sm text-gray-600">They create more sophisticated harmony and are essential for jazz, blues, and contemporary music.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Types of Seventh Chords</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Major 7th (Maj7)</h4>
                    <p className="text-sm mb-2"><strong>Formula:</strong> 1 - 3 - 5 - 7</p>
                    <p className="text-sm mb-2"><strong>Example:</strong> CMaj7 = C-E-G-B</p>
                    <p className="text-sm text-gray-600">Dreamy, sophisticated sound</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Minor 7th (m7)</h4>
                    <p className="text-sm mb-2"><strong>Formula:</strong> 1 - ♭3 - 5 - ♭7</p>
                    <p className="text-sm mb-2"><strong>Example:</strong> Am7 = A-C-E-G</p>
                    <p className="text-sm text-gray-600">Mellow, jazzy sound</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Dominant 7th (7)</h4>
                    <p className="text-sm mb-2"><strong>Formula:</strong> 1 - 3 - 5 - ♭7</p>
                    <p className="text-sm mb-2"><strong>Example:</strong> G7 = G-B-D-F</p>
                    <p className="text-sm text-gray-600">Bluesy, wants to resolve</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Minor Major 7th (mMaj7)</h4>
                    <p className="text-sm mb-2"><strong>Formula:</strong> 1 - ♭3 - 5 - 7</p>
                    <p className="text-sm mb-2"><strong>Example:</strong> AmMaj7 = A-C-E-G#</p>
                    <p className="text-sm text-gray-600">Mysterious, tense sound</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Seventh Chord Shapes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Essential Seventh Chord Shapes</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎸 Start with These Shapes</h3>
            <p>Master these fundamental seventh chord forms before moving to more complex variations.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Open Seventh Chords</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Dominant 7th Chords</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <h5 className="font-medium mb-2">G7</h5>
                      <div className="mb-3">
                        <SimpleFretboardDiagram chord="G7" />
                      </div>
                      <p className="text-sm text-gray-600">Essential blues and rock chord</p>
                    </div>
                    
                    <div className="text-center">
                      <h5 className="font-medium mb-2">E7</h5>
                      <div className="mb-3">
                        <SimpleFretboardDiagram chord="E7" />
                      </div>
                      <p className="text-sm text-gray-600">One finger change from E major</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Minor 7th Chords</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <h5 className="font-medium mb-2">Am7</h5>
                      <div className="mb-3">
                        <SimpleFretboardDiagram chord="Am7" />
                      </div>
                      <p className="text-sm text-gray-600">Remove one finger from Am</p>
                    </div>
                    
                    <div className="text-center">
                      <h5 className="font-medium mb-2">Em7</h5>
                      <div className="mb-3">
                        <SimpleFretboardDiagram chord="Em7" />
                      </div>
                      <p className="text-sm text-gray-600">Same as Em, easier fingering</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Major 7th Chords</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-3">CMaj7</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="CMaj7" />
                  </div>
                  <p className="text-sm text-gray-600">Sophisticated, jazzy character</p>
                </div>
                
                <div className="text-center">
                  <h4 className="font-medium mb-3">FMaj7</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="FMaj7" />
                  </div>
                  <p className="text-sm text-gray-600">Alternative to F barre chord</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Barre Chord Seventh Forms */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Moveable Seventh Chord Forms</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Barre Chord Sevenths</h3>
            <p>These moveable forms allow you to play seventh chords anywhere on the neck.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">6th String Root Forms</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Major 7th (6th string root)</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="BMaj7_barre" />
                  </div>
                  <p className="text-sm text-gray-600">Root on 6th string, 2nd fret = BMaj7</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Dominant 7th (6th string root)</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="B7_barre" />
                  </div>
                  <p className="text-sm text-gray-600">Root on 6th string, 2nd fret = B7</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">5th String Root Forms</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Minor 7th (5th string root)</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="Dm7_barre" />
                  </div>
                  <p className="text-sm text-gray-600">Root on 5th string, 5th fret = Dm7</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Dominant 7th (5th string root)</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="D7_barre_5th" />
                  </div>
                  <p className="text-sm text-gray-600">Root on 5th string, 5th fret = D7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Applications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Musical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Genre Applications</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Jazz:</strong> Essential harmonic foundation</li>
                <li>• <strong>Blues:</strong> Dominant 7ths create blues sound</li>
                <li>• <strong>R&B/Soul:</strong> Minor 7ths for smooth grooves</li>
                <li>• <strong>Funk:</strong> Extended 7th chords for rhythm</li>
                <li>• <strong>Pop:</strong> Major 7ths for sophisticated ballads</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎭 Emotional Characters</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Major 7th:</strong> Dreamy, floating</li>
                <li>• <strong>Minor 7th:</strong> Mellow, contemplative</li>
                <li>• <strong>Dominant 7th:</strong> Bluesy, restless</li>
                <li>• <strong>Minor Major 7th:</strong> Mysterious, dark</li>
                <li>• <strong>Half-diminished:</strong> Jazzy, sophisticated</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Progressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Common Seventh Chord Progressions</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎵 Essential Progressions</h3>
            <p>These progressions showcase the unique harmonic colors of seventh chords.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Jazz and Blues Progressions</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">ii-V-I Jazz Progression</h4>
                  <p className="text-sm mb-2"><strong>In C Major:</strong> Dm7 - G7 - CMaj7</p>
                  <div className="mb-3">
                    <MusicScore
                      title="ii-V-I Jazz Progression"
                      staves={[{
                        id: 'ii-v-i-jazz',
                        notation: `options space=20 font-size=14
tabstave notation=true key=C time=4/4
notes :w (1/4.0/3.2/2.3/1) | :w (3/6.2/5.0/4.0/3.0/2.1/1) | :w (0/6.3/5.2/4.0/3.0/2.0/1)`,
                        width: 450,
                        scale: 1.0,
                        title: 'Dm7 - G7 - CMaj7'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Most important progression in jazz</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">12-Bar Blues with 7ths</h4>
                  <p className="text-sm mb-2"><strong>In A:</strong> A7 - A7 - A7 - A7 | D7 - D7 - A7 - A7 | E7 - D7 - A7 - E7</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Blues with Seventh Chords"
                      staves={[{
                        id: 'blues-7ths',
                        notation: `options space=20 font-size=14
tabstave notation=true key=A time=4/4
notes :w (0/5.2/4.0/3.2/2.0/1) | :w (2/4.1/3.2/2.3/1) | :w (0/6.2/5.1/4.0/3.0/2.0/1)`,
                        width: 450,
                        scale: 1.0,
                        title: 'A7 - D7 - E7'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Classic blues progression with authentic 7th chords</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Circle of Fifths with 7ths</h4>
                  <p className="text-sm mb-2"><strong>Example:</strong> CMaj7 - A7 - Dm7 - G7</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Circle of Fifths Progression"
                      staves={[{
                        id: 'circle-fifths-7th',
                        notation: `options space=20 font-size=14
tabstave notation=true key=C time=4/4
notes :w (0/6.3/5.2/4.0/3.0/2.0/1) | :w (0/5.2/4.0/3.2/2.0/1) | :w (1/4.0/3.2/2.3/1) | :w (3/6.2/5.0/4.0/3.0/2.1/1)`,
                        width: 600,
                        scale: 1.0,
                        title: 'CMaj7 - A7 - Dm7 - G7'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Smooth voice leading through the circle of fifths</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Famous Songs Using Seventh Chords</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Rock & Pop</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Midnight City" - M83 (Major 7ths)</li>
                <li>• "Dreams" - Fleetwood Mac (FMaj7)</li>
                <li>• "Wonderful Tonight" - Eric Clapton (G7)</li>
                <li>• "Don't Look Back in Anger" - Oasis (CMaj7)</li>
                <li>• "Come As You Are" - Nirvana (Em7)</li>
              </ul>
            </div>

            <div className="bg-orange-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Jazz & Blues</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Autumn Leaves" - Jazz Standard (m7-7-Maj7)</li>
                <li>• "Girl from Ipanema" - Bossa Nova (Maj7s)</li>
                <li>• "Stormy Weather" - Jazz Standard</li>
                <li>• "Sweet Home Chicago" - Blues (A7-D7-E7)</li>
                <li>• "All of Me" - Jazz Standard</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Advanced Seventh Chords */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Advanced Seventh Chord Types</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Beyond the Basics</h3>
            <p>Explore more sophisticated seventh chord variations for advanced harmony.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Altered Seventh Chords</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">7♯5 (Augmented 7th)</p>
                  <p className="text-sm text-gray-600">Formula: 1 - 3 - ♯5 - ♭7</p>
                  <p className="text-sm">Example: C7♯5 = C-E-G♯-B♭</p>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">7♭5 (Dominant 7 ♭5)</p>
                  <p className="text-sm text-gray-600">Formula: 1 - 3 - ♭5 - ♭7</p>
                  <p className="text-sm">Example: C7♭5 = C-E-G♭-B♭</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Half-Diminished & Diminished</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">m7♭5 (Half-Diminished)</p>
                  <p className="text-sm text-gray-600">Formula: 1 - ♭3 - ♭5 - ♭7</p>
                  <p className="text-sm">Example: Cm7♭5 = C-E♭-G♭-B♭</p>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">°7 (Diminished 7th)</p>
                  <p className="text-sm text-gray-600">Formula: 1 - ♭3 - ♭5 - ♭♭7</p>
                  <p className="text-sm">Example: C°7 = C-E♭-G♭-A</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Practice Exercises</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Building Seventh Chord Skills</h3>
            <p>These exercises will help you master seventh chords and their applications.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 1: Basic Seventh Chord Changes</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Progression: CMaj7 - Am7 - Dm7 - G7</p>
                <p className="text-sm text-gray-600 mb-2">Play each chord for 4 beats, practice smooth transitions</p>
                <p className="text-sm">Focus on voice leading and clean chord changes</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 2: Jazz ii-V-I Practice</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Multiple Keys: Dm7-G7-CMaj7, Em7-A7-DMaj7, Am7-D7-GMaj7</p>
                <p className="text-sm text-gray-600 mb-2">Practice the most important jazz progression in different keys</p>
                <p className="text-sm">Use both open and barre chord forms</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 3: Blues with Sevenths</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">12-Bar Blues: A7 - A7 - A7 - A7 | D7 - D7 - A7 - A7 | E7 - D7 - A7 - E7</p>
                <p className="text-sm text-gray-600 mb-2">Practice authentic blues sound with dominant 7th chords</p>
                <p className="text-sm">Use different strumming patterns and rhythms</p>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Leading */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Voice Leading with Seventh Chords</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Smooth Connections</h3>
              <ul className="space-y-2 text-sm">
                <li>• Move individual notes minimally</li>
                <li>• Use common tones between chords</li>
                <li>• Practice chord inversions</li>
                <li>• Focus on bass line movement</li>
                <li>• Create smooth melodic lines in highest voice</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Practical Tips</h3>
              <ul className="space-y-2 text-sm">
                <li>• Learn multiple fingerings for each chord</li>
                <li>• Practice chord progressions slowly</li>
                <li>• Listen to the harmonic movement</li>
                <li>• Use a metronome for timing</li>
                <li>• Record yourself to hear progress</li>
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
                <h4 className="font-medium mb-2">Advanced Harmony</h4>
                <ul className="text-sm space-y-1">
                  <li>• Extended Chords (9ths, 11ths, 13ths)</li>
                  <li>• Altered Dominants</li>
                  <li>• Chord Substitutions</li>
                  <li>• Secondary Dominants</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Practical Application</h4>
                <ul className="text-sm space-y-1">
                  <li>• Jazz Chord Progressions</li>
                  <li>• Blues Rhythm Guitar</li>
                  <li>• Voice Leading</li>
                  <li>• Chord Melody Playing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <a 
            href="/lessons/theory/chords/minor" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Previous: Minor Chords
          </a>
          <a 
            href="/lessons/theory/chords/suspended" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Next: Suspended Chords →
          </a>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
