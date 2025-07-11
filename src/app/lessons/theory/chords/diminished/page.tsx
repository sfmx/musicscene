'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function DiminishedChordsPage() {
  return (
    <Layout>
      <Header
        title="Diminished Chord Theory"
        subtitle="Explore the dark, tense, and dramatically powerful world of diminished chords"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-700 to-purple-800 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Diminished Chords</h1>
          <p className="text-xl opacity-90 mb-4">
            Diminished chords create maximum tension and instability, making them powerful tools for drama, transition, and sophisticated harmony.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Maximum Tension</span>
            <span className="bg-white/20 px-3 py-1 rounded">Unstable Harmony</span>
            <span className="bg-white/20 px-3 py-1 rounded">Dramatic Effect</span>
            <span className="bg-white/20 px-3 py-1 rounded">Jazz Essential</span>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Diminished Chord Theory</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">What Makes a Chord Diminished?</h3>
            <p className="mb-2">Diminished chords are built from stacked minor thirds, creating maximum harmonic tension and instability.</p>
            <p className="text-sm text-gray-600">This interval structure creates a sound that strongly wants to resolve, making them perfect for transitions and drama.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Types of Diminished Chords</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-bold mb-3">Diminished Triad (°)</h4>
                  <div className="space-y-2 text-sm mb-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Root (1st):</span>
                      <span>C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Minor Third (♭3rd):</span>
                      <span>E♭</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Diminished Fifth (♭5th):</span>
                      <span className="text-red-600 font-bold">G♭</span>
                    </div>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm"><strong>Formula:</strong> 1 - ♭3 - ♭5</p>
                    <p className="text-sm"><strong>Example:</strong> C° = C-E♭-G♭</p>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold mb-3">Diminished 7th (°7)</h4>
                  <div className="space-y-2 text-sm mb-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Root (1st):</span>
                      <span>C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Minor Third (♭3rd):</span>
                      <span>E♭</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Diminished Fifth (♭5th):</span>
                      <span>G♭</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Diminished 7th (♭♭7th):</span>
                      <span className="text-red-600 font-bold">A</span>
                    </div>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm"><strong>Formula:</strong> 1 - ♭3 - ♭5 - ♭♭7</p>
                    <p className="text-sm"><strong>Example:</strong> C°7 = C-E♭-G♭-A</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 rounded-lg p-4">
                <h4 className="font-bold mb-2">Half-Diminished 7th (ø7)</h4>
                <p className="text-sm mb-2">Also called "minor 7 flat 5" - has a natural 7th instead of diminished 7th</p>
                <div className="bg-white rounded p-3">
                  <p className="text-sm"><strong>Formula:</strong> 1 - ♭3 - ♭5 - ♭7</p>
                  <p className="text-sm"><strong>Example:</strong> Cø7 = C-E♭-G♭-B♭</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Properties */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Unique Properties of Diminished Chords</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🔄 Symmetrical Structure</h3>
            <p className="mb-2">Diminished 7th chords are built entirely from minor thirds (3 semitones apart), creating perfect symmetry.</p>
            <p className="text-sm text-gray-600">This means the same chord shape repeats every 3 frets, and any note can be considered the root!</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">The Amazing Diminished 7th Property</h3>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium mb-2">One Shape, Four Chords!</h4>
                <p className="text-sm mb-3">The same diminished 7th chord shape can be four different chords:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-sm">
                    <p><strong>3rd fret:</strong> C°7 = C-E♭-G♭-A</p>
                    <p><strong>6th fret:</strong> E♭°7 = E♭-G♭-A-C</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>9th fret:</strong> G♭°7 = G♭-A-C-E♭</p>
                    <p><strong>12th fret:</strong> A°7 = A-C-E♭-G♭</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">Same notes, different starting points!</p>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Diminished 7th Chord Shape</h4>
                <MusicScore
                  title="Moveable Diminished 7th"
                  staves={[{
                    id: 'dim7-shape',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (3/6.4/5.3/4.4/3.x/2.x/1)`,
                    width: 200,
                    scale: 1.0,
                    title: 'Universal dim7 shape'
                  }]}
                />
                <p className="text-sm text-gray-600 mt-2">Move this shape every 3 frets for the same chord!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Diminished Chord Shapes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Essential Diminished Chord Shapes</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎸 Start with These Shapes</h3>
            <p>Master these fundamental diminished chord forms - they're moveable and incredibly useful.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Diminished Triad Shapes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">A° (Open position)</h4>
                  <div className="mb-3">
                    <MusicScore
                      title="A Diminished Triad"
                      staves={[{
                        id: 'a-dim-triad',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (0/5.1/4.2/3.1/2.x/1)`,
                        width: 180,
                        scale: 1.0,
                        title: 'Easy open diminished'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">A-C-E♭ - easiest diminished chord</p>
                </div>

                <div>
                  <h4 className="font-medium mb-3">F#° (Barre position)</h4>
                  <div className="mb-3">
                    <MusicScore
                      title="F# Diminished Triad"
                      staves={[{
                        id: 'fsharp-dim-triad',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (2/6.x/5.1/4.2/3.1/2.x/1)`,
                        width: 180,
                        scale: 1.0,
                        title: 'Moveable diminished form'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">F#-A-C - moveable shape</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Diminished 7th Shapes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">G°7 (6th string root)</h4>
                  <div className="mb-3">
                    <MusicScore
                      title="G Diminished 7th"
                      staves={[{
                        id: 'g-dim7',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (3/6.4/5.3/4.4/3.x/2.x/1)`,
                        width: 180,
                        scale: 1.0,
                        title: 'Most common dim7 shape'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Root on 6th string, 3rd fret</p>
                </div>

                <div>
                  <h4 className="font-medium mb-3">B°7 (5th string root)</h4>
                  <div className="mb-3">
                    <MusicScore
                      title="B Diminished 7th"
                      staves={[{
                        id: 'b-dim7',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (x/6.2/5.1/4.2/3.0/2.x/1)`,
                        width: 180,
                        scale: 1.0,
                        title: 'Alternative dim7 shape'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Root on 5th string, 2nd fret</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Half-Diminished Shapes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Aø7 (Half-diminished)</h4>
                  <div className="mb-3">
                    <MusicScore
                      title="A Half-Diminished 7th"
                      staves={[{
                        id: 'a-half-dim7',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (0/5.1/4.2/3.2/2.x/1)`,
                        width: 180,
                        scale: 1.0,
                        title: 'Jazz essential chord'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">A-C-E♭-G - common in jazz</p>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Dø7 (Barre form)</h4>
                  <div className="mb-3">
                    <MusicScore
                      title="D Half-Diminished 7th"
                      staves={[{
                        id: 'd-half-dim7',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (x/6.5/5.4/4.5/3.4/2.x/1)`,
                        width: 180,
                        scale: 1.0,
                        title: 'Moveable half-dim form'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">D-F-A♭-C - moveable shape</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Applications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Musical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Genre Applications</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Jazz:</strong> Essential for sophisticated harmony</li>
                <li>• <strong>Classical:</strong> Drama and tension</li>
                <li>• <strong>Blues:</strong> Passing chords and transitions</li>
                <li>• <strong>Rock:</strong> Dark, mysterious atmosphere</li>
                <li>• <strong>Metal:</strong> Heavy, ominous sections</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎭 Emotional Character</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Tension:</strong> Maximum harmonic instability</li>
                <li>• <strong>Drama:</strong> Theatrical, cinematic quality</li>
                <li>• <strong>Mystery:</strong> Dark, unknown atmosphere</li>
                <li>• <strong>Transition:</strong> Bridge between stable chords</li>
                <li>• <strong>Sophistication:</strong> Advanced harmonic color</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Uses and Resolutions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Common Uses and Resolutions</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎵 Diminished Chord Functions</h3>
            <p>Diminished chords rarely stand alone - they're powerful tools for movement, transition, and resolution.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Classic Diminished Applications</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Passing Chord</h4>
                  <p className="text-sm mb-2"><strong>Example:</strong> C - C#° - Dm</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Diminished Passing Chord"
                      staves={[{
                        id: 'dim-passing',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (0/5.1/4.0/3.2/2.3/1) | :w (4/6.5/5.4/4.5/3.x/2.x/1) | :w (1/4.0/3.2/2.3/1)`,
                        width: 450,
                        scale: 1.0,
                        title: 'C - C#° - Dm'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Smooth chromatic bass movement: C → C# → D</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Substitute Dominant</h4>
                  <p className="text-sm mb-2"><strong>Example:</strong> C - G#° - Am (instead of C - G7 - Am)</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Diminished Dominant Substitute"
                      staves={[{
                        id: 'dim-dom-sub',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (0/5.1/4.0/3.2/2.3/1) | :w (4/6.5/5.4/4.5/3.x/2.x/1) | :w (0/5.2/4.2/3.1/2.0/1)`,
                        width: 450,
                        scale: 1.0,
                        title: 'C - G#° - Am'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Diminished chord functions as altered dominant</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Leading Tone Resolution</h4>
                  <p className="text-sm mb-2"><strong>Example:</strong> B° - C (in key of C major)</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Leading Tone Diminished"
                      staves={[{
                        id: 'leading-tone-dim',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (x/6.2/5.1/4.2/3.0/2.x/1) | :w (0/5.1/4.0/3.2/2.3/1)`,
                        width: 300,
                        scale: 1.0,
                        title: 'B° - C'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Strong resolution from vii° to I</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jazz Applications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Jazz and Advanced Applications</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎷 Jazz Harmony</h3>
            <p>Diminished chords are essential in jazz, providing sophisticated harmonic movement and color.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Jazz Progressions with Diminished Chords</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">ii-V-I with Diminished Approach</h4>
                  <p className="text-sm mb-2"><strong>Pattern:</strong> Dm7 - G7 - G#° - Am7</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Jazz ii-V-i with Diminished"
                      staves={[{
                        id: 'jazz-ii-v-i-dim',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (1/4.0/3.2/2.3/1) | :w (3/6.2/5.0/4.0/3.0/2.1/1) | :w (4/6.5/5.4/4.5/3.x/2.x/1) | :w (0/5.0/4.2/2.0/1)`,
                        width: 600,
                        scale: 1.0,
                        title: 'Dm7 - G7 - G#° - Am7'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Chromatic approach to Am7 through G#°</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Half-Diminished in Minor ii-V</h4>
                  <p className="text-sm mb-2"><strong>Pattern:</strong> Bø7 - E7 - Am</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Minor ii-V with Half-Diminished"
                      staves={[{
                        id: 'minor-ii-v-half-dim',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (x/6.2/5.1/4.2/3.0/2.x/1) | :w (0/6.2/5.1/4.0/3.0/2.0/1) | :w (0/5.2/4.2/3.1/2.0/1)`,
                        width: 450,
                        scale: 1.0,
                        title: 'Bø7 - E7 - Am'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Essential minor key progression</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Famous Songs Using Diminished Chords</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Rock & Pop</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Michelle" - The Beatles (F#°)</li>
                <li>• "Cry Baby Cry" - The Beatles (diminished passing)</li>
                <li>• "Hotel California" - Eagles (B°)</li>
                <li>• "Europe '72" - Grateful Dead (many °7 chords)</li>
                <li>• "Stairway to Heaven" - Led Zeppelin (Am/C°)</li>
              </ul>
            </div>

            <div className="bg-purple-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Jazz & Classical</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Autumn Leaves" - Jazz Standard (ø7 chords)</li>
                <li>• "All The Things You Are" - Jerome Kern</li>
                <li>• "Body and Soul" - Jazz Standard</li>
                <li>• Bach - Well-Tempered Clavier (°7 chords)</li>
                <li>• "Girl from Ipanema" - Bossa Nova (ø7)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Practice Exercises</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Building Diminished Chord Skills</h3>
            <p>These exercises will help you master diminished chords and their applications.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 1: Diminished Chord Shapes</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Practice: A° - C° - E♭° - F#° (same diminished 7th notes)</p>
                <p className="text-sm text-gray-600 mb-2">Move the same shape every 3 frets</p>
                <p className="text-sm">Understand that it's the same chord with different roots</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 2: Passing Chords</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Practice: C - C#° - Dm, F - F#° - G, Am - A#° - Bm</p>
                <p className="text-sm text-gray-600 mb-2">Focus on smooth voice leading</p>
                <p className="text-sm">Listen to how the diminished chord creates movement</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 3: Jazz Progressions</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Practice: Am7 - D7 - Dm7 - G7 - G#° - CMaj7</p>
                <p className="text-sm text-gray-600 mb-2">Include diminished chord in jazz context</p>
                <p className="text-sm">Practice with swing rhythm and proper voicings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Concepts */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Advanced Diminished Concepts</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Harmonic Function</h3>
              <ul className="space-y-2 text-sm">
                <li>• Leading tone function (vii°)</li>
                <li>• Passing chord movement</li>
                <li>• Dominant substitute</li>
                <li>• Chromatic harmony</li>
                <li>• Voice leading efficiency</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Practical Tips</h3>
              <ul className="space-y-2 text-sm">
                <li>• Use sparingly for maximum impact</li>
                <li>• Always think about resolution</li>
                <li>• Practice smooth voice leading</li>
                <li>• Listen to jazz for applications</li>
                <li>• Experiment with inversions</li>
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
                  <li>• Chromatic Harmony</li>
                  <li>• Voice Leading</li>
                  <li>• Secondary Dominants</li>
                  <li>• Altered Chords</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Practical Application</h4>
                <ul className="text-sm space-y-1">
                  <li>• Jazz Progressions</li>
                  <li>• Classical Harmony</li>
                  <li>• Film Scoring</li>
                  <li>• Songwriting Techniques</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <a 
            href="/lessons/theory/chords/suspended" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Previous: Suspended Chords
          </a>
          <a 
            href="/lessons/theory/chords/augmented" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Next: Augmented Chords →
          </a>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
