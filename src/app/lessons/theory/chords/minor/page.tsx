'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function MinorChordsPage() {
  return (
    <Layout>
      <Header
        title="Minor Chord Theory"
        subtitle="Understanding minor chords and their emotional depth in guitar playing"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-600 to-blue-700 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Minor Chords</h1>
          <p className="text-xl opacity-90 mb-4">
            Minor chords provide the emotional counterpoint to major chords, bringing depth, sadness, and introspection to music.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Emotional Depth</span>
            <span className="bg-white/20 px-3 py-1 rounded">Flat Third</span>
            <span className="bg-white/20 px-3 py-1 rounded">Essential Harmony</span>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Minor Chord Theory</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">What Makes a Chord Minor?</h3>
            <p className="mb-2">A minor chord is formed by lowering the third of a major chord by a half step (one fret).</p>
            <p className="text-sm text-gray-600">This single note change dramatically alters the emotional character of the chord.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">C Minor Chord Formula</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Root (1st):</span>
                  <span>C</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Minor Third (♭3rd):</span>
                  <span className="text-blue-600 font-bold">E♭</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Perfect Fifth (5th):</span>
                  <span>G</span>
                </div>
              </div>
              <div className="bg-white rounded p-3 mt-4">
                <p className="text-sm"><strong>Comparison:</strong></p>
                <p className="text-sm">C Major: C-E-G</p>
                <p className="text-sm">C Minor: C-E♭-G</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Interval Structure</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Root to Minor 3rd:</span>
                  <span className="font-medium">3 semitones</span>
                </div>
                <div className="flex justify-between">
                  <span>Minor 3rd to 5th:</span>
                  <span className="font-medium">4 semitones</span>
                </div>
                <div className="flex justify-between">
                  <span>Root to 5th:</span>
                  <span className="font-medium">7 semitones</span>
                </div>
              </div>
              <div className="bg-white rounded p-3 mt-4">
                <p className="text-sm"><strong>Formula:</strong> 1 - ♭3 - 5</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Minor Chords */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Essential Minor Chord Shapes</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎸 Learn These First</h3>
            <p>These are the most important minor chord shapes every guitarist should master.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Open Minor Chords</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-3">A Minor</h4>
                  <SimpleFretboardDiagram chord="A_minor" />
                  <p className="text-sm text-gray-600 mt-2">Easiest minor chord - uses fingers 2 and 3</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-3">E Minor</h4>
                  <SimpleFretboardDiagram chord="E_minor" />
                  <p className="text-sm text-gray-600 mt-2">Very easy - only two fingers needed</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-3">D Minor</h4>
                  <SimpleFretboardDiagram chord="D_minor" />
                  <p className="text-sm text-gray-600 mt-2">Compact shape, great for progressions</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Barre Chord Shapes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">F Minor (Based on Em shape)</h4>
                  <div className="mb-4">
                    <MusicScore
                      title="F Minor Barre Chord"
                      staves={[{
                        id: 'f-minor-barre',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (1/6.1/5.3/4.3/3.1/2.1/1)`,
                        width: 200,
                        scale: 1.0,
                        title: 'Fret 1 barre with Em shape'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Index finger barres 1st fret, other fingers form Em shape</p>
                </div>
                <div>
                  <h4 className="font-medium mb-3">B Minor (Based on Am shape)</h4>
                  <div className="mb-4">
                    <MusicScore
                      title="B Minor Barre Chord"
                      staves={[{
                        id: 'b-minor-barre',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (2/6.2/5.4/4.4/3.2/2.2/1)`,
                        width: 200,
                        scale: 1.0,
                        title: 'Fret 2 barre with Am shape'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Index finger barres 2nd fret, other fingers form Am shape</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Applications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Musical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎭 Emotional Character</h3>
              <ul className="space-y-2 text-sm">
                <li>• Sad and melancholic</li>
                <li>• Introspective and contemplative</li>
                <li>• Mysterious and dark</li>
                <li>• Emotional and expressive</li>
                <li>• Dramatic and powerful</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Genre Applications</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Rock:</strong> Power ballads, emotional verses</li>
                <li>• <strong>Folk:</strong> Traditional melodies, storytelling</li>
                <li>• <strong>Classical:</strong> Dramatic passages, minor keys</li>
                <li>• <strong>Pop:</strong> Sad songs, emotional choruses</li>
                <li>• <strong>Metal:</strong> Dark, heavy atmospheres</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Progressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Common Minor Chord Progressions</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎵 Essential Progressions</h3>
            <p>These progressions showcase the power and versatility of minor chords.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Classic Minor Progressions</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">i - VII - VI - VII (Natural Minor)</h4>
                  <p className="text-sm mb-2"><strong>Example in A minor:</strong> Am - G - F - G</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Natural Minor Progression"
                      staves={[{
                        id: 'natural-minor-prog',
                        notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :w (0/5.2/4.2/3.1/2.0/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1) | :w (1/6.3/5.2/4.1/3.1/2.1/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1)`,
                        width: 600,
                        scale: 1.0,
                        title: 'Am - G - F - G'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Classic progression used in countless songs</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">i - iv - V - i (Harmonic Minor)</h4>
                  <p className="text-sm mb-2"><strong>Example in A minor:</strong> Am - Dm - E - Am</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Harmonic Minor Progression"
                      staves={[{
                        id: 'harmonic-minor-prog',
                        notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :w (0/5.2/4.2/3.1/2.0/1) | :w (1/4.0/3.2/2.3/1) | :w (0/6.2/5.1/4.0/3.0/2.0/1) | :w (0/5.2/4.2/3.1/2.0/1)`,
                        width: 600,
                        scale: 1.0,
                        title: 'Am - Dm - E - Am'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Creates strong resolution with major V chord</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">i - VI - III - VII (Pop Minor)</h4>
                  <p className="text-sm mb-2"><strong>Example in A minor:</strong> Am - F - C - G</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Pop Minor Progression"
                      staves={[{
                        id: 'pop-minor-prog',
                        notation: `options space=20 font-size=14
tabstave notation=true key=Am time=4/4
notes :w (0/5.2/4.2/3.1/2.0/1) | :w (1/6.3/5.2/4.1/3.1/2.1/1) | :w (0/5.1/4.0/3.2/2.3/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1)`,
                        width: 600,
                        scale: 1.0,
                        title: 'Am - F - C - G'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Modern pop ballad progression</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Famous Songs Using Minor Chords</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Rock & Alternative</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Stairway to Heaven" - Led Zeppelin (Am-based)</li>
                <li>• "Losing My Religion" - R.E.M. (Am progression)</li>
                <li>• "Mad World" - Gary Jules (Em-based)</li>
                <li>• "Hurt" - Johnny Cash (Am progression)</li>
                <li>• "Black" - Pearl Jam (Em progression)</li>
              </ul>
            </div>

            <div className="bg-blue-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Pop & Ballads</h3>
              <ul className="space-y-2 text-sm">
                <li>• "All Along the Watchtower" - Bob Dylan (Am)</li>
                <li>• "The Sound of Silence" - Simon & Garfunkel (Am)</li>
                <li>• "Greensleeves" - Traditional (Em)</li>
                <li>• "House of the Rising Sun" - Animals (Am)</li>
                <li>• "Sultans of Swing" - Dire Straits (Dm)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Minor Chord Variations */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Minor Chord Variations</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Beyond Basic Triads</h3>
            <p>Explore extended and altered minor chords for richer harmonic colors.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Minor Seventh Chords</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">Am7 (A Minor 7th)</p>
                  <p className="text-sm text-gray-600">Formula: 1 - ♭3 - 5 - ♭7 (A-C-E-G)</p>
                  <p className="text-sm">Jazzy, sophisticated sound</p>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">AmMaj7 (A Minor Major 7th)</p>
                  <p className="text-sm text-gray-600">Formula: 1 - ♭3 - 5 - 7 (A-C-E-G#)</p>
                  <p className="text-sm">Mysterious, film score quality</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Extended Minor Chords</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">Am9 (A Minor 9th)</p>
                  <p className="text-sm text-gray-600">Adds the 9th (B) for rich texture</p>
                  <p className="text-sm">Jazz and R&B favorite</p>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">Am11 (A Minor 11th)</p>
                  <p className="text-sm text-gray-600">Very rich, complex harmony</p>
                  <p className="text-sm">Advanced jazz and fusion</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Playing Techniques */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Playing Techniques</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Fingerpicking</h3>
              <ul className="space-y-2 text-sm">
                <li>• Minor chords sound great fingerpicked</li>
                <li>• Try arpeggiating the chord notes</li>
                <li>• Use thumb for bass notes</li>
                <li>• Fingers for higher strings</li>
                <li>• Creates intimate, emotional feel</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Strumming Patterns</h3>
              <ul className="space-y-2 text-sm">
                <li>• Down-down-up-up-down-up (ballads)</li>
                <li>• Down-up-down-up (steady rhythm)</li>
                <li>• Emphasize the beat with harder strums</li>
                <li>• Use palm muting for darker sound</li>
                <li>• Vary dynamics for emotional impact</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Practice Exercises</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Building Minor Chord Skills</h3>
            <p>These exercises will help you master minor chords and their applications.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 1: Open Minor Chord Changes</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Progression: Am - Em - Dm - Am</p>
                <p className="text-sm text-gray-600 mb-2">Play each chord for 4 beats, strum on each beat</p>
                <p className="text-sm">Focus on clean chord changes and clear notes</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 2: Minor to Major Contrast</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Progression: Am - C - Em - G</p>
                <p className="text-sm text-gray-600 mb-2">Compare minor chords (Am, Em) with major chords (C, G)</p>
                <p className="text-sm">Listen to the emotional difference</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 3: Barre Chord Practice</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Progression: Fm - Gm - Am - Bm</p>
                <p className="text-sm text-gray-600 mb-2">Practice moving minor barre chords up the neck</p>
                <p className="text-sm">Build finger strength and accuracy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips for Success */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Tips for Success</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎯 Practice Tips</h3>
              <ul className="space-y-2 text-sm">
                <li>• Start with open minor chords</li>
                <li>• Practice chord changes slowly</li>
                <li>• Use a metronome for timing</li>
                <li>• Check that all notes ring clearly</li>
                <li>• Build up to barre chords gradually</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Musical Application</h3>
              <ul className="space-y-2 text-sm">
                <li>• Learn songs that use minor chords</li>
                <li>• Practice with backing tracks</li>
                <li>• Experiment with different strumming</li>
                <li>• Try fingerpicking patterns</li>
                <li>• Write your own minor progressions</li>
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
                <h4 className="font-medium mb-2">Chord Theory</h4>
                <ul className="text-sm space-y-1">
                  <li>• Major Chords</li>
                  <li>• Seventh Chords</li>
                  <li>• Chord Progressions</li>
                  <li>• Voice Leading</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Practical Application</h4>
                <ul className="text-sm space-y-1">
                  <li>• Strumming Patterns</li>
                  <li>• Fingerpicking</li>
                  <li>• Song Analysis</li>
                  <li>• Songwriting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <a 
            href="/lessons/theory/chords/major" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Previous: Major Chords
          </a>
          <a 
            href="/lessons/theory/chords/seventh" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Next: Seventh Chords →
          </a>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
